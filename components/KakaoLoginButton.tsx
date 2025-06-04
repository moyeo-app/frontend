import { API_BASE_URL, KAKAO_CLIENT_ID } from "@env";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect } from "react";
import { Alert, Image } from "react-native";
import styled from "styled-components/native";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: "https://kauth.kakao.com/oauth/authorize",
  tokenEndpoint: "https://kauth.kakao.com/oauth/token",
};

const KakaoLoginButton = () => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: KAKAO_CLIENT_ID,
      redirectUri: "https://auth.expo.io/@yeeun426/moyeomoyeo",
      responseType: ResponseType.Code,
    },
    discovery
  );
  useEffect(() => {
    if (response?.type === "success" && response.params?.code) {
      const code = response.params.code;

      fetch(`${API_BASE_URL}/auth/kakao/callback?code=${code}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("로그인 응답", data);
          Alert.alert("로그인 성공", `안녕하세요, ${data.user.username}`);
        })
        .catch((err) => {
          console.error("fetch error", err);
        });
    }
  }, [response]);
  return (
    <SocialLoginBtn onPress={() => promptAsync()} disabled={!request}>
      <Image source={require("../assets/images/kakao.png")} />
    </SocialLoginBtn>
  );
};

export default KakaoLoginButton;

const SocialLoginBtn = styled.TouchableOpacity``;
