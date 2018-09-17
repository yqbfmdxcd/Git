import React, { Component } from 'react';
import './App.css'
import './style/xiaoer/iconfont.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Pubulic from './component/Pubulic'
import Login from './component/Login'
import Self from './component/Self'
import Regester from './component/Regester'
import Detail from './component/Detail'
import {createBrowserHistory} from 'history'
const history =createBrowserHistory
const Mztop=()=>{
  return(
    <div className="Mzpadding"></div>
  )
}
const Notexits=()=>{
  return(
    <div>
      <h1>该文件不存在</h1>
    </div>
  )
  
}
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      Title:"卖座电影",
      
    }
    this.changeTitle=this.changeTitle.bind(this)
  }
  
    changeTitle(a){
            this.setState({
              Title:a
            })
    }
    
  render() {
    
    
    return (
      <Router >
        <div className="mz" >
              <Mztop />
              <Pubulic title={this.state.Title} MzChangeTitle={this.changeTitle}/>
              <Switch>
              <Route exact path='/' component={Login}/>
              <Route  path='/self' component={Self}/>
              <Route  path='/regester' component={Regester}/>
              <Route  path='/notexits' component={Notexits}/>
              <Route  path='/detail/:fid' component={Detail}/>
              <Redirect  from='/' to='/Notexits' />
              </Switch>
        </div>
        </Router>
    );
  }
}

export default App;
