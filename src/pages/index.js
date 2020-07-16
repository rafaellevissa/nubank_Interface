import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Animated} from 'react-native';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Tabs from '../components/Tabs';
import {Container, SafeAreaView, Content} from './styles';

export default function Home(){
    let offset = 0;
    const translateY = new Animated.Value(0);
    /*
    const animatedEvent = Animated.event(
        todo            
    );
    
    function onHandlerStateChanged(event){
        todo
    }
    */
    return(
        <SafeAreaView>
            <Container>
                <Header />
                <Content>
                    <Menu translateY={translateY}></Menu>
                </Content>
            </Container>
        </SafeAreaView>
    );
}