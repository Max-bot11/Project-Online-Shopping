import React from 'react';
import axios from 'axios';
import List from '../List/List'; 
import AddCard from '../AddCard/AddCard'

class Todo extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.fetchTodo()
  }

  fetchTodo = async () => {
    const { data } = await axios.get('http://localhost:8000/todo');
    // console.log(data)
    // console.log(result)
    this.setState({ data })
    // this.setState({ data: result.data })
  }

  handleAdd = async (task) => {
    await axios.post('http://localhost:8000/todo', task)
    // console.log(task)
    this.fetchTodo();
  }

  handleChangeStatus = async (index, id) => {
    const newData = [...this.state.data];
    newData[index].status = !newData[index].status;
    await axios.put(`http://localhost:8000/todo/${id}`, newData[index]);
    this.fetchTodo();
  }

  // handleChangeStatus = async (index, id) => {
  //   // console.log(index)
  //   const newData = [...this.state.data];
  //   newData[index].status = !newData[index].status;
  //   await axios.put(`http://localhost:8000/todo/${id}`, newData[index]);
  //   this.fetchTodo();
  // }

  handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/todo/${id}`);
    this.fetchTodo();
  }

  checkPage = (currentItem) => this.props.page === undefined || this.props.page === currentItem;

  render() {
    return (
      <div className="App">
        {this.checkPage("ADD") ? <AddCard onAdd={this.handleAdd} />: null}
        {this.checkPage("LIST") ? (<List 
          data={this.state.data} 
          onChangeStatus={this.handleChangeStatus} 
          onDelete={this.handleDelete}
        />): null}
        {/* {this} */}
      </div>
    );
  }
}

export default Todo;