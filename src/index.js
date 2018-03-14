import React,{Component} from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

class LikeButton extends Component{
    static defaultProps={
        likedText:'取消',
        unlikedText:'点赞'
    }
    constructor(){
        super()
        //这里为什么要用super()
        this.state={
            name:'Lily',
            isLiked:false
        }
    }

    //鼠标点击事件
    handleClickOnLikeButton () {
        this.setState({
            isLiked:!this.state.isLiked
        })
        // if (this.props.onClick){
        //     this.props.onClick()
        // }
        console.log(this.state)
        // 当你调用 setState 的时候，React.js 并不会马上修改 state。而是把这个对象放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新。这一点要好好注意。
    }

    render(){
        //已用defaultProps设置属性
        // const likedText=this.props.likedText || '取消';
        // const unlikedText=this.props.unlikedText || '点赞';
        // const  wordings=this.props.wordings || {
        //     likedText:'取消',
        //     unlikedText:'点赞'
        // }
        return(
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.name}{this.state.isLiked? this.props.likedText:this.props.unlikedText}👍
            </button>
        )
    }
}

class Index extends Component{
    render(){
        return(
            <div>
                <LikeButton likedText='踩' unlikedText='顶'/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)
