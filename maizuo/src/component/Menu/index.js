import React, {Component} from 'react';
import './index.css';
import {
    NavLink, 
} from 'react-router-dom'

export default class Menu extends Component{
    constructor(props){
        super(props)
        this.state={
            TitleText:true,
            showFlag:true
        }
        this.add=this.add.bind(this)
    }
add(event){
    var target=event.target||event.srcElement;
     this.state.TitleText=target.innerText
}
    render(){
        return(
            <div className="mzMenustage" onClick={()=>this.props.btn(this.state.TitleText)}>
                <div className="mzMenubox" >
                </div>
                <div className="mzMenu"  onClick={this.add}>
                <NavLink exact className="nav"activeClassName="active" to="/">首页</NavLink>
                <NavLink className="nav"activeClassName="active" to="/self">个人</NavLink>
                <NavLink className="nav"activeClassName="active" to="/regester">注册</NavLink>
                </div>
                
            </div>
        )
    }
}