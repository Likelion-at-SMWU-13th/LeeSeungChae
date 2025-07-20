import React from "react";
import KakaoImg from "./assets/kakao_login.png";
import GoogleImg from "./assets/google_login.png";

// Login.jsx는 사용자가 '카카오 로그인' 버튼을 눌렀을 때, 카카오 인증서버로 리다이렉트시켜 인가코드를 발급받을 수 있도록 하는 컴포넌트

const Login = () => {
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?
  response_type=code&client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`;

  // 1. https://kauth.kakao.com/oauth/authorize? :카카오의 OAuth 인증 서버 주소
  // 2. response_type=code : 카카오에게 인가 코드 방식으로 로그인 할 것이라고 알려주는 부분
  // 3. client_id= : 카카오 개발자 사이트에서 발급받은 REST API - 카카오가 어떤 앱의 요청을 했는지 알 수 있도록 해주는 부분 (Ex) CGV앱에서 카카오 로그인 요청) (.env 파일에서 환경변수로 지정)
  // 4. redirect_uri= : 코드를 받아서 처리한 후, 인가 코드를 리디렉션해줄 주소 (.env 파일에서 환경변수로 지정)
  const handleKakao = () => {
    window.location.href = authServerLink;
  }; // handleKakao 함수가 실행되면, 카카오 인증 서버(authServerLink)로 리다이렉트되어 인가 코드를 발급받을 수 있음

  return (
    // 카카오 로그인 버튼에 클릭 이벤트 -> handleKakao 함수가 실행되도록 함
    <div className="login-box">
      <h1>로그인</h1>
      <div className="btn-container">
        <button onClick={handleKakao}>
          {" "}
          <img src={KakaoImg} alt="카카오 로그인" />
        </button>
        <button>
          <img src={GoogleImg} alt="구글 로그인" />
        </button>
      </div>
    </div>
  );
};

export default Login;
