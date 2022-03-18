import { computed, reactive } from "vue";

const state = reactive({
  items: [],
});

function add(item) {
  state.items.push(item);
}

function getById(id) {
  return state.items.filter((item) => item.id === id);
}

async function init() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = [{id: 1, name:'test'}];
      state.items = response;
      resolve(response);
    }, 1000)
  })
}

export default {
  items: computed(() => state.items),
  count: computed(() => state.items.length),
  getById,
  add,
  init,
};
