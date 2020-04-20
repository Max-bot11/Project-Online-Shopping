import React from 'react';

function Card(props) {
    // console.log(props)
  return (
    <li className={`task ${props.status ? 'completed' : ''}`}>
     
      <div>First Name: {props.firstName}</div>
      <div>Last Name: {props.lastName}</div>
      <div>Email: {props.email}</div>
      <div>piece: {props.piece}</div>
      <button onClick={props.onChangeStatus}>Change status</button>
      <button onClick={props.onDelete}>Delete</button>
     
    </li>
  );
};

export default Card;