import { useState } from 'react';
import NewCost from './components/NewCost/NewCost'
import ItemsBlock from './components/Сosts/ItemsBlock';

  const INITIAL_COSTS = [
    {
      id: 1,
      date: new Date(2023, 1, 12),
      description: 'Кроссовки',
      amount: '100.20'
    }
  ];

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  
  return (
    <div>
      <NewCost onSave={addCostHandler}/>
      <ItemsBlock data={costs} />
    </div>
  )
}

export default App;
