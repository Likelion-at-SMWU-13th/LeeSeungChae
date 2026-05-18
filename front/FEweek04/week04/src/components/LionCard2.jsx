import lion2 from "../assets/lion2.jpeg";
import "../styles/LionCard2.css";

const LionCard2 = () => {
  const isReal = true;
  return (
    <div className="lion-card">
      <img src={lion2} className="lion-card-image" />
      <h1 className="lion-card-title">2번 사자</h1>
      <p className="lion-card-text">
        {isReal
          ? "진짜 아기사자랍니다~ 👼🏻 !!"
          : "땡 ! 저는 가짜 아기사자에요 ✌🏻"}
      </p>
    </div>
  );
};

export default LionCard2;
