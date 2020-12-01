import React from 'react';
import { View, Text, TouchableOpacity, Paragraph } from 'react-native'
import styles from './styles'

const NoteCard = ({ body, title }) => {

    return (

        <View style={styles.wrapper}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <Text style={styles.body} numberOfLines={6}>{body}</Text>
        </View>
    )
}
export default NoteCard