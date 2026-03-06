import { Image, Text, TouchableOpacity, View } from "react-native";

import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { Input } from "@/components/Input";

import { FilterStatus } from "@/types/FilterStatus";

import { styles } from "./styles";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export function Home() {
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
            <Filter key={status} status={status} isActive />
          ))}
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clean</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
