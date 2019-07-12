import { ActionContext } from 'vuex';
import axios from 'axios';

import { RootState } from '@/entity';
import { Todos, TodosState } from '@/entity/Todos';

const state: TodosState = {
  todos: [],
};

const getters = {
  allTodos: ({ todos }: TodosState) => todos,
};

const actions = {
  async getTodos(action: ActionContext<TodosState, RootState>) {
    const { commit } = action;
    const response = await axios.get('/todos?_limit=5&_sort=id&_order=desc');
    commit('setTodos', response.data);
  },
};

const mutations = {
  setTodos: (s: TodosState, todos: Todos[]) => {
    s.todos = todos;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
