import React from 'react';
import {Route,Redirect,withRouter,Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import PageLoading from '../Components/PageLoading';
import PropTypes from 'prop-types';
import * as ConfigAct from 'act_/config';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filteringJitter} from 'tools_';
import Footer from '@/Components/Footer';
import styled,{ThemeProvider} from 'styled-components';
import theme from '../public/theme'
//去抖动
const instanceFillteringJitter=filteringJitter();

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */ './Home'),
  loading:PageLoading
});

const LoadableQrcode = Loadable({
  loader: () => import(/* webpackChunkName: 'Qrcode' */ './Qrcode'),
  loading:PageLoading
});

const AppContainer=styled.div`
  color:${p=>p.theme['color-text-base']};
`

const mapStateToProps=(state)=>({
  width:state.config.width
})
const mapDispatchToPorps=(dispatch)=>bindActionCreators({
  setWindowWidthAct:ConfigAct.setWindowWidth
},dispatch)

@withRouter
@connect(mapStateToProps,mapDispatchToPorps)
class App extends React.Component{
  static childContextTypes={isFooter: PropTypes.func}

  constructor(props){
    super(props)
    //添加浏览器缩放事件
    if(typeof window!='undefined'){
      this.resizeFun=()=>{
        instanceFillteringJitter().then(()=>{
          if(this.props.width!=document.body.clientWidth){
            this.props.setWindowWidthAct(document.body.clientWidth);
          }
        }).catch(err=>{})
      }
      window.addEventListener('resize',this.resizeFun);
      this.props.setWindowWidthAct(document.body.clientWidth);
    }
  }
  componentWillUnmount(){
    //移除浏览器缩放事件
    if(typeof window!='undefined'){
      window.removeEventListener('resize',this.resizeFun);
    }
  }
  state={footer:true}
  getChildContext() {
     return {
      isFooter:(show)=>{this.setState({footer:show})},//隐藏或显示底部
    };
  }
	render(){
		return(
      <ThemeProvider theme={theme}>
  			<AppContainer>
          <Switch>
            <Route exact path="/" component={LoadableHome}/>
            <Route exact path="/qrcode/:id" component={LoadableQrcode}/>
          </Switch>
          <Footer />
  			</AppContainer>
      </ThemeProvider>
			)
	}
};
export default App;