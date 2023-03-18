import axios from "axios";
import { useSelector } from "react-redux";

export default function Modal({ show, handleModal, status, info}) {
  const user = useSelector((state) => state.userSlice);

    const handleClick = async() => {
      try{
        console.log(user.UserID);

        const res = await axios.post("https://ajou-hackathon--qgrwz.run.goorm.site/group/join",{
          params: {
            GroupID: info.GroupID,
            UserID: user.UserID
          }
        })

        alert("신청이 완료되었습니다.");
      }catch(err){
        console.log(err);
      }
    };
    const dateToString = (rawDate) => {
      let date = new Date(rawDate);
      return `${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    }

    return (
      <div className={"modal-wrap " + (show ? "active" : "")}>
        <div className="overlay" onClick={() => {handleModal(false);}} style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
        }}></div>
        <div className="modal-con" style={{
            position:"relative",
            zIndex:10,
            maxWidth:"50rem",
            minWidth:"30rem",
            minHeight:"10rem",
            width:"33%",
            padding:"2rem",
            borderRadius:"0.5rem",
            background:"#fff",
            transform: "translateY(8rem)",
            transition: "transform ease 0.3s 0.1s"
        }}>
            <div>
                <div style={{fontSize:"1.5rem", marginBottom:"0.6rem"}}>식사메이트</div>
                <div style={{border:"1px solid gray", borderRadius: "2rem", height:"6rem"}}>
                    <div style={{display:"flex"}}>
                        <div style={{width:"6rem", borderRight:"1px solid gray", paddingLeft:"2rem", marginTop:"0.2rem"}}>{info.MaximumNumberOfPeople}</div>
                        <div style={{width:"4rem", borderRight:"1px solid gray", paddingLeft:"1rem", marginTop:"0.2rem"}}>{info.Gender}</div>
                        <div style={{width:"8.5rem",  padding:"0 1rem ", borderRight:"1px solid gray"}}>{dateToString(info.Time)}</div>
                        <div style={{marginTop:"0.2rem"}}>{info.Place}</div>
                    </div>

                    <div style={{fontSize:"1.5rem", margin:"1rem 0 0 2rem"}}>{info.Title}</div>
                </div>
            </div>
            <div style={{marginTop:"2rem"}}>
                <div style={{fontSize:"1.5rem", marginBottom:"0.6rem"}}>코멘트</div>
                <div style={{border:"1px solid gray", borderRadius: "2rem", height:"6rem", lineHeight:"6rem", fontSize:"1.5rem", fontFamily:"fantasy", textAlign : "center"}}>{info.Comment}</div>
            </div>
            {status === "MYMATE" ? <></> :
              (status === "APPLY" ? <div style={{textAlign:"right", marginTop:"1rem"}}>
                <button type="button" style={{background:"5F95E5"}} onClick={handleClick}>
                  신청하기
                </button>
              </div> : <div style={{textAlign:"right", marginTop:"1rem"}}>
                <button type="button" style={{background:"5F95E5"}} >
                  모집완료
                </button>
              </div>)
              }
        </div>
      </div>
    );
  }