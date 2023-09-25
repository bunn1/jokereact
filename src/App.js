import React from 'react';
import Joke from './component/Joke.jsx'
import JokeTwo from './component/JokeTwo.jsx'
import JokeThree from './component/JokeThree';



function App() {
  return (
    <div className="App">
    <Joke
    img="/images/clown.jpg"
    setup="Hear about the new restaurant called Karma?"
    punchline="There’s no menu: You get what you deserve." 
    />
    <JokeTwo 
    img="/images/clown2.jpg"
    setup="Did you hear about the actor who fell through the floorboards?"
    punchline="He was just going through a stage." 
    />
    <JokeThree 
    img="/images/clown3.jpg"
    setup="Did you hear about the claustrophobic astronaut?"
    punchline="He just needed a little space." 
    />
    </div>
  );
}

export default App;
