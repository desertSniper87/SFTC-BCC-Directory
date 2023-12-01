import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const Homescreen: React.FC = () => {
    return (
        <View style={{flex:1}}>
            <Button>Test Button</Button>
            <Text> Home Screen </Text>
        </View>
    );
};

export default Homescreen;
