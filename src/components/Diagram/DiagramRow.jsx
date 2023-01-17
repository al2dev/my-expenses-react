import './Diagram.css';

const DiagramRow = ({ value, max, label }) => {

  let barFillHeight = value == 0 ? '0%' : value / max * 100 + '%';

  return (
    <div className="diagram-bar">
      <div className="diagram-bar__inner">
        <div className="diagram-bar__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="diagram-bar__label">{label}</div>
    </div>
  )
}

export default DiagramRow;
