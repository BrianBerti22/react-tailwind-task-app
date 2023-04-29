import { DragDropContext, Draggable } from "@hello-pangea/dnd";
import Header from "./components/Header";
import TaskComputed from "./components/TaskComputed";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import { useState } from "react";
import { useEffect } from "react";

// const InitialStateTasks = [
//     { id: 1, title: "complete online course", completed: true },
//     { id: 2, title: "jag around the park 3x", completed: false },
//     { id: 3, title: "10 minutes meditation", completed: false },
//     { id: 4, title: "read for 1 hour", completed: true },
//     { id: 5, title: "pick up groceries", completed: false },
//     { id: 6, title: "complete todo app on frontend mentor", completed: true },
// ];
const InitialStateTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [tasks, setTasks] = useState(InitialStateTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const createTask = (title) => {
        const newTask = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const updateTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };
    const computedItemLeft = tasks.filter((task) => !task.completed).length;

    const clearCompleteItem = () => {
        setTasks(tasks.filter((task) => !task.completed));
    };

    const [filter, setFilter] = useState("all");
    const filterTasks = () => {
        switch (filter) {
            case "all":
                return tasks;
            case "active":
                return tasks.filter((task) => !task.completed);
            case "completed":
                return tasks.filter((task) => task.completed);
            default:
                return tasks;
        }
    };
    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTasks((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    return (
        <div className=" duration-800 min-h-screen  bg-gray-300  bg-[url('./assets/images/bg-mobile-light.jpg')]   bg-contain bg-no-repeat transition-all dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]  md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />

            <main className=" container mx-auto mt-8 px-4 md:max-w-xl ">
                <TaskCreate createTask={createTask} />
                <DragDropContext onDragEnd={handleDragEnd}>
                    <TaskList
                        tasks={filterTasks()}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                        clearCompleteItem={clearCompleteItem}
                    />
                </DragDropContext>

                <TaskComputed
                    computedItemLeft={computedItemLeft}
                    clearCompleteItem={clearCompleteItem}
                />

                <TaskFilter setFilter={setFilter} />
            </main>

            <footer className=" mt-8 text-center text-gray-400">
                drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
