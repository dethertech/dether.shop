export const timeSince = time => (new Date()) - time;
export const phoneVerificationTime = time => (timeSince(time) < 15000);
