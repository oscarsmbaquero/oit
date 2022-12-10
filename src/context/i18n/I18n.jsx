import { Avatar, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { ContextI18n } from "../../App";
import "./I18n.scss";
import spain from "../../assets/banderas/spain.png";
import english from "../../assets/banderas/english.jpg";
import portuguese from "../../assets/banderas/portugal.jpg";
//import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//   customHoverFocus: {
//     "&:hover, &.Mui-focusVisible": { backgroundColor: "yellow" }
//   }
// }));

const I18n = () => {
  const { locale, selectLanguage } = useContext(ContextI18n);
  //const classes = useStyles();
  

  return (
    <div class="i18n">
      {locale === "es-ES" ? (
        ""
      ) : (
        <IconButton onClick={() => selectLanguage("es-ES")} >
          <Avatar
            sx={{ width: 24, height: 24 }}
            src={spain}
            //  sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        </IconButton>
      )}
      {locale === "en" ? (
        ""
      ) : (
        <IconButton onClick={() => selectLanguage("en")}>
          <Avatar
            sx={{ width: 24, height: 24 }}
            src={english}
            //  sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        </IconButton>
      )}
      {locale === "pt" ? (
        ""
      ) : (
        <IconButton onClick={() => selectLanguage("pt")}>
          <Avatar
            sx={{ width: 24, height: 24 }}
            src={portuguese}
            //  sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        </IconButton>
      )}
    </div>
  );
};

export default I18n;
