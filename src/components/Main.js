import * as React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { connect } from "react-redux";
import { handleGetAllDecks } from "../store/actions/decks";

// const Main = ({ children }) => (
//   <SafeAreaView style={styles.container}>
//     <KeyboardAvoidingView style={styles.content} behavior="padding">
//       {children}
//     </KeyboardAvoidingView>
//   </SafeAreaView>
// );

class Main extends React.Component {
  componentDidMount() {
    this.props.initilizeData();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container} behavior="padding">
          {this.props.children}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

function mapDispatchToProps(dispatch) {
  return {
    initilizeData: () => {
      dispatch(handleGetAllDecks());
    }
  };
}

export default connect(null, mapDispatchToProps)(Main);
