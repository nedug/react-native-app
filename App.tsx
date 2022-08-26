import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Main } from './src/Main';


export default function App() {
    return (
       <View style={styles.container}>
           <Main />
           <StatusBar style="auto" />
       </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});