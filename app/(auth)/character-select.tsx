import { useCharacter } from "@/contexts/CharacterContext";
import { PrimaryButton } from "@/styles/common";
import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import styled from "styled-components/native";

const CHARACTERS: ImageSourcePropType[] = [
  require("../../assets/images/cat_profile.png"),
  require("../../assets/images/bear_profile.png"),
  require("../../assets/images/rabbit_profile.png"),
  require("../../assets/images/pig_profile.png"),
];

const CHARACTER_IMAGE_SIZE = 150;

export default function CharacterSelectScreen() {
  const { selectedCharacter, setSelectedCharacter } = useCharacter();
  const router = useRouter();

  const handleGoToSuccess = () => {
    router.replace({ pathname: "/success" });
  };

  return (
    <Container>
      <Text style={styles.title}>모여모여에서 사용할 캐릭터를 골라주세요.</Text>
      <Text style={styles.subDesc}>
        캐릭터는 한번 고른 후 변경이 어렵습니다.
      </Text>
      <CharRow>
        {CHARACTERS.map((char, index) => (
          <Pressable key={index} onPress={() => setSelectedCharacter(index)}>
            <CharImg source={char} isSelected={selectedCharacter === index} />
          </Pressable>
        ))}
      </CharRow>
      <PrimaryButton onPress={handleGoToSuccess}>
        <PrimaryButtonText>START</PrimaryButtonText>
      </PrimaryButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "Paperlogy-Bold",
  },
  subDesc: {
    fontSize: 16,
    fontFamily: "Paperlogy-Regular",
    color: "#979797",
    marginBottom: 20,
  },
});

const screenHeight = Dimensions.get("window").height;

const Container = styled.View`
  justify-content: center;
  flex: 1;
  padding: 0 30px;
  background-color: #fde6d9;
`;

const CharImg = styled.Image<{ isSelected: boolean }>`
  width: ${CHARACTER_IMAGE_SIZE}px;
  height: ${CHARACTER_IMAGE_SIZE}px;
  border-width: ${(props) => (props.isSelected ? "4px" : "0px")};
  border-color: #fe8c00;
  opacity: ${(props) => (props.isSelected ? 1 : 0.7)};
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const CharRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 70px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
`;

const PrimaryButtonText = styled.Text`
  font-family: "Paperlogy-Bold";
`;
