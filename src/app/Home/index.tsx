import { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Input } from "@/components/Input";
import { Item } from "@/components/Item";

import { FilterStatus } from "@/types/FilterStatus";

import { styles } from "./styles";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

const ITEMS = [
  {
    id: "1",
    status: FilterStatus.DONE,
    description: "Buy milk",
  },
  {
    id: "2",
    status: FilterStatus.PENDING,
    description: "Buy bread",
  },
  {
    id: "3",
    status: FilterStatus.PENDING,
    description: "Buy eggs",
  },
];

export function Home() {
  const [filter, setFilter] = useState(FilterStatus.PENDING);

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} />
      <View style={styles.form}>
        <Input placeholder="What do you need to buy?" />
        <Button title="Figure up" />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive={status === filter}
              onPress={() => setFilter(status)}
            />
          ))}
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clean</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log("Status updated")}
              onRemove={() => console.log("Item removed")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>No item found.</Text>
          )}
        />
      </View>
    </View>
  );
}
