import { useState } from 'react'
import { useAddTodoDateMutation } from '../app/api/tasksApi'
const [addTodoDate] = useAddTodoDateMutation()
const [val, setVal] = useState('')
function TodoInput() {
	return (
		<form onSubmit={e => e.preventDefault()}>
			<input
				type='text'
				value={val}
				placeholder='Add to Tasks'
				onChange={e => setVal(e.target.value)}
			/>
			<button
				onClick={() => {
					addTodoDate(val)
				}}
			>
				Add Task
			</button>
		</form>
	)
}

export default TodoInput
