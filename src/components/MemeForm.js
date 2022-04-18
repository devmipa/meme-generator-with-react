import { render } from '@testing-library/react'
import React from 'react'
import data from'../memeData'

export default class MemeForm extends React.Component {
    constructor(props){
        super(props)
        this.state = { topText : '', bottomText : '', imgUrl : 'https://i.imgflip.com/30b1gx.jpg'}
        this.manageChangeInputOne = this.manageChangeInputOne.bind(this)
        this.manageChangeInputTwo = this.manageChangeInputTwo.bind(this)
        this.manageButton = this.manageButton.bind(this)
    }
    manageChangeInputOne(e){
        let inputOne = e.target.value;
        this.setState({
            topText : inputOne
        })
    }
    manageChangeInputTwo(e){
        let inputTwo = e.target.value;
        this.setState({
            bottomText : inputTwo
        })
    }
    manageButton(){
        const arraySize = data.data.memes.length
        const rdmNumber = Math.floor(Math.random() * arraySize) 
        const imgUrl = data.data.memes[rdmNumber].url
        this.setState({
            imgUrl : imgUrl
        })
    }
    render(){
        return(
            <div className = 'div--form'>
                <div className = 'form--content'>
                    <input 
                        type = "text" 
                        className = 'form--input'
                        placeholder = 'Top text' 
                        value = {this.state.topText} 
                        onChange={this.manageChangeInputOne}
                    />
                    <input 
                        type = "text"
                        className = 'form--input'
                        placeholder = 'Bottom text'
                        value = {this.state.bottomText}
                        onChange = {this.manageChangeInputTwo}
                    />
                    <button 
                        className = 'form--button'
                        onClick={this.manageButton}
                    > Get a new meme image 
                    </button>
                    <div>
                        <span>{this.state.topText}</span>
                        <img 
                            src={this.state.imgUrl}
                            className = 'form--image' 
                        />
                        <span>{this.state.bottomText}</span>
                    </div>
                </div>
            </div>
        )
    }
}