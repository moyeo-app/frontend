import { API_BASE_URL } from "@env";

// 공통 fetch 함수
export async function apiRequest(url, options = {}) {
  const response = await fetch(`${API_BASE_URL}${url}`, options);

  if (!response.ok) {
    let errorMessage = `API 요청 실패: ${response.status}`;
    try {
      const errorData = await response.json();
      if (errorData.message || errorData.error) {
        errorMessage += ` - ${errorData.message || errorData.error}`;
      }
    } catch (jsonParseError) {
      console.warn("JSON 파싱 실패:", jsonParseError);
    }
    throw new Error(errorMessage);
  }

  return await response.json();
}

export const userService = {
  /**
   * 사용자 등록
   * @param {Object} params
   * @param {string} params.provider
   * @param {string} params.oauthId
   * @param {string} params.nickname
   * @param {string} params.character
   * @returns {Promise<string>}
   */
  async postUsers({ provider, oauthId, nickname, character }) {
    const requestBody = {
      provider: "KAKAO",
      oauthId: "1234",
      nickname,
      character,
    };

    try {
      const response = await apiRequest("/v1/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      console.log("사용자 등록 성공:", response);
      return response.data.userId;
    } catch (error) {
      console.error("사용자 등록 오류:", error);
      throw error;
    }
  },

  async postValidNickname({ nickname }) {
    const requestBody = {
      nickname,
    };
    try {
      const response = await apiRequest("/v1/users/valid/nickname", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      console.log("닉네임 유효성 검사 성공:", response);
      return response.message;
    } catch (error) {
      console.error("닉네임 유효성 검사 실패:", error);
      alert("중복된 닉네임입니다. 다시 입력해주세요.");
      throw error;
    }
  },
};

export const userApiService = {
  ...userService,
};

export default userApiService;
