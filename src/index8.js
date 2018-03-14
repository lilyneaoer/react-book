import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Title extends  Component{
    render(){
        return(
            <h1>Title:{this.props.name}</h1>
        )
    }
}
class Header extends Component{
    render(){
        const divName='pageHeader';
        return(
            <div className={divName}>
                <Title name='react小书'/>
                <h2>pageHeader</h2>
            </div>
        )
    }
}
class Main extends Component{
    render(){
        return(
            <h2>this is mainContent</h2>
        )
    }
}

class Footer extends Component{
    render(){
        return(
            <h2>this is PageFooter</h2>
        )
    }
}

class Index extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
);

