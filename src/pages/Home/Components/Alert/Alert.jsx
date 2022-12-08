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
          <h6>Consulta mi Stack tecnológico y mis Proyectos</h6>
          <AlertButton/>
          {/* <Button
            variant="contained"
            //color="primary"
            type="submit"
            //onClick={sendMail}
            endIcon={<SendIcon />}
            style={{
              borderRadius: 50,
              backgroundColor: "black",
              color: "#87CEEB",
              marginRight: "5px",
            }}
          >
            Stack
          </Button>
          <Button
            variant="contained"
            //color="primary"
            type="submit"
            //onClick={sendMail}
            endIcon={<SendIcon />}
            style={{
              borderRadius: 50,
              backgroundColor: "black",
              color: "#87CEEB",
              // marginTop:'0px'
            }}
          >
            Proyectos
          </Button> */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
