import React, { useState } from "react";
import { InsertMyPlace } from "../Api";

interface InsertPlaceFormProps {}

const InsertPlaceForm: React.FC<InsertPlaceFormProps> = () => {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await InsertMyPlace(url);
      alert("데이터 저장 성공! ✅");
      console.log(response);
    } catch (error) {
      alert("데이터 저장 실패! ❌");
    }
  };

  return (
    <div>
      <h2>마이플레이스 데이터 저장</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)}
          placeholder="네이버 지도 URL 입력" 
        />
        <button type="submit">저장하기</button>
      </form>
    </div>
  );
};

export default InsertPlaceForm;
