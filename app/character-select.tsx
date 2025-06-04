import { PrimaryButton, PrimaryInput, WarningTxt } from "@/styles/common";
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

  const characters = [
    require("../assets/images/rabbit.png"),
    require("../assets/images/bear.png"),
    require("../assets/images/cat.png"),
    require("../assets/images/pig.png"),
  ];

  return (
    <Container>
      <Text style={styles.title}>STEP 1. 나의 캐릭터를 골라주세요!</Text>
      <WarningTxt>캐릭터는 한번 고른 후 변경이 어렵습니다.</WarningTxt>
      <View>
        <PickCharImg source={characters[selected]} />
        <CharRow style={styles.charRow}>
          {characters.map((char, index) => (
            <TouchableOpacity key={index} onPress={() => setSelected(index)}>
              <CharImg
                source={char}
                style={selected === index && styles.selected}
              />
            </TouchableOpacity>
          ))}
        </CharRow>
      </View>
      <Text style={styles.title}>STEP 2. 닉네임을 입력해주세요.</Text>
      <PrimaryInput
        placeholderTextColor="#CACACA"
        placeholder="닉네임을 입력해주세요"
        value={nickname}
        onChangeText={setNickname}
      />
      <PrimaryButton>
        <Text>START</Text>
      </PrimaryButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 16, fontWeight: "bold", marginVertical: 10 },
  charRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
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

const PickCharImg = styled.Image`
  width: 40%;
  height: 200px;
  max-height: 300px;
  align-self: center;
`;

const CharImg = styled.Image`
  width: 60px;
  height: 90px;
  opacity: 0.3;
`;

const CharRow = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;
