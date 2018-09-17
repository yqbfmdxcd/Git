import React,{Component} from 'react'
import axios from "axios"
import "./index.css"
import {withRouter} from 'react-router-dom'
import {Button} from 'antd-mobile'

 class Mzfilms extends Component{
    constructor(props){
        super(props)
        this.state={
            Films:[]
        }
        this.goto=this.goto.bind(this)
    }
    componentDidMount(){
        axios.get("/v4/api/film/now-playing?__t=1536764838699&page=1&count=5")
        .then((res)=>{
            this.setState({
                Films:res.data.data.films
            })
        })
    }
    goto(fid){
        console.log(this)
        this.props.history.push('/detail/'+fid)
    }
    render(){
        var that=this
        return(
            <div className="Mzfilms">
                <ul>
                    {
                        this.state.Films.map((item,index)=>{
                            return(
                                <li key={item.id} className="FilmList">
                                        {/* <Link to={'/detail/'+item.id}> */}
                                        <dl><img onClick={()=>that.goto(item.id)}src={item.cover.origin} alt="" className="src"/></dl>
                                        {/* </Link> */}
                                        <dt>
                                            <div className="FilmlistLeft">
                                            <p>{item.name}</p>
                                            <p>{item.cinemaCount}家电影院上映{item.watchCount}人购票</p>
                                            </div>
                                            <div className="FilmlistRight">
                                                {item.grade}
                                            </div>
                                        </dt>

                                </li>
                            )
                        })
                    }
                </ul>
                <Button type="primary" className="FilmBtn">更多即将上映电影</Button>
                
            </div>
        )
    }
}
export default withRouter(Mzfilms)