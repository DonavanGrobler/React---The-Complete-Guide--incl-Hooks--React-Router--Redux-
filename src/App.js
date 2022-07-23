import ExpenseItem from "./components/ExpenseItem";

function App() {
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
    },
  ];

  return (
    <div>
      <h2>My Blog Page</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
