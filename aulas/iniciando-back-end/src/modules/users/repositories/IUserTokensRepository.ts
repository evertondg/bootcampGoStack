import UserToken from '../infra/typeorm/entities/UserToken';
import User from '../infra/typeorm/entities/User';

export default interface IUserTokensRepository {
  generate(user_id: string): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | undefined>;
}
