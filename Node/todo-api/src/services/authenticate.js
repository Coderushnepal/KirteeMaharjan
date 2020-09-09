import logger from '../utils/logger';
import * as UserSessions from '../models/UserSessions';
import UnauthoroziedError from '../utils/UnauthoroziedError';

export async function verifyToken(userId, token) {
  if (!token) {
    logger.error(`Invalid token/sessiion not maintained`);
    throw new UnauthoroziedError(`Invalid token/sessiion not maintained`);
  }

  //fetching user having userId, token and is_active:true
  const session = await UserSessions.get({ userId, token, is_active: true });

  if (!session || (session && session.userId !== userId)) {
    logger.error(`Invalid token/sessiion not maintained`);
    throw new UnauthoroziedError(`Invalid token/sessiion not maintained`);
  }
}
