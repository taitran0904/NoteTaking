import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { FAB, TextInput } from 'react-native-paper'
import Header from '../component/Header'

function AddNotes({ navigation }) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteDescription, setNoteDescription] = useState('')

    function onSaveNote() {
        navigation.state.params.addNote({ noteTitle, noteDescription })
        navigation.goBack()
    }

    return (
        <>
            <Header titleText='Thêm ghi chú' />
            

            <View style={styles.container}>
                <FAB
                    style={styles.iconButton}
                    icon="close"
                    size={25}
                    small={0}
                    onPress={() => navigation.goBack()}
                />
                <TextInput
                    label="Thêm ghi chú"
                    value={noteTitle}
                    mode='outlined'
                    onChangeText={setNoteTitle}
                    style={styles.title}
                />
                <TextInput
                    label="Thêm mô tả"
                    value={noteDescription}
                    onChangeText={setNoteDescription}
                    mode="outlined"
                    multiline={true}
                    style={styles.text}
                    scrollEnabled={true}
                    returnKeyLabel='done'
                    blurOnSubmit={true}
                />
                <FAB
                    style={styles.fab}
                    small={0}
                    icon="check"
                    disabled={noteTitle == '' ? true : false}
                    onPress={() => onSaveNote()}
                />
            </View>
        </>
    )
}
//Tai Tran 1824801030018

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    iconButton: {
        backgroundColor: '#219653',
        position: 'absolute',
        left: 0,
        bottom: 10,
        margin: 20
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 16
    },
    text: {
        
        fontSize: 16
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10,
        backgroundColor: '#219653'
    }

//Tai Tran 1824801030018
})

export default AddNotes