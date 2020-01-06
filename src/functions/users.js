import { watch, ref, reactive } from "@vue/composition-api";

export default () => {
  const searchText = ref(null);

  const filter = reactive({
    iets: ref(1)
  });

  const data = ref([]);

  const refresh = () => {
    console.log("refresh!");

    setTimeout(() => {
      console.log("refresh call!");

      for (let i = 0; i < 5; i++) {
        data.value.push(data.value.length + 1);
      }

      //if (filter.iets < 5)
      setTimeout(() => {
        console.log("change filter");
        searchText.value = "iets";
      }, 2000);
    }, 1500);
  };

  watch(
    () => [searchText.value, filter.iets],
    () => {
      console.log("watch!");
      refresh();
    },
    {
      deep: true,
      lazy: true
    }
  );

  return {
    data,
    refresh,
    filter,
    searchText
  };
};
