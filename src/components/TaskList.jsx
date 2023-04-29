import { Droppable, Draggable } from "@hello-pangea/dnd";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
    return (
        <Droppable droppableId="droppable">
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className=" mt-8 overflow-hidden rounded-t-md bg-white  transition-all duration-700 dark:bg-gray-800 "
                >
                    {tasks.map((task, index) => (
                        <Draggable
                            key={task.id}
                            index={index}
                            draggableId={`${task.id}`}
                        >
                            {(provided) => (
                                <TaskItem
                                    task={task}
                                    deleteTask={deleteTask}
                                    updateTask={updateTask}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                />
                            )}
                        </Draggable>
                    ))}

                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TaskList;
