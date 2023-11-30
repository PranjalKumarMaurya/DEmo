import ToDo from './components/ToDo';
import List from './components/List';
import Scientists from './components/People/Scientists';
import Select from './components/Form/select';
import './App.css';

function App() {
  return (
    <div className="App">
     <ToDo />
     <List />
     <Scientists />
     <Select />
    </div>
  );
}

export default App;
