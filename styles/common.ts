import styled from "styled-components/native";

export const PrimaryButton = styled.TouchableOpacity<{ disabled?: boolean }>`
  background-color: #fe8c00;
  border-radius: 15px;
  width: 100%;
  padding: 15px;
  align-items: center;
  margin-top: 50px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const PrimaryButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

export const PrimaryInput = styled.TextInput`
  background-color: white;
  padding: 15px 20px;
  border-radius: 30px;
  margin-bottom: 12px;
  width: 100%;
`;

export const WarningTxt = styled.Text`
  color: red;
  font-size: 13px;
  font-family: "Paperlogy-Regular";
`;
