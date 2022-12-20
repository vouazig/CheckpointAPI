import React from 'react';
import Axios from 'axios';
import {useState} from 'react';
import Carte from './Carte';

function UserList() {
const [data,setData]= useState([])
const getList= ()=> {
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then ((response) => {
    console.log(response)
    setData(response.data)
    } )
}    
  return <div className="Carte">
<button onClick={getList} >Console Log </button>
{
    data.map((el,id) => <Carte contact={el} key={id}  />)
}

  </div>;
}

export default UserList;