<template>
  <div>
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Hero } from '@/models/hero';

@Component
export default class Heroes extends Vue {
  private hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
</script>

