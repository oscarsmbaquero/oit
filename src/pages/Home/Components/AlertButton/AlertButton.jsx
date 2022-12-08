import { useEffect, useState } from "react";
//import logo from "../../assets/images/cartas/cartaNormal.jpg";
//import '././Alert.scss';


export default function Alert() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsShown(true);
    }, 1000);

    return () => {
      // 👇️ clear timeout when component unmounts
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <div>
      {isShown ? (
        <div className="message">
         
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
