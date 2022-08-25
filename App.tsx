import { StatusBar } from 'expo-status-bar';
import {
    ActivityIndicator,
    Alert,
    Button,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

export default function App() {

    const [value, setValue] = useState('');


    return (
       <View style={styles.container}>
           <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
              }}
           >
               <View>
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
                      style={styles.img}
                      source={{ uri: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png' }}
                   />
                   <TextInput
                      style={styles.input}
                      placeholder="type here"
                      value={value}
                      onChangeText={setValue}
                   />
               </View>
           </TouchableOpacity>
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
    img: {
        width: 150,
        height: 150,
    },
    input: {
        width: 300,
        height: 36,
        borderWidth: 1,
        borderRadius: 10,
    },
});
