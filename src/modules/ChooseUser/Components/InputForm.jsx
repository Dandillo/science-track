import React, { useState } from 'react'
import './InputForm.scss'
import { useNavigate } from 'react-router-dom'
import './ChooseUserAdaptive.scss';

function InputForm() {

    const navigate = useNavigate()

    const [wrongRoom, setWrongRoom] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/waiting')
        // setWrongRoom(true)
    }

    return (
        wrongRoom
        ? 
        <form action="submit" className='mt-12 relative send-input'>
            <input type="text"
                className='bg-transparent border-b-[3px] border-red-500 
                text-2xl text-[#4B4B4B] pb-4 font-regular'
                placeholder='№ КОМНАТЫ'
            />
            <button type='submit'
                className='buttonRedStyle'
                onClick={handleSubmit}
            >
                ПРИСОЕДИНИТЬСЯ
            </button>
            <p className='text-red-500 text-[20px] mt-4'>*Неверный номер комнаты</p>
        </form>
        :
        <form action="submit" className='mt-12 relative send-input'>
            <input type="text"
                className='bg-transparent border-b-[3px] border-[#4B4B4B] 
                text-2xl font-semibold text-[#4B4B4B] pb-4 font-regular'
                placeholder='№ КОМНАТЫ'
            />
            <button type='submit'
                className='buttonStyle'
                onClick={handleSubmit}
            >
                ПРИСОЕДИНИТЬСЯ
            </button>
        </form>
    )
}

export default InputForm