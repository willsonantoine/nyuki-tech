import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import variables from "../config/variables";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton"; 
import {useNavigation} from '@react-navigation/native'

function Login(): JSX.Element {
  const navigation:any = useNavigation();
  return (
    <ScrollView>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Image source={variables.APPLICATION_ICON} style={styles.icon} />
        <Text style={{ paddingLeft: 10, paddingRight: 10, textAlign: 'center', marginTop: -70, color: '#707D75', fontSize: 17 }}>Veuillez saisir vos données de connexion</Text>
        <View style={{ marginTop: 10 }}>
          <MyTextInput label='Numéro de télephone' is_password={false} placeholder='' />
          <MyTextInput label='Mot de passe' placeholder='' is_password={true} />
          <MyButton title="Se connecter" onPress={()=>{navigation.navigate("Home")}} />
          <View style={{marginTop:20, flexDirection: 'row',alignSelf:'center', alignContent: 'space-between',alignItems:'center' }}>
            <Text>Vous n'avez de compte ?</Text>
            <TouchableOpacity onPress={()=>{console.log('jijijij'); navigation.navigate("CreateAccount")}}><Text style={{color:'blue'}}>    Créer un compte</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containt: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#384738'
  },
  icon: {
    width: 300, height: 300
  }

});

export default Login;