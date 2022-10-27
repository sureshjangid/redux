
export const user = (contact) =>{
    return{
      type:"ADD",
      payload:contact,
    }
  
  }

  export const getContact = (id) => ({
    type: "GET_DATA",
    payload:id
  })
  