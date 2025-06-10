// app/login.tsx
import GoogleLoginButton from "@/components/GoogleLoginButton";
import KakaoLoginButton from "@/components/KakaoLoginButton";
import { PrimaryButton, PrimaryInput } from "@/styles/common";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

export default function LoginScreen() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push("/character-select");
  };

  return (
    <Container>
      <Logo source={require("../assets/images/icon.png")} />
      <PrimaryInput
        placeholder="ID"
        placeholderTextColor="#CACACA"
        value={id}
        onChangeText={setId}
      />
      <PrimaryInput
        placeholderTextColor="#CACACA"
        placeholder="Password"
        secureTextEntry
        value={pw}
        onChangeText={setPw}
      />
      <PrimaryButton onPress={handleLogin}>
        <Text>로그인</Text>
      </PrimaryButton>
      <SocialCon>
        <KakaoLoginButton />
        <GoogleLoginButton />
      </SocialCon>
    </Container>
  );
}

const Container = styled.View`
  padding: 0 55px;
  flex: 1;
  justify-content: center;
  background-color: #fde6d9;
  align-items: center;
`;
const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;
const SocialCon = styled.View`
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
`;
const SocialLoginBtn = styled.TouchableOpacity``;
