import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView,View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

function HomeScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        {/* <View style={styles.header}>
          <Text style={styles.title}>Islamic Hub</Text>
        </View> */}
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('ZakatCalculator')}
                >
                <ImageBackground
                source={{ uri: 'https://www.islamic-relief.org.uk/wp-content/uploads/2022/11/zakat-rules-hero.jpg' }}
                style={styles.buttonBackground}
                imageStyle={{ resizeMode: 'cover' }}>
                <Text style={styles.buttonText}>Zakat Calculator</Text>
                </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('QuranChapters')}
          >
            <ImageBackground
              source={{ uri: 'https://i0.wp.com/islamtheultimatepeace.com/wp-content/uploads/2021/09/holy-quran.jpeg?fit=2000%2C1333&ssl=1' }}
              style={styles.buttonBackground}
              imageStyle={{ resizeMode: 'cover' }}
            >
              <Text style={styles.buttonText}>Al-Quran</Text>
            </ImageBackground>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('TasbihScreen')}
          >
            <ImageBackground
              source={{ uri: 'https://img.freepik.com/premium-photo/photo-featuring-close-up-traditional-islamic-rosary-beads-tasbih_933496-20529.jpg' }}
              style={styles.buttonBackground}
              imageStyle={{ resizeMode: 'cover' }}
            >
              <Text style={styles.buttonText}>Tasbih</Text>
            </ImageBackground>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.button}
            // onPress={() => console.log('Alarm Pressed')}
          >
            <ImageBackground
              source={{ uri: 'https://media.istockphoto.com/id/1173500687/vector/red-alarm-clock-isolated-on-blue-background.jpg?s=612x612&w=0&k=20&c=Ttc6l3lBmrtOmwfTPruG6jmMGj5Y2dPV8OPsQjjYw0E=' }}
              style={styles.buttonBackground}
              imageStyle={{ resizeMode: 'cover' }}
            >
              <Text style={styles.buttonText}>Alarm</Text>
            </ImageBackground>
          </TouchableOpacity>

       
          <TouchableOpacity
            style={[{ backgroundColor: '#B5C7E6', height:30 }]}
            onPress={() => navigation.navigate('Donation')}
          >
            <Text style={styles.buttonText}>I Want to Donate</Text>
          </TouchableOpacity>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282828',
    },
    background: {
      flex: 5,
    },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 36,
      fontWeight: 'bold',
      textShadowColor: '#000000',
      textShadowOffset: {
        width: 2,
        height: 2,
      },
      textShadowRadius: 5,
    },
    buttonContainer: {
      flex: 1,
      marginTop: 8,
      marginHorizontal: 10,
      justifyContent: 'space-between',
      padding:1,
    },
    button: {
      height: 150,
      justifyContent: 'flex-end',
      borderRadius: 15,
      marginBottom: 5,
    //   overflow: 'hidden',
    },
    buttonBackground: {
      flex: 1,
      justifyContent: 'flex-end',
      padding: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      textShadowColor: '#000000',
      textShadowOffset: {
        width: 2,
        height: 2,
      },
      textShadowRadius: 5,
    },
  });

export default HomeScreen;