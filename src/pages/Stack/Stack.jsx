import React, { useContext } from "react";
import { SWContext } from "../../context/context";

const Stack = () => {
  const { stack } = useContext(SWContext);
  console.log(stack);
  return (
    <>{stack.map((item) => (
      <div class="card"
       
      >
        <img class="card-img-top" src={item.image} alt="Card image cap" />
        <div class="card-body">
          <p class="card-text">
            {item.title}
          </p>
        </div>
        
      </div>
      ))}
    </>
  );
};

export default Stack;
