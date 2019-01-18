import { HEROES } from './mockHeroes';
import { Hero } from './hero';
import store from '@/store/store';

class HeroApi {
  public getHeroes(): Promise<Hero[]> {
    store.dispatch('add', 'HeroService: fetched heroes');
    return Promise.resolve(HEROES);
  }

  public getHero(id: number): Promise<Hero> {
    store.dispatch('add', `HeroService: fetched hero id=${id}`);
    return Promise.resolve(HEROES.find((hero) => hero.id === id)!);
  }
}

export const heroApi = new HeroApi();
