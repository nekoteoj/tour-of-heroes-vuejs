import { Module } from 'vuex';
import { MessageState } from './types';

export const messageModule: Module<MessageState, {}> = {
  state: {
    messages: [],
  },
  mutations: {
    add(state, message: string): void {
      state.messages.push(message);
    },
    clear(state): void {
      state.messages = [];
    },
  },
  actions: {
    add({ commit }, message: string): void {
      commit('add', message);
    },
    clear({ commit }): void {
      commit('clear');
    },
  },
  getters: {
    messages: (state): string[] => {
      return state.messages;
    },
    messagesCount: (_, getters): number => {
      return getters.messages.length;
    },
  },
};
