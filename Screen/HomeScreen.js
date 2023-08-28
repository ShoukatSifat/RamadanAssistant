import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();

  const buttons = [
    {
      title: 'Al-Quran',
      imageUri: 'https://i0.wp.com/islamtheultimatepeace.com/wp-content/uploads/2021/09/holy-quran.jpeg?fit=2000%2C1333&ssl=1',
      navigateTo: 'QuranChapters',
    },

    {
      title: 'Asma Al Husna',
      imageUri: 'https://cdn.dribbble.com/users/4493716/screenshots/15279956/media/b1dc947a76560772e9d4b132bbe399db.png',
      navigateTo: 'AsmaAlHusnaScreen',
    },
    {
      title: 'Mosque Near Me',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg/1920px-Exterior_of_Sultan_Ahmed_I_Mosque_in_Istanbul%2C_Turkey_002.jpg',
      navigateTo: 'MapScreen',
    },
    {
      title: 'Zakat Calculator',
      imageUri: 'https://www.islamic-relief.org.uk/wp-content/uploads/2022/11/zakat-rules-hero.jpg',
      navigateTo: 'ZakatCalculator',
    },
    {
      title: 'Tasbih',
      imageUri: 'https://img.freepik.com/premium-photo/photo-featuring-close-up-traditional-islamic-rosary-beads-tasbih_933496-20529.jpg',
      navigateTo: 'TasbihScreen',
    },

    {
      title: 'Salah Timing',
      imageUri: 'https://play-lh.googleusercontent.com/4TqBPBBjEtznZ5O0mTvBsWqeLiTixzT0KRz4X8LG0rYUZWUe8MwJ3ztOlrKoXzE8yiE',
      navigateTo: 'SalahTimingScreen', // Navigate to the new screen
    },
    {
      title: 'Donation',
      imageUri: 'https://img.freepik.com/premium-vector/donation-box-charity-concept-human-hands-putting-money-cash-love-heart-donation-box-together-helping-doing-charity-vector-illustration_140689-3158.jpg?w=2000',
      navigateTo: 'Payment',
    },
    {
      title: 'Feedback',
      imageUri: 'https://d18891bkk3ccc2.cloudfront.net/wp-content/uploads/2021/09/08145124/SHO_BLOG_EEFGuideance_210908-01.jpg', 
      navigateTo: 'FeedbackScreen', 
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minnah</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigation.navigate(button.navigateTo)}
          >
            <ImageBackground
              source={{ uri: button.imageUri }}
              style={styles.buttonBackground}
              imageStyle={styles.buttonImage}
            >
              <Text style={styles.buttonText}>{button.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    color: '#333',
    fontSize: 64, // Increased font size for a stylish look
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: {
      width: 2, // Added a bit more shadow offset for depth
      height: 2,
    },
    textShadowRadius: 5, // Increased shadow radius for more prominence
    letterSpacing: 2, // Added letter spacing for a stylish effect
  },
  buttonContainer: {
    marginHorizontal: 16,
  },
  button: {
    height: 120,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  buttonBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#000',
    opacity: 0.8,
  },
  buttonImage: {
    resizeMode: 'cover',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;