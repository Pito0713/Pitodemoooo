<template>
  <div class="toDoList">
    <div>
      <span class="ToDotitle">ToDolist</span>

      <div>
        <div class="toDoTag">
          <div class="ToDoAll" @click.prevent=" visibility ='all' ">全部</div>
          <div @click.prevent=" visibility ='doing' ">正在</div>
          <div @click.prevent=" visibility ='done' ">完成</div>
        </div>
        <keep-alive>
          <div class="toDoList-group">
            <div v-for="item in filteredTodos" :key="item.id">
              <input type="checkbox" :id="item.id" v-model="item.completed" />
              <label :for="item.id" :class="{'completed': item.completed}">{{ item.title }}</label>
              <button type="button" aria-label="Close" @click="removeTodo(item)">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </keep-alive>
      </div>

      <div class="input-group">
        <input
          class="inputPlace"
          type="text"
          placeholder="I want .."
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
        <button class="inputBottom" type="button" @click="addTodo">新增</button>
        <div>
          <span>還有 {{uncompletedCount}} 筆任務未完成</span>
          <div @click.prevent="cleanAll">清除所有任務</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.toDoList {
  position: fixed;
  top: 10%;
  right: 10%;
  width: 40%;
  height: 45%;
  background-color: #e5e5e5;
  box-shadow: 1px 1px 1px 1px gray;
  padding: 1rem;
}
.ToDotitle {
  font-size: 2rem;
  font-family: "Fira Sans Extra Condensed", sans-serif;
}
.input-group {
  display: block;

  bottom: 0%;
  width: 100%;
}
.inputPlace {
  width: 99%;
  height: 1.5rem;
}
.inputBottom {
  width: 100%;
  height: 1.8rem;
}
.toDoList-group {
  display: block;
  height: 140px;
  overflow: auto;
  background-color: aliceblue;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
}
.toDoTag {
  display: flex;
  justify-content: flex-start;
}
.toDoTag div {
  width: 33.3333%;
  background-color: #e5e5e5;
  border-radius: 2px;
  border: 1px solid black;
}
.toDoTag div:hover {
  background-color: aliceblue;
  border-bottom: 0px;
}
.completed {
  text-decoration: line-through;
}
</style>
<script>
export default {
  data: function() {
    return {
      newTodo: "",
      todos: [],
      visibility: "all",
      uncompletedTodos: []
    };
  },
  methods: {
    addTodo: function() {
      var timestamp = Math.floor(Date.now());
      var value = this.newTodo;
      this.todos.push({
        id: timestamp,
        title: value,
        completed: false
      });
    },
    removeTodo: function(todo) {
      var deletindex = this.todos.findIndex(function(item) {
        return todo.id === item.id;
      });
      this.todos.splice(deletindex, 1);
    },
    cleanAll: function() {
      this.todos = [];
    }
  },
  computed: {
    uncompletedCount: function() {
      var uncompletedTodos = this.todos.filter(function(item) {
        return item.completed == false;
      });
      return uncompletedTodos.length;
    },
    filteredTodos: function() {
      var anotherTodos = [];
      if (this.visibility == "all") {
        return this.todos;
      } else if (this.visibility == "doing") {
        this.todos.forEach(function(item) {
          if (item.completed == false) {
            anotherTodos.push(item);
          }
        });
        return anotherTodos;
      } else if (this.visibility == "done") {
        this.todos.forEach(function(item) {
          if (item.completed == true) {
            anotherTodos.push(item);
          }
        });
        return anotherTodos;
      }
      return anotherTodos;
    }
  }
};
</script>