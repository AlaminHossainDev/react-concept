
// export default function Todo({task, isDone}){
//         if(isDone === true){
//             return <li>finished: {task} </li>
//         }
//         else{
//             return <li>work on : {task}</li>
//         }
//     }

// option 2
// export default function Todo({task, isDone}){
//         if(isDone){
//             return <li>finished: {task} </li>
//         }
//         else{
//             return <li>work on : {task}</li>
//         }
//     }

// ternary operator for conditional rendering react
    // export default function Todo({task, isDone}){
    //     return (
    //         <li>{isDone ? 'Finshed' : 'Work on Hard'} : {task} </li>
    //     )
    // }

    // option :4
// export default function Todo({task, isDone}){
//         return (
//             <li>{task} {isDone && ': Done'} </li>
//         )
//     }
    // option :5
// export default function Todo({task, isDone}){
//         return (
//             <li>{task} {isDone || ': Need to improve it'} </li>
//         )
//     }

// option no 6

    export default function Todo({task, isDone}){
        let listItem;
        if(isDone){
            listItem = <li>finished: {task} </li>
        }
        else{
            listItem = <li>work hard on : {task}</li>
        }
        return listItem;
    }
