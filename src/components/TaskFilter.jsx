const TaskFilter = ({ setFilter, filter }) => {
    return (
        <section className=" container mx-auto mt-8 ">
            <div className="  flex justify-center gap-4 rounded-md bg-white p-4 transition-all duration-700 dark:bg-gray-800">
                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-600"
                            : "text-gray-400 hover:text-blue-600"
                    }`}
                    onClick={() => setFilter("all")}
                >
                    all
                </button>
                <button
                    className={`${
                        filter === "active"
                            ? "text-blue-600"
                            : "text-gray-400 hover:text-blue-600"
                    }`}
                    onClick={() => setFilter("active")}
                >
                    active
                </button>
                <button
                    className={`${
                        filter === "completed"
                            ? "text-blue-600"
                            : "text-gray-400 hover:text-blue-600"
                    }`}
                    onClick={() => setFilter("completed")}
                >
                    completed
                </button>
            </div>
        </section>
    );
};

export default TaskFilter;
