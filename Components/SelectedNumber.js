import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import colors from '../constants/colors'


const SelectedNumber=prop=>{

        return(
            <View style={styles.borderContainer} >
                <Text style={styles.numContainer} >{prop.children}</Text>
            </View>
        );
}

const styles=StyleSheet.create({
    borderContainer:{
backgroundColor:'white',
        borderColor: colors.accent,
        borderWidth:2,
        padding: 10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    numContainer:{
        color:colors.accent,
        fontSize:24,
        fontWeight:'bold'
    }

});

export default SelectedNumber;