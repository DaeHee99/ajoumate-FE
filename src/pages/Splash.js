import { useEffect } from "react";
import { useNavigate } from "react-router";
import BlueBack from "../components/Splash/BlueBack";
import Title from "../components/Splash/Title";

export default function Splash() {
  const navigate = useNavigate();

  const timeout = () => {
    setTimeout(() => {
      navigate("/main");
    }, 2000);
  };

  useEffect(() => {
    timeout();

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <>
      <BlueBack>
        <Title>아주메이트</Title>
      </BlueBack>
    </>
  );
}
