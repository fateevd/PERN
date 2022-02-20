import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useRef, useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ListItem from './components/ListItem';
import {responseTodo} from "./src/http/request";

export interface Todo {
    id: number,
    title: string,
    completed: boolean,
    description: string,
}

const BACKGROUND_COLOR = '#FAFBFF';

export default function App() {
    const [tasks, setTasks] = useState<Todo[]>([]);
    useEffect(() => {
        responseTodo(1).then(data => setTasks(data));
    }, [tasks])

    const scrollRef = useRef(null);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={{width: 'auto', height: 270}} source={require('./assets/masthead.png')}>
                <Text style={styles.title}>What's up,friend</Text>
            </ImageBackground>
            <StatusBar style="auto"/>
            <ScrollView ref={scrollRef} style={styles.checkbox}>
                {tasks.map((task) => (
                    <ListItem
                        simultaneousHandlers={scrollRef}
                        key={task.id}
                        task={task}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: "flex",
        backgroundColor: BACKGROUND_COLOR,
    },
    title: {
        fontSize: 24,
        position: 'absolute',
        bottom: 10,
        color: BACKGROUND_COLOR,
        marginVertical: 20,
        marginLeft: 20,
    },
    checkbox: {
        paddingTop: 20,
        backgroundColor: BACKGROUND_COLOR,
        flex: 1,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        position: 'relative',
        top: -20,
    }
});


