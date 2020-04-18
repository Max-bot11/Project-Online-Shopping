import React from 'react';
import Card from './Card';

function List(props) {
  return (
    <ul>
      {props.data.map((task, index) => (
        <Card
        key={task.id}
        title={task.title}
        status={task.status}
        onChangeStatus={()=> props.onChangeStatus(index, task.id)}
        onDelete={()=> props.onDelete(task.id)}
        />
      ))}
    </ul>
  );
}

export default List;