import React,{Component} from 'react';
import './index.css';
import Menu from '../Menu'
export default class Public extends Component{
    constructor(props){
        super(props)
        this.state={
            showFlag:false
        }
        this.mzShow=this.mzShow.bind(this)
        this.hideMenu=this.hideMenu.bind(this)
    }
    mzShow(event){
        event.stopPropagation()
        this.setState({
            showFlag:!this.state.showFlag
        })
    }
    
    hideMenu(event){
        event.stopPropagation()
        var menu=document.getElementById('hideMenu').className
        var target=event.target||event.srcElement;
        if(target.className.toLocaleLowerCase()!=="mzMenu".toLocaleLowerCase()){
            
            this.setState({
                showFlag:false
            })
        }
        
    }

    
    render(){
        var menu=<Menu />
        if(this.state.showFlag==false){
            menu=null
        }
        return(
            <div onClick={this.hideMenu}>
            <div className='mztop'>
                <div className="mztopLeft "id="hideMenu" onClick={this.mzShow}>
                    <div className='iconfont icon-menu'></div>
                    <div className="mztopLeft_menu">卖座电影</div>
                </div>
                <div className="mztopRight">
                杭州<span className="iconfont icon-jiantouarrow483"></span>
                    <span className="iconfont icon-geren"></span>
                </div>
                
            </div>
            {menu}
            </div>
)
}
}