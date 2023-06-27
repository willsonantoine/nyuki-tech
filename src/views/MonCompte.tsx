import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import declare from "../config/variables";
import MySeparator from "../components/MySeperator";

const MonCompte = () => {

    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <Image source={declare.APPLICATION_DEFAUT_USER} style={{ height: 100, width: 100, marginTop: 10 }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Deo Kanza Theogene</Text>
                <Text style={{ fontSize: 17 }}>Phone : +244339993</Text>
            </View>
            <MySeparator />
            <View style={styles.card}>
                <Image source={declare.APPLICATION_ICON} style={{ height: 60, width: 60 }} />
                <Text style={{ fontSize: 20 }}>Mes produits</Text>
            </View>
            <View style={styles.card}>
                <Image source={declare.APPLICATION_ICON} style={{ height: 60, width: 60 }} />
                <Text style={{ fontSize: 20 }}>Mes Commandes</Text>
            </View>
            <View style={styles.card}>
                <Image source={declare.APPLICATION_ICON} style={{ height: 60, width: 60 }} />
                <Text style={{ fontSize: 20 }}>Mes notifications</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#C5D2DC',
        height: 50,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal:15
    }
});

export default MonCompte;