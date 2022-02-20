import React from 'react';
import {CheckBox, Dimensions, StyleSheet, Text} from 'react-native';
import {PanGestureHandler, PanGestureHandlerGestureEvent, PanGestureHandlerProps,} from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import {Todo} from '../App';
import {FontAwesome5} from '@expo/vector-icons';

interface ListItemProps
    extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
    task: Todo;

}

const LIST_ITEM_HEIGHT = 40;

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.1;

const ListItem: React.FC<ListItemProps> = ({task, simultaneousHandlers}) => {
    const translateX = useSharedValue(0);
    const itemHeight = useSharedValue(LIST_ITEM_HEIGHT);
    const marginVertical = useSharedValue(10);
    const opacity = useSharedValue(1);

    const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        onActive: (event) => {
            translateX.value = event.translationX;
        },
        onEnd: () => {
            const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
            if (shouldBeDismissed) {
                translateX.value = withTiming(-SCREEN_WIDTH);
                itemHeight.value = withTiming(0);
                marginVertical.value = withTiming(0);
                opacity.value = withTiming(0, undefined, (isFinished) => {

                });
            } else {
                translateX.value = withTiming(0);
            }
        },
    });

    const rStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
        ],

    }));

    const rIconContainerStyle = useAnimatedStyle(() => {
        const opacity = withTiming(
            translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0
        );
        return {opacity};
    });

    const rTaskContainerStyle = useAnimatedStyle(() => {
        return {
            height: itemHeight.value,
            marginVertical: marginVertical.value,
            opacity: opacity.value,
        };
    });
    // console.log(task)
    return (
        <Animated.View style={[styles.taskContainer, rTaskContainerStyle]}>
            <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
                <FontAwesome5
                    name={'trash-alt'}
                    size={LIST_ITEM_HEIGHT * 0.4}
                    color={'red'}
                />
            </Animated.View>
            <PanGestureHandler
                simultaneousHandlers={simultaneousHandlers}
                onGestureEvent={panGesture}
            >
                <Animated.View style={[styles.task, rStyle]}>
                    <Animated.View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <CheckBox
                            value={task.completed}
                        />
                        <Text style={styles.taskTitle}>{task.title}</Text>
                    </Animated.View>
                </Animated.View>
            </PanGestureHandler>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        width: '100%',
        alignItems: 'center',

    },
    task: {
        width: '95%',
        height: 20,
        justifyContent: 'center',
        paddingLeft: 20,
        borderRadius: 10,
        zIndex: 1000,
    },
    taskTitle: {
        flex: 0,
        fontSize: 16,
    },
    iconContainer: {

        height: LIST_ITEM_HEIGHT,
        width: LIST_ITEM_HEIGHT,
        position: 'absolute',
        right: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ListItem;
