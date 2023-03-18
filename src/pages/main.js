import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import SliderElement from "../components/main/sliderElement";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Main() {
  const navigation = useNavigate();
  const [recent, setRecent] = useState([]);
  const [JoinList, setJoinList] = useState([]);
  const user = useSelector((state) => state.userSlice);
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
      if (res.status === 200) {
        setRecent([...recent, ...res.data]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const join = async () => {
    try {
      const res = await axios.get(
        `https://ajou-hackathon--qgrwz.run.goorm.site/my/join?UserID=${user.UserID}`
      );
      setJoinList(res.data.Groups);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getRecent();
    if (user.UserID) join();
  }, []);

  const menu = [
    { title: "식사메이트", code: "MEAL" },
    { title: "택시메이트", code: "TAXI" },
    { title: "사물함메이트", code: "locker" },
    { title: "카페메이트", code: "cafe" },
    { title: "기타메이트", code: "etc" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
            fontSize: "25px",
            fontWeight: "bold",
            margin: "10px",
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
            {JoinList && (
              <Slider
                {...settings}
                style={{
                  display: "flex",
                  height: "68%",
                  width: "100%",
                  borderRadius: "2rem",
                }}
              >
                {JoinList.map((item, index) => {
                  console.log(item);
                  console.log(JoinList);
                  return (
                    <SliderElement
                      key={index}
                      Title={item.Title}
                      MaximumNumberOfPeople={item.MaximumNumberOfPeople}
                      Gender={item.Gender}
                      Time={item.Time}
                      Place={item.Place}
                      Comment={item.Comment}
                      NumberOfPeople={item.NumberOfPeople}
                    />
                  );
                })}
              </Slider>
            )}
          </div>
        </div>
      </div>

      <div id="mate_list" style={{ marginTop: "4rem" }}>
        <div
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            margin: "10px",
          }}
        >
          메이트 목록
        </div>
        <div id="mate_board">
          <div
            style={{
              border: "1px solid gray",
              width: "90%",
              height: "30rem",
              margin: "0 auto",
              borderRadius: "2rem",
            }}
          >
            {menu.map((item, index) => (
              <div
                key={index}
                style={{
                  borderBottom: "1px solid gray",
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() =>
                  navigation(`/category/${item.code.toLowerCase()}`)
                }
              >
                <div
                  style={{
                    width: "40%",
                    // textAlign: "center",
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    marginLeft: "1.5rem",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    width: "65%",
                    paddingLeft: "1rem",
                    fontSize: "1.4rem",
                  }}
                >
                  {recent.find((mate) => mate?.Category === item.code)?.Title}
                </div>
              </div>
            ))}
            {/* <div
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
                  fontSize: "1.8rem",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                식사메이트
              </div>
              <div
                style={{
                  width: "65%",
                  paddingLeft: "1rem",
                  fontSize: "1.4rem",
                }}
              >
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
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                택시메이트
              </div>
              <div
                style={{
                  width: "65%",
                  paddingLeft: "1rem",
                  fontSize: "1.4rem",
                }}
              >
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
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                사물함메이트
              </div>
              <div
                style={{
                  width: "65%",
                  paddingLeft: "1rem",
                  fontSize: "1.4rem",
                }}
              >
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
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                카페메이트
              </div>
              <div
                style={{
                  width: "65%",
                  paddingLeft: "1rem",
                  fontSize: "1.4rem",
                }}
              >
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
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  marginLeft: "10px",
                }}
              >
                기타메이트
              </div>
              <div
                style={{
                  width: "65%",
                  paddingLeft: "1rem",
                  fontSize: "1.4rem",
                }}
              >
                {recent.find((mate) => mate?.Category === "ETC")?.Title}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
