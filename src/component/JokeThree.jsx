import React from 'react';

function JokeThree(props){
    return(
        <main className="joke">
        <img src={props.img} alt="clown" width="300" height="200"></img>
        <h1>Joke 3</h1>
        <div>{props.setup}</div>
        <div>{props.punchline}</div>
        </main>
    )
}

export default JokeThree;