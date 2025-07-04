import {
  API_BASE_URL,
  GOOGLE_ANDROID_CLIENT_ID,
  GOOGLE_EXPO_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID,
} from "@env";
import * as Google from "expo-auth-session/providers/google";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { Image, Platform } from "react-native";
import styled from "styled-components/native";

WebBrowser.maybeCompleteAuthSession();

const GoogleLoginButton = () => {
  const router = useRouter();

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: Platform.select({
      ios: GOOGLE_IOS_CLIENT_ID,
      android: GOOGLE_ANDROID_CLIENT_ID,
      default: GOOGLE_EXPO_CLIENT_ID,
    }),
  });

  useEffect(() => {
    const handleGoogleLogin = async () => {
      if (response?.type === "success") {
        const { authentication } = response;
        console.log("Access Token:", authentication?.accessToken);

        if (!authentication?.accessToken) {
          console.log("AccessToken 없음");
          return;
        }

        try {
          const backendResponse = await fetch(
            `${API_BASE_URL}/v1/auth/login/google`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                accessToken: authentication.accessToken,
              }),
            }
          );
          const data = await backendResponse.json();
          console.log("백엔드 응답:", data);
          router.push({
            pathname: "/info-name",
            params: {
              provider: "GOOGLE",
              oauthId: data.data.oauthId,
            },
          });
        } catch (err) {
          console.error("Google 로그인 실패", err);
        }
      }
    };

    handleGoogleLogin();
  }, [response]);

  return (
    <SocialLoginBtn onPress={() => promptAsync()} disabled={!request}>
      <Image source={require("../assets/images/google.png")} />
    </SocialLoginBtn>
  );
};

export default GoogleLoginButton;

const SocialLoginBtn = styled.TouchableOpacity`
  align-items: center;
  border-radius: 8px;
`;
