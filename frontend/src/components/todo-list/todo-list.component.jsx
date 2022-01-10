// Components
import TodoItem from "../todo-item/todo-item.component";

// Styles
import "./todo-list.styles.css";

const TodoList = ({ items, onEditTodo, onDeleteTodo }) => {
	return (
		<>
			{/* Render list of todos */}
			<section className="scroll h-[45vh] w-full overflow-auto">
				{items.length > 0 &&
					items.map(({ id, content }) => (
						<TodoItem
							key={id}
							id={id}
							content={content}
							onEditHandler={onEditTodo}
							onDeleteHandler={onDeleteTodo}
						/>
					))}

				{/* Show message if list is empty */}
				{items.length === 0 && <p>No pending To Do's</p>}
			</section>
		</>
	);
};

export default TodoList;
