"use client"
import React, { useState } from 'react'
import Cards from './Cards'


const Input = () => {
    const [title, settitle] = useState("")
    const [dec, setdec] = useState("")
    const [mainTask, setmainTask] = useState([])
    let [count, setcount] = useState(0)

    if(count === 0){
        document.title = "TodoList"
    }
    const submitHend = (e) => {
        e.preventDefault();
        if(dec.length > 0 && title.length > 0 ){
            setmainTask([...mainTask, { title, dec }])
            count++
            document.title = `(${count}) TodoList`
            setcount(count)
        }else if(dec.length === 0 && title.length>0){
            alert("Pleace add Time")
        }else if(title.length === 0 && dec.length >0){
            alert("Pleace add Task")
        }else{
            alert("Pleace add Task and Time")
        }
        settitle("")
        setdec("")
    }

    const deletehendal = (i) => {
        let data = [...mainTask]
        data.splice(i, 1)
        setmainTask(data)
        count--
        document.title = `(${count}) TodoList`
        setcount(count)
    }

    let renderval = "No Data Avilable"

    if (mainTask.length > 0) {
        renderval = mainTask.map((obj, i) => {
            return (
                <>
                <div className='headingdiv'>
                        <h1>Task</h1>
                        <h1>Time</h1>
                        <h1>Delete</h1>
                    </div>
                <hr/>
                <li className='formli'>
                    <div className='lidiv'>
                        <h5  className='lidivh5'>{obj.title}</h5>
                        <h6  className='lidivh6'>{obj.dec}</h6>
                    </div>
                    <button onClick={() => {
                        deletehendal(i)
                    }} className='libutton'
                    >Delete</button>
                </li>
                <hr/>
                </>
            )
        })
    }
    return (
        <>
            <form  onSubmit={submitHend}>

                <input type='text' placeholder='Enter Task...' 
                    value={title}
                    onChange={(e) => {
                        // console.log(e.target.value);
                        settitle(e.target.value)
                    }} />

                <input type='time'
                    value={dec}
                    onChange={(e) => {
                        setdec(e.target.value)
                    }} />
                <button>Add Task</button>
            </form>

            <Cards renderval={renderval} />
        </>
    )
}

export default Input