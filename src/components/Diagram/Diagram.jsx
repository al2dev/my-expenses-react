import DiagramRow from './DiagramRow';
import './Diagram.css';

const Diagram = ({ dataSets })  => {
  const values = dataSets.map(x => x.value);
  const maxValue = Math.max(...values);

  return (
    <div className="diagram">
      {dataSets.map(x =>
        <DiagramRow
          key={x.label}
          value={x.value}
          max={maxValue}
          label={x.label} />
      )}
    </div>
  )
};

export default Diagram;
