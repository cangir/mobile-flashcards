import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView
} from "react-native";
import { Card, Colors } from "react-native-paper";
import Main from "../components/Main";
import { TextHeader, Button, TextInput } from "../components";

import { connect } from "react-redux";
import { handleAddDecks, resetNewDeckId } from "../store/actions/decks";

class DeckAdd extends React.Component {
  state = {
    deckTitle: ""
  };
  onAddCreateDeckPress() {
    if (!this.state.deckTitle) {
      return alert("Please Enter Deck title");
    }
    this.props.addDeck(this.state.deckTitle);
  }

  handleChange = name => value => {
    this.setState({ [name]: value });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.newDeckId !== this.props.newDeckId) {
      this.props.navigation.navigate("DeckSingle", {
        deckId: nextProps.newDeckId,
        title: this.state.deckTitle
      });
      this.setState({ deckTitle: "" });
    }
  }

  render() {
    return (
      <Main>
        <View style={styles.container}>
          <ScrollView>
            <KeyboardAvoidingView behavior="padding">
              <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <TextHeader>What is the title of your new deck?</TextHeader>
                  <TextInput
                    label="Deck Title"
                    returnKeyType="done"
                    onChangeText={this.handleChange("deckTitle")}
                    autoCapitalize="sentences"
                  />
                </Card.Content>
                <Card.Actions>
                  <Button
                    mode="contained"
                    onPress={() => this.onAddCreateDeckPress()}
                    style={styles.button}
                  >
                    Create New Deck
                  </Button>
                </Card.Actions>
              </Card>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Main>
    );
  }
}

function mapStateToProps({ newDeckId }) {
  return {
    newDeckId: newDeckId.newDeckId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addDeck: deckTitle => {
      dispatch(handleAddDecks(deckTitle));
    },
    resetNewDeckId: () => {
      dispatch(resetNewDeckId());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckAdd);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.grey100
  },
  card: {
    flex: 1
  },
  cardContent: {
    paddingTop: 30,
    paddingBottom: 30
  }
});
