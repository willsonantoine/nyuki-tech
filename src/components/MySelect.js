import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
const MySelect = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("null");
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <DropDownPicker style={styles.input}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
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

export default MySelect;