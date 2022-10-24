import './App.css';
import NumberList from './components/NumberList/NumberList';
import TypeList from './components/TypeList/TypeList';
import Search from './components/Search/Search';
import PriceList from './components/PriceList/PriceList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';

function App() {

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
  },

  []
  );

  return (
    <div className="container">
      <div><h1 className="title">Date Idea App</h1></div>
      <div className="searchFields">
        <br></br>
        <div className="type"><h2> What Type Of Date Are You Looking For? </h2>
          <TypeList onSetType={setType} type={type} isDisabled={isTypeDisabled} />
        </div>
        <div className="number"><h2> How Many People Are Going on This Date? </h2>
          <NumberList onSetParticipants={setParticipants} participants={participants} isDisabled={isParticipantsDisabled} />
        </div>
        <div className="price"><h2> How Much Do You Want To Spend? </h2>
          <PriceList onSetPrice={setPrice} price={price} isDisabled={isPriceDisabled} />
        </div>
      </div>
      <br></br>
      <Search activity={type.activity || participants.activity || price.activity} />
    </div>
  );
}

export default App;


//the parent controls the state, the parent can send it to the child and the child receives it
//typelist send it back up to App.jss and Search receives the info