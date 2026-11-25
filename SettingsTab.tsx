
import React, {useContext, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {ThemeContext} from './ThemeContext';

const SettingsTab = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);

  const changeTheme = async () => {
    setLoading(true);

  await new Promise<void>(resolve => setTimeout(resolve, 1000));

    setTheme(theme === 'Light' ? 'Dark' : 'Light');

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Theme Settings</Text>

      <Text style={styles.text}>
        Current Theme: {theme}
      </Text>

      {loading ? (
        <Text style={styles.loading}>Saving...</Text>
      ) : (
        <Button
          title="Change Theme"
          onPress={changeTheme}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  loading: {
    fontSize: 18,
    color: 'blue',
  },
});

export default SettingsTab;
