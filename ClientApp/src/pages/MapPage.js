import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import CustomMap from "../components/CustomMap";

export default function MapPage() {
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 40.42382047835122,
    longitude: -86.92125022135261,
  });
  const [buildingData, setBuildingData] = useState(null);

  const buildingId = "66ba8693354b31489f8e95b6"; // Example ID

  // does not work on any other device, will try to deploy a backend so I can call that instead
  const handleMapPress = async (coordinate) => {
    try {
      const response = await fetch(
        `https://localhost:5128/api/building/${buildingId}`
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
    <View className="flex-1 justify-center align-center bg-green-100">
      <CustomMap markerPosition={markerPosition} onMapPress={handleMapPress} />
      {buildingData && (
        <View className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-md">
          <TouchableOpacity
            onPress={handleClosePopup}
            className="absolute top-2 right-2"
          >
            <Text className="text-red-500 text-lg font-bold">x</Text>
          </TouchableOpacity>
          <Text className="text-black text-lg font-bold">
            {buildingData.name}
          </Text>
          <Text className="text-black text-sm">{buildingData.address}</Text>
        </View>
      )}
    </View>
  );
}
