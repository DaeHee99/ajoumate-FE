import Slider from "react-slick";
import SliderElement from "../components/main/sliderElement";

function Main() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      arrows: false,

      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "pretendard",
        width: "36rem",
        height:"80rem",
      }}>

        <div id="my_apply_list">
        <div style={{ marginLeft: 20, marginTop: 15, fontSize:"2rem", fontWeight:"bolder" }}>
          나의 신청 목록
        </div>
        <div id="slider_box_out" style={{
          display: "flex",
          alignItems: "center",
          justifContent: "center",
          marginTop: "10px",
          marginLeft: "4%",
          height: "15rem",
          width: "91%",
          backgroundColor: "white",
          boxShadow: "3px 3px 3px #DCDCDC",
          border: "1px solid white",
          borderRadius: "2rem",
        }}>
          <div id="slider_box_in" style={{
            display: "flex",
            alignItems: "center",
            height: "90%",
            width: "90%",
            backgroundColor: "#EDEDED",
            border: "1px solid white",
            borderRadius: "2rem",
            marginLeft:"1.5rem",
          }}>
            <Slider {...settings} style={{
              display: "flex",
              height: "68%",
              width: "100%",
              borderRadius: "2rem",
            }}>
              <SliderElement
                title={"길찾기에 필요한 인지적 ..."}
                time={"5분"}
                people={"450"}
              />

              <SliderElement
                title={"동전 던지기 예측에 영향 ..."}
                time={"10분"}
                people={"600"}
              />
              <SliderElement
                title={"위험행동에 관한 인지과정 ..."}
                time={"7분"}
                people={"1000"}
              />
              <SliderElement
                title={"매체를 통해 유발된 ..."}
                time={"3분"}
                people={"500"}
              />
              <SliderElement
                title={"확률적 의사결정에서 ..."}
                time={"5분"}
                people={"450"}
              />
            </Slider>
          </div>
        </div>
        </div>

        <div id="mate_list" style={{marginTop:"4rem"}}>
          <div style={{ marginLeft: 20, marginTop: 15, marginBottom:15, fontSize:"2rem", fontWeight:"bolder" }}>
            메이트 목록
          </div>
          <div id="mate_board">
            <div style={{
              border:"1px solid gray",
              width:"80%",
              height:"25rem",
              marginLeft:"10%",
              borderRadius: "2rem",
              }}>
              <div style={{borderBottom:"1px solid gray", height:"20%", display: "flex", alignItems : "center"}}>
                <div style={{width:"35%",textAlign:"center", fontSize:"1.5rem", fontWeight:"bold"}}>식사메이트</div>
                <div style={{width:"65%", paddingLeft:"1rem"}}>광교중앙역까지 택시 타실 분</div>
              </div>
              <div style={{borderBottom:"1px solid gray", height:"20%", display: "flex", alignItems : "center"}}>
                <div style={{width:"35%",textAlign:"center", fontSize:"1.5rem", fontWeight:"bold"}}>택시메이트</div>
                <div style={{width:"65%", paddingLeft:"1rem"}}>광교중앙역까지 택시 타실 분</div>
              </div>
              <div style={{borderBottom:"1px solid gray", height:"20%", display: "flex", alignItems : "center"}}>
                <div style={{width:"35%",textAlign:"center", fontSize:"1.5rem", fontWeight:"bold"}}>사물함메이트</div>
                <div style={{width:"65%", paddingLeft:"1rem"}}>광교중앙역까지 택시 타실 분</div>
              </div>
              <div style={{borderBottom:"1px solid gray", height:"20%", display: "flex", alignItems : "center"}}>
                <div style={{width:"35%",textAlign:"center", fontSize:"1.5rem", fontWeight:"bold"}}>카페메이트</div>
                <div style={{width:"65%", paddingLeft:"1rem"}}>광교중앙역까지 택시 타실 분</div>
              </div>
              <div style={{height:"20%", display: "flex", alignItems : "center"}}>
                <div style={{width:"35%",textAlign:"center", fontSize:"1.5rem", fontWeight:"bold"}}>기타메이트</div>
                <div style={{width:"65%", paddingLeft:"1rem"}}>광교중앙역까지 택시 타실 분</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

  export default Main;