import React, {useEffect, useState} from 'react';
import Routes from './routes';
import location from './permissions/location';
import ConnectionInfo from './components/ConnectionInfo';
import ConnectionInfoContext from './contexts/ConnectionInfoContext';

function App() {
  const [isConnectionAlert, setIsConnectionAlert] = useState(false);

  useEffect(() => {
    location();
  }, []);

  return (
    <ConnectionInfoContext.Provider value={isConnectionAlert}>
      <Routes />
      <ConnectionInfo
        isConnectionAlert={isConnectionAlert}
        setIsConnectionAlert={setIsConnectionAlert}
      />
    </ConnectionInfoContext.Provider>
  );
}

export default App;
