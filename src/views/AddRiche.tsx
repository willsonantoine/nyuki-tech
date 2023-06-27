import { Image, SafeAreaView, ScrollView, SectionList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import variables from "../config/variables";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import { useNavigation } from '@react-navigation/native'
import { useState } from "react"; 
import MySelect from "../components/MySelect"; 

function AddRiche(): JSX.Element {

  const navigation: any = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ]);

  return (
    <View style = {styles.containt}>
      <ScrollView> 
         <View>
          <MyTextInput label='Numéro du mudule' placeholder='' />
          <MySelect label="Zone"/>  
          <MySelect label="Type d'abonnement"/>  
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
    height: '100%',
    width: '100%',
    alignSelf: 'center'
  }

});

export default AddRiche;