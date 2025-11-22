import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="card flex">
            <img src="/src/images/person.jpg" alt="Pic" height={125} />

            <h2>{props.title}</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus nisi blanditiis doloremque accusamus repellat?
            </p>
        </div>
    );
}

export default Card;
