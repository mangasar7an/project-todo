import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const getAuthToken = () => {
	return '35|3bvSwTPhmBH8J1Ns0twGYobHNmEsflU3I9cB0U4pd3c4fffb'
}

export const tasksApi = createApi({
	reducerPath: 'tasksApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://menua7lj.beget.tech',
		prepareHeaders: (headers, { getState }) => {
			const token = getAuthToken()
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	tagTypes: ['Todos'],
	endpoints: builder => ({
		getData: builder.query({
			query: () => ({ url: '/api/todo' }),
			providesTags: ['Todos'],
		}),
		addTodoDate: builder.mutation({
			query: title => ({
				url: '/api/todo',
				method: 'POST',
				body: {
					todo: title,
					is_completed: false,
				},
			}),
			invalidatesTags: ['Todos'],
		}),
		editeTodoDate: builder.mutation({
			query: (id, value, isCompleted) => ({
				url: `/api/todo/${id}`,
				method: 'PUT',
				body: {
					todo: value,
					is_completed: isCompleted,
				},
			}),
			invalidatesTags: ['Todos'],
		}),
		deleteTodoDate: builder.mutation({
			query: id => ({
				url: `/api/todo/${id}`,
				method: 'DELETE',
				body: id,
			}),
			invalidatesTags: ['Todos'],
		}),
	}),
})

export const {
	useGetDataQuery,
	useAddTodoDateMutation,
	useDeleteTodoDateMutation,
	useEditeTodoDateMutation,
} = tasksApi
