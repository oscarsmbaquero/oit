import { Avatar, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { ContextI18n } from "../../App";
import "./I18n.scss";
import spain from "../../assets/banderas/spain.png";
import english from "../../assets/banderas/english.jpg";

const I18n = () => {
  const { locale, selectLanguage } = useContext(ContextI18n);

  return (
    <div class="i18n">
      <div>{/* <p class="p-i18n">Idioma: {locale}</p>  */}</div>
      <div>
        <IconButton onClick={() => selectLanguage("es-ES")}>
          <Avatar
          sx={{ width: 24, height: 24 }}
            src={spain}
            //  sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        </IconButton>
        <IconButton onClick={() => selectLanguage("es")}>
          <Avatar
          sx={{ width: 24, height: 24 }}
            src={english}
            //  sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        </IconButton>
      </div>
    </div>
  );
};

export default I18n;
