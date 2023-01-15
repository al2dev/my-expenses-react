import { useState } from 'react';
import Card from '../UI/Card';
import './CostForm.css';

const CostForm = (props) => {
  // const [name, setName] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');

  const [userInput, setUserInput] = useState({name: '', amount: '', date: ''});
  
  const nameChangeHandler = (event) => {
    // setName(event.target.value);
    setUserInput({  
      ...userInput,
      name: event.target.value
    });
  };
  const costChangeHandler = (event) => {
    // setAmount(event.target.value);
    setUserInput({  
      ...userInput,
      amount: event.target.value
    });
  };
  const dateChangeHandler = (event) => {
    // setDate(event.target.value);
    setUserInput((previousState) => {
      return ({
        ...previousState,
        date: event.target.value
      })
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const costData = {
      description: userInput.name,
      amount: userInput.amount,
      date: new Date(userInput.date)
    };
    props.onSaveData(costData);
    setUserInput({name: '', amount: '', date: ''});
  }
  
  return (
    <form onSubmit={submitHandler}>
        <div className="new-cost__control">
          <label>Наименование</label>
          <input type="text" value={userInput.name} onChange={nameChangeHandler} placeholder="Введите значение.." />
        </div>
        <div className="new-cost__control">
          <label>Стоимость</label>
          <input type="number" value={userInput.amount} onChange={costChangeHandler} placeholder="Стоимость в доллорах" min="0.01" step="0.01"/>
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input type="date" value={userInput.date} onChange={dateChangeHandler} min="2016-01-01" placeholder="Дата покупки"/>
        </div>
        <div className="new-cost__actions">
          <button className="new-cost__button" type="submit">Добавить расход</button>
        </div>
    </form>
  )
}

export default CostForm;
