# To-Do App - 3

A simple to-do list app made in React that allows users to add and remove tasks.

##  Features
- Add new tasks
- Delete tasks
- Live task list
- useState-based state management

##  Tech Stack
- React.js
- JavaScript
- CSS

## How to Run
1. Clone this repo
2. Run `npm install`
3. Run `npm start`


## OUTPUT OF THIS CODE 

<img width="588" height="646" alt="Screenshot (103)" src="https://github.com/user-attachments/assets/80e47b96-ae13-4385-873a-d92e1b7c6443" />




## WHAT I LEARNED FROM THIS CODE 

- missed on writing a important line [  placeholder="ENTER A TASK" ]

- did some mistake in syntax




 ## EXPLATION OF CODE 


-a)  function TodoApp()     :     defines a React component named TodoApp.



-b)  const [task, setTask] = useState("");    :   creates a state variable called task (initially empty). setTask updates this variable.




-c)  const [list, setList] = useState([]);     :     creates a state variable called list (initially an empty array). setList updates this list.




-d)  const addTask = () => {   :    Defines a function named addTask as an arrow function. This function will be called to add a new task to the list.




-e)    if (task) {        :    Checks if the task variable is not empty (truthy). If task has some text, the code inside the if block runs.




-f)    setList([...list, task])      :     Updates the list state by creating a new array that contains all existing tasks (...list) and adds the new task at the end.




-g)         setTask("");             :      Clears the task input by setting it back to an empty string, ready for a new task to be entered.




-h)         <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="ENTER A TASK"
        onChange={(e) => setTask(e.target.value)}     :   

 Sets an event handler that updates the task state whenever the user types. e.target.value gets the current text in the input box.




-i)     placeholder="ENTER A TASK"  :   Displays the placeholder text "ENTER A TASK" inside the input box when it is empty, guiding the user.




-j)     <button onClick={addTask}>Add</button>     :     Creates a button labeled "Add". When clicked, it calls the addTask function to add the current input as a new task.


-k)      {list.map((item, i) => (     :       Begins a JavaScript expression inside JSX, using list.map() to iterate over each element in the list array.For each element, it provides item (the current task) and i (the index of the item in the array).The arrow function returns JSX for each item.




-L)      <  li key={i}>{item}</li   >      :      Creates a <li> element for each task.key={i} assigns a unique key based on the index, which helps React optimize rendering.{item} displays the task text inside the list item.






##  Author
Made with 💻 by Ishan-246
