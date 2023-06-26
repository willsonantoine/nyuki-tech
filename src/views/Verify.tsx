import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import variables from "../config/variables";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton"; 
import {useNavigation} from '@react-navigation/native'

function Verify(): JSX.Element {
  const navigation:any = useNavigation();
  return (
    <ScrollView>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Image source={variables.APPLICATION_ICON} style={styles.icon} />
        <Text style={{ paddingLeft: 10, paddingRight: 10, textAlign: 'center', marginTop: -70, color: '#707D75', fontSize: 17 }}>Veuillez saisir vos données de connexion</Text>
        <View style={{ marginTop: 10 }}>
          <MyTextInput label='Code de validation' is_password={false} placeholder='' /> 
          <MyButton title="Se connecter" onPress={()=>{navigation.navigate("Home")}} />
          <View style={{marginTop:20, flexDirection: 'row',alignSelf:'center', alignContent: 'space-between',alignItems:'center' }}>
            <Text>Vous n'avez pas récue le code ?</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("CreateAccount")}}><Text style={{color:'blue'}}>    Renvoyer</Text></TouchableOpacity>
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

export default Verify;