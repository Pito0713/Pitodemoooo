<template>
  <div class="toDoOpsition" :class="{ toDoMove: open }" @click="Move">
    <div class="toDo">
      <div class="toDoArrow">
        <i class="fas fa-angle-double-left"></i>
      </div>
      <div class="toDoList">
        <span class="ToDotitle">ToDolist</span>
        <div>
          <div class="toDoTag">
            <div @click.prevent="visibility = 'all'" @click="choseToDoTag(0)">
              全部
            </div>
            <div @click.prevent="visibility = 'doing'" @click="choseToDoTag(1)">
              正在
            </div>
            <div @click.prevent="visibility = 'done'" @click="choseToDoTag(2)">
              完成
            </div>
          </div>
          <keep-alive>
            <div class="toDoList-group">
              <div
                class="toDoItem"
                v-for="item in filteredTodos"
                :key="item.id"
              >
                <input type="checkbox" :id="item.id" v-model="item.completed" />
                <label :for="item.id" :class="{ completed: item.completed }">
                  {{ item.title }}
                </label>
                <button
                  class="toDoItem-button"
                  type="button"
                  aria-label="Close"
                  @click="removeTodo(item)"
                >
                  <span aria-hidden="true">x</span>
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
          <button class="inputBottom" type="button" @click="addTodo">
            新增
          </button>
          <div>
            <span>還有 {{ uncompletedCount }} 筆任務未完成</span>
            <div @click.prevent="cleanAll">清除所有任務</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.toDoOpsition {
  position: fixed;
  top: 10%;
  width: 300px;
  right: -275px;
  height: 45%;
  transition: all 1.5s ease;
  z-index: 6;
}
.toDoMove {
  right: 0px !important;
}
.toDo {
  display: flex;
}
.toDoArrow {
  width: 2rem;
  height: 4rem;
  background-color: #e5e5e5;
  border-radius: 5px 0px 0px 5px;
}
.toDoArrow i {
  font-size: 1.5rem;
  padding-top: 0.5rem;
}
.toDoList {
  width: 100%;
  background-color: #e5e5e5;
  box-shadow: 1px 1px 1px 1px gray;
  padding: 1rem;
}
.ToDotitle {
  font-size: 2rem;
  font-family: "Fira Sans Extra Condensed", sans-serif;
}
.toDoList-group {
  display: block;
  height: 200px;
  overflow: auto;
  background-color: aliceblue;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
}
.toDoTag {
  display: flex;
  justify-content: space-between;
}
.toDoTag div {
  width: 33.3333%;
  background-color: #e5e5e5;
  border-radius: 2px;
  border: 1px solid black;
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
.toDoItem {
  display: flex;
  justify-content: space-between;
  padding-left: 1.7rem;
  word-break: break-all;
}
.toDoItem-button {
  width: 1.5rem;
  height: 1.5rem;
}
.completed {
  text-decoration: line-through;
}
.select {
  background-color: aliceblue !important;
  border-bottom: 0px !important;
} /*选中的样式*/
@media only screen and (max-width: 512px) {
  .toDoMove {
    right: 0% !important;
  }
}
</style>
<script>
export default {
  data: function() {
    return {
      open: false,
      newTodo: "",
      todos: [],
      visibility: "all",
      uncompletedTodos: []
    };
  },
  methods: {
    Move: function() {
      this.open = !this.open;
    },
    choseToDoTag(n) {
      let i;
      const a_num = document.querySelectorAll(".toDoTag div");
      console.log(a_num);
      for (i = 0; i < a_num.length; i++) {
        a_num[i].className = i == n ? "select" : "";
      }
    },
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
