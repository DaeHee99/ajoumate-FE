export default function Modal({ show, handleModal}) {
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
                <div>식사메이트</div>
                <div style={{border:"1px solid gray", borderRadius: "2rem",}}>
                    <div style={{display:"flex"/*, justifyContent: "space-around"*/}}>
                        <div style={{width:"2.5rem", borderRight:"1px solid gray", padding:"0 1rem 0 2rem", marginTop:"0.2rem"}}>4인</div>
                        <div style={{width:"2.5rem", borderRight:"1px solid gray", padding:"0 1rem", marginTop:"0.2rem"}}>무관</div>
                        <div style={{width:"6.5rem",  padding:"0 1rem ", borderRight:"1px solid gray"}}>03/18 12:00</div>
                        <div style={{marginTop:"0.2rem"}}>구학생회관</div>
                    </div>

                    <div>학생식당에서 점심 같이 드실 분</div>
                    <div>식당 앞에서 만나서 들어가요</div>
                </div>
            </div>
            <div>
                <div>코멘트</div>
                <div style={{border:"1px solid gray", borderRadius: "2rem",}}>같이 어떤 메뉴 먹어요~</div>
            </div>
          <div style={{textAlign:"right", marginTop:"1rem"}}>
            <button type="button">
              신청하기
            </button>
          </div>
        </div>
      </div>

/*
     <div style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        left: 0,
        top: 0,
        textAlign: "center",
     }}>
        <div style={{
            height: "100%",
            width: "950px",
            marginTop: "70px",
            position: "relative",
            overlow: "scroll",
            background: "#141414",
        }}>
        <div>
                <div>식사메이트</div>
                <div style={{border:"1px solid gray"}}>
                    <div>4인</div>
                    <div>무관</div>
                    <div>03/18</div>
                    <div>12:00</div>
                    <div>구학생회관</div>
                    <div>학생식당에서 점심 같이 드실 분</div>
                    <div>식당 앞에서 만나서 들어가요</div>
                </div>
            </div>
            <div>
                <div>코멘트</div>
                <div>같이 어떤 메뉴 먹어요~</div>
            </div>
          <div className="bottom">
            <button type="button">
              신청하기
            </button>
          </div>
        </div>
     </div>
*/
    );
  }