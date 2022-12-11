
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IntlProvider, FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./AlertButton.scss";



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
              <Link as={Link} to={"/projects"}>
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
              </Button>
              </Link>
              <Link as={Link} to={"/cv"}>
               <Button
                variant="contained"
                type="submit"
                style={{
                  borderRadius: 50,
                  backgroundColor: "black",
                  color: "white",
                  marginRight:'5px'
                }}
              >
                CV
              </Button>
              </Link> 
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
