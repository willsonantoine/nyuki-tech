import { Image, SafeAreaView, ScrollView, SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import variables from "../config/variables";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import { useNavigation } from '@react-navigation/native'
import { useState } from "react"; 
import MySelect from "../components/MySelect"; 

function AddMember(): JSX.Element {

  const navigation: any = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);


  return (
    <View style = {styles.containt}>
      <ScrollView> 
         <View>
          <MyTextInput label='Nom complet' is_password={false} placeholder='' />
          <MySelect label="Genre"/>
          <MySelect label="Etat civil"/>
          <MyTextInput label='Date de naissance' is_password={false} placeholder='02/10/1992' />
          <MyTextInput label='Numéro de télephone' placeholder='' />
          <MyTextInput label='Adresse physique' placeholder='' /> 
          <MySelect label="Coopérative"/> 
          <MyButton title="Ajouter un membre" onPress={()=>{navigation.navigate("Verify")}}/>
        </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containt: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
  }

});

export default AddMember;