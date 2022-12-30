import React from "react";
import Serie from "./Series";

function ListSeries({ series }) {
    const listSeries = series.map((serie, index) => {
        return <Serie serie={serie} key={index} />
    })
    return (
        <div>
           <ul>
            {listSeries}
           </ul>
        </div>

    )
}

export default ListSeries; 