import React,{useContext} from 'react';
import { SWContext } from "../../context/context";

const Stack = () => {
    const { stack } = useContext(SWContext);
    console.log(stack,13);
  return (
    <div>Stack</div>
  )
}

export default Stack