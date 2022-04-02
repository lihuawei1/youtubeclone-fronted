import { request } from '@/utils/request'

interface CreateUploadVideoParams {
    Title: string,
    FileName: string
}

interface CreateUploadVideoPayLoad {
    RequestId: string,
    VideoId: string,
    UploadAddress: string,
    UploadAuth: string
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createUploadVideo = (params: CreateUploadVideoParams) => {
  return request.get<CreateUploadVideoPayLoad>('/api/v1/user/CreateUploadVideo', {
    params
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const refreshUploadVideo = (VideoId: string) => {
  return request.get<CreateUploadVideoPayLoad>('/api/v1/user/RefreshUploadVideo', {
    params: {
      VideoId
    }
  })
}
interface VideoMeta {
    CoverURL: string
    Duration: number
    Status: string
    Title: string
    VideoId: string
  }

export interface VideoPlayAuthPayload {
    RequestId: string
    PlayAuth: string
    VideoMeta: VideoMeta
  }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getVideoPlayAuth = (vodVideoId: string) => {
  return request.get<VideoPlayAuthPayload>('/api/v1/vod/GetVideoPlayAuth', {
    params: {
      VideoId: vodVideoId
    }
  })
}
