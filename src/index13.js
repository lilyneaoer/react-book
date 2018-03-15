import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const users=[
    {username:'Jerry',age:'21',gender:'male'},
    {username:'Tommy',age:'22',gender:'male'},
    {username:'Lily',age:'17',gender:'female'},
    {username:'Lucy',age:'20',gender:'female'}
]

class UserList extends  Component{
    render(){
        const {user}=this.props;
        return(
            <ul>
                <li>姓名:{user.username}</li>
                <li>年龄:{user.age}</li>
                <li>性别:{user.gender}</li>
                <hr/>
            </ul>
        )
    }
}
class Index extends Component{
    render(){
        return(
            <div>
                {users.map((user,i)=> <UserList key={i} user={user}/>)}
            </div>
        )
        // for of 遍历
        // const usersElements=[];
        // for (let user of users){
        //     usersElements.push(
        //         <div>
        //             <div>姓名:{user.username}</div>
        //             <div>年龄:{user.age}</div>
        //             <div>性别:{user.gender}</div>
        //             <hr/>
        //         </div>
        //     )
        // }
        // return(
        //     <div>{usersElements}</div>
        // )
        // return(
        //     <div>
        //         {users.map((user)=>{
        //             return(
        //                 <div>
        //                     <div>姓名:{user.username}</div>
        //                     <div>年龄:{user.age}</div>
        //                     <div>性别:{user.gender}</div>
        //                     <hr/>
        //                 </div>
        //             )
        //         })}
        //     </div>
        // )
    }
}

ReactDOM.render(
    <Index/>,
    document.querySelector('#root')
)