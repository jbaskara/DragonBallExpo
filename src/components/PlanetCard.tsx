import React from "react";
import { View, Text, Image } from "react-native";
import { Planet } from "../models/Planet";
import { styles } from "../styles/PlanetCardStyles";

export default function PlanetCard({ item }: { item: Planet }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{item.name}</Text>
      {item.isDestroyed && <Text style={styles.destroyed}>Distrutto!</Text>}
    </View>
  );
}