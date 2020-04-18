import React from 'react';

function Card(props) {
    // console.log(props)
  return (
    <li className={`task ${props.status ? 'completed' : ''}`}>
      <div>Title: {props.title}</div>
      <button onClick={props.onChangeStatus}>Change status</button>
      <button onClick={props.onDelete}>Delete</button>
     
    </li>
  );
};

export default Card;