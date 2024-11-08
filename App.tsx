import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  const [latitude, setLatitude] = useState(-37.814); 
  const [longitude, setLongitude] = useState(144.96332);
  const [region, setRegion] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const buscarUbicacion = () => {
      setRegion({
        ...region,
        latitude: latitude,
        longitude: longitude,
      });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
      >
        <Marker
          coordinate={{ latitude: region.latitude, longitude: region.longitude }}
          title="Ubicación Seleccionada"
          description={`Latitud: ${region.latitude}, Longitud: ${region.longitude}`}
        />
      </MapView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Latitud"
          value={String(latitude)}
          onChangeText={text => setLatitude(Number(text))}
        />
        <TextInput
          style={styles.input}
          placeholder="Longitud"
          value={String(longitude)}
          onChangeText={text => setLongitude(Number(text))}
        />
        <Button title="Buscar" onPress={buscarUbicacion} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '80%',
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '40%',
    marginRight: 5,
  },
});

export default App;
