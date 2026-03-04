import { Image, View } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} />
      <Input placeholder="What do you need to buy?" />
      <Button title="Figure up" />
    </View>
  );
}
