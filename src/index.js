import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const lessons =[
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]

class Lesson extends Component{
    handleClickOnLesson(){
        // console.log(this.props.lesson.title);
        console.log(this.props.id);
    }
    render(){
        const {lesson}=this.props;
        return(
            <div onClick={this.handleClickOnLesson.bind(this)}>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
                <hr/>
            </div>
        )
    }
}
class LessonList extends Component{
    render(){
        return(
            <div>
                {lessons.map((lesson,i) => <Lesson key={i} id={i} lesson={lesson}/>)}
            </div>
        )
    }
}

ReactDOM.render(
    <LessonList/>,
    document.querySelector('#root')
)

