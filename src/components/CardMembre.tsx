import { Image,View ,Text} from "react-native"
import declare from '../config/variables'; 
import { StyleSheet } from "react-native";

const CardMembre = (propos:any)=>{

    return (
        <View style={styles.card}>
                <Image source={declare.APPLICATION_DEFAUT_USER} style={styles.icon_user} />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontWeight: 'bold', paddingLeft: 5 }}>{propos.name}</Text>
                    <Text style={{ fontWeight: 'normal', paddingLeft: 5 }}>{propos.phone}</Text>
                </View>
                <View style={{ flexDirection: 'column', width: '54%' }}>
                    <Text style={{ fontWeight: 'normal', paddingLeft: 5, textAlign: 'right' }}>Masisi</Text>
                    <Text style={{ fontWeight: 'normal', fontSize: 12, paddingLeft: 5, textAlign: 'center', backgroundColor: '#14A44D', height: 20, paddingTop: 2, color: 'white', marginLeft: 115, borderRadius: 10 }}>1 Ruche</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, shadowRadius: 1, elevation: 0.1,
        flexDirection: 'row',
        padding:10,
        marginTop:10,
    },
    icon_user: {
        height: 30,
        width: 30,
        borderRadius: 5,
        marginTop: 3,
        marginLeft: 3
    },
});

export default CardMembre;