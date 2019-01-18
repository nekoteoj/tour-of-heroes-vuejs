<template>
  <div v-if="hero.id !== -1">
    <h2>{{hero.name.toUpperCase()}} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div>
      <label>name:
        <input v-model="hero.name" placeholder="name">
      </label>
    </div>
    <button @click="goBack">go back</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Hero } from '@/models/hero';
import { heroApi } from '@/models/heroApi';

@Component
export default class HeroDetail extends Vue {
  @Prop(String) private id!: string;
  private hero: Hero = {
    id: -1,
    name: '',
  };

  protected created(): void {
    this.getHero();
  }

  private getHero(): void {
    heroApi.getHero(Number(this.id))
      .then((hero) => this.hero = hero);
  }

  private goBack(): void {
    this.$router.go(-1);
  }
}
</script>

<style scoped>
/* HeroDetailComponent's private CSS styles */
label {
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
</style>


