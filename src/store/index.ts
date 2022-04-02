import { User } from '@/api/user'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// 为 store state 声明类型
export interface State {
  count: number,
  user: User | null
}

// 定义 injection key
// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    user: JSON.parse(localStorage.getItem('user') || 'null')
  },
  mutations: {
    setUser (state, user:User) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
