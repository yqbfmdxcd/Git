import React, {Component} from 'react';
import './index.css';



export default class Regester extends Component{
    constructor(props){
        super(props)
        this.state={
            Mztel:[],
            Mzcode:[]
        }
        this.MztelChange=this.MztelChange.bind(this)
        this.MzcodeChange=this.MzcodeChange.bind(this)
        this.submit=this.submit.bind(this)
    }
    MztelChange(){
        this.state.Mztel=[]
        this.state.Mztel.push(this.refs.Mztel.value)
        this.setState({
            Mztel:this.state.Mztel,
        })
        console.log(this.state.Mztel)
    }
    MzcodeChange(){
        this.state.Mzcode=[]
        this.state.Mzcode.push(this.refs.Mzcode.value)
        this.setState({
            Mzcode:this.state.Mzcode,
        })
        console.log(this.state.Mzcode)
    }
    submit(){
        console.log(this.state.Mztel==="1234")
        if(this.state.Mztel[0]==="1234"&&this.state.Mzcode[0]==="5678"){
            alert("您成功登陆!")
        }
        
    }
    render(){
        return(
            <div className="MzRegester" >
                <input  type="tel"ref="Mztel" name="Mztel" id="Mztel"onBlur={this.MztelChange} placeholder="手机号:"/><br />
                <input type="text"ref="Mzcode" name="Mzcode" id="Mzcode" onBlur={this.MzcodeChange}placeholder="验证码:" />
                <button id="submit"onClick={this.submit}>提交</button>
            </div>
        )
    }
}