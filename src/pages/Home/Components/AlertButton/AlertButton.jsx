import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IntlProvider, FormattedMessage } from "react-intl";



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
        {/* <Button
                variant="contained"
                //color="primary"
                type="submit"
                //onClick={sendMail}
                style={{
                  borderRadius: 50,
                  backgroundColor: "black",
                  color: "white",
                  marginRight:'5px'
                }}
              >
                Stack
              </Button> */}
              <Button
                variant="contained"
                //color="primary"
                type="submit"
                //onClick={sendMail}
                style={{
                  borderRadius: 50,
                  backgroundColor: "black",
                  color: "white",
                  marginRight:'5px'
                }}
              >
                <FormattedMessage id="app.projects"/>
              </Button> <Button
                variant="contained"
                //color="primary"
                type="submit"
                //onClick={sendMail}
                style={{
                  borderRadius: 50,
                  backgroundColor: "black",
                  color: "white",
                  marginRight:'5px'
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
