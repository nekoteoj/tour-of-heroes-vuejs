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

    <HeroDetail :hero="selectedHero" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Hero } from '@/models/hero';
import { heroApi } from '@/models/heroApi';
import HeroDetail from './HeroDetail.vue';

@Component({
  components: {
    HeroDetail,
  },
})
export default class Heroes extends Vue {
  private heroes: Hero[] = [];
  private selectedHero: Hero = {
    id: -1,
    name: '',
  };

  protected created(): void {
    this.getHeroes();
  }

  private onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  private getHeroes(): void {
    heroApi.getHeroes()
      .then((heroes) => this.heroes = heroes);
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

