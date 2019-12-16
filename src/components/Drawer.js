import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Colors, Drawer } from "react-native-paper";
import { DrawerNavigatorItems } from "react-navigation-drawer";

const Sidebar = props => (
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.container}>
        <Drawer.Section title="Menu">
          <DrawerNavigatorItems {...props} />
        </Drawer.Section>
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  name: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 2,
    paddingLeft: 40
  },
  head: {
    padding: 14,
    paddingTop: 35,
    backgroundColor: Colors.indigo400
  }
});

export default Sidebar;
