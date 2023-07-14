import React from "react";

const date = new Date();
const hours = date.getHours();
let greetings = "";
let customStyle = {
    color: ""
}

if(hours < 12){
    greetings = "Good morning!";
    customStyle.color = "red";
}

else if(hours < 18){
    greetings = "Good afternoon!";
    customStyle.color = "green";
}

else{
    greetings = "Good night!"
    customStyle.color = "blue";
}



const Heading = () => {
    return(
        <div className="container">
            <h1 style={customStyle}>
                {greetings}
            </h1>
        </div>
    );
}

export default Heading;