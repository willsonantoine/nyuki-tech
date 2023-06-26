import { StyleSheet, Text, TextInput, View } from "react-native";
const MyTextInput = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput style={styles.input} placeholder={props.placeholder} secureTextEntry={(props.is_password == undefined) ? false : props.is_password} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#384738'
    },
    input: {
        backgroundColor: '#E9EFF8',
        width: 300,
        height: 50,
        borderColor: '#384738',
        borderWidth: 0.2,
        borderRadius: 8,
        shadowColor: '#FFFFFF',
        paddingHorizontal: 15,
        fontSize: 17
    }
});

export default MyTextInput;