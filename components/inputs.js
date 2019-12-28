import React from 'react';
import {View,Text,TextInput ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../style/loginStyle';


export const Emailinput=(props)=>(
    <View>
        <Text style={{textAlign:'left',fontSize:14,fontFamily:'SF',marginTop:10,color:'#eb7070'}}>{props.emailmsg}</Text> 
        <View style={styles.inputSection_icon_ws}>
            <Icon style={styles.icon} name="at" size={24} color="#dadada" />
                <TextInput
                    style={styles.input_icon}
                    placeholder="EMAIL ADDRESS"
                    keyboardType={'email-address'}
                    onChangeText={(email) => {props.setter("email",email)}}
                    value={props.email}
                    underlineColorAndroid="transparent"
                    returnKeyType={'next'}
                    blurOnSubmit={false}
                    />
        </View>
    </View>
)

export const Passinput=(props)=>(
    <View>

       <Text style={{textAlign:'left',fontSize:14,fontFamily:'SF',color:'#eb7070'}}>{props.passmsg}</Text> 
       <View style={styles.wrapper} > 
                      <View style={styles.inputSection_icon_ws}>
                          <Icon style={styles.icon} name="lock" size={24} color="#dadada" />
                          <TextInput
                          style={styles.input_icon}
                          secureTextEntry={props.hidepass}
                          placeholder="PASSWORD"
                          onChangeText={(pass) => {props.setter("pass",pass)}}
                          value={props.pass}
                          underlineColorAndroid="transparent"
                        //   ref={(b)=>this.pass=b}
                          />
                          <TouchableOpacity style={{paddingRight:8,}} onPress={(hidepass)=>props.setter("hidepass",hidepass)}> 
                           {
                             props.hidepass? 
                            <Icon name="eye" size={24} color="#dadada" /> :
                            <Icon name="eye-slash" size={24} color="#dadada" /> 
                            
                            } 
                          </TouchableOpacity>              
                      </View>
            </View>
    </View>
)


export const Simplebutton=(props)=>(
    <TouchableOpacity style={[styles.nextbtn,{backgroundColor:props.bgcolor||'#f96d15'}]}  onPress={()=>{props.type=="executer"?props.func():props.func(props.setto)}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={styles.nextbtn_txt}>{props.text}</Text>
              <Icon name="arrow-right" size={16} color="#fff" style={{paddingLeft:10}}/>   
            </View>
      </TouchableOpacity>
)
