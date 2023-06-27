import { Image, StyleSheet, Text, View } from "react-native";
import images from "../config/images";
const CardRiches = (propos:any) => {

    return (
        <View style={{ flexDirection: 'row', marginRight: 10,borderColor:'black',borderWidth:0.3,borderRadius:10 ,marginTop:10}}>
            <Image source={images.ICON_TAB_MAP} style={styles.image} />
            <View style={{ flexDirection: 'column', alignContent: 'space-between', marginBottom: 10 }}>
                <Text numberOfLines={2} style={{ color: '#475547', fontWeight: 'bold', fontSize: 17, paddingLeft: 5 }}>{propos.zone} | {propos.numero}</Text>
                <Text style={{ fontSize: 20, paddingLeft: 5, textAlign: 'left', marginRight: 10, color: 'green'}}>23 ° Humanité : 30 %</Text>
                <Text style={{ fontSize: 13, paddingLeft: 5, textAlign: 'left', paddingRight: 10, marginRight: 10, color: '#292D3E' }}>Produit il ya 30 Min</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        borderRadius: 5,
        marginTop: 3,
        marginLeft: 3
    }
});

export default CardRiches;