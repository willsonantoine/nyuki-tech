const { Button, Text, TouchableOpacity, StyleSheet } = require("react-native")

const MyButton = (props)=>{
    
    return (

       <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'#FFFFFF',
        padding:8,
        fontSize:17
    },
    button: {
      backgroundColor:'#2E2E37',
      height:50,
      alignItems: 'center', 
      borderRadius:10,
      marginTop:15,
      height:40,
      marginRight:10
    }
});

export default MyButton;