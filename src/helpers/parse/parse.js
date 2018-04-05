import { last } from '../last';

export const parseError = error => last(error.message.split(':')).trim();
