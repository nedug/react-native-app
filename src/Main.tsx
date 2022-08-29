import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';
import { CARD, CONTENT, PADDING, TEXT, WIDTH } from './const';
import { Remove } from './svg/Remove';


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
           <View style={styles.box}>
               <Text style={styles.title}>{item.title}</Text>
               
               {/*<Text style={styles.remove} onPress={() => removeTask(item.id)}>Х</Text>*/}

               <Pressable onPress={() => removeTask(item.id)}>
                   <Remove />
               </Pressable>

           </View>
           <Text
              style={styles.check}
              onPress={() => updateTask(item.id)}
           >{item.isDone ? 'true' : 'false'}</Text>
       </View>
    ), [tasks]);

    const addTask = () => {
        const newTask: TaskType = {
            id: +new Date(),
            title: value,
            isDone: false,
        };
        setTasks([newTask, ...tasks]);
        setValue('');
    };

    const removeTask = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    const updateTask = (id: number) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, isDone: !t.isDone } : t));
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
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    remove: {
        color: 'white',
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
        paddingVertical: PADDING / 3,
        paddingHorizontal: PADDING,
        borderRadius: PADDING / 3,
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