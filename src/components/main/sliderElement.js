import { useState } from "react";
import Modal from '../modal/Modal'
import ModalPortals from "../modal/Portal";

const SliderElement = (Props) => {
  const [modalStatus, setModal] = useState(false);

  const handleModal = () => {
      setModal(!modalStatus);
  };

  const STATUS = "MYMATE"

  return (
    <div onClick={() => {
      handleModal();
    }}
    style={{
      display: "flex",
      borderRadius: "2rem",
      flexDirection: "column",
      margin:"0px 5px",
      paddingBottom: "1.5rem",
      backgroundColor: "white",
    }}
      >
      <p>{Props.title}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#E8FBFF",
            padding: "2px 7px",
            borderRadius: 20,
            marginRight: 2,
          }}
        >
          {Props.gender}
        </div>
        <div
          style={{
            backgroundColor: "#EBE4FF",
            padding: "2px 6px",
            borderRadius: 20,
            marginRight: 7,
          }}
        >
          {Props.MaximumNumberOfPeople}
        </div>
        <ModalPortals>
          <Modal show={modalStatus} handleModal={handleModal} status={STATUS} info={Props}/>
        </ModalPortals>
      </div>

    </div>
  );
};
export default SliderElement;
