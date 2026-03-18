import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Input } from "@/components/Input";
import { Item } from "@/components/Item";

import { FilterStatus } from "@/types/FilterStatus";

import { styles } from "./styles";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export function Home() {
  const [items, setItems] = useState<any[]>([]);
  const [description, setDescription] = useState("");
  const [filter, setFilter] = useState(FilterStatus.PENDING);

  function handleIncreaseItems() {
    if (!description.trim()) {
      Alert.alert("Error", "Please enter a valid item description.");

      return;
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING,
    };

    setItems((previousState) => [...previousState, newItem]);
  }

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} />
      <View style={styles.form}>
        <Input
          placeholder="What do you need to buy?"
          onChangeText={setDescription}
        />
        <Button title="Figure up" onPress={handleIncreaseItems} />
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
          data={items}
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
