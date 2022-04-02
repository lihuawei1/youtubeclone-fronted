import { request } from '@/utils/request'

interface LoginInput {
    email: string,
    password: string
}
export interface User {
    username: string,
    token: string,
    email: string,
    channelDescription?: string,
    avatar?: string
}
interface LoginPayLoad {
    user: User
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const login = (data: LoginInput) => {
  return request.post<LoginPayLoad>('/api/v1/users/login', data)
}
