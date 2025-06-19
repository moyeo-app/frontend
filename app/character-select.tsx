import { PrimaryButton } from "@/styles/common";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";

export default function CharacterSelect() {
  const [selected, setSelected] = useState(0);
  const [nickname, setNickname] = useState("");
  const router = useRouter();

  const characters = [
    require("../assets/images/cat_profile.png"),
    require("../assets/images/bear_profile.png"),
    require("../assets/images/rabbit_profile.png"),
    require("../assets/images/pig_profile.png"),
  ];

  const handleMain = () => {
    router.replace({ pathname: "/success" });
  };

  return (
    <Container>
      <Text style={styles.title}>모여모여에서 사용할 캐릭터를 골라주세요.</Text>
      <Text style={styles.subDesc}>
        캐릭터는 한번 고른 후 변경이 어렵습니다.
      </Text>
      <View>
        <CharRow style={styles.charRow}>
          {characters.map((char, index) => (
            <TouchableOpacity key={index} onPress={() => setSelected(index)}>
              <CharImg source={char} isSelected={selected === index} />
            </TouchableOpacity>
          ))}
        </CharRow>
      </View>
      <PrimaryButton onPress={handleMain}>
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
  charRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  subDesc: {
    fontSize: 16,
    fontFamily: "Paperlogy-Regular",
    color: "#979797",
  },
  selected: { opacity: 1 },
});

const screenHeight = Dimensions.get("window").height;

const Container = styled.View`
  justify-content: center;
  flex: 1;
  padding: 0 30px;
  background-color: #fde6d9;
`;
const CharImg = styled.Image<{ isSelected: boolean }>`
  width: 150px;
  height: 150px;
  border-width: ${(props) => (props.isSelected ? "4px" : "0px")};
  border-color: #fe8c00;
  opacity: ${(props) => (props.isSelected ? 1 : 0.7)};
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;
const CharRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  flex-flow: wrap;
  margin-top: 70px;
  gap: 20px;
`;
const PrimaryButtonText = styled.Text`
  font-family: "Paperlogy-bold";
`;
