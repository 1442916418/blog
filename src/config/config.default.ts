import { MidwayConfig } from '@midwayjs/core'

// TODO: 数据库连接!!!
export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1650192482948_2252',
  orm: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'user',
    password: 'pass',
    database: 'blog',
    synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: true
  }
} as MidwayConfig
