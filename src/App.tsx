import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    website:string
    note?: string

  }[]
}


function App() {
  const [people, setPeople] = useState<IState['people']>([
{ 
  name: 'Musa Lawrence',
  url: 'https://musalawrence.com/img/me.png',
  website: 'https://musalawrence.com',
  age: 165,
  note: 'Life is amazing! Stay tune',

},
{ 
  name: 'Dan Pena',
  url: 'https://musalawrence.com/img/dan-pena.png',
  website: 'https://www.danpena.co.uk/',
  age: 76,
  note: 'Just f*king DO IT!',

},
{ 
  name: 'Grant Cardone',
  url: 'https://musalawrence.com/img/grant.png',
  website: 'https://grantcardone.com/',
  age: 64,
  note: 'Take Action Immediately!',

}
   

  ])






  return (
    <div className="App">
    <h1>People attending the Event</h1>
    <List people={people}/>
    <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
