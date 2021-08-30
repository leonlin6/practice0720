import React from 'react';
import ReactDOM from 'react-dom';

// import MenuItem from './MenuItem';
// // 引入新的Menu
// import Menu from './Menu';
// import InputForm from './InputForm';

let menuItemWording=[
    "Like的發問",
    "Like的回答",
    "Like的文章",
    "Like的留言"
];

let menuItemArr = menuItemWording.map((wording) => <MenuItem text={wording}/>);
// let mapTest = menuItemWording.map(
//         (element, index, array) => {
//             console.log("Element =" + element);
//             console.log("Index =" + index);
//             console.log("Array =" + array);            
//         }  
//     );


const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar"></img>
                </a>
            </div>
            <a href="/" className="author"></a>
        </div>
    )
}


ReactDOM.render(
    <App/>
    // <>
    //     <Menu title={"Andy Chang的Like"}>{menuItemArr}</Menu>
    //     <InputForm></InputForm>
    // </>
    ,
    document.getElementById('root')
);