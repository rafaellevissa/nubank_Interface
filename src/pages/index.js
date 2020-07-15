import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Animated} from 'react-native';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Tabs from '../components/Tabs';
import {Container, SafeAreaView} from './styles';

export default function Home(){
    let offset = 0;
    const translateY = new Animated.Value(0);
    const animatedEvent = Animated.event(

    );
    
    function onHandlerStateChanged(event){

    }

    return(
        <SafeAreaView>
            <Container>
                <Header />

            </Container>
        </SafeAreaView>
    );
}