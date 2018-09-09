import React, { Component } from 'react';
import './App.css'
import './style/xiaoer/iconfont.css'
import Public from './component/Pubulic';
import Mzbody from './component/Mzbody';

class App extends Component {
  
  render() {
    const Mztop=()=>{
      return(
        <div className="Mzpadding"></div>
      )
    }
    return (
        <div className="mz" >
             <Mztop />
             <Public/>
             <Mzbody/>
        </div>
    );
  }
}

export default App;
