import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import { WingBlank ,Flex} from 'antd-mobile';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import {UpperStrata,Important,Small} from './Column';
const Container=styled.div`
 padding:30px 10px;
`

const RightContent=styled.div`
 padding:10px 10px;
 background:#222;
 margin-top:10px;
`

const ItemImage=styled.img`
  width:115%;
  margin-right:-15%;
  z-index:0;
`
@withRouter
class Column extends React.Component{ 
  render(){
    let {img,imageHeight}= this.props
    return (
      <WingBlank size="md">
        <Flex>
          <Flex.Item flex={0}>
            <Zoom delay={500}>
              <ItemImage height={imageHeight} src={img}/>
            </Zoom>
          </Flex.Item>
          <Flex.Item>
            <UpperStrata>
              <Fade bottom delay={1000}>
                <RightContent>
                  <Small>Women Hairstyles</Small>
                  <Important>Hairstyles for Oval Faces: Find the Right...</Important>
                </RightContent>
              </Fade>
            </UpperStrata>
          </Flex.Item>
        </Flex>
     </WingBlank>
    );
  }
}
export default Column;