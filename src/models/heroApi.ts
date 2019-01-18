import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import store from '@/store/store';

class HeroApi {
  public getHeroes(): Promise<Hero[]> {
    store.dispatch('add', 'HeroService: fetched heroes');
    return Promise.resolve(HEROES);
  }
}

export const heroApi = new HeroApi();
