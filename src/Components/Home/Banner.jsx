import React,{Component} from 'react';
import {withRouter,Link} from 'react-router-dom';
import {Carousel } from 'antd-mobile';
//import {getBanner} from 'act$/home';
@withRouter
class Banner extends Component{
  render(){
    let {location}=this.props;
    return  (
      <div style={{minHeight:220}}>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          
          <img
            src={`https://image.vs.com.cn/zh-cn/-/media/VidalSassoon/Images/Common/Brand Experience details/set3/001.jpg?h=564&la=zh-CN&w=942&v=1-201603240813`}
            style={{ width: '100%',height:"220px", verticalAlign: 'top' }}
            />
          <img
            src={`http://basuofu.com/Public/img/cpb2.jpg`}
            style={{ width: '100%',height:"220px", verticalAlign: 'top' }}
            />
        </Carousel>
      </div>
      )
  }
}
export default Banner