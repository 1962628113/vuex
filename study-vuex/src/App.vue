<template>
  <div id="app">
    <router-view/>
    <button @click="increment">+</button>
    {{count}}
    <button @click="decrement">-</button>
    <div>{{doneTodos}}</div>
    <div>{{doneTodoNumber}}</div>
    <div v-if="doneTodoNumber">
      <button @click="incrementAsnyc">+</button>
      {{doneTodos}}
      <button @click="decrementAsnyc">-</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'App',
  computed:{
    ...mapState(['count']),
    ...mapGetters(['doneTodos', 'doneTodoNumber'])
  },
  methods: {
    ...mapMutations(['increment','decrement']),
    ...mapActions(['incrementAsnyc','decrementAsnyc'])
  }
}
</script>

<style>
</style>
