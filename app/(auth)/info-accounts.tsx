import { PrimaryButton, PrimaryButtonText } from "@/styles/common";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AccountInfo() {
  const router = useRouter();
  const { nickname } = useLocalSearchParams(); // nickname 받음

  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleNext = () => {
    console.log(selectedBank, accountNumber);
    router.push({
      pathname: "/info-character",
      params: {
        nickname,
        bank: selectedBank,
        account: accountNumber,
      },
    });
  };

  const banks = [
    "국민은행",
    "신한은행",
    "우리은행",
    "하나은행",
    "카카오뱅크",
    "농협은행",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>계좌 정보를 입력해주세요.</Text>

        <Pressable
          style={styles.selectBox}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.selectText}>
            {selectedBank !== "" ? selectedBank : "은행을 선택해주세요"}
          </Text>
        </Pressable>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {banks.map((bank) => (
                <TouchableOpacity
                  key={bank}
                  onPress={() => {
                    setSelectedBank(bank);
                    setModalVisible(false);
                  }}
                  style={styles.modalItem}
                >
                  <Text style={styles.modalItemText}>{bank}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="계좌번호"
            placeholderTextColor="#bababa"
            keyboardType="numeric"
            value={accountNumber}
            onChangeText={setAccountNumber}
          />
        </View>

        <PrimaryButton
          style={styles.startButton}
          onPress={handleNext}
          disabled={accountNumber.length <= 5 || !selectedBank}
        >
          <PrimaryButtonText>Next</PrimaryButtonText>
        </PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce3d2",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: 340,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
  },
  selectBox: {
    borderBottomWidth: 2,
    borderColor: "#fe8c00",
    paddingVertical: 15,
    marginBottom: 40,
  },
  selectText: {
    fontSize: 18,
    color: "#000",
  },
  inputContainer: {
    borderBottomWidth: 2,
    borderColor: "#fe8c00",
    marginBottom: 40,
  },
  input: {
    fontSize: 18,
    color: "#000",
    height: 50,
  },
  startButton: { marginBottom: 50, width: "100%" },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContent: {
    backgroundColor: "#fff",
    marginHorizontal: 30,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  modalItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  modalItemText: {
    fontSize: 16,
    textAlign: "center",
  },
});
