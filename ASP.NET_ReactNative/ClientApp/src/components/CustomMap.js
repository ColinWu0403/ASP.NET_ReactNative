import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const CustomMap = ({ markerPosition, onMapPress }) => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: markerPosition.latitude,
          longitude: markerPosition.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onPress={(e) => onMapPress(e.nativeEvent.coordinate)}
      >
        <Marker coordinate={markerPosition} />
      </MapView>
    </View>
  );
};

export default CustomMap;
