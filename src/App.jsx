import ItemsBlock from './components/costs/ItemsBlock';

function App() {
  const data = [
    {
      date: new Date(2023, 1, 12),
      description: 'Кроссовки',
      amount: '100.20'
    },
    {
      date: new Date(2023, 1, 7),
      description: 'Худи',
      amount: '75.50'
    },
  ]
  
  return (
    <ItemsBlock data={data}></ItemsBlock>
  )
}

export default App;
