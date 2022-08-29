import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
    const [value, setValue] = useState('');

    const renderItem: ListRenderItem<TaskType> = useCallback(({ item }) => (
       <View style={styles.item}>
           <Text style={styles.title}>{item.title}</Text>
           <Text style={styles.check}>{item.isDone ? 'true' : 'false'}</Text>
       </View>
    ), []);

    const addTask = () => {
        const newTask: TaskType = {
            id: tasks.length + 1,
            title: value,
            isDone: false,
        };
        setTasks([newTask, ...tasks]);
        setValue('');
    };


    return (
       <View>
           <View style={styles.inputBox}>
               <TextInput
                  style={styles.input}
                  value={value}
                  onChangeText={setValue}
               />
               <TouchableOpacity
                  onPress={addTask}
               >
                   <Text style={styles.inputText}>Add</Text>
               </TouchableOpacity>
           </View>
           <FlatList
              data={tasks}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
           />
       </View>
    );
};


const styles = StyleSheet.create({
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    input: {
        height: 36,
        width: WIDTH - ( PADDING * 2 ) - 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: PADDING / 4,
        color: 'white',
        paddingHorizontal: 5,
    },
    inputText: {
        color: 'white',
        marginRight: 10,
        fontSize: 17,
    },
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