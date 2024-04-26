

/*import ExpenseItem from "./components/ExpenseItem"

const App =() =>{

  const expenses =[//array of objects
    {id:1,title:"Food",amount:50},
    {id:2,title:"Movie",amount:200},
    
  ]
  return (
    <>
        {expenses.map((expense) => (
          <ExpenseItem key ={expense.id} title={expense.title} amount={expense.amount} />
        ))}
    </>
  )
}

export default App

*/

/*
import ExpenseItem from "./components/ExpenseItem"

const App =() =>{
    const expenses =[//array of objects
    {id:1,title:"Food",amount:-100},
    {id:2,title:"Movie",amount:-200},
    {id:3,title:"Salary",amount:47000}, 
  ]
  let income = 0
  let expense = 0

  expenses.forEach((exp)=>{
    if(exp.amount>0){
      income += exp.amount
    }
    else{
       expense -= exp.amount
    }
  })
 
  return ( 

        <>
        
         <div>
          <div>Expense Tracker</div>
        <div className="balance">Balance:{income-expense}</div>
        <span>{balance}</span>
        <div className="income-expense-container">
        <div className="income">
          <span className="title">Income</span>
          <span>{income}</span>
          </div>
          <div className="block"></div>
          <div className="expense">
            <span className="title">Expense</span>
            <span>{expense}</span>
            </div>
            </div>
            <ExpenseForm />
         </div>

        {expenses.map((expense) => (//here if {-o/p will be blank age map should return
          <ExpenseItem key ={expense.id} title={expense.title} amount={expense.amount} />
        ))}
    </>
  )
}

export default App
*/
//use only stateVariable(use state) then only rendring takes place- dont use normal variable
/*
import {useState} from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseItem from "./components/ExpenseItem"

const App =() =>{
    const [expenses,setExpenses]=useState([
    {id:1,title:"Food",amount:-100},
    {id:2,title:"Movie",amount:-200},
    {id:3,title:"Salary",amount:4700}, 
  ])

  const addExpense = (title,amount) =>{
    const nextId= expenses[expenses.length-1].id+1
    setExpenses([...expenses,{title:title,amount:amount}])
  }

  const deleteExpense = (id)=>{
    const nextId = expenses[expenses.length -1].id+1
    setExpenses([...expenses,{id:nextId,title:title,amount:amount}])
  } 
   let income = 0,
  let expense = 0

  expenses.forEach((exp)=>{
    if(exp.amount>0){
      income += exp.amount
    }
    else{
       expense -= exp.amount
    }
  })
  return ( 
         <>
        
         <div>
          <div>Expense Tracker</div>
        <div className="balance">Balance:{income-expense}</div>
        <span>{balance}</span>
        <div className="income-expense-container">
        <div className="income">
          <span className="title">Income</span>
          <span>{income}</span>
          </div>
          <div className="block"></div>
          <div className="expense">
            <span className="title">Expense</span>
            <span>{expense}</span>
            </div>
            </div>
            <ExpenseForm addExpense={addExpense}/>
         </div>

        {expenses.map((expense) => (//here if {-o/p will be blank age map should return
          <ExpenseItem key ={expense.id} title={expense.title} amount={expense.amount} />
        ))}
    </>
  )
}
export default App
*/

import ExpenseItem from "./components/ExpenseItem"
import { useState,useEffect } from "react"
import ExpenseForm  from "./components/ExpenseForm"
import axios from "axios"
const App = () => {
  let value
  let entries1
  let expensev=0
  let incomev=0
  const [entries,setEntries] = useState([{
    "id":1,
    "title":"movie",
    "amount":80
  },
{
  "id":2,
  "title":"tour",
  "amount": 5000
},
{
  "id":3,
  "title":"clothes",
  "amount" : 10000
},
{
  "id":4,
  "title":"Food",
  "amount":-10
}])


useEffect(()=>{
  axios.get('mongodb://localhost:27017')
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err))
},[])
    

 
const addExpenses = (title,amount) => {
  const nextid = entries[entries.length -1].id+1
  setEntries([...entries , {id:nextid,title : title , amount:amount}])
}
//Increment income and expense
entries.forEach((ele)=>{
  if(ele.amount > 0){
    incomev += ele.amount
  }
  else{
    expensev -= ele.amount
  }
})
const deleteExpense = (id) => {
  setEntries(entries.filter((exp) => exp.id != id))
}
  return(
    <div>
      <ExpenseForm addExpenses= {addExpenses} />
      <div className="balance">Balance:{incomev-expensev}</div>
      <div className="income1">
            <div className="income">
                <span className="title">Income</span>
                <span>{incomev}</span>
            </div>
            <div className="block"></div>
            <div className="expense">
            <span className="title">Expense</span>
                <span>{expensev}</span>
            </div>         
        </div>
      
        {entries.map((item) =>{
          return (
            <ExpenseItem key = {item.id} {...item} deleteExpense = {deleteExpense}/>
          )
        })}   
    </div>
  )
}
export default App
/*

import ExpenseItem from ".components/Expenseitem"
import { useState,useEffect } from "react"
import ExpenseForm  from "./components/ExpenseForm"
const App = () => {
  let value
  let entries1
  let expensev=0
  let incomev=0
  const [entries,setEntries] = useState([{
    "id":1,
    "title":"movie",
    "amount":80
  },
{
  "id":2,
  "title":"tour",
  "amount": 5000
},
{
  "id":3,
  "title":"clothes",
  "amount" : 10000
},
{
  "id":4,
  "title":"Food",
  "amount":-10
}])
const addExpenses = (title,amount) => {
  const nextid = entries[entries.length -1].id+1
  setEntries([...entries , {id:nextid,title : title , amount:amount}])
}
//Increment income and expense
entries.forEach((ele)=>{
  if(ele.amount > 0){
    incomev += ele.amount
  }
  else{
    expensev -= ele.amount
  }
})
const deleteExpense = (id) => {
  setEntries(entries.filter((exp) => exp.id != id))
}


 
  return(
   
    <div>App
     
     
      <ExpenseForm addExpenses= {addExpenses} />
      <span id="Error">Error:</span>
      <div className="balance"><h1>Balance</h1>{incomev-expensev}</div>
      <div className="income1">
            <div className="income">
                <span className="title">Income</span>
                <span>{incomev}</span>
            </div>
            <div className="block"></div>
            <div className="expense">
            <span className="title">Expense</span>
                <span>{expensev}</span>
            </div>
           
        </div>


       {
        entries1 = entries.map((item) => item.amount)
       }
       
       
       
       
       
       
        {entries.map((item) =>{
          return (
            <ExpenseItem key = {item.id} {...item} deleteExpense = {deleteExpense}/>
          )
        })}
       
         


       
       
    </div>
  )
}
export default App
*/
