/**
 * Shake style css
 */
const shake = () => {
  this.setState({ shake: true });
  setTimeout(() => this.setState({ shake: false }), 850);
};

/**
 * setShake
 * @param {[type]} context [description]
 */
const setShake = context => shake.bind(context);

export { setShake };
