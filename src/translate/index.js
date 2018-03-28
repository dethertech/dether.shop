import React, { Fragment } from 'react';
import styled from 'styled-components';

import en from './en';

const Link = styled.a`
  text-decoration: underline;
  &:hover {
    color: inherit;
  }
`;

// Add translate file
export const localeConfig = {
  locale: 'en',
  setLocale(locale) {
    this.locale = locale;
  },
  getLocale() {
    return this.locale;
  },
};

const locales = {
  en,
};

const patterns = [
  {
    symbol: '**',
    toHtml: s => <b>{s}</b>,
    selfClosing: false,
  },
  {
    symbol: '||',
    toHtml: () => <br />,
    selfClosing: true,
  },
  {
    symbol: '##',
    toHtml: s => {
      const [link, text] = s.split('#');
      return (
        <Link target="_blank" href={link}>
          {text}
        </Link>
      );
    },
  },
];

/* eslint no-useless-escape: 0 */
/**
  escape special regex characters
  @param {String} str Regex string
  @return {String} excaped regex string
*/
const escapeRegex = str =>
  str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');

/**
  Function passed to reduce to build the replacing regex with all the patterns
  @param {String} r currentRegex
  @param {Object} p pattern to add
  @return {String} new regex
 */
const handleBuildRegex = (r, p) =>
  r ? `${r}|${escapeRegex(p.symbol)}` : escapeRegex(p.symbol);

/**
  Build the replacing regex string
  @return {String} the regex string
*/
const regexPatternStr = `(${patterns.reduce(handleBuildRegex, '')})`;

/**
  Instantiate the replace regex
  @return {RegExp} replace regex
*/
const regexPatterns = new RegExp(regexPatternStr);

/**
 * parse Translation for styles patterns and replace with corresponding HTML/JSX
 * @param  {String} str
 * @return {[type]}     [description]
 */
const parsePatterns = str => {
  const split = str.split(regexPatterns);
  const buffer = [];
  if (split.length === 1) return str;
  let i = 0;
  while (i < split.length) {
    const toMatch = split[i];
    let matched = false;

    for (let j = 0; j < patterns.length; j += 1) {
      const { symbol, toHtml, selfClosing } = patterns[j];
      if (toMatch === symbol) {
        buffer.push(<Fragment key={i}>{toHtml(split[i + 1])}</Fragment>);
        i += selfClosing ? 1 : 3;
        matched = true;
        break;
      }
    }

    if (!matched) {
      buffer.push(<Fragment key={i}>{toMatch}</Fragment>);
      i += 1;
    }
  }
  return <Fragment>{buffer}</Fragment>;
};

/**
 * Parse key for nested objects
 * @param {!String} key     Id translate string
 * @param {!Object} from    Locale object
 */
const keyParse = (key, from) =>
  key.split('.').reduce((b, e) => (b ? b[e] : null), from);

/**
 * Translate function
 * @param  {!String} key            Id translate string
 * @param  {?Object} args           Variables for dynamic translation
 * @param  {?Object} options        Options object
 * @param  {?Object} otpions.locale Override globale locale
 * @return {String}                Formated value
 */
const tr = (key, args = {}, options = {}) => {
  const trLocale = options.locale || localeConfig.getLocale();
  const translation = keyParse(key, locales[trLocale]);

  if (!translation && trLocale !== 'en')
    return tr(key, args, { ...options, locale: 'en' });
  else if (translation) {
    const str =
      typeof translation === 'function' ? translation(args) : translation;
    return parsePatterns(str);
  }
  return `{{ ${key} }}`;
};

export default tr;
