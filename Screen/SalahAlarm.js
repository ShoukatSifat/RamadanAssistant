import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const SalahAlarm = () => {
  const [salahTimes, setSalahTimes] = useState({});
  const country = 'Bangladesh';
  const city = 'Dhaka';

  const fetchSalahTimes = async () => {
    const options = {
      method: 'GET',
      url: 'https://aladhan.p.rapidapi.com/timingsByCity',
      params: {
        country: country,
        city: city
      },
      headers: {
        'X-RapidAPI-Key': '<YOUR_RAPIDAPI_KEY>',
        'X-RapidAPI-Host': 'aladhan.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setSalahTimes(response.data.data.timings);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSalahTimes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salah Times for {city}, {country}</Text>
      {Object.keys(salahTimes).map((salah, index) => (
        <View key={index} style={styles.salahTimeContainer}>
          <Text style={styles.salahName}>{salah}:</Text>
          <Text style={styles.salahTime}>{salahTimes[salah]}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F2ECD8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  salahTimeContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  salahName: {
    fontSize: 18,
    marginRight: 10,
  },
  salahTime: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SalahAlarm;
