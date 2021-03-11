import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, Title } from 'react-native-paper'



function Header({ titleText }) {
    return (
        <Appbar.Header style={styles.headerContainer}>
            <View style={styles.container}>
                <Title style={styles.title}>{titleText}</Title>
            </View>
        </Appbar.Header>
    )
}

//Tran Le Tan Tai 1824801030018
const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'black'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff'
    }
})
//Tran Le Tan Tai 1824801030018
export default Header