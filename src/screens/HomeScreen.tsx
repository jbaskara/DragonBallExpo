import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/HomeScreenStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.webp")} style={styles.logo} />
      <Text style={styles.title}>Dragon Ball Explorer</Text>
      <Text style={styles.subtitle}>Scopri personaggi, pianeti e molto altro</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Characters")}>
          <Text style={styles.buttonText}>Personaggi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Planets")}>
          <Text style={styles.buttonText}>Pianeti</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FilterCharacters")}>
          <Text style={styles.buttonText}>Filtra Personaggi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}