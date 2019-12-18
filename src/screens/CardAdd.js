import * as React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView
} from "react-native";
import { Card, Colors } from "react-native-paper";
import Main from "../components/Main";
import { Button, TextHeader, TextInput } from "../components";
import { connect } from "react-redux";
import { handleAddCardToDeck } from "../store/actions/decks";

class CardAdd extends React.Component {
  onAddCardPress() {
    const { deckId } = this.props.navigation.state.params;
    const { question, answer } = this.state;
    if (!question || !answer) {
      return alert("Please Enter all the fields");
    }
    this.props.addCardToDeck(deckId, {
      question,
      answer
    });
    this.props.navigation.goBack();
  }

  state = {
    question: "",
    answer: ""
  };

  handleChange = name => value => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Main>
        <View style={styles.container}>
          <ScrollView>
            <KeyboardAvoidingView behavior="padding">
              <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <TextHeader>What is the title of your card?</TextHeader>
                  <TextInput
                    label="Question"
                    returnKeyType="done"
                    onChangeText={this.handleChange("question")}
                    autoCapitalize="sentences"
                  />
                  <TextHeader>What is the answer of your card?</TextHeader>
                  <TextInput
                    label="Answer"
                    returnKeyType="done"
                    onChangeText={this.handleChange("answer")}
                    autoCapitalize="sentences"
                  />
                </Card.Content>
                <Card.Actions>
                  <Button
                    mode="contained"
                    style={styles.button}
                    onPress={() => this.onAddCardPress()}
                  >
                    Add New Card
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

function mapDispatchToProps(dispatch) {
  return {
    addCardToDeck: (deckId, card) => {
      dispatch(handleAddCardToDeck(deckId, card));
    }
  };
}

export default connect(null, mapDispatchToProps)(CardAdd);

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
