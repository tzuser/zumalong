import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import { WingBlank } from 'antd-mobile';
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
  max-width:100%;
  z-index:0;
`
const Small=styled.small`
  color:#999;
`

const Important=styled.div`
  font-size:16px;
`
@withRouter
class Column extends React.Component{ 
  render(){
    let {img,imageHeight}= this.props
    return (
      <WingBlank size="md">
        <ItemImage src={img} height={imageHeight}/>
        <RightContent>
          <Small>Women Hairstyles</Small>
          <Important>Hairstyles for Oval Faces: Find the Right...</Important>
        </RightContent>
     </WingBlank>
    );
  }
}
export default Column;