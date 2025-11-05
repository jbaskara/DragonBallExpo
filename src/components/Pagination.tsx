import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/PaginationStyles";

interface Props {
  page: number;
  setPage: (p: number) => void;
  hasNextPage?: boolean;
}

export default function Pagination({ page, setPage, hasNextPage = true }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, page <= 1 && styles.disabled]}
        activeOpacity={0.7}
        onPress={() => page > 1 && setPage(page - 1)}
        disabled={page <= 1}
      >
        <Text style={styles.buttonText}>← Precedente</Text>
      </TouchableOpacity>

      <Text style={styles.pageNumber}>Pagina {page}</Text>

      <TouchableOpacity
        style={[styles.button, !hasNextPage && styles.disabled]}
        activeOpacity={0.7}
        onPress={() => hasNextPage && setPage(page + 1)}
        disabled={!hasNextPage}
      >
        <Text style={styles.buttonText}>Successivo →</Text>
      </TouchableOpacity>
    </View>
  );
}