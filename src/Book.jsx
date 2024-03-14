import './Book.css'
export default function Book({book}){
    const {name, price} = book;
    return(
        <div className="book">
            <h4>Boook Name :{name} </h4>
            <h4>Boook Prices :{price} </h4>
        </div>
    )
}