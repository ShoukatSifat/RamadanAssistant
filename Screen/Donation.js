import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking,Image,ScrollView } from 'react-native';

const JaagoButton = () => {

    const handlePress = () => {
        Linking.openURL('https://jaago.com.bd/zakat/');
    }

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handlePress} style={styles.buttonStyle} activeOpacity={.5}>
            <Image
            source={{
                uri:
                'https://upload.wikimedia.org/wikipedia/en/0/06/JAAGO_Foundation.jpeg',
            }}
            style={styles.buttonImageIconStyle}
            />
                <Text style={styles.buttonTextStyle}>Jaago Foundation</Text>
            </TouchableOpacity>
        </View>
    );
}

const CRPButton = () => {

    const handlePress = () => {
        Linking.openURL('https://www.crp-bangladesh.org/donation');
    }

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handlePress} style={styles.buttonStyle} activeOpacity={.5}>
            <Image
            source={{
                uri:
                'https://www.crp-bangladesh.org/sites/default/files/LOGO-e1470798754687_0.png',
            }}
            style={styles.buttonImageIconStyle}
            />
                <Text style={styles.buttonTextStyle}>CRP Bangladesh</Text>
            </TouchableOpacity>
        </View>
    );
}

const IslamicReliefButton = () => {

    const handlePress = () => {
        Linking.openURL('https://islamic-relief.org/where_we_work/bangladesh/');
    }

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handlePress} style={styles.buttonStyle} activeOpacity={.5}>
            <Image
            source={{
                uri:
                'https://islamicrelief.org.bd/wp-content/uploads/2022/01/Islamic-Relief-Logo.png',
            }}
            style={styles.buttonImageIconStyle}
            />
                <Text style={styles.buttonTextStyle}>Islamic Relief Bangladesh</Text>
            </TouchableOpacity>
        </View>
    );
}

const BTFButton = () => {

    const handlePress = () => {
        Linking.openURL('https://www.thals.org/zakat');
    }


    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handlePress} style={styles.buttonStyle} activeOpacity={.5}>
            <Image
            source={{
                uri:
                'https://www.thals.org/images/logo.png',
            }}
            style={styles.buttonImageIconStyle}
            />
                <Text style={styles.buttonTextStyle}>Bangladesh Thalassemia Foundation</Text>
            </TouchableOpacity>
        </View>
    );
}

const BiddanondoButton = () => {

    const handlePress = () => {
        Linking.openURL('https://bidyanondo.org/projects/6');
    }

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handlePress} style={styles.buttonStyle} activeOpacity={.5}>
                <Image
                    source={{
                        uri:
                        'https://bidyanondo.org/assets/images/main-logo.webp',
                    }}
                    style={styles.buttonImageIconStyle}
                />
                <Text style={styles.buttonTextStyle}>Biddanondo Foundation</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'column',
        marginVertical: 15,
        marginHorizontal:15,
        alignSelf: 'stretch',
        flex:2,

    },
    buttonStyle: {
        borderWidth:5,
        borderColor: '#30528E',
        backgroundColor:'#9ABDDE',
        paddingVertical: '2%',
        paddingHorizontal: '5%',
        borderRadius: 25,
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: '5%',
        height: 200,
        width: 300,
        resizeMode: 'contain',
    },
     
    buttonTextStyle: {
        color: '#265073',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        fontStyle:'italic',
    },
    buttonImageIconStyle: {
        padding: 5,
        margin: 5,
        alignSelf: 'center',
        flex: 1,
        height:150,
        width:195,
        resizeMode: 'cover'
      },
});

export { JaagoButton, CRPButton, IslamicReliefButton,BiddanondoButton,BTFButton };