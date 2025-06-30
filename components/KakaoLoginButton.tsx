import { API_BASE_URL } from "@env";
import * as KakaoLogin from "@react-native-seoul/kakao-login";
import { Image } from "react-native";
import styled from "styled-components/native";

const KakaoLoginButton = () => {
  console.log("KakaoLogin 모듈:", KakaoLogin);
  console.log("백엔드 주소:", API_BASE_URL);

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

      const response = await fetch(`${API_BASE_URL}/auth/login/kakao`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessToken: token.accessToken,
        }),
      });

      const data = await response.json();
      console.log("백엔드 응답", data);
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
  width: 100%;
  align-items: center;
  padding: 14px;
  border-radius: 8px;
`;
