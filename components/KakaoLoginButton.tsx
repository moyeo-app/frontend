import { API_BASE_URL } from "@env";
import KakaoLogin from "@react-native-seoul/kakao-login";
import React from "react";
import { Alert, Image } from "react-native";
import styled from "styled-components/native";

const KakaoLoginButton = () => {
  const handleLogin = async () => {
    try {
      const token = await KakaoLogin.login();
      console.log("카카오 로그인 성공", token);
      // 백엔드로 accessToken 전달 ( /auth/login/kakao )
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
      Alert.alert("로그인 성공!", `토큰: ${data.data.jwtAccessToken}`);
    } catch (err: any) {
      console.error("카카오 로그인 실패", err);
      Alert.alert("로그인 실패", err.message || "에러 발생");
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
