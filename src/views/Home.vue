<template>
  <div>
    <Header :title="title" />
    <p v-bind:key="todo.id" v-for="todo in todos">{{todo.title}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import { Todo } from '@/entity/Todos';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class Home extends Vue {
  @Getter('allTodos') todos!: Todo[];

  @Action('getTodos') getTodosAction!: () => void;

  title: string = 'Home View';

  mounted() {
    this.getTodosAction();
  }
}
</script>
