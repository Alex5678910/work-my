const VISIBILITY_FILTERS = {
    ALL: "all",
    COMPLETED: "completed",
    INCOMPLETE: "incomplete"
};

export const getTodosState = store => store.todoCr;

export const getTodoList = store =>
    getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
    getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};


export const getTodos = store =>
    getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
};
