import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,SafeAreaView,Alert,ScrollView,TouchableOpacity } from 'react-native';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';

const ZakatCalculator = () => {
  const [gold, setGold] = useState('');
  const [silver, setSilver] = useState('');
  const [cash, setCash] = useState('');
  const [investments, setInvestments] = useState('');
  const [otherAssets, setOtherAssets] = useState('');
  const [liabilities, setLiabilities] = useState('');
  const [zakatAmount, setZakatAmount] = useState(0);

  
  const calculateZakat = () => {
    const nisab = 48132; // Nisab amount for according to silver price for 612.36 gram in 2023
    const zakatableAssets = (Number(gold)*5175) + (Number(silver) * 78.60 ) + Number(cash) + Number(investments) + Number(otherAssets);
    const netAssets = zakatableAssets - Number(liabilities);
    let zakat;
    if (netAssets < nisab) {
    Alert.alert("You are not eligible to pay Zakat.");
    } else {
    zakat = netAssets * 0.025;
    }
    setZakatAmount(parseFloat(zakat).toFixed(2));
  }
  const resetHandler = () => {
    setGold('');
    setSilver('');
    setCash('');
    setInvestments('');
    setOtherAssets('');
    setLiabilities('');
    setZakatAmount('');
    };
  return (
    <ScrollView style={{flex:2,backgroundColor:'#F2ECD8',}}>
        <View style={styles.container}>
        <Text style={styles.label}>Gold:</Text>
        <TextInput
            style={styles.input}
            value={gold}
            placeholder={'Grams of Gold'}
            keyboardType='numeric'
            onChangeText={setGold}
        />
        <Text style={styles.label}>Silver:</Text>
        <TextInput
            style={styles.input}
            value={silver}
            placeholder={'Grams of Silver'}
            keyboardType='numeric'
            onChangeText={setSilver}
        />
        <Text style={styles.label}>Cash:</Text>
        <TextInput
            style={styles.input}
            value={cash}
            placeholder={'Cash in BDT'}
            keyboardType='numeric'
            onChangeText={setCash}
        />

        <Text style={styles.label}>Investments:</Text>
        <TextInput
            style={styles.input}
            value={investments}
            placeholder={'Investments in BDT'}
            keyboardType='numeric'
            onChangeText={setInvestments}
        />
        <Text style={styles.label}>Other Assets:</Text>
        <TextInput
            style={styles.input}
            value={otherAssets}
            keyboardType='numeric'
            placeholder={'Other Assets Equivelent in BDT'}
            onChangeText={setOtherAssets}
        />
        <Text style={styles.label}>Liabilities:</Text>
        <TextInput
            style={styles.input}
            value={liabilities}
            keyboardType='numeric'
            placeholder={'Total Liabilities in BDT'}
            onChangeText={setLiabilities}
        />

        <View style={{flexDirection:'row',alignSelf:'center',marginVertical:5}}>

            <TouchableOpacity style={styles.button} onPress={calculateZakat}>
                <Text style={styles.buttonText}>Calculate </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.resetButton} onPress={resetHandler}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.result}>Zakat Amount: {zakatAmount}</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 3,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius:20,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    borderColor:'green',
    borderWidth:4,
    borderRadius:40,
    alignSelf:'center',
    textAlign:'center',
    width:'80%',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 10,
    width:'40%',
  },
  resetButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin:10,
    width:'40%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ZakatCalculator;