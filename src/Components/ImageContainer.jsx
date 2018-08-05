import React from 'react';
import styled from 'styled-components';

const ItemImage=styled.img`
  width:100%;
  min-height:${p=>p.height}px;
`


class ImageContainer extends React.Component{ 
  render(){
    let {src,height,component}= this.props
    let Image=component?component:ItemImage;
    return (
        <Image src={src}/>
    );
  }
}
export default ImageContainer;