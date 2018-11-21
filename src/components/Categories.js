import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { getCategories, setCategory } from "../actions/categoryActions";
import colors from "../../colors";
import { Icon } from "react-native-elements";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.chooseCategory = this.chooseCategory.bind(this);

    this.state = {};
  }
  componentDidMount() {
    const { getCategories } = this.props;
    console.log('í component did mount');
    getCategories();
  }

  chooseCategory(category) {
    const { setCategory } = this.props;
    setCategory(category);
  }

  render() {
    const { categories, category, gotCategories } = this.props;
    const { startGame, changeYes } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Select a category</Text>
        </View>
        {gotCategories ? (
          <View style={styles.content}>
            {categories.map((item, key) => (
              <TouchableOpacity
                key={key}
                style={[
                  styles.onItem,
                  item.id === category.id && styles.selected
                ]}
                onPress={() => this.chooseCategory(item)}
              >
                <Text
                  style={[
                    styles.onTextInItem,
                    item.id === category.id && styles.onSelectedTextInItem
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => startGame()}
              >
                <Text style={styles.textInButton}>Start Game</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => changeYes()}
              >
                <Icon
                  name="arrow-left"
                  type="evilicon"
                  color="white"
                  style={{}}
                />
                <Text style={styles.textInButton}>Go back</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <ActivityIndicator
            size="large"
            color={colors.seaBlue}
            style={styles.indicator}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
    backgroundColor: colors.mediumBlue,
    paddingLeft: 50,
    paddingRight: 50
  },
  content: {
    flex: 15,
    alignItems: 'center',
    width: '100%'
  },
  header: {
    flex: 1,
    paddingBottom: 30
  },
  headerText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#fff'
  },
  onItem: {
    width: '100%',
    margin: 15,
    backgroundColor: colors.lightBlue,
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  onTextInItem: {
    fontWeight: '500',
    fontSize: 15
  },
  onSelectedTextInItem: {
    fontWeight: '900',
    color: '#fff'
  },
  selected: {
    backgroundColor: colors.seaBlue
  },
  button: {
    backgroundColor: colors.seaBlue,
    padding: 12,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: colors.seaBlue,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  textInButton: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center"
  },
  indicator: {
    flex: 17,
    alignSelf: "center"
  },
  buttons: {
    flex: 1,
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingTop: 30
  }
});

const mapStateToProps = ({ questions, categories }) => {
  return { ...questions, ...categories };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: amount => {
      dispatch(getCategories(amount));
    },
    setCategory: category => {
      dispatch(setCategory(category));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
