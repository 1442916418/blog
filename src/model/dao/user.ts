import { Provide, Scope, ScopeEnum } from '@midwayjs/decorator'
import { InjectEntityModel } from '@midwayjs/orm'
import { Repository } from 'typeorm'
import { User } from '../entity/user'

@Scope(ScopeEnum.Singleton)
@Provide()
export class UserDao {
  @InjectEntityModel(User)
  userModel: Repository<User>

  async list() {
    return this.userModel.find()
  }

  async add(username: string, password: string) {
    // create a entity object
    const user = new User()
    user.username = username
    user.password = password

    // save entity
    const userResult = await this.userModel.save(user)

    // save success
    console.log('user id = ', userResult.id)
    return user
  }

  async findByUsername(username: string, password: string) {
    return true
    // const user = await this.userModel.findOne({ password, username })

    // if (user) {
    //   return user
    // }

    // return null
  }
}
