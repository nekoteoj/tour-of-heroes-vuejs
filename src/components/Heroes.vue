<template>
  <div>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li v-for="hero in heroes"
        :key="hero.id"
        :class="{ selected: hero === selectedHero }"
        @click="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <div v-if="selectedHero.id != -1">
      <h2>{{selectedHero.name.toUpperCase()}} Details</h2>
      <div><span>id: </span>{{selectedHero.id}}</div>
      <div>
        <label>name:
          <input v-model="selectedHero.name" placeholder="name">
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Hero } from '@/models/hero';
import { HEROES } from '@/models/mock-heroes';

@Component
export default class Heroes extends Vue {
  private heroes = HEROES;
  private selectedHero: Hero = {
    id: -1,
    name: '',
  };

  private onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
</script>

<style scoped>
/* HeroesComponent's private CSS styles */
.selected {
  background-color: #CFD8DC !important;
  color: white;
}
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.heroes li.selected:hover {
  background-color: #BBD8DC !important;
  color: white;
}
.heroes li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
.heroes .text {
  position: relative;
  top: -3px;
}
.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
</style>

