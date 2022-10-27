import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { Contact } from "./Contact";
import { user } from "./action/user";

export const Add = () => {
  let [info, setInfo] = useState(
   { name: "",
    email: "",
    phone: "",
});
let dispatch = useDispatch()
let formHandle  =(e)=>{
  e.preventDefault();
  console.log(info,'user');
  let user_contact = {
    id:shortid.generate(),
    name:name,
    email:email,
    phone:phone
  }
  dispatch(user(user_contact))
}
const inputHandle = (e)=>{
  setInfo({...info,[e.target.name]:e.target.value})
}
  let { name, email, phone } = info;
  return (
    <div>
      
      <form onSubmit={(e)=>formHandle(e)}>
        <input
          name="name"
          value={name}
          onChange={e => inputHandle(e)}
          placeholder="Enter your name"
        />
        <br />
        <input
          name="email"
          value={email}
          onChange={e => inputHandle(e)}
          placeholder="Enter your email"
        />
        <br />
        <input
          name="phone"
          value={phone}
          onChange={e => inputHandle(e)}
          placeholder="Enter your phone no."
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
