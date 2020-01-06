<template>
  <div>
    <div>{{ searchText }}</div>
    <div>{{ filter }}</div>
    <div v-for="(user, index) in users" :key="index">{{ user }}</div>
  </div>
</template>


<script>
import { onMounted, reactive, ref } from "@vue/composition-api";

import userFunctions from "../functions/users";

export default {
  setup(props, ctx) {
    const { data: users, refresh, filter, searchText } = userFunctions();

    //refresh();

    // onCreated doesn't exist in composition API.
    // You can just put stuff in setup() instead.

    refresh();

    return {
      users,
      refresh,
      filter,
      searchText
    };
  }
};
</script>