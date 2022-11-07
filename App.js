import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './routes/Router';
import { NavProvider } from './context/NavContext';
import { VarProvider } from './context/VarContext';
import { ScoreProvider } from './context/ScoreContext';

export default function App() {
  return (
    <View style={styles.container}>
      <NavProvider>
        <VarProvider>
          <ScoreProvider>
            <Router />
          </ScoreProvider>
        </VarProvider>
      </NavProvider>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
