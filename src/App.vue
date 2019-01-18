<template>
  <div id="app">
    <h1>{{title}}</h1>
    <nav>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/heroes">Heroes</router-link>
    </nav>
    <router-view />
    <Messages />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Heroes from '@/views/Heroes.vue';
import Messages from '@/components/Messages.vue';

@Component({
  components: {
    Heroes,
    Messages,
  },
})
export default class App extends Vue {
  private title = 'Tour of Heroes';
}
</script>

<style>
@import './styles.css';
</style>

<style scoped>
/* AppComponent's private CSS styles */
h1 {
  font-size: 1.2em;
  color: #999;
  margin-bottom: 0;
}
h2 {
  font-size: 2em;
  margin-top: 0;
  padding-top: 0;
}
nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited, a:link {
  color: #607d8b;
}
nav a:hover {
  color: #039be5;
  background-color: #cfd8dc;
}
nav a.active {
  color: #039be5;
}
</style>
