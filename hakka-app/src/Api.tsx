import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

const Api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// API 응답 데이터 타입 정의
interface InsertMyPlaceResponse {
  message: string;
  rows_inserted: number;
}

interface PlaceInfo {
  mokkoji_uuid: string;
  place_name: string;
  place_addr: string;
  place_explain: string;
  place_profile: string;
  place_url: string;
  reg_id: string;
  reg_dt: string;
}

// 네이버 지도 URL 데이터 저장 (POST 요청)
export const InsertMyPlace = async (url: string): Promise<InsertMyPlaceResponse> => {
  try {
    const response = await Api.post<InsertMyPlaceResponse>("/insert_my_place", { url });
    console.log("📢 데이터 저장 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ 데이터 저장 실패:", error);
    throw error;
  }
};

// 네이버 지도 불러오기기
export const fetchMyPlaces = async (): Promise<PlaceInfo[]> => {
  try {
    const response = await Api.get<{ message: string; data: PlaceInfo[] }>("/select_my_place");
    console.log("📢 데이터 조회 성공:", response.data);
    return response.data.data;
  } catch (error) {
    console.error("❌ 데이터 조회 실패:", error);
    throw error;
  }
};
