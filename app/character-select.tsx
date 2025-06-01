// app/character-select.tsx
import { PrimaryButton, PrimaryInput } from "@/styles/common";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

export default function CharacterSelect() {
  const [selected, setSelected] = useState(0);
  const [nickname, setNickname] = useState("");

  //   const characters = [
  //     require("../assets/char1.png"),
  //     require("../assets/char2.png"),
  //     require("../assets/char3.png"),
  //     require("../assets/char4.png"),
  //   ];

  return (
    <Container>
      <Text style={styles.title}>STEP 1. 사용할 캐릭터를 골라주세요!</Text>
      <Text>캐릭터는 한번 고른 후 변경이 어렵습니다.</Text>
      <View style={styles.charRow}>
        {/* {characters.map((char, index) => (
          <TouchableOpacity key={index} onPress={() => setSelected(index)}>
            <Image
              source={char}
              style={[styles.charImg, selected === index && styles.selected]}
            />
          </TouchableOpacity>
        ))} */}
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
  title: { fontSize: 16, fontWeight: "bold", marginVertical: 12 },
  charRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  charImg: { width: 60, height: 90, opacity: 0.5 },
  selected: { opacity: 1 },
});

const Container = styled.View`
  justify-content: center;
  flex: 1;
  padding: 0 30px;
  background-color: #fde6d9;
`;
