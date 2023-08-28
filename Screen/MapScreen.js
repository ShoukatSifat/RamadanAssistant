import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

const MapScreen = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=23.798564465063915,90.45005504971012&radius=10000&type=mosque&key=AIzaSyCpQgZMyxH1eW7_41Hhu-R9HpBTcplqKOY'
        );

        if (response.data && response.data.results) {
          setMarkers(response.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 23.798564465063915,
          longitude: 90.45005504971012,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.place_id}
            coordinate={{
              latitude: marker.geometry.location.lat,
              longitude: marker.geometry.location.lng,
            }}
            title={marker.name}
            description={marker.vicinity}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
