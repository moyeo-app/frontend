import { GOOGLE_CLIENT_ID } from "@env";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLoginButton() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: GOOGLE_CLIENT_ID,
    redirectUri: "https://auth.expo.io/@yeeun426/moyeomoyeo",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("Access Token:", authentication?.accessToken);
    }
  }, [response]);

  return (
    <SocialLoginBtn onPress={() => promptAsync()} disabled={!request}>
      <Image source={require("../assets/images/google.png")} />
    </SocialLoginBtn>
  );
}

const SocialLoginBtn = styled.TouchableOpacity``;
