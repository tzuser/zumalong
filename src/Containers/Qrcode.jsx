import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
const ShopImage=styled.img`
width:100%;
`
@withRouter
class Home extends React.Component{ 
  render(){
    return (
      <div>
        <ShopImage src={'/static/shop1.jpg'} />
     </div>
    );
  }
}
export default Home;