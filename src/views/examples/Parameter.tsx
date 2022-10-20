import React from "react";
import { useParams } from "react-router-dom";
export const Parameter = (props:any) => {
    const { id } = useParams();
    return(
        <div className="Parameter">
            <h1>Screen that receive a parameter in URL:</h1>
            <p>Parameter received: {id} </p>
        </div>
    )
}
