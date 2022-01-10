import { useState } from "react";

// Components
import Button from "../UI/button/button.component";

const TodoItem = ({ id, content, onEditHandler, onDeleteHandler }) => {
	// State
	const [showEditForm, setShowEditForm] = useState(false);
	const [showError, setShowError] = useState(false);
	const [editContent, setEditContent] = useState(content);
	const [editContentTwo, setEditContentTwo] = useState("");

	const showEditFormHandler = () => {
		setEditContentTwo(editContent);
		setShowEditForm((prevState) => !prevState);
	};

	const onChangeHandler = (event) => {
		const updatedValue = event.target.value;
		if (updatedValue.length > 0) {
			setShowError(false);
		} else {
			setShowError(true);
		}
		setEditContentTwo(updatedValue);
	};

	const onEditTodoHandler = () => {
		if (!showError) {
			onEditHandler(id, editContentTwo);
			setEditContent(editContentTwo);
			setShowEditForm(false);
		}
	};

	const onDeleteTodoHandler = () => {
		onDeleteHandler(id);
	};

	return (
		<div className="bg-blue-300 py-3 px-3 rounded-xl mt-2">
			{!showEditForm ? (
				<p className="w-10/12 mb-3 text-xl">{editContent}</p>
			) : (
				<div className="flex flex-row justify-around items-center h-12">
					<input
						type="text"
						onChange={onChangeHandler}
						value={editContentTwo}
						placeholder={content}
						className="w-10/12 rounded p-1 mr-1 sm:mx-0"
					/>

					<Button label="edit" type="submit" onClick={onEditTodoHandler} />
				</div>
			)}

			{/* Action Buttons */}
			<div className="flex justify-around items-center">
				<Button
					onClick={showEditFormHandler}
					type="button"
					label={showEditForm ? "Cancel" : "edit"}
				/>
				<Button onClick={onDeleteTodoHandler} type="button" label="delete" />
			</div>
		</div>
	);
};

export default TodoItem;
