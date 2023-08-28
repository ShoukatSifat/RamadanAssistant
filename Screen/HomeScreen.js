import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MINNAH</Text>
      </View>
      <View style={styles.buttonContainer}>

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
          onPress={() => navigation.navigate('MapScreen')}
        >
          <ImageBackground
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg/1920px-Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg' }}
            style={styles.buttonBackground}
            imageStyle={{ resizeMode: 'cover' }}
          >
            <Text style={styles.buttonText}>Mosque Near Me</Text>
          </ImageBackground>
        </TouchableOpacity>

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
          onPress={() => navigation.navigate('SalahAlarm')}
        >
          <ImageBackground
            source={{ uri: 'https://play-lh.googleusercontent.com/4TqBPBBjEtznZ5O0mTvBsWqeLiTixzT0KRz4X8LG0rYUZWUe8MwJ3ztOlrKoXzE8yiE' }}
            style={styles.buttonBackground}
            imageStyle={{ resizeMode: 'cover' }}
          >
            <Text style={styles.buttonText}>Alarm for Salah</Text>
          </ImageBackground>
        </TouchableOpacity>


        <TouchableOpacity
          style={[{ backgroundColor: '#B5C7E6', marginBottom: 10, }]}
          onPress={() => navigation.navigate('Donation')}
        >
          <Text style={styles.buttonText}>I Want to Donate</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',

  },
  background: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 8,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    padding: 1,
  },
  button: {
    height: 150,
    justifyContent: 'flex-end',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'scroll',
  },
  buttonBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
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

  },
});

export default HomeScreen;