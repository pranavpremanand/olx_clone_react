import React, { useContext, useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';
import {useHistory} from 'react-router-dom';

export default function Signup() {
  const history = useHistory();
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
 const {firebase} = useContext(FirebaseContext)
  const handleSubmit = (e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:name}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          name:name,
          phone:phone
        }).then(()=>{
          history.push('/login')
        }).catch((err)=>{
          alert(err)
        })
      }).catch((err)=>{
        alert(err)
      })
    }).catch((err)=>{
      alert(err)
    })
    // console.log(firebase)
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            // defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            // defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="tel"
            id="lname"
            name="phone"
            // defaultValue="Doe"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            // defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>history.push('/login')}>Login</a>
      </div>
    </div>
  );
}
