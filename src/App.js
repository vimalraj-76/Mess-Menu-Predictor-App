import React from 'react';
import './App.css';
import MenuPage from './components/menu_page/MenuPage';
// import Particles from "react-tsparticles";
import GalleryPage from './components/gallery_page/GalleryPage';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }
  callApi()
  {
    fetch('http://localhost:9001/getMenu').then(res=>res.text()).then(res=>this.setState({apiResponse:res}));
  }
  componentWillMount(){
    this.callApi();
  }
render(){
  return (
  <div className='fullPage'>
  <MenuPage />
  <GalleryPage />
  <p>{this.state.apiResponse}</p>
  </div>
  );}}
export default App;
