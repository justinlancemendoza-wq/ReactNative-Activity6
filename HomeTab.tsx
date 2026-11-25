
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from './ThemeContext';

const HomeTab = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View style={[
      styles.container,
      {backgroundColor: theme === 'Light' ? '#ffffff' : '#222222'},
    ]}>
      <Text style={[
        styles.title,
        {color: theme === 'Light' ? '#222222' : '#ffffff'},
      ]}>
        Welcome to My Theme App!
      </Text>

      <Text style={[
        styles.text,
        {color: theme === 'Light' ? '#222222' : '#ffffff'},
      ]}>
        Current Theme: {theme}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
  },
});

export default HomeTab;
