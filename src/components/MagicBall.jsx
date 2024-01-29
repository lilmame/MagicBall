import './MagicBall.css'
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react'
// const answer=[
//     'Бесспорно',
//     'Мне кажется — «да»',
//     'Пока не ясно, попробуй снова',
//     'Даже не думай',
//     'Предрешено',
//     'Вероятнее всего',
//     'Спроси позже',
//     'Мой ответ — «нет»',
//   ]

export default function MagicBall(){
    let [answer, setAnswer] = useState('')
    let [pending, setPending] = useState('false')
    let URL  = `https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 20)}`
    useEffect(()=>{
        if(pending){
            fetch(URL)
        .then(response=>response.json())
        .then(( data )=>{
            setPending(false)
            setAnswer(data.title)
        })
        }
        
    },[pending])
    const generateAnswer = () => {
    setPending(true)
  }
    return(
        <div className='magic-ball' style={{
            
        }}>
            {answer} 
            <Button onClick={generateAnswer}variant="contained">pls tell me</Button>
        </div>
    )
}