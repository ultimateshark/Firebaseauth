import {StyleSheet} from 'react-native';


export default StyleSheet.create({    
    logowrap:{
        flex:1,
        alignItems:'center',
    },
   
    signlogowrap:{
        flex:1,
       
    },

  
    signlogoimg:{
        height:150,
        width:150,
        resizeMode:'cover'
    },

    logoimg:{
        height:150,
        width:150,
        resizeMode:'cover'
    },


  wel_txt:{
    fontSize:25,
    fontFamily:'Gilroy-ExtraBold',
    color:'#fff',
  },
    

    input_wrap:{
        width:'90%',
        marginRight:'5%',
        marginLeft:'5%',
        marginTop:10,
    },
    inputSection_icon:{
        flexDirection:'row',
          borderWidth:1,
          borderRadius:8,
          borderColor:'#dadada',  
          justifyContent:'center',
          alignItems:'center',
          marginTop:10,
         
      }  , 
      
      inputSection_icon_ws:{
        flexDirection:'row',
          borderWidth:1,
          borderRadius:8,
          borderColor:'#dadada',  
          justifyContent:'center',
          alignItems:'center',
          marginTop:0,
         
      }  , 
      

    

      inputSection_sign:{
        flexDirection:'row',
          borderWidth:1,
          borderRadius:8,
          borderColor:'#dadada', 
          marginTop:0,
          alignItems:'center',
         
      }  , 
      
      inputSection_icon_date: {
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#dadada', 
        marginTop:12,
    },


      icon: {
          padding:5,
          paddingLeft:10,
      },
      
      input_icon: {
        flex:1,
        marginTop:3,
        paddingLeft:10,
        paddingTop:15,
        paddingBottom:15,
        fontSize:18,
        fontFamily:'SF',
        color:'#fff'
        
    },


  

    input_sign: {
        flex:1,
        marginTop:3,
        paddingLeft:10,
        paddingTop:15,
        paddingBottom:15,
        fontSize:18,
        fontFamily:'SF',
        
    },
    
    input_date: {
        flex:1,
        marginTop:3,
        paddingLeft:1,
        paddingRight:1,   
        
    },

    input_spoc:{
        flex:1,
        marginTop:3,
        paddingLeft:10,
        paddingTop:12,
        paddingBottom:12,
        fontSize:17,
        fontFamily:'SF',
    },

    input_icon_sign: {
        flex:1,
        marginTop:3,
        paddingLeft:10,
        paddingTop:15,
        paddingBottom:15,
        fontSize:18,
        fontFamily:'SF',
        
    },


    input_icon_spoc: {
        flex:1,
        marginTop:3,
        paddingLeft:10,
        paddingTop:12.5,
        paddingBottom:12.5,
        fontSize:17,
        fontFamily:'SF',
        
    },
  
    btn_wrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:30,
        paddingBottom:20,
    },

    nextbtn:{
        backgroundColor:'#f96d15',
        flex:1,
        alignItems:'center',
        paddingTop:15,
        paddingBottom:15,
        borderRadius:8,
        marginTop:20,
    },
  
   nextbtn_txt:{
    fontSize:22,
    color:'#fff',
    fontFamily:'Gilroy-ExtraBold',
  
   },

   otp_txt:{
    fontSize:20,
    fontFamily:'Gilroy-ExtraBold',

    color:'#112f91',
   },
    
});