import React, {Component} from 'react';
import './index.css';
import Mzbody from '../Mzbody';
import Mzfilms from '../Mzfilms'

export default class Login extends Component{
    render(){
        return(
            <div>
                <Mzbody/>
                <Mzfilms/>
            </div>
        )
    }
}