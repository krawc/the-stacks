import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const stacks = [
    {
      "website_url": "https://applab3react.herokuapp.com",
      "image_name": "hank.jpg"
    },
    {
      "website_url": "https://ember-web-app.herokuapp.com/",
      "image_name": "kyle.jpg"
    },
    {
      "website_url": "https://corbin-ko-homework-3.herokuapp.com/",
      "image_name": "corbin.jpg"
    },
    {
      "website_url": "https://ktanchay-thestack.herokuapp.com/",
      "image_name": "kimmy.jpg"
    },
    {
      "website_url": "https://fbenhw.herokuapp.com/",
      "image_name": "filip.jpg"
    },
    {
      "website_url": "https://hireact7.herokuapp.com/",
      "image_name": "cyndi.jpg"
    },
    {
      "website_url": "https://cool-app666.herokuapp.com/",
      "image_name": "buheshagoulilun.jpg"
    },
    {
      "website_url": "https://harrisonchen-app.herokuapp.com",
      "image_name": "harrison.jpg"
    },
    {
      "website_url": "https://reality10.herokuapp.com/",
      "image_name": "tuba.jpg"
    }
  ];

  const images_path = 'assets/'

  const links = stacks.map((link) => {
    return (
      <div className="stack">
        <a className="stack-link" href={link.website_url} target="_blank">
          <img className="stack-image" src={images_path + link.image_name}></img>
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
