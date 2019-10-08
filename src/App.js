import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const stacks = [
    {
      "website_url": "https://applab3react.herokuapp.com",
      "image_name": "https://i.imgur.com/BYkLacm.jpg"
    },
    {
      "website_url": "https://ember-web-app.herokuapp.com/",
      "image_name": "https://i.imgur.com/PmtvRGx.jpg"
    },
    {
      "website_url": "https://corbin-ko-homework-3.herokuapp.com/",
      "image_name": "https://i.imgur.com/98ynfzX.jpg"
    },
    {
      "website_url": "https://ktanchay-thestack.herokuapp.com/",
      "image_name": "https://i.imgur.com/vE6ZoO2.jpg",
      "alt": "Stack Preview by Kimmy"
    },
    {
      "website_url": "https://fbenhw.herokuapp.com/",
      "image_name": "https://i.imgur.com/WPxVWnm.jpg"
    },
    {
      "website_url": "https://hireact7.herokuapp.com/",
      "image_name": "https://i.imgur.com/j44QQex.jpg"
    },
    {
      "website_url": "https://cool-app666.herokuapp.com/",
      "image_name": "https://i.imgur.com/5fsv8Fh.jpg"
    },
    {
      "website_url": "https://harrisonchen-app.herokuapp.com",
      "image_name": "https://i.imgur.com/iSNwHoD.jpg"
    },
    {
      "website_url": "https://reality10.herokuapp.com/",
      "image_name": "https://i.imgur.com/VgYdftg.jpg"
    }
  ];

  const links = stacks.map((link) => {
    return (
      <div className="stack">
        <a className="stack-link" href={link.website_url} target="_blank">
          <img className="stack-image" alt="Preview of the Stack assignment by App Lab Student" src={link.image_name}></img>
        </a>
      </div>
    );
  });

  return (
    <div className="App">
      <h1 className="App-header">
        App Lab's Stacks
      </h1>
      <div className="stacks">
        {links}
      </div>
    </div>
  );
}

export default App;
