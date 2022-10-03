import React, {Component} from "react";
import { StyledCatalogue } from "./StyledCatalogue";
import {showInfo} from "../../actions/index.js"
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

export class Catalogue extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.showInfo()
  }
  
  render(){
    return (
      <div>
        <StyledCatalogue>Componente Catalogue</StyledCatalogue>
        {this.props.info.map((juego)=>
          <p key={juego.dealID}>Juego:{juego.title}</p>
        )}
      </div>
    
    )
  }
  
}


const mapStateToProps = (state)=>{
  return{
    info: state.infoJuegos
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    showInfo: ()=>{dispatch(showInfo())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Catalogue);
