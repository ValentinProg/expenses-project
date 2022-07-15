import React, {useState} from "react";
import Card from "../UI/Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')


    const filterChangeHandler = selectedYear =>{
      console.log('expenses.jsx');
      console.log(selectedYear);
      setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
    })

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.length === 0 ? <p>No expenses found.</p> : filteredExpenses.map(expense => 
        <ExpenseItem
        key={expense.id}  
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      )}
    
    </Card>
    </div>
  );
};

export default Expenses


