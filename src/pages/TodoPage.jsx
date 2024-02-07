import React, { useState } from 'react'
import {
	useAddTodoDateMutation,
	useDeleteTodoDateMutation,
	useEditeTodoDateMutation,
	useGetDataQuery,
} from '../app/api/tasksApi'
import TodoItem from '../components/TodoItem'

function TodoPage() {
	const { data, isLoading, isError, error } = useGetDataQuery()
	const [addTodoDate] = useAddTodoDateMutation()
	const [editeTodoDate] = useEditeTodoDateMutation()
	const [deleteTodoDate] = useDeleteTodoDateMutation()
	const [val, setVal] = useState('')

	if (isLoading) {
		return <p>Loading...</p>
	} else if (isError) {
		return <p>{error.message}</p>
	}
	return (
		<div>
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
						setVal('')
					}}
				>
					Add Task
				</button>
			</form>
			<ul>
				{data?.map(todo => (
					<TodoItem
						key={todo.id}
						todo={todo}
						deleteTodoDate={deleteTodoDate}
						editeTodoDate={editeTodoDate}
					/>
				))}
			</ul>
		</div>
	)
}

export default TodoPage
