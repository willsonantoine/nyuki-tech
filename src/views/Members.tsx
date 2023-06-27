import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import images from "../config/images"
import MyButton from "../components/MyButton"
import { useNavigation } from '@react-navigation/native'
import CardMembre from "../components/CardMembre"

const Members = () => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.containt}>
            <View style={{ marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20 }}>Nos Membres</Text>
                <MyButton title="Ajouter un membre" onPress={() => { navigation.navigate('AddMember') }} />
            </View>
            <ScrollView style={{ marginHorizontal: 10,marginTop:10 }}>
                <CardMembre name="Kambale Maisi" phone='+2439940050' />
                <CardMembre name="Masina  Josep" phone='+2439940050' />
                <CardMembre name="Kambale Maisi" phone='+2439940050' />
                <CardMembre name="Katherine samb" phone='+2439940050' />
                <CardMembre name="Mabodsi Maisi" phone='+2439940050' />
                <CardMembre name="Kambale Maisi" phone='+2439940050' />
                <CardMembre name="Kambale Maisi" phone='+2439940050' />
                <CardMembre name="Kambale Maisi" phone='+2439940050' />
                <CardMembre name="Kambale Maisi" phone='+2439940050' />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    containt: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },

})

export default Members;