import React from 'react';
import {withRouter} from 'react-router-dom';
import { Button, List ,WhiteSpace,WingBlank} from 'antd-mobile';
import styled from 'styled-components';
import Banner from 'com_/Home/Banner';
import Column,{Important} from 'com_/Home/Column';
import LeftColumn from 'com_/Home/LeftColumn';
import RightColumn from 'com_/Home/RightColumn';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const TopImage=styled.img`
width:180px;
margin:0 auto;
padding-bottom:10px;
display:block;
`
const Top=styled.div`
background:#000;
`
const LeftContent=styled.div`
 padding:20px 10px;
 margin-right:15%;
 background:#fff;
 color:#000;
`
@withRouter
class Home extends React.Component{ 
  render(){
    return (
      <div>
        <Top>
          <TopImage src={'/static/top.jpg'} />
        </Top>

        <Fade bottom >
          <Banner />
        </Fade>

        <WhiteSpace size="xl"/>
        
        <Zoom   left delay={500} >
          <LeftContent>
            <h2>香氛艺术</h2>
            <span>All articles ></span>
          </LeftContent>
        </Zoom>
        
        <WhiteSpace size="xl"/>
        
        <Column 
        imageHeight={190} 
        img={"http://www.schwarzkopf.com/content/dam/schwarzkopf/us/en/articleimages/teaserbig/woman-with-long-wavy-hairstyle-and-red-lips-1280x680.jpg"}
        />
        
        <WhiteSpace size="xl"/>
        
        <LeftColumn 
        imageHeight={156} 
        img={'http://www.schwarzkopf.com/content/dam/schwarzkopf/us/en/articleimages/teasersmall/hairnet-940x730.jpg'}
        />
        
        <WhiteSpace size="xl"/>

        <RightColumn 
        imageHeight={156} 
        img={'http://www.schwarzkopf.com/content/dam/schwarzkopf/us/en/articleimages/teasersmall/volume-wave-940x730.jpg'} 
        />
        
        <WhiteSpace size="xl"/>
        
        <Column 
        imageHeight={190} 
        img={"http://www.schwarzkopf.com/content/dam/schwarzkopf/us/en/articleimages/teaserbig/highlights-color-at-home-1280x680.jpg"}
        />
        
        <WhiteSpace size="xl"/>

        <WingBlank>
          <Button>SHOW MORE</Button>
        </WingBlank>
        <WhiteSpace size="xl"/>
     </div>
    );
  }
}
export default Home;