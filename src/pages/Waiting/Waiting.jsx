import React from 'react';
import WaitingFormIndex from '../../modules/WaitingForm';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';

function Waiting() {
  useAuthRedirect();
  return <WaitingFormIndex/>
}

export default Waiting