import React from 'react'
import WaitingBG from './WaitingBG';
import logo from '../../../assets/images/Logo.png';

function WaitingForm({role, connectCount}) {
    role = 'admin';
    connectCount = 23;
  return (
    <WaitingBG>
        <div style={{
            borderRadius: `25px`,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
            className="w-[420px] h-[480px] -translate-y-6 pt-10 pb-5 px-6 ml-auto mr-32 flex flex-col">
                <div className='flex justify-start items-center'>
                    <img src={logo} 
                        alt="logo" 
                        className='h-[85px] w-auto'
                    />
                    <p className="text-orangeColor font-semibold ml-4 text-2xl">SCIENCE TRACK</p>
                </div>
                <div style={{
                    borderRadius: '10px',
                }}
                    className='my-6 w-[180px] h-[6px] bg-orangeColor'
                />
                <h1 className='font-bold text-5xl text-[#4B4B4B] mb-6'>Привет, Весёлая пчела!</h1>
                {role === 'user' ?
                    <p className='text-2xl text-[#4B4B4B]'>Игра скоро начнётся, ты уже ознакомился с правилами? Самое время сделать это сейчас!</p>
                    : 
                    <div className='flex flex-col items-center justify-around h-full w-full'>
                        <button style={{
                            borderRadius: '16px'
                        }} 
                            className='bg-transparent border-green-500 text-green-500 hover:border-green-700 hover:text-green-700
                            border-4 w-full py-2 text-2xl font-semibold'
                            >
                                НАЧАТЬ ИГРУ
                        </button>
                        <button style={{
                            borderRadius: '16px',
                        }}
                            disabled
                            className='bg-transparent border-orangeColor text-orangeColor border-4 w-full py-2 text-2xl font-semibold'
                            >
                                ПОДКЛЮЧЕНО {connectCount}
                        </button>
                    </div>
                }
        </div>
    </WaitingBG>
  )
}

export default WaitingForm