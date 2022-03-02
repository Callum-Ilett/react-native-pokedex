import { FlatList, Text, View } from "react-native";
import React from "react";
import { Generation } from "../../components";
import { screenStyles } from "..";

const Generations = () => {
  const generations = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <View style={screenStyles.container}>
      <FlatList
        data={generations}
        renderItem={({ item }) => <Generation number={item} />}
        keyExtractor={(number) => `generation__${number}`}
      />
    </View>
  );
};

export default Generations;
