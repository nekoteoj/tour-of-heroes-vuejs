<template>
  <div v-if="hero.id != -1">
    <h2>{{hero.name.toUpperCase()}} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div>
      <label>name:
        <input v-model="hero.name" placeholder="name">
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Hero } from '@/models/hero';

@Component({
  props: {
    hero: Hero,
  },
})
export default class HeroDetail extends Vue {}
</script>

