import axios from "axios";
import { useState } from "react";

const Form = ({ onAddTodo, items }) => {
	// State
	const [todo, setTodo] = useState("");
	const [showError, setShowError] = useState(false);

	const onSubmitHandler = async (event) => {
		event.preventDefault();

		// Show error if input is empty
		if (!todo) {
			setShowError(true);
			return;
		}

		// TODO: Send data to API
		try {
			await axios.post("http://localhost:4000/api/v1/todos", { content: todo });
		} catch (error) {
			console.log(error);
		}

		// Send data to App.js
		const newTodo = {
			id: items[items.length - 1]?.id + 1 || 1,
			content: todo,
		};

		// console.log(items[items.length - 1]?.id + 1);

		onAddTodo(newTodo);
		setTodo("");
	};

	const onChangeHandler = (event) => {
		const newValue = event.target.value;

		if (newValue.length > 0) setShowError(false);
		else setShowError(true);

		setTodo(newValue);
	};

	return (
		<form
			onSubmit={onSubmitHandler}
			className="w-full flex justify-center mb-5"
		>
			<input
				className={`w-10/12 sm:w-11/12 p-3 border-y-2 border-l-2 rounded-l-lg focus:border-blue-300  ${
					showError
						? "border-rose-500 placeholder:text-red-500"
						: "border-black"
				}`}
				placeholder="Enter a desscription"
				type="text"
				value={todo}
				onChange={onChangeHandler}
				name="todo"
				id="todo"
			/>
			<input
				className={`w-2/12 sm:w-1/12 border-2 bg-blue-600  text-white rounded-r-lg hover:bg-blue-400 text-4xl ${
					showError
						? "border-rose-500 text-red-500 bg-blue-300"
						: "border-black"
				}`}
				type="submit"
				value="+"
			/>
		</form>
	);
};

export default Form;
