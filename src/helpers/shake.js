/**
 * Shake style css
 */
const shake = () => {
  this.setState({ shake: true });
  setTimeout(() => this.setState({ shake: false }), 850);
};

const setShake = context => shake.bind(context);

export { setShake };
