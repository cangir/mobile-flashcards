import * as React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView
} from "react-native";
import { TextInput, Card, Title, Colors } from "react-native-paper";
import Main from "../components/Main";
import { Button } from "../components";
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
                  <Title>What is the title of your card?</Title>
                  <TextInput
                    label="Question"
                    mode="outlined"
                    onChangeText={this.handleChange("question")}
                  />

                  <Title>What is the title of your new deck?</Title>
                  <TextInput
                    label="Answer"
                    mode="outlined"
                    onChangeText={this.handleChange("answer")}
                  />
                </Card.Content>

                <Button
                  labelStyle={styles.buttonText}
                  mode="contained"
                  style={styles.button}
                  onPress={() => this.onAddCardPress()}
                >
                  Press me
                </Button>
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
