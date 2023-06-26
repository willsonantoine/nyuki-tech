import { Image, SafeAreaView, ScrollView, SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import variables from "../config/variables";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import { useNavigation } from '@react-navigation/native'
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import MySelect from "../components/MySelect";
// import { ListItem } from 'react-native-elements';

function CreateAccount(): JSX.Element {

  const navigation: any = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]);

  return (
    <ScrollView contentContainerStyle= {styles.containt}>
      <View style={{ marginTop: 0, alignItems: 'center' }}>
        <Image source={variables.APPLICATION_ICON} style={styles.icon} />
        <Text style={{ paddingLeft: 10, paddingRight: 10, textAlign: 'center', marginTop: -30, color: '#707D75', fontSize: 17 }}>Toutes ces informations sont oubligatoire</Text>
        <View style={{ marginTop: 10 }}>
          <MyTextInput label='Nom complet' is_password={false} placeholder='' />
          <MyTextInput label='Numéro de télephone' placeholder='' />
          <MySelect label="Selectionner la zone"/>
          <MyButton title="Créer un compte" onPress={()=>{navigation.navigate("Verify")}}/>
          <View style={{ marginTop: 20, flexDirection: 'row', alignSelf: 'center', alignContent: 'space-between', alignItems: 'center' }}>
            <Text>Vous avez de compte ?</Text>
            <TouchableOpacity onPress={() => { navigation.navigate("Login") }}><Text style={{ color: 'blue' }} >    Se connecter</Text></TouchableOpacity>
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
    color: '#384738',
  },
  icon: {
    width: 150, height: 150
  }

});

export default CreateAccount;