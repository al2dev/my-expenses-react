import CostForm from './CostForm';
import "./NewCost.css";

const NewCost = (props) => {
  const saveCostHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random()
    }
    props.onSave(costData);
  }
  
  return (
    <div className="new-cost">
      <CostForm onSaveData={saveCostHandler} />
    </div>
  )
}

export default NewCost
