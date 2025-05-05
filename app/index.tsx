import { Stack } from "expo-router";
import React from "react";
import { Image } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen
        name="home"
        options={{
          title: "Home",
          headerRight: () => (
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/84/8a/fa/848afa439c994803fce5b031f8e643ff.jpg",
              }}
              style={{ width: 80, height: 80, marginRight: 20 }}
            />
          ),
          headerSearchBarOptions: {
            placeholder: "Search",
          },
        }}
      />
    </>
  );
}
