/**
 * timeSince
 * @param  {[type]} time [description]
 * @return {[type]}      [description]
 */
export const timeSince = time => new Date() - time;

/**
 * phoneVerificationTime
 * @param  {[type]} time [description]
 * @return {[type]}      [description]
 */
export const phoneVerificationTime = time => timeSince(time) < 15000;
