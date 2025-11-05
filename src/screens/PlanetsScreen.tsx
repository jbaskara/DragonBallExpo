import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { Planet } from "../models/Planet";
import PlanetCard from "../components/PlanetCard";
import Pagination from "../components/Pagination";
import { fetchPlanets } from "../utils/api";
import { styles } from "../styles/PlanetsScreenStyles";

export default function PlanetsScreen() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(true);

  const LIMIT = 5;

  const loadPage = async (pageNumber: number) => {
    setLoading(true);
    const data = await fetchPlanets(pageNumber, LIMIT);
    setPlanets(data.items);

    const nextPageData = await fetchPlanets(pageNumber + 1, LIMIT);
    setHasNextPage(nextPageData.items.length > 0);

    setLoading(false);

    if (data.items.length === 0 && pageNumber > 1) setPage(pageNumber - 1);
  };

  useEffect(() => { loadPage(page); }, [page]);

  const renderItem = ({ item, index }: { item: Planet; index: number }) => {
    if (planets.length % 2 !== 0 && index === planets.length - 1) {
      return (
        <View style={{ flex: 1, alignItems: "center", marginBottom: 12 }}>
          <PlanetCard item={item} />
        </View>
      );
    }
    return <PlanetCard item={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pianeti</Text>

      <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />

      {loading ? (
        <ActivityIndicator size="large" color="#ff8a00" />
      ) : (
        <FlatList
          data={planets}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}