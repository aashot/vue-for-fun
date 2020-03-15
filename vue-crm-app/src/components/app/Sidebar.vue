<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="link in links"
      :key="link.routeName"
      tag="li"
      active-class="active"
      :to="{ name: link.routeName }"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ["value"],
  data: () => ({
    links: [
      { title: "Счет", routeName: "home", exact: true },
      { title: "История", routeName: "history" },
      { title: "Планирование", routeName: "planning" },
      { title: "Новая запись", routeName: "record" },
      { title: "Категории", routeName: "categories" }
    ]
  })
};
</script>



