import { Inject, Controller, Provide, Get } from '@midwayjs/decorator'
import { Context } from '@midwayjs/koa'
import { IApiService } from '../interface'

@Provide()
@Controller('/api')
export class Api {
  @Inject()
  ctx: Context

  @Inject('ApiService')
  service: IApiService

  @Get('/index')
  async getIndexData() {
    const data = await this.service.index()
    return data
  }
}
