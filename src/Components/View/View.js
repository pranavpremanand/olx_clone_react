import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../store/Context';
import { ProductContext } from '../../store/ProductContext';

import './View.css';
function View() {
  const [user, setUser] = useState()
  const {details} = useContext(ProductContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    const {userId} = details
    
    firebase.firestore().collection('users').where('id','==',userId).get().then((response)=>{
      console.log(response)
      response.forEach((doc)=>{
        const userData = doc.data()
        console.log("userData",userData)
        setUser(userData)
      })
    }).catch((err)=>alert(err))
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img style={{width:"500px"}}
          src={details.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {details.price} </p>
          <span>{details.name}</span>
          <p>{details.category}</p>
          <span>{details.createdAt}</span>
        </div>
        {user &&
        <div className="contactDetails">
        <p>Seller details</p>
        <p>{user.name}</p>
        <p>{user.phone}</p>
      </div>}
      </div>
    </div>
  );
}
export default View;
