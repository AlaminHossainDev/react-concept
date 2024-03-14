// export default function Singer({singers}){
//     console.log(singers);
//     return(
//         <div>
//             <h3>Singer :</h3>
//         </div>
//     )
// }

export default function Singer({ singer }) {
    console.log(singer);
    return (
        <div className="my-css">
            <h3>Singer Name: {singer.singerName}</h3>
            <p>Age: {singer.age}</p>
        </div>
    );
}
