import { useState } from 'react';
import Card from '../UI/Card';
import './CostItem.css';

function CostItem({date, description, amount}) {
  const day = date.toLocaleString('ru-RU', {day: "2-digit"});
  const month = date.toLocaleString('ru-RU', {month: "long"});
  const year = date.getFullYear();

  const [description_state, setDescription] = useState(description);

  const changeDescription = () => {
    setDescription(prompt('new value: '));
  };
  
    return ( 
      <Card className="cost-item">
        <div className="cost-date">
          <div className="cost-date__day">{day}</div>
          <div className="cost-date__month">{month}</div>
          <div className="cost-date__year">{year}</div>
        </div>
        <div className="cost-item__description">
          <h2>{description_state}</h2>
          <div className="cost-item__price">${amount}</div>
        </div>
        <button onClick={changeDescription}>EDIT</button>
      </Card>
    )
}

export default CostItem;
