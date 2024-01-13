import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view'

export default function App() {
  return (
    <View style={styles.container}>
      <PagerView initialPage={0}>
        <View key={1}>

        </View>
        <View key={2}>

        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
