import React, { useState } from 'react';
import { Text, View } from 'react-native';


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


    return (
       <View>
           <Text>App!!!</Text>
       </View>
    );
};