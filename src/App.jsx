import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actors'
import Singer from './Singer';
import BookStore from './bookStore'

function App() {
  const actors = ['shakib khan', 'salman khan', 'sahrukh khan', 'julmon khan', 'tulmon khan', 'chulmon khan'];

  const books = [
    {id: 1, name :'physics', price: 200 },
    {id: 2, name :'Math', price: 250 },
    {id: 3, name :'English', price: 500 },
    {id: 4, name :'Bangla', price: 600 },
    {id: 5, name :'Bangla', price: 600 },
    {id: 6, name :'Bangla', price: 600 },
    {id: 7, name :'Bangla', price: 600 }
  ];

  const singers = [
    {id : 2, singerName : "pritom Hasan", age : 35},
    {id : 3, singerName : "Rabbi Hasan", age : 32},
    {id : 4, singerName : "Rakib Hasan", age : 32},
    {id : 5, singerName : "Dr. Mahfuz", age : 25},
    {id : 6, singerName : "Dr. Mahfuz", age : 25},
    {id : 7, singerName : "Dr. Mahfuz", age : 25},
    {id : 8, singerName : "Dr. Mahfuz", age : 25}
  ]

  return (
    <>
    <BookStore books={books}></BookStore>
      {
      singers.map(singer => <Singer key={singer.id} singer={singer} />)
      }


{/* 
    <Actor name ={"Shakib Khan"} ></Actor>
    {
      actors.map(actor => <Actor name = {actor}></Actor> )
    } */}

{/*     
    <Todo task = "Learn Ract" isDone = {true}></Todo>
    <Todo task = "Learn JavaScript" isDone = {false}></Todo>
    <Todo task = "Learn Node Js" isDone = {true}></Todo>
    <Device name = "Laptop" price = "30000 USD"></Device>
    <Device name = "Mobile" price = "50000 BDT"></Device>
    <Device name = "Camera" price = "1000 CAD"></Device>
    <Person></Person>
    <Developer></Developer>
    <Student grade = "3.8" score = "99"></Student>
    <Student grade = "1.8" score = "39"></Student>
    <Student grade = "2.8" score = "69"></Student>
    <Student ></Student> */}

    </>
  )
}


function  Person(){
  const age = 34;
  const money = 3000;
  const person = {name: "Shakib", age: 25 }

  return (
  <h3><h2>I am {person.name}</h2> and My age is {age}. I have lot of money {money}</h3>
  )
}

function Device(props){
  return (
  <div className='my-css'>
    <h2>This Device is : {props.name}</h2>
    <h2>This Device Price is : {props.price}</h2>

  </div>
  )
}

const {grade, score} = {grade: '7', score:'85' };
function Student({grade = 0, score = 0}){
  console.log(grade, score);
  return (
  <div className='my-css'>
    <h3>This is student</h3>
    <p>grade: {grade} </p>
    <p>scrore : {score} </p>
  </div>)

}

function Developer(){
  const developerStyle = {
    margin: '10px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  } 
  return (
    <div style={developerStyle}>
      <h2>
      Developer Hossain
      </h2>
    </div>
  )

}


export default App
