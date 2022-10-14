import { Configuration, App } from '@midwayjs/decorator'
import * as koa from '@midwayjs/koa'
import { join } from 'path'
import { initialSSRDevProxy, getCwd } from 'ssr-common-utils'
import * as orm from '@midwayjs/orm'

const koaStatic = require('koa-static-cache')
const cwd = getCwd()

@Configuration({
  imports: [koa, orm],
  importConfigs: [join(__dirname, './config')]
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application

  async onReady() {
    this.app.use(koaStatic(join(cwd, './build')))
    this.app.use(koaStatic(join(cwd, './public')))
    this.app.use(koaStatic(join(cwd, './build/client')))

    await initialSSRDevProxy(this.app)
  }
}
