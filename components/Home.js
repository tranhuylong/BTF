import React from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

var css = require('../assets/Style.js');
import About from './About.js';

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {

    return {
      headerTitle: () => (<Text>BTF</Text>),
    };
  };

  render() {
    return (
      <View style={css.container}>
        <Text style={css.title_head}>HOME</Text>
        <View style={css.row_block}>
          <View style={css.block}>
            <Icon name="credit-card" color="#eee" size={50} style={css.block_img} />
            <Text style={css.block_txt}>Wallet</Text>
          </View>
          <View style={[css.block, css.bg_3]}>
            <Icon name="flag" color="#eee" size={50} style={css.block_img} />
            <Text style={css.block_txt}>Wanted</Text>
          </View>
        </View>
        <View style={css.row_block}>
          <View style={[css.block, css.bg_2]}>
            <Icon name="bar-chart" color="#eee" size={50} style={css.block_img} />
            <Text style={css.block_txt}>Wanted</Text>
          </View>
          <View style={[css.block, css.bg_1]}>
            <Icon name="gears" color="#eee" size={50} style={css.block_img} />
            <Text style={css.block_txt}>Config</Text>
          </View>
        </View>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}