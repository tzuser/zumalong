import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import { WingBlank } from 'antd-mobile';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import ImageContainer from 'com_/ImageContainer';
const Container=styled.div`
 padding:30px 10px;
`

const RightContent=styled.div`
 padding:20px 10px;
 background:#222;
 margin-top:-30px;

 margin-left:15%;
 z-index:2;
 position: relative;
`

const ItemImage=styled.img`
  width:100%;
  z-index:0;
`
export const Small=styled.small`
  color:#999;
`

export const Important=styled.div`
  font-size:16px;
`

export const UpperStrata=styled.div`
 z-index:2;
 position: relative;
`
@withRouter
class Column extends React.Component{ 
  render(){
    let {img,imageHeight}= this.props
    return (
      <WingBlank size="md">
      
        <Fade delay={500} bottom>
          <ImageContainer  src={img} height={imageHeight}/>
        </Fade>

        <Zoom right delay={500}>
          <RightContent>
            <Small>Women Hairstyles</Small>
            <Important>Hairstyles for Oval Faces: Find the Right...</Important>
          </RightContent>
        </Zoom>

     </WingBlank>
    );
  }
}
export default Column;