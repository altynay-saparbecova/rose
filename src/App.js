
import React, { useState } from 'react'
import './App.css';
import { Main } from './Components/Main/Main';

import flower_1 from './images/1.jpg'
import flower_2 from './images/2.jpg'
import flower_3 from './images/3.jpg'
import flower_4 from './images/4.jpg'

const data = [
  {
    img: flower_1,
    title: "Шарль де Голль",
    city: 'Belgium'
  },
  {
    img: flower_2,
    title: "Мишель Серо",
    city: 'Armenia',

  },
  {
    img: flower_3,
    title: "Вильям Моррис",
    city: "Argentina",

  },
  {
    img: flower_4,
    title: "Прейри джой",
    city: "London",

  },
];
function App() {
  const [title, setTitle] = useState(false);
  const [text, setText] = useState("");
  const showRose = (data) => {
    setText(data.title)
    setTitle(true);

  }
  return (
    <div className="Card" >

      <div className='App'>
        <Main data={data} showRose={showRose} />
      </div>
      <h1 className="title">
        {title ? text : ""}
      </h1>
    </div>
  );
}

export default App