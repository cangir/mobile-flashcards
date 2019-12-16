import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Card, Divider, Colors, FAB } from "react-native-paper";
import Main from "../components/Main";
import { connect } from "react-redux";

class DeckList extends React.Component {
  state = {
    decks: null
  };

  onButtonPress() {
    this.props.navigation.navigate("Details");
  }

  onDeckAdd() {
    this.props.navigation.navigate("DeckAdd");
  }

  onDeckCardPress(deck) {
    this.props.navigation.navigate("DeckSingle", {
      deckId: deck.id,
      title: deck.title,
      navigation: this.props.navigation
    });
  }
  render() {
    const { decks } = this.props;
    return (
      <Main>
        <ScrollView>
          {decks &&
            Object.keys(decks).map(id => (
              <TouchableOpacity
                key={id}
                onPress={() => this.onDeckCardPress(decks[id])}
              >
                <Card.Title
                  title={decks[id].title}
                  left={props => (
                    <Avatar.Icon
                      {...props}
                      style={styles.avatarIcon}
                      icon="folder"
                      color={Colors.white}
                    />
                  )}
                  right={props => (
                    <Avatar.Text
                      size={24}
                      style={styles.avatarText}
                      label={decks[id].questions.length}
                    />
                  )}
                />
                <Divider />
              </TouchableOpacity>
            ))}
        </ScrollView>
        <FAB style={styles.fab} icon="plus" onPress={() => this.onDeckAdd()} />
      </Main>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.purple900
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "500"
  },
  avatarIcon: {
    backgroundColor: Colors.orange500
  },
  avatarText: {
    marginRight: 16,
    backgroundColor: Colors.orange100
  }
});

function mapStateToProps({ decks }) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(DeckList);
