import React from "react";
import KakaoMap from "./KakaoMap";
import * as S from "./styled";
import { useState } from "react";

const MapContainer = ({ title }) => {
  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 });
  const [isMarker, setIsMarker] = useState(false);

  const kakaoApiKey = import.meta.env.VITE_KAKAO_API_KEY;
  const handleShareLocation = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoApiKey);
    }

    window.Kakao.Share.sendDefault({
      objectType: "location",
      address: `${center.lat}, ${center.lng}`,
      addressTitle: "내 위치",
      content: {
        title: "숙명여대 멋사 13기 프론트 실습",
        description: "나의 작고 소중한 위치를 공유합니다.",
        imageUrl:
          "https://i.pinimg.com/736x/94/0c/c3/940cc38299f5db57459e94d25dc4a3f1.jpg",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: `http://localhost:5173/`,
            webUrl: `http://localhost:5173/`,
          },
        },
      ],
    });
  };

  const handleFindMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      setCenter({ lat, lng });
      setIsMarker(true);
    });
  };

  return (
    <S.Wrapper>
      <S.H1>{title}</S.H1>
      <S.BtnContainer>
        <S.FindBtn onClick={handleFindMyLocation}>현재 내 위치 찾기</S.FindBtn>
        <S.ShareBtn onClick={handleShareLocation}>공유하기</S.ShareBtn>
      </S.BtnContainer>
      <KakaoMap center={center} isMarker={isMarker} />
    </S.Wrapper>
  );
};

export default MapContainer;
