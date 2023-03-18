import { useNavigate } from "react-router-dom";

const SliderElement = (Props) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/response")}
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
          {Props.time}
        </div>
        <div
          style={{
            backgroundColor: "#EBE4FF",
            padding: "2px 6px",
            borderRadius: 20,
            marginRight: 7,
          }}
        >
          {Props.people}
        </div>
      </div>
    </div>
  );
};
export default SliderElement;
