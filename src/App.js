import logo from './logo.svg';
import './App.css';
import { Book } from './Components/Book';
import { User } from './Components/task1';
import { UserData } from './Components/task2';
import { UserData2 } from './Components/task3';
import { UserEf } from './Components/task4Ef';
import { MyTimer } from './Components/Timer';
import { CardList } from './Components/Card';
import { Quote } from './Components/Card2';

const obj = {name:'Irina',age:25};
function App() {
  return (
    <div className="App">
      <header className="App-header">


      {/* <User></User> */}
   {/* <UserData></UserData> */}
     {/* <UserData2 user={obj}></UserData2> */}
     {/* <UserEf></UserEf> */}
     {/* <MyTimer></MyTimer> */}
     {/* <Quote></Quote> */}
     <Book text = '" Объект state описывает внутреннее состояние компонента, он похож на props за тем исключением, что состояние определяется внутри компонента и доступно только из компонента. Если props представляет входные данные,которые передаются в компонент извне, то состояние хранит такие объекты, которые создаются в компоненте и полностью зависят от компонента."'></Book>

      </header>
    </div>
  );
}

export default App;
