import React from 'react';
import {withRouter} from 'react-router-dom';
import shop1 from '@/static/shop1.jpg';
import styled from 'styled-components';
const ShopImage=styled.img`
width:100%;
`
@withRouter
class Home extends React.Component{ 
  render(){
    return (
      <div>
        <ShopImage src={shop1} />
     </div>
    );
  }
}
export default Home;