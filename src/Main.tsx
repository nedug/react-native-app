import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';


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
       <View>
           <Text>{item.title}</Text>
           <Text>{item.isDone ? 'true' : 'false'}</Text>
       </View>
    ), []);


    return (
       <View>
           <Text>App!!!</Text>
           <FlatList
              data={tasks}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString() }
              />
       </View>
    );
};