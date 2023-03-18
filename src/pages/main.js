import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import SliderElement from "../components/main/sliderElement";
import { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const navigation = useNavigate();
  const [recent, setRecent] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,

    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const getRecent = async () => {
    try {
      const res = await axios.get(
        "https://ajou-hackathon--qgrwz.run.goorm.site/group/category/recent"
      );
      console.log(res);
      setRecent([...recent, ...res.data]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getRecent();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "pretendard",
        width: "36rem",
        height: "60rem",
        flex: 1,
        margin: "0 auto",
        overflow: "scroll",
      }}
    >
      <div id="my_apply_list">
        <div
          style={{
            marginLeft: 20,
            marginTop: 15,
            fontSize: "2rem",
            fontWeight: "bolder",
          }}
        >
          나의 신청 목록
        </div>

        <div
          id="slider_box_out"
          style={{
            display: "flex",
            alignItems: "center",
            justifContent: "center",
            marginTop: "10px",
            marginLeft: "4%",
            height: "15rem",
            width: "90%",
            backgroundColor: "white",
            boxShadow: "3px 3px 3px #DCDCDC",
            border: "1px solid white",
            borderRadius: "2rem",
          }}
        >
          <div
            id="slider_box_in"
            style={{
              display: "flex",
              alignItems: "center",
              height: "90%",
              width: "90%",
              backgroundColor: "#EDEDED",
              border: "1px solid white",
              borderRadius: "2rem",
              marginLeft: "1.5rem",
            }}
          >
            <Slider
              {...settings}
              style={{
                display: "flex",
                height: "68%",
                width: "100%",
                borderRadius: "2rem",
              }}
            >
              <SliderElement
                title={"길찾기에 필요한 인지적 ..."}
                time={"5분"}
                MaximumNumberOfPeople={"1/2인"}
                gender={"남"}
                date={"03/18 19:00"}
                place={"아주대 삼거리"}
                content={"내용입니다!~~~"}
              />

              <SliderElement
                title={"동전 던지기 예측에 영향 ..."}
                time={"10분"}
                MaximumNumberOfPeople={"1/2인"}
                gender={"남"}
                date={"03/18 19:00"}
                place={"아주대 삼거리"}
                content={"내용입니다!~~~"}
              />
              <SliderElement
                title={"위험행동에 관한 인지과정 ..."}
                time={"7분"}
                MaximumNumberOfPeople={"1/2인"}
                gender={"남"}
                date={"03/18 19:00"}
                place={"아주대 삼거리"}
                content={"내용입니다!~~~"}
              />
              <SliderElement
                title={"매체를 통해 유발된 ..."}
                time={"3분"}
                MaximumNumberOfPeople={"1/2인"}
                gender={"남"}
                date={"03/18 19:00"}
                place={"아주대 삼거리"}
                content={"내용입니다!~~~"}
              />
              <SliderElement
                title={"확률적 의사결정에서 ..."}
                time={"5분"}
                MaximumNumberOfPeople={"1/2인"}
                gender={"남"}
                date={"03/18 19:00"}
                place={"아주대 삼거리"}
                content={"내용입니다!~~~"}
              />
            </Slider>
          </div>
        </div>
      </div>

      <div id="mate_list" style={{ marginTop: "4rem" }}>
        <div
          style={{
            marginLeft: 30,
            marginTop: 15,
            marginBottom: 15,
            fontSize: "2rem",
            fontWeight: "bolder",
          }}
        >
          메이트 목록
        </div>
        <div id="mate_board">
          <div
            style={{
              border: "1px solid gray",
              width: "80%",
              height: "30rem",
              marginLeft: "10%",
              borderRadius: "2rem",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid gray",
                height: "20%",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => navigation("/category/meal")}
            >
              <div
                style={{
                  width: "35%",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                식사메이트
              </div>
              <div style={{ width: "65%", paddingLeft: "1rem" }}>
                {recent.find((mate) => mate?.Category === "MEAL")?.Title}
              </div>
            </div>
            <div
              style={{
                borderBottom: "1px solid gray",
                height: "20%",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => navigation("/category/taxi")}
            >
              <div
                style={{
                  width: "35%",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                택시메이트
              </div>
              <div style={{ width: "65%", paddingLeft: "1rem" }}>
                {recent.find((mate) => mate?.Category === "TAXI")?.Title}
              </div>
            </div>
            <div
              style={{
                borderBottom: "1px solid gray",
                height: "20%",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => navigation("/category/locker")}
            >
              <div
                style={{
                  width: "35%",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                사물함메이트
              </div>
              <div style={{ width: "65%", paddingLeft: "1rem" }}>
                {recent.find((mate) => mate?.Category === "LOCKER")?.Title}
              </div>
            </div>
            <div
              style={{
                borderBottom: "1px solid gray",
                height: "20%",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => navigation("/category/cafe")}
            >
              <div
                style={{
                  width: "35%",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                카페메이트
              </div>
              <div style={{ width: "65%", paddingLeft: "1rem" }}>
                {recent.find((mate) => mate?.Category === "CAFE")?.Title}
              </div>
            </div>
            <div
              style={{
                height: "20%",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => navigation("/category/etc")}
            >
              <div
                style={{
                  width: "35%",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                기타메이트
              </div>
              <div style={{ width: "65%", paddingLeft: "1rem" }}>
                {recent.find((mate) => mate?.Category === "ETC")?.Title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
