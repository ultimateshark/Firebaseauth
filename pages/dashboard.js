import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native'

export default class Dashboard extends React.Component{

    render(){
        return(
            <View
                style={{flex:1,backgroundColor:'black',justifyContent:'center',alignItems:"center"}}
            >
                <Text
                    style={{color:'#fff',fontSize:25,alignItems:'center'}}
                >
                    Welcome To Dashboard
                </Text>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Login")}
                >
                    <Text
                        style={{color:'#f96d15',fontSize:25,alignItems:'center',marginTop:45}}
                    >
                        Back
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}