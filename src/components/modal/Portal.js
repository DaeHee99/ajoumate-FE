import ReactDom from "react-dom";


const ModalPortal = ({ children }) => {
  const el = document.getElementById("root_modal");
  return ReactDom.createPortal(children, el);
};

export default ModalPortal;