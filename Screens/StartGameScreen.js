import React, { useState} from 'react';
import { View, Text, StyleSheet, TextInput,Button,Keyboard , Alert , TouchableWithoutFeedback, FlatList } from 'react-native';
import Header from '../Components/Header';
import Card from '../Components/Card';
import SelectedNumber from '../Components/SelectedNumber';
import colors from '../constants/colors';

const StartGameScreen= props=>{

    const [EnteredValue,SetEnteredValue]=useState("");
    const [Conform,SetConform]=useState(false);
    const [Number,SetNumber]=useState();
    const NumberInputHandler=inputText=>{
        SetEnteredValue(inputText.replace(/[^0-9]/g,''));
    }
    
    const reset=()=>{
        SetEnteredValue('');
        SetConform(false);
    }
    
    const Confirmation=()=>{
        const InputValue=parseInt(EnteredValue);
        
        if(InputValue<=0 || InputValue>99 || isNaN(InputValue))
        {
            Alert.alert('Invalid Number','Number should between 1 to 99',[{text:'Okay',style:'destructive'}])
            return;
        }

        SetConform(true);
        SetNumber(InputValue);
        SetEnteredValue('');
        Keyboard.dismiss();
    }

        let conformOuput;
        if(Conform)
        {
            conformOuput=(
            <Card style={styles.CustContainer} >
            <Text style={{fontSize:23, paddingBottom:10}} >Selected Number is:</Text>
                    <SelectedNumber>
                        {Number}
                    </SelectedNumber>
                    <View style={{paddingTop:14}}>
                    <Button title="Start Game" />
                    </View>
            </Card>

        )}



    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}} >
    <View>
    <Header title="Guess The Number"/>

        <Card style={styles.cardTexture}>
            <Text style={styles.instructText}>Enter a Number :) </Text>
            <TextInput style={styles.InputField} 
            onChangeText={NumberInputHandler}
            value={EnteredValue}
            placeholder='49' 
            blurOnSubmit 
             autoCorrect={false}  
             keyboardType="numeric" 
             maxLength={2} 

             />
            <View style={styles.btn} >
            <Button title="Confirm"  onPress={Confirmation} color={colors.primary} />
            <Button title="Reset" onPress={reset} color={colors.accent}  />
            </View>
        </Card>
        {conformOuput}
    </View>
</TouchableWithoutFeedback>
);
}


const styles=StyleSheet.create({
    cardTexture:{
        width:'85%',
        alignItems:'center',
        height:240,
        paddingBottom:30,
        marginVertical:30,
        marginLeft:30,

    },
    instructText:{
            paddingVertical:20,
            fontSize:25,
    },
    InputField:{
        width:'20%',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'white',
        backgroundColor:'white',
        borderBottomColor:'gray',
        fontSize:19,
        height:40,
        fontWeight:'bold',
        paddingLeft:19,
        borderWidth:2,
        marginBottom:30,
        textShadowColor:'white',

    },
    btn:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
    },
    CustContainer:{
        width:'80%',
        height:190,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:40,
    }
});

export default StartGameScreen;