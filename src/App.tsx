import { Fragment, useEffect, useState } from 'react';
import BaseApp from './BaseApp';
import Loader from './components/Loader/Loader';
import { fetchContact } from './store/slices/contacts';
import { useDispatch } from 'react-redux';


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

  return (
    <Fragment>
      {loading ? <Loader/> : <BaseApp/>}
    </Fragment>
  )
}

export default App
