// Icons
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const Button = ({ onClick, type, label }) => {
	return (
		<button
			className="uppercase font-bold bg-purple-500 py-1 px-3 rounded-lg"
			onClick={onClick}
			type={type || "submit"}
		>
			{label === "edit" ? (
				<BiEditAlt className="text-2xl text-white" />
			) : label === "delete" ? (
				<BiTrash className="text-2xl text-white" />
			) : (
				<CgClose className="text-2xl text-white" />
			)}
		</button>
	);
};

export default Button;
