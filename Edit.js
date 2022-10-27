import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { Contact } from "./Contact";
import { getContact, user } from "./action/user";
import { useParams } from "react-router-dom";

export const Edit = () => {
    let {id} = useParams();
    console.log(id)
    let selectData = useSelector((state)=>state.contact.userData ? state.contact.userData : '')
  let [info, setInfo] = useState(
   { name: selectData.name,
    email: selectData.email,
    phone: selectData.phone ,
});


let dispatch = useDispatch()
useEffect(()=>{
dispatch(getContact(id))

},[])
const inputHandle = (e)=>{
  setInfo({...info,[e.target.name]:e.target.value})
}
  let { name, email, phone } = info;
  return (
    <div>
      
      <form >
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
