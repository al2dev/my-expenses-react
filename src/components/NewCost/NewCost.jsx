import { useState } from 'react';
import CostForm from './CostForm';
import "./NewCost.css";

const NewCost = (props) => {

  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => {setShowForm(true)};
  const hideFormHandler = () => {setShowForm(false)};
  
  const saveCostHandler = (inputCostData) => {
    hideFormHandler();
    const costData = {
      ...inputCostData,
      id: Math.random()
    }
    props.onSave(costData);
  }

  if (!showForm) {
    return <div className="new-cost"><button className="new-cost__button" onClick={showFormHandler}>Добавить расход</button></div>
  };
  
  return (
    <div className="new-cost">
      <CostForm onSaveData={saveCostHandler}/>
      <button className="new-cost__button" onClick={hideFormHandler}>Отмена</button>
    </div>
  )
}

export default NewCost
