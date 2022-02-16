 // stage logic 
 import { useState } from "react";
 import { createStage } from "../gameHelpers";

 export const useStage = () => {
    //  call useStage hook and generate initial stage aka the clean board
     const [stage, setStage] = useState(createStage());

     return [stage, setStage];
 }