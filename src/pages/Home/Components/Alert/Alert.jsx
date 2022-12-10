import { useEffect, useState } from "react";
//import logo from "../../assets/images/cartas/cartaNormal.jpg";
import "./Alert.scss";
import AlertButton from "../AlertButton/AlertButton";


export default function Alert() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsShown(true);
    }, 12000);

    return () => {
      // 👇️ clear timeout when component unmounts
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <div>
      {isShown ? (
        <div className="message">
          <h6>Consulta mis proyectos y descarga mi C.V.</h6>
          <AlertButton/>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
