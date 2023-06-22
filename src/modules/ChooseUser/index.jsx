import React from 'react'
import ChooseBG from './Components/ChooseBG';
import WhiteForm from '../../components/WhiteForm/WhiteForm';
import InputForm from './Components/InputForm';

function ChooseUserIndex() {
  return (
    <ChooseBG>
      <WhiteForm title={"Привет, Весёлая пчела!"} body={"Напиши номер комнаты, к которой нужно подключиться"}>
        <InputForm/>
      </WhiteForm>
    </ChooseBG>
  )
}

export default ChooseUserIndex