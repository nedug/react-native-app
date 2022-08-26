import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { CARD, CONTENT, PADDING, TEXT, WIDTH } from './const';


type TaskType = {
    id: number
    title: string
    isDone: boolean
}


export const Main = () => {

    const [tasks, setTasks] = useState<TaskType[]>([
        {
            id: 1,
            title: 'HTML',
            isDone: true,
        },
        {
            id: 2,
            title: 'CSS',
            isDone: true,
        },
        {
            id: 3,
            title: 'React Native',
            isDone: false,
        },
    ]);

    const renderItem: ListRenderItem<TaskType> = useCallback(({ item, index, separators }) => (
       <View style={styles.item}>
           <Text style={styles.title}>{item.title}</Text>
           <Text style={styles.check}>{item.isDone ? 'true' : 'false'}</Text>
       </View>
    ), []);


    return (
       <View>
           <Text>App!!!</Text>
           <FlatList
              data={tasks}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
           />
       </View>
    );
};


const styles = StyleSheet.create({
    item: {
        width: WIDTH - ( PADDING * 2 ),
        backgroundColor: CARD,
        marginVertical: PADDING / 2,
        padding: PADDING / 3,
        borderRadius: PADDING / 4,
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: TEXT,
        lineHeight: 28,
    },
    check: {
        fontSize: 15,
        color: CONTENT,
        fontWeight: '500',
        lineHeight: 28,
    },
});