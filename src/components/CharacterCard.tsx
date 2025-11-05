import React from "react";
import { View, Text, Image } from "react-native";
import { Character } from "../models/Character";
import { styles } from "../styles/CharacterCardStyles";

export default function CharacterCard({ item }: { item: Character }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.text}>Razza: {item.race}</Text>
      <Text style={styles.text}>Genere: {item.gender}</Text>
      {item.originPlanet && <Text style={styles.text}>Pianeta: {item.originPlanet.name}</Text>}
    </View>
  );
}