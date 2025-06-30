import { API_BASE_URL } from "@env";

// API 기본 설정
export async function apiRequest(url, options) {
  const response = await fetch(`${API_BASE_URL}${url}`, options);
  if (!response.ok) {
    throw new Error("API 요청 실패: " + response.status);
  }
  return await response.json();
}

export const userService = {
  // 사용자 등록 api
  postUsers: async ({ provider, oauthId, nickname, character }) => {
    try {
      const requestBody = {
        provider,
        oauthId,
        nickname,
        character,
      };
      const response = await apiRequest("/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      console.log("회원 등록 성공:", response);
      return response.data.userId;
    } catch (error) {
      console.error("회원 등록 오류:", error);
      throw error;
    }
  },
};
