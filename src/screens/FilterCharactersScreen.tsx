import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { styles } from "../styles/FilterCharactersScreenStyles";
import { filterCharactersByName } from "../utils/api";

export default function FilterCharactersScreen() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    const timeout = setTimeout(async () => {
      const data = await filterCharactersByName(query);
      setResults(data);
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtra Personaggi</Text>
      <TextInput style={styles.input} placeholder="Scrivi un nome..." value={query} onChangeText={setQuery} />
      {results.length === 0 && query.length > 0 && <Text style={styles.noResults}>Nessun personaggio trovato</Text>}
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}