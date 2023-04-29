import { useState } from "react";

const TaskCreate = ({ createTask }) => {
    const [title, setTitle] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        if (title.trim().length > 0) {
            createTask(title);
            return setTitle("");
        }
        setTitle("");
    };

    return (
        <form
            onSubmit={handlesubmit}
            className=" flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 transition-all duration-700 dark:bg-gray-800  "
        >
            <span className=" inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className=" w-full text-gray-400 outline-none transition-all duration-700 dark:bg-gray-800"
                type="text"
                placeholder="Create a new task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TaskCreate;
