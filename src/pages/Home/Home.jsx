import React from 'react'
import Alert from './Components/Alert/Alert'
import FirstText from './Components/FirstText/FirstText'
import "../../pages/Home/Components/Alert/Alert.scss";

const Home = () => {
  return (
    <>
    <div className='firstMensaje'>
      <FirstText/>
      <Alert/>
    </div>
    </>
  )
}

export default Home