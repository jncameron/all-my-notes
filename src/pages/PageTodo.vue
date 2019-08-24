<template>
  <q-page class="q-pa-md">
    <template>
      <q-list separator bordered>
        <q-item
          v-for="task in tasks"
          :key="task.id"
          @click="task.completed = !task.completed"
          :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
          clickable
          v-ripple
        >
          <q-item-section side top>
            <q-checkbox v-model="task.completed" />
          </q-item-section>

          <q-item-section>
            <q-item-label :class="{ 'text-strikethrough' : task.completed}">{{task.name}}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <div class="row">
              <div class="column justify-center">
                <q-icon name="event" size="18px" class="q-mr-xs" />
              </div>
              <div class="column">
                <q-item-label class="row justify-end" caption>{{task.dueDate}}</q-item-label>
                <q-item-label class="row justify-end" caption>
                  <small>{{task.dueTime}}</small>
                </q-item-label>
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </template>
  </q-page>
</template>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Go to Shop",
          completed: false,
          dueDate: "2019/05/12",
          dueTime: "16:30"
        },
        {
          id: 2,
          name: "Wash car",
          completed: false,
          dueDate: "2019/05/13",
          dueTime: "20:45"
        },
        {
          id: 3,
          name: "Buy milk",
          completed: false,
          dueDate: "2019/05/14",
          dueTime: "13:30"
        }
      ]
    };
  }
};
</script>

<style>
</style>
