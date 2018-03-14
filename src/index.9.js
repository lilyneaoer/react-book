import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Title extends Component{
    handleClickOnTitle(word,e){
        console.log(this,word)
    }
    render(){
        return(
            <h1 onClick={this.handleClickOnTitle.bind(this,'hello')}>ReactBook</h1>
        )
    }
}

ReactDOM.render(
    <Title/>,
    document.getElementById('root')
);