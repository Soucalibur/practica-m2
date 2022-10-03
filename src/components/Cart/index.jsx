import React, {Component} from "react";
import { StyledCart } from "./StyledCart";
import {showInfo} from "../../actions/index.js"
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

export class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:""
    }
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.showInfo(this.state.title)
  }

  render(){
    const { title } = this.state;
    return (

      <div>
        <h2>CAAART</h2>
        <StyledCart>
          <h2>COMPONENTE CART</h2>
          {this.props.state}
        </StyledCart>
        <form  onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label htmlFor="title">CARTITAAA: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" >BUSCAR</button>
        </form>
        <ul>
          
        </ul>
      </div>


    )
  }
  
    
}

const mapStateToProps = (state)=>{
  return{
    info: state
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    showInfo: name=>{dispatch(showInfo(name))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
