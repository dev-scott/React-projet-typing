import React from 'react'
import "./Logout.scss"
import { Player } from '@lottiefiles/react-lottie-player';


const Logout = () => {
  return (
    <div className='contain_logout'>
        
                                <Player src='https://assets8.lottiefiles.com/packages/lf20_vmlm0zew.json' loop autoplay style={{ height: '400px', width: '300px' }} />

                            <div className='btn_anime'> <a href="https://typing-nine-zeta.vercel.app/"> <button className='btn_begin'  >  Se deconnecter  </button> </a> </div>

    </div>
  )
}

export default Logout