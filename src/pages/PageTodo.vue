<template>
  <q-page class="q-pa-md">
    <template>
      <q-list separator bordered>
        <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key"></task>
      </q-list>
    </template>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("tasks", ["tasks"])
  },
  components: {
    task: require("components/Tasks/Task.vue").default
  }
};
</script>

<style>
</style>
