import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomMap from "../components/CustomMap";

export default function MapPage() {
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 40.424925486930064,
    longitude: -86.91358246116509,
  });
  const [buildingData, setBuildingData] = useState(null);

  const buildingId = "66ba8693354b31489f8e95b6";

  const handleMapPress = async (coordinate) => {
    try {
      const response = await fetch(
        `https://aspdotnet.dev.sigapp.club/api/building/${buildingId}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setBuildingData(data);
      setMarkerPosition(coordinate);
    } catch (error) {
      console.error("Error fetching building data:", error);
    }
  };

  const handleClosePopup = () => {
    setBuildingData(null);
  };

  return (
    <View style={styles.container}>
      <CustomMap markerPosition={markerPosition} onMapPress={handleMapPress} />
      {buildingData && (
        <View style={styles.popup}>
          <TouchableOpacity
            onPress={handleClosePopup}
            style={styles.closeButton}
          >
            <Text style={styles.closeText}>x</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.buildingName}>{buildingData.name}</Text>
            <Text style={styles.buildingAddress}>{buildingData.address}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D1FAE5", // Equivalent to bg-green-100
  },
  popup: {
    position: "absolute",
    bottom: 16,
    left: "50%",
    transform: [{ translateX: -150 }],
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: 300,
  },
  closeButton: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  closeText: {
    color: "#EF4444", // Equivalent to text-red-500
    fontSize: 18,
    fontWeight: "bold",
  },
  buildingName: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  buildingAddress: {
    color: "black",
    fontSize: 16,
  },
});
