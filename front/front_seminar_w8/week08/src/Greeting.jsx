import React, { useEffect, useState } from "react";

// Greeting.jsx는 로컬스토리지에 저장된 access token을 이용해 카카오 API에서 사용자 정보를 가져와서, 사용자 이름과 프로필 이미지를 보여주는 컴포넌트

const Greeting = () => {
  const [name, setName] = useState(); // 사용자 이름을 저장하는 상태 변수
  const [profileImg, setProfileImg] = useState(); // 사용자 프로필 이미지를 저장하는 상태 변수

  useEffect(() => {
    // Redirection 컴포넌트에서 access token을 로컬 스토리지에 저장했었는데, 이제는 그 access token을 로컬스토리지에서 getItem()을 통해 가져와서 사용자 정보를 요청하는 데 사용
    const accessToken = localStorage.getItem("accessToken"); // 로컬 스토리지에서 accessToken 가져와서 accessToken 변수에 저장
    fetch("https://kapi.kakao.com/v2/user/me", {
      //fetch 요청으로 사용자에 대한 정보를 요청
      method: "GET", // 우리가 데이터(사용자 이름, 사용자 프로필 이미지)를 받아와야 하는 것이기 때문에 GET 방식으로 요청
      headers: {
        Authorization: `Bearer ${accessToken}`, // 여기에 accessToken 값을 넣어서 어떤 사용자의 정보를 가져와야 하는지 카카오가 구별할 수 있도록 함
        "Content-type": "application/x-www-form-urlencoded", // 요청하는 데이터의 타입을 지정 (한 줄로 인코딩된 폼 데이터 형식)
      },
    }).then((res) => {
      // 사용자의 정보를 요청해서 응답을 받으면, 실행되는 구문
      const userData = res.json(); // userData 변수에 응답 받은 데이터 JSON 형태로 저장
      userData.then((user) => {
        // JSON 형태로 파싱되기까지 시간이 걸리기 때문에, 파싱 완료되면 user 변수에 저장
        setName(user.properties.nickname); // user 변수에서 properties 키에 해당하는 값의 nickname 키에 해당하는 값을 name 상태 변수에 저장
        setProfileImg(user.properties.profile_image); // user 변수에서 properties 키에 해당하는 값의 profile_image 키에 해당하는 값을 name 상태 변수에 저장
      });
    });
  }, []);

  return (
    // Greeting 컴포넌트가 실행되면, 사용자 이름과 프로필 사진을 보여줌
    <div>
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default Greeting;
