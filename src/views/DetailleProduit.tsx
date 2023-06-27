import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import images from "../config/images";
import MyButton from "../components/MyButton";

const DetailleProduit = () => {

    return (
        <View>
            <View style={{ flexDirection: 'column', marginRight: 10, alignItems: 'center', backgroundColor: 'white' }}>
                <Image source={images.DEFAULT_PRODUIT} style={styles.image} />
                <View style={{ flexDirection: 'column', alignContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <Text numberOfLines={2} style={{ color: '#475547', fontWeight: 'bold', fontSize: 26, paddingLeft: 5 }}>Miel de luxe</Text>
                    <Text style={{ fontSize: 13, paddingHorizontal: 8, textAlign: 'justify', color: '#707D75' }}>
                        Miel monoflorale d'eucalyptus  produit à jomba  Miel monoflora Miel monoflorale d'eucalyptus  Miel monoflora Miel monoflorale d'eucalyptus  produit à jomba Miel monoflora le d'eucalyptus  produit à jomba
                    </Text>
                    <Text style={{ fontSize: 19, paddingLeft: 5, textAlign: 'left', paddingRight: 10, marginRight: 10, color: 'green' }}>Produit il ya 2 jours</Text>
                </View>
                <MyButton title="Commander ce produit"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icon_user: {
        height: 30,
        width: 30,
        borderRadius: 5,
        marginTop: 3,
        marginLeft: 3
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 5,
        marginTop: 3,
        marginLeft: 3
    }
})

export default DetailleProduit;