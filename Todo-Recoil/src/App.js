import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Record } from "./Record";
import { useState } from 'react';

export default function App() {

  const [buttonState, setButtonState] = useState(false);

  return (
    <div className="App">

      <button onClick={()=>setButtonState(!buttonState)}  className={buttonState ? "grid" : "displaylist"}>
        {buttonState ? "Grid" : "List"}
      </button>

      <span>{buttonState ? "Todo" : "grid"}</span>

      <RecoilRoot>
        {buttonState ? <Form/> : <Record/>}
      </RecoilRoot>
    </div>
  );
}
