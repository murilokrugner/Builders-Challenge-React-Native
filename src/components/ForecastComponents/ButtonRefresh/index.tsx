import React, {useContext, useEffect} from 'react';
import {ContainerButtonRefresh, ImageRefresh} from './styles';
import refresh from '../../../assets/refresh.png';
import ConnectionInfoContext from '../../../contexts/ConnectionInfoContext';

interface Props {
  setPressButtonRefresh: (type: boolean) => void;
}

function ButtonRefresh({setPressButtonRefresh}: Props) {
  const connectionInfo = useContext(ConnectionInfoContext);

  function handleRefresh() {
    setPressButtonRefresh(true);
  }

  useEffect(() => {
    if (!connectionInfo) {
      handleRefresh();
    }
  }, [connectionInfo]);

  return (
    <ContainerButtonRefresh testID="container-button" onPress={handleRefresh}>
      <ImageRefresh source={refresh} />
    </ContainerButtonRefresh>
  );
}

export default ButtonRefresh;
