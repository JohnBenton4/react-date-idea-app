import './App.css';
import NumberList from './components/NumberList/NumberList';
import TypeList from './components/TypeList/TypeList';
import Search from './components/Search/Search';
import PriceList from './components/PriceList/PriceList';
import { useEffect, useState } from 'react';

function App() {
  //some sort of useState from TypeList to go into App.js and then go into Search
  //make the search result a variable for Search,
  //the child has to have access to the thing and be able to change the thing
  //Tpelist needs access to setSearchTerm and below it s
  //have to use props to get it to go where I want

  const [type, setType] = useState({})
  const [participants, setParticipants] = useState({})
  const [price, setPrice] = useState({})
  const [isTypeDisabled, setIsTypeDisabled] = useState(false)
  const [isParticipantsDisabled, setIsParticipantsDisabled] = useState(false)
  const [isPriceDisabled, setIsPriceDisabled] = useState(false)



  useEffect(() => {
    if (type.activity) {
      setIsParticipantsDisabled(true)
      setIsPriceDisabled(true)
    }

    if (participants.activity) {
      setIsTypeDisabled(true)
      setIsPriceDisabled(true)
    }

    if (price.activity) {
      setIsTypeDisabled(true)
      setIsParticipantsDisabled(true)
    }

    // console.log(isDisabled);
  },

  );

  //try to log anything, should see that typelist is disabled

  return (
    <div className="container">
      <h1>Date Idea App</h1>
      <TypeList onSetType={setType} type={type} isDisabled={isTypeDisabled} />
      <NumberList onSetParticipants={setParticipants} participants={participants} isDisabled={isParticipantsDisabled} />
      <PriceList onSetPrice={setPrice} price={price} isDisabled={isPriceDisabled} />
      <Search activity={type.activity || participants.activity || price.activity} />

    </div>
  );
}

export default App;


//the parent controls the state, the parent can send it to the child and the child receives it
//typelist send it back up to App.jss and Search receives the info