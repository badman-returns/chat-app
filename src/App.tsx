import { Fragment, useEffect, useState } from 'react';
import BaseApp from './BaseApp';
import Loader from './components/Loader/Loader';
import { fetchContact } from './store/slices/contacts';
import { useDispatch } from 'react-redux';
import { getLatestMessageById } from './utils/getLatestMessage';


function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  async function getContacts() {
    await dispatch(fetchContact());
    setLoading(false);
  }

  useEffect(() => {
    getContacts();
  }, []);

  useEffect(() => {
    let incrementalId = 0;
    const intervalId = setInterval(() => {
      getLatestMessageById(incrementalId);
      if(incrementalId < 15){
        incrementalId++
      } else {
        incrementalId = 0;
      }
    }, 20000);
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <Fragment>
      {loading ? <Loader /> : <BaseApp />}
    </Fragment>
  )
}

export default App
