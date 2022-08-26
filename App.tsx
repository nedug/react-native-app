import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';
import { useCallback } from 'react';


type arrayDataType = {
    id: number
    title: string
    count: number
}

const arrayData: arrayDataType[] = new Array(100)
   .fill(null)
   .map((_, index) => ( {
       id: index + 1,
       title: `Title_${index + 1}`,
       count: ( index + 1 ) * 5,
   } ))


export default function App() {

    const renderItem: ListRenderItem<arrayDataType> = useCallback(({ item }) => (
       <View style={styles.item}>
           <Text style={styles.title}>{item.title}</Text>
           <Text style={styles.price}>{item.count} $</Text>
       </View>
    ), []);

    const keyExtractor = useCallback((item, index) => `${item.title}.${index}`, []);


    return (
       <View style={styles.container}>
           <Text>My first App</Text>
           <FlatList
              data={arrayData}
              numColumns={3}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              contentContainerStyle={{paddingHorizontal: 15}}
              renderItem={renderItem} /* Берет элемент из data и отображает его в списке */
              keyExtractor={keyExtractor} /* Вместо key */
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
    item: {

    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 25,
    },
    price: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffa9a9',
    },
});