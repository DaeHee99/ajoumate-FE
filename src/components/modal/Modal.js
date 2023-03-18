import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 18px;
  border-radius: 10px;
  border: 0;
  outline: 0;
  background-color: #5f95e5;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 10px;
`;

export default function Modal({ show, handleModal, status, info, type}) {
  const user = useSelector((state) => state.userSlice);

    const handleClick = async() => {
      try{
        //console.log(user.UserID);
        //console.log(info.GroupID);

        const res = await axios.post(`https://ajou-hackathon--qgrwz.run.goorm.site/group/join?GroupID=${info.GroupID}&UserID=${user.UserID}`)

        console.log(res);

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
            transition: "transform ease 0.3s 0.1s",
            bottom: "80px"
        }}>
            <div>
                <div style={{fontSize:"2rem", marginBottom:"0.6rem"}}>{type}</div>
                <div style={{border:"1px solid gray", borderRadius: "2rem", height:"6rem"}}>
                    <div style={{display:"flex"}}>

                        <div style={{width:"6rem", borderRight:"1px solid gray", paddingLeft:"2rem", marginTop:"0.2rem"}}>{info.NumberOfPeople+'/'+info.MaximumNumberOfPeople+'명'}</div>
                        <div style={{width:"6rem", borderRight:"1px solid gray", paddingLeft:"0.5rem", marginTop:"0.2rem"}}>{info.Gender}</div>
                        <div style={{width:"7.5rem",  padding:"0 1rem ", borderRight:"1px solid gray"}}>{dateToString(info.Time)}</div>
                        <div style={{marginTop:"0.2rem", paddingLeft:"1rem"}}>{info.Place}</div>
                    </div>

                    <div style={{fontSize:"2rem", margin:"1rem 0 0 2rem"}}>{info.Title}</div>
                </div>
            </div>
            <div style={{marginTop:"2rem"}}>
                <div style={{fontSize:"2rem", marginBottom:"0.6rem"}}>코멘트</div>
                <div style={{border:"1px solid gray", borderRadius: "2rem", height:"6rem", lineHeight:"6rem", fontSize:"1.8rem", textAlign : "center"}}>{info.Comment}</div>
            </div>
            {status === "MYMATE" ? <></> :
              (status === "APPLY" ? <div style={{textAlign:"right", marginTop:"1rem"}}>
                <StyledButton onClick={handleClick}>
                  신청하기
                </StyledButton>
              </div> : <div style={{textAlign:"right", marginTop:"1rem"}}>
                <StyledButton disabled={true}>
                  모집완료
                </StyledButton>
              </div>)
              }
        </div>
      </div>
    );
  }