import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { Add } from './Add'

export const Contact = () => {

  const user = useSelector((state) => state.contact.contact)
  return (
    <div>
     
<Add/>
<hr/>
<table border={"10px"}> 
<th>id</th>
<th>name</th>
<th>email</th>
<th>phone</th>
<th>action</th>
{user.map((curr,index)=>{
  let {name,email,phone,id} = curr;
  return (
    <>
    <tr>
  <td>{id}</td>
  <td>{name}</td>
  <td>{email}</td>
  <td>{phone}</td>
  <td>
    <NavLink to={`edit/${id}`}>Edit</NavLink> {" "}
    <button>Delete</button>
  </td>
</tr>
    </>
  )
})}
</table>

    </div>
  )
}
