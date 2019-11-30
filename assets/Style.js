var React = require('react-native');
var { StyleSheet, Dimensions } = React;

const wW = Math.round(Dimensions.get('window').width);
const wH = Math.round(Dimensions.get('window').height);

module.exports = StyleSheet.create({
  //Color
  bg_1: {
    backgroundColor: 'cadetblue',
  },
  bg_2: {
    backgroundColor: 'thistle',
  },
  bg_3: {
    backgroundColor: 'palegoldenrod',
  },
  
  //Container
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title_head: {
    alignItems: 'left',
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
  },

  //Blocks
  row_block:{
    alignSelf: 'strecth',
    flexDirection: 'row',
    height: 100,
    marginTop: 15,
  },
  block: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
    margin: 8,

    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  block_img:{
    alignSelf: 'stretch',
    textAlign: 'center',
    height: 30,
    marginTop: 15
  },
  block_txt: {
    alignSelf: 'stretch',
    textAlign: 'center',
    fontWeight: "bold",
    height: 30,
    marginTop: 25
  },
  
});