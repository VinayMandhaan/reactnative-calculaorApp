import React, { Component } from 'react';
import { 
StatusBar,
StyleSheet,
SafeAreaView,
View,
Text,
TouchableOpacity } from 'react-native';


// Class Components are used because i have to use States.
// userText is the text which takes input from the button.
// calcText is the text which generates the output string.
// Clear text is used to set the state blank

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      userText:"",
      calcText:"",
      clearText:""
    }
  }
// This method performs all mathematical functions and prints the text in calcText using eval.
//   eval() is a global function in JavaScript that evaluates a specified string as JavaScript code and executes it.
  calculatedText(){
    const num  = this.state.userText
    
      
    this.setState({
      calcText: eval(num)
    })
  }
  //Validations for Consecutive Operators, If user presses ++ twice and submits then the output will be blank.
  validations(){
    const text  = this.state.userText
      if(text.slice(-1) == '+'){
          this.setState({
              userText : "Math Error"
          })
      }
      else if(text.slice(-1) == '-'){
        this.setState({
            userText : "Math Error"
        })
    }
    else if(text.slice(-1) == '/'){
        this.setState({
            userText : "Math Error"
        })
    }
    else if(text.slice(-1) == '*'){
        this.setState({
            userText : "Math Error"
        })
    }
      else{
          this.calculatedText()
      }
  }
// This method clears the text.
    clearPress(num){
      if(num=='CE'){
        this.setState({
          userText : this.state.clearText,
          calcText: this.state.clearText
        })
      }
    }
// This method takes the text from the button press (Touchable Opacity, Touchable opacity is used because it gives response back to user when pressed)
    buttonPressed(num){
      console.log(num)
    
      // If = is applied then return the actual value
      if(num == '='){
        return this.validations() && this.calculatedText(this.state.userText)
      }
      
      this.setState({
        userText : this.state.userText + num
      })


      // Get the operator with the number for example 3+2-2+2
      switch(num){
        case '+':
        case '-':
        case '/':
        case '*':
          if(this.state.num == '')return 
          this.setState({
              userText: this.state.userText + num
          })
      }
}
// Here the code is all about Views, container contains the 2 input text result text and calculated text, besides that it contains touchable opacity buttons with methods buttonPressed to pass the text back to method for further processing.
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultTxt}>{this.state.userText}</Text>
      </View>
      <View style={styles.calculations}>
         <Text style={styles.CalcTxt}>{this.state.calcText}</Text>
      </View>
      <View style={styles.button}/>
      <View style={styles.numbers}>
        <View style={styles.row}>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(0)}>
                <Text style={styles.btnTxt}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(1)}>
                <Text style={styles.btnTxt}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(2)}>
                <Text style={styles.btnTxt}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opBtn}  onPress={() => this.buttonPressed('+')}>
                <Text style={styles.optBtnTxt}>+</Text>
            </TouchableOpacity>
            
            
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(3)}>
                <Text style={styles.btnTxt}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(4)}>
                <Text style={styles.btnTxt}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(5)}>
                <Text style={styles.btnTxt}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opBtn} onPress={() => this.buttonPressed('-')}>
                <Text style={styles.optBtnTxt}>-</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(6)}>
                <Text style={styles.btnTxt}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(7)}>
                <Text style={styles.btnTxt}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(8)}>
                <Text style={styles.btnTxt}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opBtn} onPress={() => this.buttonPressed('*')}>
                <Text style={styles.optBtnTxt}>*</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(9)}>
                <Text style={styles.btnTxt}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed('.')}>
                <Text style={styles.btnTxt}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.clearPress('CE')}>
                <Text style={styles.btnTxt}>CE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opBtn} onPress={() => this.buttonPressed('/')}>
                <Text style={styles.optBtnTxt}>/</Text>
            </TouchableOpacity>
            
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.opBtn} onPress={() => this.buttonPressed('(')}>
                <Text style={styles.optBtnTxt}>(</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opBtn} onPress={() => this.buttonPressed(')')}>
                <Text style={styles.optBtnTxt}>)</Text>
            </TouchableOpacity>
            {/* This functionality is not yet implemented */}
            <TouchableOpacity style={styles.opBtn} onPress={() => this.buttonPressed('%')}>
                <Text style={styles.optBtnTxt}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opBtn} onPress={() => this.buttonPressed('=')}>
                <Text style={styles.optBtnTxt}>=</Text>
            </TouchableOpacity>
        </View>
        </View>
      {/* <View style={styles.operations}>
            <TouchableOpacity style={styles.btn}  onPress={() => this.buttonPressed('+')}>
                <Text style={styles.btnTxt,styles.white}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed('-')}>
                <Text style={styles.btnTxt,styles.white}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed('*')}>
                <Text style={styles.btnTxt,styles.white}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed('(')}>
                <Text style={styles.btnTxt,styles.white}>(</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed(')')}>
                <Text style={styles.btnTxt,styles.white}>)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed('/')}>
                <Text style={styles.btnTxt,styles.white}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.buttonPressed('=')}>
                <Text style={styles.btnTxt,styles.white}>=</Text>
            </TouchableOpacity>
      </View> */}
  </View>
    );
  }
}
// Styling for the Calculator Application
const styles = StyleSheet.create({
  container:{
      flex:1
  },
  resultTxt:{
      fontSize:35,
      color:'black'
  },
  btn:{
      flex:7,
      alignItems:"center",
      alignSelf:'stretch',
      justifyContent:'center'
  },
  white:{
      color:'white'
  },
  btnTxt:{
      fontSize:30
  },
  CalcTxt:{
      fontSize:30,
      color:'black',
  },
  row:{
      flexDirection:'row',
      flex:1,
      justifyContent:'space-around',
      alignItems:"center"
  },
  result:{
      flex:2,
      backgroundColor: 'white',
      justifyContent:'center',
      alignItems:'flex-end'
  
  },
  calculations:{
      flex:2,
      backgroundColor:'#F5F5F5',
      justifyContent:'center',
      alignItems:'flex-end'
  
  },
  button:{
      flexDirection:'row'
  },
  numbers:{
      flex:10,
      backgroundColor:'white'
  },
  operations:{
      flex:10,
      justifyContent:'space-around',
      backgroundColor:'black'
  },
  opBtn:{
    flex:7,
      alignItems:"center",
      alignSelf:'stretch',
      justifyContent:'center',
      backgroundColor:'#F5F5F5', 
  },
  optBtnTxt:{
    fontSize:30,
    color:'#008ECC'
  }
  })

export default App;
