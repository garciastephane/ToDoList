import React from 'react';
import {
     StyleSheet,
      Text,
       View ,
       TouchableOpacity,
        } from 'react-native';

export default class Main extends React.Component {
    render() {
  return (
   
    <View key={this.props.keyval} style={styles.note}>

<Text style={styles.noteText}>{this.props.val.date}</Text>
<Text style={styles.noteText}>{this.props.val.note}</Text>

<TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
<Text style={styles.noteDeleteText}>D</Text>
</TouchableOpacity>

    </View>
  );
}
}

const styles = StyleSheet.create({
  
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#edf5e1',
    },

    noteText: {
        paddingRight: 20,
        borderLeftWidth: 70,
        borderLeftColor: '#fc4445',
      
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#5cdb95',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },

    noteDeleteText: {
        color: 'white',
    }
        });
