import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import { WingBlank ,Flex} from 'antd-mobile';
const Container=styled.div`
 padding:30px 10px;
`

const RightContent=styled.div`
 padding:10px 10px;
 background:#222;
 margin-top:10px;
 z-index:2;
 position: relative;
 
`

const ItemImage=styled.img`
  width:115%;
  margin-left:-15%;
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
        <Flex>
          <Flex.Item>
            <RightContent>
              <Small>Women Hairstyles</Small>
              <Important>Hairstyles for Oval Faces: Find the Right...</Important>
            </RightContent>
          </Flex.Item>
          <Flex.Item flex={0}>
            <ItemImage height={imageHeight} src={img}/>
          </Flex.Item>
        </Flex>
     </WingBlank>
    );
  }
}
export default Column;