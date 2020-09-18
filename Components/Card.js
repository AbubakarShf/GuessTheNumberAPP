import React from 'react';
import {View,StyleSheet} from 'react-native';


const Card=prop=>{

    return(
        <View style={{...styles.cardC, ...prop.style}}>{prop.children}</View>
    );
}


const styles=StyleSheet.create({

    cardC:{
        shadowColor:'black',
        shadowOffset:{width:0, height:1},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        borderRadius:10,
    },
});



export default Card;