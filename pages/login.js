import React, {Component} from 'react';
import {ScrollView,View,Text,Image,ActivityIndicator} from 'react-native';
import * as Font from 'expo-font';
import styles from '../style/loginStyle';
import { Emailinput,Passinput,Simplebutton } from '../components/inputs';
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyB2J1XJbWY_Mx5OCfD2vr-qfPoNsInoxx0",
  authDomain: "fir-auth-57fdb.firebaseapp.com",
};

const Loader=()=>(
  <View style={{justifyContent:'center',flex:1,backgroundColor:'black'}}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
)

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      email:'',
      pass:'',
      token:null,
      current_screen:"",
      fontLoaded:false,
      hidepass:true,
      emailmsg:'',
      passmsg:'',
      loading:false,
      type:true
    }
  }
  
  
 login=async (username,password)=>{
  try {
    this.setState({loading:true})
    if (this.state.type)
    {

      firebase.auth().signInWithEmailAndPassword(username,password)
      .then(()=>{this.setState({loading:false});this.props.navigation.navigate("Dashboard")})
      .catch((error)=>{this.setState({loading:false});alert(error)})
    }
    else if (!this.state.type)
    {

      firebase.auth().createUserWithEmailAndPassword(username,password)
      .then(()=>{this.setState({loading:false});alert("User Created, You Can Login Now")})
      .catch((error)=>{this.setState({loading:false});alert(error)})
    }  
  } catch (error) {
    alert(error);
    this.setState({loading:false})
  }
}

async componentDidMount(){
 await Font.loadAsync({
    'Gilroy-ExtraBold': require('../assets/fonts/Gilroy-ExtraBold.ttf'),
    'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
    'SF': require('../assets/fonts/SF.ttf'),
    'OpenSans-Regular' : require('../assets/fonts/OpenSans-Regular.ttf'),
  });
  this.setState({ fontLoaded: true });
  if (!firebase.apps.length) 
    firebase.initializeApp(firebaseConfig);
}

nameCheck = () => {
  
  let email= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email.test(this.state.email) && this.state.pass!==''){
    this.login(this.state.email,this.state.pass);
  }
  
  if(!email.test(this.state.email) || this.state.email===''){
    this.setState({emailmsg:'Enter Valid email'})
  }else{
    this.setState({emailmsg:''})
  }

  if(this.state.pass===''){
    this.setState({passmsg:'Enter Password'});
  }else{
    this.setState({passmsg:''})
  }
}

setter=(key,value)=>{
  key=='email' && this.setState({email:value});
  key=='pass' && this.setState({pass:value});
  key=='hidepass' && this.setState({hidepass:!this.state.hidepass});
  key=='type' && this.setState({type:!this.state.type});
}

  render(){
    if (this.state.loading){
      return <Loader />
    }
    return(
      this.state.fontLoaded ? (
      <ScrollView keyboardDismissMode='interactive'
      keyboardShouldPersistTaps='handled'
      style={{backgroundColor:'black'}}
      >

      <View style={{marginTop:'5%'}}></View>
      <View style={styles.logowrap}>  
            <View style={styles.logo}>
                <Image source ={require('../img/logo.jpg')} style={styles.logoimg}/>
            </View>
        </View>


      <View style={{flexDirection:'row',paddingLeft:'6%',marginTop:35}}>
        <Text style={styles.wel_txt}>Welcome !{'\n'}<Text style={{color:'#f96d15'}}>Sign {this.state.type?'In':'Up'}</Text> To Continue</Text>
      </View>

    <View style={[styles.input_wrap,{marginTop:0}]}>
      
       <Emailinput 
        email={this.state.email}
        setter={this.setter}
        emailmsg={this.state.emailmsg}
       />
        

      <Passinput 
        passmsg={this.state.passmsg}
        hidepass={this.state.hidepass}
        setter={this.setter}
        pass={this.pass}
      />

      <Simplebutton 
        type={'executer'}
        func={this.nameCheck}
        text={"Sign "+(this.state.type?"In":"Up")}
        
      />

      <Text
          style={{color:'#fff',fontSize:15,alignSelf:'center',justifyContent:'center'}}
      >
          or
      </Text>

      <Simplebutton 
        type={'setter'}
        func={this.setter}
        setto={'type'}
        text={"Sign "+(this.state.type?"Up":"In")}
        bgcolor={'#dadada'}
      />

      </View>
      <View style={{paddingBottom:40}}></View>

    </ScrollView>
      ): <Loader />
      
    );
   }
}


