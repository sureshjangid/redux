import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Contact } from "./Contact";
import { BrowserRouter, Route, Router, Routes, Switch,  } from "react-router-dom";

import { Add } from "./Add";
import {Edit} from './Edit';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Contact/>} />
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
       </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
