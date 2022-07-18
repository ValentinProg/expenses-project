import React, {useState} from "react";
import Card from "../UI/Card/Card";

import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

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
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
  );
};

export default Expenses


