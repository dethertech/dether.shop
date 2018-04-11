import { last } from '../last';

export const parseError = error => last(error.message.split(':')).trim();
export const isAlphaText = val =>
  val.match(
    /^$|^[!-~\sÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏàáâãäåæçèéêëìíîïÐÑÒÓÔÕÖØÙÚÛÜÝÞßðñòóôõöøùúûüýþÿ]+$/,
  );
