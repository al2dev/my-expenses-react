import { useState } from 'react';
import CostsFilter from './CostsFilter';
import CostItem from './CostItem';
import Card from '../UI/Card'
import './ItemsBlock.css';

function ItemsBlock({data}) {

  const [selectedYear, setSelectedYear] = useState('2023');
  
  const cards = [];
  for (const d of data) {
    cards.push(<CostItem date={d.date} description={d.description} amount={d.amount}></CostItem>);
  }

  const filterCost = (actualYear) => {
    setSelectedYear(actualYear);
  }

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={filterCost} />
      {cards}
    </Card>
  )
}

export default ItemsBlock;
