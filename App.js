import React from 'react';
import {StatusBar} from 'react-native'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import { createSwitchNavigator} from 'react-navigation';


const AppNavigator=(val)=> createSwitchNavigator({
  Login,
  Dashboard
},{
  initialRouteName:"Login"
})

export default class FireBaseAuth extends React.Component {
  
  componentDidMount(){
    StatusBar.setHidden(true);
  }
  componentWillUnmount()
  {
    StatusBar.setHidden(false);
  }



  render()
  {
    const MainNavigator=AppNavigator();
    return (
      <MainNavigator />
  )
}
}
