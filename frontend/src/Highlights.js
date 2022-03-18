import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";

function Highlights() {
    const [highlights, setHighlights] = useState([]);

    const getHighlights = async() => {
        fetch('http://localhost:4200/highlights')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setHighlights(res);
        });
    }

    useEffect(() => {
        getHighlights();
      }, []);

    return (
        <div>
            <div id="container">
                <div>Hightlights {highlights}</div>
                {/* {highlights.map(highlight => <Row key={highlight.name} className="injury injury-content">
                    <Col>{highlight.date}</Col>
                </Row>)} */}
            </div>
        </div>
        )
}

export default Highlights


