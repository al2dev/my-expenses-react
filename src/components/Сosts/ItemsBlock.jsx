import { useState } from 'react';
import CostsFilter from './CostsFilter';
import CostsList from './CostsList';
import Card from '../UI/Card'
import './ItemsBlock.css';
import CostDiagram from './CostDiagram';

function ItemsBlock({ data }) {

  const [selectedYear, setSelectedYear] = useState('2023');
  const filterCost = (actualYear) => {
    setSelectedYear(actualYear);
  };

  const filteredCosts = data.filter(x => x.date.getFullYear() == selectedYear);

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={filterCost} />
      <CostDiagram costs={filteredCosts} />
      <CostsList costs={filteredCosts} />
    </Card>
  )
}

export default ItemsBlock;
