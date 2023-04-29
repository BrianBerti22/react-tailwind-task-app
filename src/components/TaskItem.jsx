import React from "react";
import Cross from "./icons/Cross";
import Check from "./icons/check";

const TaskItem = React.forwardRef(
    ({ task, deleteTask, updateTask, ...props }, ref) => {
        return (
            <article
                {...props}
                ref={ref}
                className="flex gap-4 border-b border-b-gray-300 px-4 py-4 "
            >
                {/* <button className=" inline-block h-5 w-5 flex-none rounded-full border-2">
                <Check />
            </button> */}

                <button
                    className={`h-5 w-5 flex-none rounded-full  border-2 ${
                        task.completed
                            ? " flex  items-center justify-center   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            : " inline-block  "
                    }`}
                    onClick={() => updateTask(task.id)}
                >
                    {task.completed && <Check />}
                </button>

                <p
                    className={`grow text-gray-600 transition-all duration-700 dark:text-gray-400 ${
                        task.completed && "line-through"
                    }`}
                >
                    {task && task.title}
                </p>

                <button
                    className=" flex-none"
                    onClick={() => deleteTask(task.id)}
                >
                    <Cross />
                </button>
            </article>
        );
    }
);
export default TaskItem;
