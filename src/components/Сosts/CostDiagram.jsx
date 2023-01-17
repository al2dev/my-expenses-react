import Diagram from "../Diagram/Diagram";

const CostDiagram = ({ costs }) => {
  const dataSets = [{ label: 'jan', value: 0 },
  { label: 'feb', value: 0 },
  { label: 'mar', value: 0 },
  { label: 'apr', value: 0 },
  { label: 'may', value: 0 },
  { label: 'jun', value: 0 },
  { label: 'jul', value: 0 },
  { label: 'aug', value: 0 },
  { label: 'sep', value: 0 },
  { label: 'oct', value: 0 },
  { label: 'nov', value: 0 },
  { label: 'dec', value: 0 }];
  
  for (const cost of costs) {
    dataSets[cost.date.getMonth()].value += cost.amount;
  };
  
  return <Diagram dataSets={dataSets} />
}

export default CostDiagram;
