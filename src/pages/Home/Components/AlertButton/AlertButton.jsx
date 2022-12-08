import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";


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
        <Button
                variant="contained"
                //color="primary"
                type="submit"
                //onClick={sendMail}
                endIcon={<SendIcon />}
                style={{
                  borderRadius: 50,
                  backgroundColor: "black",
                  color: "white",
                  marginRight:'5px'
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
                  color: "white",
                  // marginTop:'0px'
                }}
              >
                Proyectos
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
                  color: "white",
                  // marginTop:'0px'
                }}
              >
                CV
              </Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
