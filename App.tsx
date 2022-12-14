import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Main } from './src/Main';
import { BODY, PADDING } from './src/const';


export default function App() {
    return (
           <View style={styles.container}>
               <Main />
               <StatusBar style="inverted" />
           </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: PADDING,
        backgroundColor: BODY,
    },
});