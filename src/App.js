import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 299.99,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e2",
      title: "Coffee",
      amount: 99.99,
      date: new Date(2023, 4, 14),
    },
    {
      id: "e3",
      title: "Sugar",
      amount: 299.79,
      date: new Date(2024, 3, 14),
    },
    {
      id: "e4",
      title: "Tooth Paste",
      amount: 29.99,
      date: new Date(2025, 2, 14),
    }
  ];
  return (
    <div>
      <h2>My Blog Page</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
