import CostItem from './CostItem';
import './CostsList.css';

const CostsList = ({costs}) => {
  
  if (costs.length === 0) {return <h2 className="cost-list__fallback">Нет расходов</h2>};
  
  return (
    <ul className="cost-list">
      {costs.map(x => 
          <CostItem  
            key={x.id} 
            date={x.date} 
            description={x.description} 
            amount={x.amount}/>
      )}
    </ul>
  )
  
}

export default CostsList;
