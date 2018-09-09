import React,{Component} from 'react';
import './index.css'
import { Carousel, WingBlank } from 'antd-mobile';
export default class Mzbody extends Component{
    render(){
        return(
        <div className="mzbody">
        <WingBlank>
        <Carousel
          autoplay
          infinite
        >
            <div className="mzSwiper">
                <img src="https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg" alt=""/>
            </div>
            <div className="mzSwiper">
            <img src="https://pic.maizuo.com/h5PicUpload/fb924e6b8c20ed96230894b3b1689db5.jpg" alt=""/>
            </div>
            <div className="mzSwiper">
            <img src="https://pic.maizuo.com/h5PicUpload/756df73865bdfd01a17730ac3b524df5.jpg" alt=""/>
            </div>
            <div className="mzSwiper">
            <img src="https://pic.maizuo.com/h5PicUpload/078fac4a3a7f18fa83b7255ff07b5fa4.jpg" alt=""/>
            </div>
        </Carousel>
        </WingBlank>
            </div>
        )
    }
}
