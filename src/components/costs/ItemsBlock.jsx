import CostItem from './CostItem';
import Card from '../UI/Card'
import './ItemsBlock.css';

function ItemsBlock({data}) {
  let cards = [];
  for (let d of data) {
    cards.push(<CostItem date={d.date} description={d.description} amount={d.amount}></CostItem>);
  }

  return <Card className="costs">{cards}</Card>;
}

export default ItemsBlock;
