import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// Redirection.jsx는 (1) 사용자가 카카오 인증 서버에서 인가 코드를 발급받은 후, (2) 발급 받은 인가 코드를 이용해 access token을 발급받고, (3) 발급 받은 access token을 로컬 스토리지에 저장한 후, (4) Greeting 컴포넌트로 리다이렉트하는 컴포넌트

const Redirection = () => {
  const [params] = useSearchParams();
  // URL에서 인가 코드를 가져오기 위해 useSearchParams 사용 (?code=인증코드 <- 이런식으로 인가 코드가 URL에 포함되어 있음)

  const authCode = params.get("code"); // params 배열에서 code 키에 해당하는 value값 (=인가코드)를 authCode 변수에 담음
  const grant_type = "authorization_code"; // grand_type은 무슨 방식으로 토큰을 달라고 요청하는지 말해주는 값 (찾아보니 더 다양하게 있었다.) 근데 우리가 여기서 사용하는 방식은 'authorizaion_code' = 받은 인가 코드 사용해서 엑세스 토큰 받고 싶다는 뜻
  const navigate = useNavigate(); // 특정 경로로 이동할 수 있게 하는 useNavigate 사용

  useEffect(() => {
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${
        import.meta.env.VITE_REST_API_KEY
      }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&code=${authCode}`,
      {
        method: "POST", // 데이터 처리 방식: POST -> "데이터를 내가 보내겠다!" 라는 의미임. 우리는 인가 코드를 보내서 Access Token을 받고 싶은 것이기 때문에, POST 방식으로 요청

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((res) => {
      // fetch 요청으로 데이터 보내고, 응답을 받으면 실행되는 구문, 받은 응답을 res 변수에 저장
      const data = res.json(); // 받은 응답을 JSON 형태로 파싱하여 data 변수에 저장
      data.then((data) => {
        // JSON 형태로 파싱되는데에 시간이 걸리기 때문에, 파싱 완료되면 파싱된 데이터를 data 변수에 저장
        localStorage.setItem("accessToken", data.access_token); // data에서 access_token 키에 해당하는 value(엑세스 토큰)dmf accessToken이라는 키로 로컬 스토리지에 저장
        navigate("/greeting"); // 위 작업까지 완료되면, Greeting 컴포넌트로 이동
      });
    });
  }, [authCode, grant_type, navigate]); // 배열 안에 있는 이 값들이 변경될 때마다 useEffect가 실행되도록 하는 부분! authCode, grant_type, navigate가 변경되면 다시 fetch 요청을 보내고, 위 과정 반복

  return <div>Redirection Page: 카카오뱅크 로그인 중…</div>; // Redirection 컴포넌트가 실행되면, "카카오뱅크 로그인 중…"이라는 문구가 뜨도록 함.
};

export default Redirection;
