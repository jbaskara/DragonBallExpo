import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Character } from "../models/Character";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import { fetchCharacters } from "../utils/api";
import { styles } from "../styles/CharactersScreenStyles";

export default function CharactersScreen() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(true);

  const LIMIT = 10;

  const loadPage = async (pageNumber: number) => {
    setLoading(true);
    const data = await fetchCharacters(pageNumber, LIMIT);
    setCharacters(data.items);

    const nextPageData = await fetchCharacters(pageNumber + 1, LIMIT);
    setHasNextPage(nextPageData.items.length > 0);

    setLoading(false);

    if (data.items.length === 0 && pageNumber > 1) setPage(pageNumber - 1);
  };

  useEffect(() => { loadPage(page); }, [page]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personaggi</Text>

      <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />

      {loading ? (
        <ActivityIndicator size="large" color="#ff8a00" />
      ) : (
        <FlatList
          data={characters}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CharacterCard item={item} />}
        />
      )}
    </View>
  );
}