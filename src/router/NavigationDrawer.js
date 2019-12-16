import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import { Drawer } from "../components";
import { DeckList, DeckAdd } from "../screens";

const screens = {
  DeckList: {
    screen: DeckList,
    title: "Deck List"
  }
};

const routes = Object.keys(screens)
  .map(id => ({ id, item: screens[id] }))
  .reduce((acc, { id, item }) => {
    const Comp = item.screen;
    const Screen = props => <Comp {...props} />;
    Screen.navigationOptions = ({ navigation }) => ({
      drawerLabel: item.title
    });
    return {
      ...acc,
      [id]: { screen: Screen }
    };
  }, {});

const NavigationDrawer = createDrawerNavigator(
  {
    ...routes
  },
  {
    contentComponent: props => <Drawer {...props} />,
    initialRouteName: "DeckList",
    drawerWidth: Dimensions.get("window").width * 0.85,
    hideStatusBar: false,
    contentOptions: {
      activeBackgroundColor: "rgba(212,118,207, 0.2)",
      activeTintColor: "#53115B",
      itemsContainerStyle: {
        marginTop: 8,
        marginHorizontal: 8
      },
      itemStyle: {
        borderRadius: 4
      }
    }
  }
);

export default NavigationDrawer;
