import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState(" ")
  const [desc, setDesc] = useState(" ")
  const [mainTask, setMainTask] = useState([])

  const eventHandler = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(desc)
    setMainTask([...mainTask, { title, desc }]);
    console.log(mainTask)
    setTitle(" ")
    setDesc(" ")
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1) //splice is use to delete particular index element
    setMainTask(copyTask)


  }

  let renderTask = <h2>No task available</h2>

  if (mainTask.length > 0) {

    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='first'>
          <div className='desc'>
            <h3>{t.title}</h3>
            <h4>{t.desc}</h4>

          </div>
          <button  className='btn2' onClick={() => { deleteHandler(i) }}>Delete</button>

        </li>
      );
    });
  }
  return (
    <>
      <h1>Shrutika's  Todo  List</h1>
      <form onSubmit={eventHandler}>
        <div>

          <input value={title} type='text' placeholder='Title '
            onChange={(e) => {
              setTitle(e.target.value)
            }}></input>
          <input type='text' placeholder='Description ' value={desc}
            onChange={(e) => {
              setDesc(e.target.value)
            }}></input>
        </div>
        <button className='btn'>Add task</button>
      </form>
      <div className='list'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default App
