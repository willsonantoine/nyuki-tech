import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import images from "../config/images"
import CardProduit from "../components/CardProduit"

const Home = () => {

    return (
        <View style={styles.containt}>
            <View style={styles.main_pan}>
                <Image source={images.COLONIE_ABIELLE}></Image>
                <TextInput style={styles.search} placeholder="Rechercher ici"></TextInput>
                <View style={styles.sous_pan}>
                    <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>Nyuki Technologie</Text>
                    <Text style={{ marginTop: 5, color: 'white' }}>La technologie au service de l'abeille</Text>
                </View>
            </View>
            <Text style={{ marginTop: 60,marginLeft:10,fontWeight:'bold' }}>Produits disponible sur la marché</Text>
            <ScrollView style={{marginTop:10}}>
                <CardProduit />
                <CardProduit />
                <CardProduit />
                <CardProduit />
                <CardProduit />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    containt: {
        backgroundColor:'white',
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

export default Home;