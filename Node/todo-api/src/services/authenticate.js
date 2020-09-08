import { get } from '../models/UserSessions';
import logger from '../utils/logger';
import UnauthoroziedError from '../utils/UnauthoroziedError';

export async function verifyToken(userId, token) {
  if (!token) {
    logger.error(`Invalid token/sessiion not maintained`);
    throw new UnauthoroziedError(`Invalid token/sessiion not maintained`);
  }

  const user = await get({ userId, token, is_active: true });

  if (!user) {
    logger.error(`Invalid token/sessiion not maintained`);
    throw new UnauthoroziedError(`Invalid token/sessiion not maintained`);
  }
}
