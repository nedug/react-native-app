import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';
import { useCallback } from 'react';


type arrayDataType = {
    id: number
    title: string
}

const arrayData: arrayDataType[] = new Array(100)
   .fill(null)
   .map((_, index) => ( {
    id: index + 1,
    title: `Title_${index + 1}`,
} ))


export default function App() {

    const renderItem: ListRenderItem<arrayDataType> = useCallback(({ item }) => (
       <View>
           <Text>
               {item.title}
           </Text>
       </View>
    ), []);

    const keyExtractor = useCallback((item, index) => `${item.title}.${index}`, []);


    return (
       <View style={styles.container}>
           <Text>dfbfdbfdb</Text>
           <FlatList
              data={arrayData}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
           >
           </FlatList>
           <StatusBar style="auto" />
       </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
    },
});