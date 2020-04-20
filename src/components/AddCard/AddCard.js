import React, { Component } from 'react';

class AddCard extends Component {
  state = {
    firstName:'',
    lastName:'',
    email: '',
    piece:'',
    status: false

  }

  handleAddFirstName = (e) => {
    const firstName = e.target.value;
    this.setState({ firstName });
  }

  handleAddLastName = (e) => {
    const lastName = e.target.value;
    this.setState({ lastName });
  }

  handleAddEmail = (e) => {
    // if(this.state(!value))return
    const email = e.target.value;
    this.setState({ email });
    
  }

  handleAddPiece = (e) => {
    // if(this.state(!value))return
    const piece = e.target.value;
    this.setState({ piece });
    
  }


  handleAdd = () => {
    const {
        firstName,
        lastName,
        email,
        piece,
    }=this.state
    if(!firstName||!lastName||!email||!piece)return;
    this.props.onAdd(this.state);
    this.setState({
        firstName:'',
        lastName:'',
        email:'',
        piece:'',
    })
//     this.setState({ firstName: ''});
//     this.setState({ lastName: ''});
//     this.setState({ age: ''});
//     this.setState({ born: ''});
//     this.setState({ profession: ''});
// }
}

  render() {
    return (
      <div classtitle="add-task">
        <label> First Name </label>
        <input value={this.state.firstName} onChange={this.handleAddFirstName} placeholder="Enter Name"/>
        <label> Last Name </label>
        <input value={this.state.lastName} onChange={this.handleAddLastName} placeholder="Enter Last Name"/>
        <label> Email</label>
        <input value={this.state.email} onChange={this.handleAddEmail} placeholder="Enter your email"/>
        <label> Piece </label>
        <input value={this.state.piece} onChange={this.handleAddPiece} placeholder="Enter pieces"/>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default AddCard;