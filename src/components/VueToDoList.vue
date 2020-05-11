<template>
  <!-- toDoArrow 被點擊值會帶入class讓整個todo移動-->
  <div class="toDoOpsition" :class="{ toDoMove: open }">
    <div class="toDo">
      <div class="toDoArrow" @click="Move">
        <i v-show="!open" class="fas fa-angle-double-left"></i>
        <i v-show="open" class="fas fa-angle-double-right"></i>
      </div>
      <div class="toDoList">
        <span class="ToDotitle">ToDolist </span>
        <!--計算未完成的數量-->
        <span> 有 {{ doingCount }} 筆代辦</span>
        <div>
          <div class="toDoTag">
            <!--建立點擊事件
            filteredTodos中進行 complete是ture(done) / false(doing) / all(全部都要)
            @click=statue值 再用進行篩選 把要選擇的status帶出
            choseToDoTag 點擊的標題名稱顏色會因點選而改變
            -->
            <div @click.prevent="status = 'all'" @click="choseToDoTag(0)">
              全部
            </div>
            <div @click.prevent="status = 'doing'" @click="choseToDoTag(1)">
              代辦
            </div>
            <div @click.prevent="status = 'done'" @click="choseToDoTag(2)">
              完成
            </div>
          </div>
          <keep-alive>
            <div class="toDoList-group">
              <!--filteredTodos 去撈todos的資料
              起始status 為all 會帶出所有arr中的值
              v-for會將filteredTodos撈todos的陣列資料一個一個讀取並把值放進item中-->
              <div
                class="toDoItem"
                v-for="item in filteredTodos"
                :key="item.id"
              >
                <!--checkbox方便勾選this.statue的狀態 
                用item.id去辨識input label
                v-model綁定item.completed 當打勾後complete值轉false為true
                而label 會帶入一個class 加上一條刪除線-->
                <input type="checkbox" :id="item.id" v-model="item.completed" />
                <label :for="item.id" :class="{ completed: item.completed }">
                  {{ item.title }}
                </label>

                <!-- 建立一個刪除鍵-->
                <button
                  class="toDoItem-button"
                  type="button"
                  @click="removeTodo(item)"
                >
                  <span>x</span>
                </button>
              </div>
            </div>
          </keep-alive>
        </div>

        <div class="input-group">
          <!--首先建立資料
          v雙向綁定this.value 而這個value會成為該資料的title
          enter後執行addto程式,或是點選下面的bottom也行
          建立該資料的值 
          id取當前輸入的時間(因為之後要input label v-for remove要有一個key值可以辨識
          value -> Title
          complete -> status(false)
          -->
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
            <!--出除所有的資料-->
            <button class="inputBottom" type="button" @click.prevent="cleanAll">
              <span>清除所有任務</span>
            </button>
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
  width: 2.5rem;
  height: 4rem;
  background-color: #dcefdc;
  border-radius: 5px 0px 0px 5px;
}
.toDoArrow i {
  font-size: 1.5rem;
  padding-top: 0.5rem;
}
.toDoList {
  width: 100%;
  background-color: #dcefdc;
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
  background-color: #f4f4f4;
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
  background-color: #f4f4f4;
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
  padding: 0.3rem;
}
.toDoItem-button {
  width: 1.5rem;
  height: 1.5rem;
}
.completed {
  text-decoration: line-through;
}
.select {
  background-color: #f4f4f4 !important;
  border-bottom: 0px !important;
}
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
      status: "all",
      uncompletedTodos: []
    };
  },
  methods: {
    Move: function() {
      this.open = !this.open;
    },
    //讓選取tag的變景顏色可以變化
    //找出n 值 然後帶入class 變顏色
    choseToDoTag(n) {
      let i;
      const tagNum = document.querySelectorAll(".toDoTag div");
      console.log(tagNum);
      for (i = 0; i < tagNum.length; i++) {
        // i == n ? "select" : "" 用三元運算
        //不是n值 就false
        tagNum[i].className = i == n ? "select" : "";
      }
    },
    //
    addTodo: function() {
      //將新增的資料塞進 todos的矩陣之中
      //建立資料的屬性
      //id 就取當前時間 做以後v-for的key值
      //value 為input v-model的值 作為資料的title
      var timeflag = Math.floor(Date.now());
      var value = this.newTodo;
      this.todos.push({
        id: timeflag,
        title: value,
        completed: false
      });
    },
    removeTodo: function(todo) {
      //從todos中找出要刪除的物件的id
      //用splice從第(deletItem值) 開始刪除然後只刪除一個
      var deletItem = this.todos.findIndex(function(item) {
        return todo.id === item.id;
      });
      this.todos.splice(deletItem, 1);
    },
    //清空todos
    cleanAll: function() {
      var foolProof = confirm(`確定要清除嗎？`);
      if (foolProof == true) {
        this.todos = [];
      }
    }
  },
  computed: {
    //計算有幾項未完成
    //從todos中選取出 item.completed 還是false得資料
    //然後回傳他的數量
    doingCount: function() {
      var doingTodos = this.todos.filter(function(item) {
        return item.completed == false;
      });
      return doingTodos.length;
    },
    filteredTodos: function() {
      //這個不能塞在mounted
      //利用computed 運算即時反映出
      //用status的狀態進行運算
      var otherTodos = [];

      if (this.status == "all") {
        //status起始值all 時帶出所有值
        return this.todos;
      } else if (this.status == "doing") {
        //status 值改成doing
        //則會成false中撈出資料 放進新矩陣
        //教撈到的資料放進 item 中 再用v-for成線
        this.todos.forEach(function(item) {
          if (item.completed == false) {
            otherTodos.push(item);
          }
        });
      } else if (this.status == "done") {
        //status 值改成done
        //則會從true中撈出資料 放進新矩陣
        //將撈到的資料放進 item 中 再用v-for成線
        this.todos.forEach(function(item) {
          if (item.completed == true) {
            otherTodos.push(item);
          }
        });
      }
      //最後回傳新矩陣
      return otherTodos;
    }
  }
};
</script>
