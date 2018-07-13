import React, { Component } from 'react';
export default class SuggestionOption extends Component {
    constructor(){
        super();
        this.suggetionClicked = this.suggetionClicked.bind(this);
    }
    suggetionClicked(){
        this.props.handlerSuggestionSelect(this.props.name,this.props.email);
    }
    render(){
        return(
            <li data-name={this.props.name} onClick={this.suggetionClicked}>
                <img className="avtar" width='50px' src='https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'/>
                <div className='suggestion-details'>
                    <span className='suggestion-name'>{this.props.name}</span>
                    <span className='placeholder'>{this.props.email}</span>
                </div>
            </li>
        )
    }

}
