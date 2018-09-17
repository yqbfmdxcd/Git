import React,{Component} from 'react'

export default class Detail extends Component{
    render(){
        return(
            <div className="MzDetail">
                <h2>
                    我是详情页
                </h2>
                {this.props.match.params.fid}
            </div>
        )
    }
}
