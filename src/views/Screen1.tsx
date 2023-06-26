import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import variables from "../config/variables";
import React, { useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native'

function Screen1(): JSX.Element {
    const navigation:any = useNavigation();
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Login');
          }, 5000);
    });


    return (
        <View style={styles.containt}>
            <View style={{ marginTop: 100, alignItems: 'center' }}>
                <Image source={variables.APPLICATION_ICON} style={styles.icon} />
                <Text style={{ paddingLeft: 10, paddingRight: 10, textAlign: 'center', color: '#475547', fontSize: 17 }}>Un système d'identification et de location des apiculteurs du Congo pour le bien-être du miel</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    containt: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#384738'
    },
    icon: {
        width: 300, height: 300
    }

});

export default Screen1;