import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const HabitsScreen = () => {
  const habits = [
    { id: 1, name: 'Reduce energy consumption' },
    { id: 2, name: 'Use public transport' },
    { id: 3, name: 'Recycle paper and plastic' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habits</Text>
      <FlatList
        data={habits}
        renderItem={({ item }) => (
          <View style={styles.habit}>
            <Text style={styles.habitName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  habit: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  habitName: {
    fontSize: 18,
  },
});

export default HabitsScreen;