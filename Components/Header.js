import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
  return (
    <View style={{backgroundColor:'#16b8f3'}} >
      <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomEndRadius:180,
    borderTopStartRadius:180,
    width: '100%',
    height: 150,
    backgroundColor: '#f7287b',
    alignItems:'center',
    justifyContent:'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight:'bold',
  }
});

export default Header;
