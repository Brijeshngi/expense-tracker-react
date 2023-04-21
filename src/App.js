import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';
import TransactionList from './Components/TransactionList';
import AddTransactions from './Components/AddTransactions';
import { GlobalProvider } from './Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
        <Header/>
        <div className='container'>
          <Balance/>
          <IncomeExpense/>
          <TransactionList/>
          <AddTransactions/>
        </div>
    </GlobalProvider>
  );
}

export default App;
