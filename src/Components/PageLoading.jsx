import React,{Component} from 'react';
import { Icon } from 'antd-mobile';
import styled from 'styled-components';
import Pulse from 'react-reveal/Pulse';
import Flash from 'react-reveal/Flash';

const TopImage=styled.img`
width:120px;
margin:0 auto;
display:block;
margin-top:220px;
`
class PageLoading extends Component{
  render(){
    return <div>
      <Flash forever>
        <TopImage src={'/static/top.jpg'} />
      </Flash>
    </div>
  }
}
export default PageLoading