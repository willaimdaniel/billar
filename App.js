import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './routes/Router';
import { NavProvider } from './context/NavContext';
import { PlyersProvider } from './context/PlayersContext';

export default function App() {
  return (
    <View style={styles.container}>
      <NavProvider>
        <PlyersProvider>
          <Router />
        </PlyersProvider>
      </NavProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
