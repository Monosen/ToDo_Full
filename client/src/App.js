import { useState, useEffect } from "react";
import axios from "axios";

// Components
import Form from "./components/form/form.component";
import TodoList from "./components/todo-list/todo-list.component";

import "./App.css";

import waves from "./svg/waves.svg";
const App = () => {
	// State
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		if (todos.length < 1) {
			fetchTodos();
		}
		setTodos((prevState) => [...prevState, todo]);
	};

	const fetchTodos = async () => {
		// TODO: Fetch data from API
		try {
			const res = await axios.get("/api/v1/todos");
			const resTodos = res.data.data.todos;
			setTodos(resTodos);
		} catch (error) {
			console.log(error);
		}
	};

	const editTodo = async (id, newContent) => {
		// TODO: Send data to API
		try {
			await axios.patch(`/api/v1/todos/${id}`, {
				content: newContent,
			});

			setTodos((prevState) => {
				const currentTodos = prevState;

				const todoIndex = currentTodos.findIndex((todo) => +todo.id === +id);

				const updatedTodo = currentTodos[todoIndex];

				updatedTodo.content = newContent;

				currentTodos[todoIndex] = updatedTodo;

				return currentTodos;
			});
		} catch (error) {
			console.log(error);
		}
	};

	const deleteTodo = async (id) => {
		// TODO: Remove data from API
		try {
			await axios.delete(`/api/v1/todos/${id}`);

			setTodos((prevState) => {
				const currentTodos = prevState;

				const updatedTodos = currentTodos.filter((todo) => +todo.id !== +id);

				return [...updatedTodos];
			});
		} catch (error) {
			console.log(error);
		}
	};

	// When component is mounted, fetch todos
	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<div className="app min-h-screen w-full flex items-center flex-col">
			<div className="container px-3 mx-auto mt-12 ">
				<h1 className="mb-10 text-7xl text-center text-white uppercase">
					ToDo App
				</h1>
				<main className="w-full mx-auto max-w-xl bg-white py-4 px-10 shadow-lg rounded-xl relative z-50">
					<Form items={todos} onAddTodo={addTodo} />
					<TodoList
						onDeleteTodo={deleteTodo}
						onEditTodo={editTodo}
						items={todos}
					/>
				</main>
			</div>
			{/* background waves */}
			<div className="absolute bottom-0 inset-x-0">
				<img src={waves} alt="waves" />
				<span className="w-full h-[35vh] bg-white block"></span>
			</div>
			{/* firefox */}
			<div className="absolute bottom-0 inset-x-0">
				<span className="w-full h-[36vh] bg-white block"></span>
			</div>
		</div>
	);
};

export default App;
