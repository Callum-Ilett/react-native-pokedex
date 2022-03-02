import { StyleSheet } from "react-native";

export const gradients = {
  backgrounds: [
    ["#B6DC72", "#9EC25B"],
    ["#F19C58", "#DF8543"],
    ["#657DD3", "#4158AE"],
    ["#D575E2", "#A040AC"],
    ["#EDEEB8", "#508A4F"],
    ["#FBEB8E", "#D16342"],
    ["#EDC7A9", "#24AC89"],
    ["#657DD3", "#4158AE"],
  ],

  text: [
    ["#EEF58B", "#A9D24E"],
    ["#F5DD67", "#D98A40"],
    ["#BCE6F7", "#516DBE"],
    ["#ECAEF4", "#B352BF"],
    ["#F4CBAE", "#9CBF52"],
    ["#CCBF70", "#FBEB8E"],
    ["#FFE8D6", "#24AC89"],
    ["#BCE6F7", "#516DBE"],
  ],
};

const styles = StyleSheet.create({
  generation: { height: 88, marginBottom: 24 },

  generation__backgroundGradient: {
    position: "relative",
    height: 88,
    borderRadius: 10,
    width: "100%",
  },

  generation__pokemon: { position: "absolute", top: -10 },

  generation__info: {
    position: "absolute",
    right: 30,
  },

  generation__text: {
    fontSize: 20,
    fontWeight: "bold",
  },

  generation__number: {
    fontSize: 70,
    fontWeight: "bold",
  },
});

export default styles;
