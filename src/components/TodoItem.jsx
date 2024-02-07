import { Checkbox, Input } from 'antd'
import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDelete, MdOutlineDone } from 'react-icons/md'

const TodoItem = ({ todo, deleteTodoDate, editeTodoDate }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [editValue, setEditValue] = useState(todo.todo)
	const [isComplited, setIsComplited] = useState(todo.is_completed)
	function editig(id, editValue, isComplited) {
		console.log(id, editValue, isComplited)
		return editeTodoDate(id, editValue, isComplited)
	}
	console.log(todo)
	return (
		<div>
			<Checkbox
				checked={isComplited}
				onChange={() => {
					setIsComplited(!isComplited)
					editeTodoDate(todo.id, editValue, !isComplited)
				}}
			/>

			{isEditing ? (
				<Input
					placeholder='Basic usage'
					value={editValue}
					onChange={e => setEditValue(e.target.value)}
				/>
			) : (
				<span>{todo.todo}</span>
			)}
			{!isEditing ? (
				<CiEdit onClick={() => setIsEditing(true)} />
			) : (
				<MdOutlineDone
					onClick={() => {
						setIsEditing(false)

						return editig(todo.id, editValue, isComplited)
					}}
				/>
			)}

			<MdDelete onClick={() => deleteTodoDate(todo.id)} />
		</div>
	)
}

export default TodoItem
