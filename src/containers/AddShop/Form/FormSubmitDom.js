import React, { PureComponent } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import tr from '../../../translate';

/**
 * FormSubmitDom component
 * @extends PureComponent
 */
class FormSubmitDom extends PureComponent {
  static propTypes = {
    resetAddressHasError: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    form: PropTypes.shape({
      address: PropTypes.shape({ hasError: PropTypes.bool }),
    }).isRequired,
  };
  render() {
    const { form } = this.props;

    return (
      <React.Fragment>
        {form.address.error &&
          form.address.hasError && (
            <Modal
              theme="error"
              alignCenter
              closeFunc={() => {
                this.props.resetAddressHasError();
              }}
            >
              {form.address.error}
            </Modal>
          )}
        <Button fullWidth theme="primary" onClick={this.props.onSave}>
          {tr('add.form.register_btn')}
        </Button>
      </React.Fragment>
    );
  }
}

export default connect()(FormSubmitDom);
