import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SuggestionOption from './SuggestionOption';
import Chips from './Chips'
class App extends Component { 
  componentDidMount(){
    document.addEventListener('onkeypress',this.escPress);
  }
  escPress(event){
    //debugger
    // if(event.keyCode==27&& this.state.inputChips.length > 0){
    //   debugger
    //   var inputChipsList=this.state.inputChips||[];
    //   var lasElement=inputChipsList.pop();
    //   lasElement.setAttribute('style', 'background-color:yellow');
    //   this.setState({inputChips:inputChipsList});
    // }
    this.onInputChange(event);
  }
  constructor(){
    super();
    this.state={userDeatils:[
      {name:'Rajan Kumar',email:'rajankumar549@gmail.com'},
      {name:'Mohit singh',email:'yyjsj_d@gmail.com'},
      {name:'Singh',email:'skr6945d@hotmail.com'},
      {name:'Andrew',email:'andr34445cfg@gmail.com'},
      {name:'Volvo',email:'volvo47@gmail.com'},
    ],usedUserDeatils:[], inputChips:[],suggestionChips:[]};
    this.onInputChange = this.onInputChange.bind(this);
    this.onSuggestionSelect = this.onSuggestionSelect.bind(this);
    this.onCancleClick = this.onCancleClick.bind(this);
    this.escPress = this.escPress.bind(this);
  }
  onSuggestionSelect(name, email){
    var index=this.state.inputChips.length;
    var chip = <Chips name={name} email={email} key={email+"-"+index} cancleHandler={this.onCancleClick} index={email+"-"+index}/>
    var chipList= this.state.inputChips;
    var inputField=document.getElementById('person-input-field');
    inputField.value='';
    var ele=document.getElementsByClassName('suggestion-section');
    ele[0].className='suggestion-section hide';
    chipList.push(chip);
    this.setState({inputChips:chipList});
  }
  onCancleClick(key){
    var newInputChips=this.state.inputChips.filter(function(ele){
        var id = ele;
        return ele.key!=key;
    });
    this.setState({inputChips:newInputChips});
  }
  onInputChange(e){
    var ele=document.getElementsByClassName('suggestion-section');
    ele[0].className='suggestion-section';
    var value=e.target.value.toLowerCase();
    var useData=this.state.userDeatils;
    var list=[];
    useData.forEach(element => {
        if(element.name.toLowerCase().includes(value) || element.email.toLowerCase().includes(value)){
          list.push(<SuggestionOption key={element.email} name={element.name} email={element.email} handlerSuggestionSelect={this.onSuggestionSelect} />);
        }
    });
    if(!list.length){
      ele[0].className='suggestion-section hide';
    }
    this.setState({suggestionChips:list});
  }
  render() {
    return (
      <div className='seach-section'>
        <div id="input-section">
        <div className='flex-row'>
        {this.state.inputChips}
        </div>
        <input type='text' id="person-input-field" className='input-bar' onChange={this.onInputChange} />
        </div>
        {/* <div>
          {this.state.inputChips} */}
        {/* </div> */}
        <div className='suggestion-section hide'>
          <ul>
            {this.state.suggestionChips}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
