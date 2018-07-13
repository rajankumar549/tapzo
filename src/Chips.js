import React, { Component } from 'react';
export default class Chips extends Component {
    constructor(){
        super();
        this.closeChips = this.closeChips.bind(this);
        this.addwarning = this.addwarning.bind(this);
    }
    addwarning(){
        var ele = document.getElementById(this.props.index);
        if(! ele.className.includes('warning')){
            ele.className += 'warning';
            return true;
        }
        else{
            return false;
        }
    }
    closeChips(){
        this.props.cancleHandler(this.props.index);
    }  
    render(){
        return(
            <div id={this.props.index} class="chip">
                <img src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg" alt="Person" width="96" height="96"/>
                <span className='chip-suggestion-name'>{this.props.name}</span>
                <span class="closebtn" onClick={this.closeChips} >&times;</span>
            </div>
            );
    }
}