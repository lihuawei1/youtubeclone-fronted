import { request } from '@/utils/request'

interface CreateVideoInput {
    title: string,
    description: string,
    vodVideoId: string,
    cover: string
}
interface VideoAuth {
  _id: string
  username: string
  avatar: string
  isSubscribed: boolean
  subscribersCount: number
}
export interface Video {
  _id: string
  title: string
  description: string
  vodVideoId: string
  commentsCount: number
  createdAt: string
  dislikesCount: number
  likesCount: number
  isLiked: boolean
  isDisliked: boolean
  viewsCount: number
  user: VideoAuth
}
interface VideoPayLoad {
    video: Video
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createVideo = (data: CreateVideoInput) => {
  return request.post<VideoPayLoad>('/api/v1/videos', data)
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getVideo = (videoId: string) => {
  return request.get<VideoPayLoad>(`/api/v1/videos/${videoId}`)
}
