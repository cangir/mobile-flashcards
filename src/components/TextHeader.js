import React from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../utils/theme";

const TextHeader = ({ style, children }) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: theme.colors.primary,
    fontWeight: "bold",
    paddingVertical: 14
  }
});

export default TextHeader;
