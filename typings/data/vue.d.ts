import type { ParamsKoa } from 'ssr-plugin-vue3'
import { IndexData } from './page-index'

interface IApiService {
  index: () => Promise<IndexData>
}

export type Params = ParamsKoa<
  any,
  {
    apiService: IApiService
  }
>
