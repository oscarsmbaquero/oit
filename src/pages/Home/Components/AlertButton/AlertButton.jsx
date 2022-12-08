import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";



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
        <Button>Stack</Button>
        <Button>Stack</Button>
        <Button>Stack</Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
