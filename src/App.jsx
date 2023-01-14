import { useState } from 'react';
import NewCost from './components/NewCost/NewCost'
import ItemsBlock from './components/costs/ItemsBlock';

function App() {
  const addCostHandler = (event) => {
    console.log(event)
  };
  
  const data = [
    {
      id: 1,
      date: new Date(2023, 1, 12),
      description: 'Кроссовки',
      amount: '100.20'
    },
    {
      id: 2,
      date: new Date(2023, 1, 7),
      description: 'Худи',
      amount: '75.50'
    },
  ]
  
  return (
    <div>
      <NewCost onSave={addCostHandler}/>
      <ItemsBlock data={data} />
    </div>
  )
}

export default App;
