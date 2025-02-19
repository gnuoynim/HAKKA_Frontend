import React, { useEffect, useState } from "react";
import { fetchMyPlaces } from "../Api";

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

const MyPlaceList: React.FC = () => {
  const [places, setPlaces] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPlaces = async () => {
      try {
        const data = await fetchMyPlaces();
        setPlaces(data);
      } catch (error) {
        setError("데이터 조회 실패!");
      } finally {
        setLoading(false);
      }
    };

    loadPlaces();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>❌ {error}</p>;

  return (
    <div>
      <h2>마이플레이스 리스트</h2>
      {places.length === 0 ? (
        <p>데이터가 없습니다.</p>
      ) : (
        <ul>
          {places.map((place) => (
            <li key={place.mokkoji_uuid} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
              <h3>{place.place_name}</h3>
              <p>📍 주소: {place.place_addr}</p>
              <p>📝 설명: {place.place_explain}</p>
              <p>🔗 <a href={place.place_url} target="_blank" rel="noopener noreferrer">네이버 지도 보기</a></p>
              {place.place_profile && (
                <img src={place.place_profile} alt={place.place_name} style={{ width: "200px", borderRadius: "10px" }} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyPlaceList;