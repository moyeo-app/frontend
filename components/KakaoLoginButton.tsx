import { API_BASE_URL } from "@env";
import * as KakaoLogin from "@react-native-seoul/kakao-login";
import { useRouter } from "expo-router";
import { Image } from "react-native";
import styled from "styled-components/native";

const KakaoLoginButton = () => {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      console.log("진입");
      await KakaoLogin.login();
      console.log("카카오 로그인 완료");

      const token = await KakaoLogin.getAccessToken();
      console.log("Access Token:", token);

      if (!token || !token.accessToken) {
        console.log("AccessToken 없음");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/v1/auth/login/kakao`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessToken: token.accessToken,
        }),
      });
      const data = await response.json();
      if (!data.newUser) {
        router.push({
          pathname: "/home",
          params: {
            token: data.jwtAccessToken,
          },
        });
      }

      console.log("카카오oauthid", data);

      router.push({
        pathname: "/info-name",
        params: {
          provider: "KAKAO",
          oauthId: data.data.oauthId,
        },
      });
    } catch (err: any) {
      console.error("카카오 로그인 실패", err);
    }
  };

  return (
    <SocialLoginBtn onPress={handleLogin}>
      <Image source={require("../assets/images/kakao.png")} />
    </SocialLoginBtn>
  );
};

export default KakaoLoginButton;

const SocialLoginBtn = styled.TouchableOpacity`
  align-items: center;
  border-radius: 8px;
`;
