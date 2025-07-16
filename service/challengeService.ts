import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiRequest } from "./userApiService";

export const challengeService = {
  async MakeChallenge(params: {
    title: string;
    startDate: string;
    endDate: string;
    type: string;
    maxParticipants: number;
    fee: number;
    description: string;
    option: {
      time?: number;
      start?: string;
      end?: string;
    };
    rule: number;
    paymentId: string;
  }): Promise<any> {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) {
        throw new Error("토큰이 없습니다.");
      }
      console.log(token);
      console.log("보낼 payload:", JSON.stringify(params));

      const response = await apiRequest("/v1/challenges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify(params),
      });

      console.log("챌린지 생성 성공:", response);
      return response;
    } catch (error) {
      console.error("챌린지 생성 실패:", error);
      throw error;
    }
  },
};

export const challengeApiService = {
  ...challengeService,
};

export default challengeApiService;
