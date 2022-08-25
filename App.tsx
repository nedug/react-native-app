import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Alert, Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return (
       <View style={styles.container}>
           <Text>Open up App.tsx to start working on your app!</Text>
           <ActivityIndicator />
           <ActivityIndicator size="large" />
           <ActivityIndicator size="small" color="#0000ff" />
           <ActivityIndicator size="large" color="#ff2c28" />
           <Button
              title="Press me"
              onPress={() => Alert.alert('Simple Button pressed')}
           />
           <Image
              style={{
                  width: 100,
                  height: 100,
              }}
              source={{ uri: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png' }}
           />
           <StatusBar style="auto" />
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
