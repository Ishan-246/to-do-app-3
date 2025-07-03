import React,{useState} from 'react';
function TodoApp() {
 const [task, setTask] = useState('');
 const [list, setList] = useState([]);
 const addTask = () => {
 if (task) {
 setList([...list, task]);
 setTask('');
 }
 };
 return (
 <div>
 <input value={task} onChange={e => setTask(e.target.value)} />
 <button onClick={addTask}>Add</button>
 <ul>
 {list.map((item, i) => <li key={i}>{item}</li>)}
 </ul>
 </div>
 );
}
