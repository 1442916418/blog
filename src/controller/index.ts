import { Controller, Get, Provide, Inject } from '@midwayjs/decorator'
import { Context } from '@midwayjs/koa'
import { render } from 'ssr-core-vue3'
import { IApiService } from '../interface'

interface IKoaContext extends Context {
  apiService: IApiService
}

@Provide()
@Controller('/')
export class Index {
  @Inject()
  ctx: IKoaContext

  @Inject('ApiService')
  apiService: IApiService

  @Get('/')
  async handler(): Promise<void> {
    const { ctx } = this
    try {
      ctx.apiService = this.apiService
      const stream = await render(this.ctx, {
        stream: true,
        mode: 'ssr'
      })
      ctx.body = stream
    } catch (error) {
      console.log('ssr error', error)
      const stream = await render(ctx, {
        stream: true,
        mode: 'csr'
      })
      ctx.body = stream
    }
  }
}
