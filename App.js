import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './routes/Router';
import { NavProvider } from './context/NavContext';
import { VarProvider } from './context/VarContext';

export default function App() {
  return (
    <View style={styles.container}>
      <NavProvider>
        <VarProvider>
          <Router />
        </VarProvider>
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
