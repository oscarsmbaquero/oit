import React from 'react'
import Alert from './Components/Alert/Alert'
import FirstText from './Components/FirstText/FirstText'

const Home = () => {
  return (
    <>
    <div className='firstMensaje'>
      <FirstText/>
    {/* </div>
    <div className='alert'> */}
      <Alert/>
    </div>
    
    </>
  )
}

export default Home