import { ComputedRef } from 'vue'

type Todo = {
    id: string;
    title: string;
    done: boolean;
}

type TodoState = {
    newTodo: string;
    editingTodo: Todo | undefined;
}

type FilterItem = {
    label: string;
    value: string;
}

type FilterState = {
    filterItems: FilterItem[];
    visibility: string;
    filteredTodos: ComputedRef<any>;
}

type Filters = {
    [key: string]: Function;
}

export type { Todo, TodoState, FilterState, FilterItem, Filters }