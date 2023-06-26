import { Image, StyleSheet, Text, View } from "react-native";
import declare from '../config/variables';
import images from "../config/images";
const CardProduit = () => {

    return (
        <View style={styles.main}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={declare.APPLICATION_DEFAUT_USER} style={styles.icon_user} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', paddingLeft: 5 }}>Willson vulembere</Text>
                    <Text style={{ fontWeight: 'normal', paddingLeft: 5,width:100 }}>Goma</Text>
                </View>
                <View style={{ flexDirection: 'column', width: '54%' }}>
                    <Text style={{ fontWeight: 'bold', paddingLeft: 5, textAlign: 'right' }}>Il ya 2 jrs</Text>
                    <Text style={{ fontWeight: 'normal', fontSize: 12, paddingLeft: 5, textAlign: 'center', backgroundColor: '#14A44D', height: 20, paddingTop: 2, color: 'white', marginLeft: 115, borderRadius: 10 }}>Disponible</Text>
                </View>
            </View>
            <View style={{ backgroundColor: 'black', height: 0.2, marginTop:4 }}></View>
            <View style={{ flexDirection: 'row',marginRight:10 }}>
                <Image source={images.DEFAULT_PRODUIT} style={styles.image} />
                <View style={{flexDirection:'column',alignContent:'space-between'}}>
                    <Text numberOfLines={2} style={{color:'black',fontWeight:'bold',fontSize:17,paddingLeft:5}}>Miel de luxe</Text>
                    <Text style={{fontSize:13,paddingLeft:5,textAlign:'left',marginRight:10,color:'#707D75',width:'80%'}}>Miel originale produit du kivu pour les enfant de moin de 10 ans</Text>
                    <Text style={{fontSize:13,paddingLeft:5,textAlign:'left',paddingRight:10,marginRight:10,color:'#292D3E'}}>Produit il ya 2 jours</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white', 
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8, shadowRadius: 2, elevation: 5
    },
    icon_user: {
        height: 30,
        width: 30,
        borderRadius: 5,
        marginTop: 3,
        marginLeft: 3
    },
    image:{
        height: 80,
        width: 80,
        borderRadius: 5,
        marginTop: 3,
        marginLeft: 3
    }
});

export default CardProduit;