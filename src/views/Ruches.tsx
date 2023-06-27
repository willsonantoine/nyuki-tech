import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import MyButton from "../components/MyButton";
import CardRiches from "../components/CardRiches";
import {useNavigation} from '@react-navigation/native'

const Ruches = () => {
    const navigation:any = useNavigation();
    return (
        <View style={styles.containt}>
            <ScrollView style={{marginLeft:10}} >
                <CardRiches zone='Goma' numero='020032' />
                <CardRiches zone='Minova' numero='020037' />
                <CardRiches zone='Masereka' numero='020036' />
                <CardRiches zone='Bukavu' numero='022034' /> 
            </ScrollView>
            <View style={{ alignItems: 'center' }}>
                <MyButton title="Ajouter une ruche" onPress={()=>navigation.navigate('AddRiche')} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containt: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    sous_pan: {
        marginTop: 15,
        marginLeft: -90,
        textAlign: 'left',
        paddingLeft: 20,
        height: 40,
    },
    main_pan: {
        alignItems: 'center',
    },
    search: {
        backgroundColor: '#D9E7F5',
        height: 40,
        width: 330,
        marginTop: -150,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
    }
})

export default Ruches;