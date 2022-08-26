import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Main } from './src/Main';
import { PADDING } from './src/const';


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
        marginTop: 50,
        paddingHorizontal: PADDING,
    },
});