const TaskComputed = ({ computedItemLeft, clearCompleteItem }) => {
    return (
        <section className="flex justify-between gap-4 rounded-b-md bg-white px-4 py-4 text-gray-400 transition-all duration-700 dark:bg-gray-800">
            <span>{computedItemLeft} item left</span>
            <button onClick={clearCompleteItem}>clear complete</button>
        </section>
    );
};

export default TaskComputed;
