import React, { Fragment, Component } from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';

import LabeledInput from '../../../components/Inputs/LabeledInput';
import Button from '../../../components/Button';
import { Padding } from '../../../components/Spaces';
import { validEmail } from '../../../helpers';
import tr from '../../../translate';
import { H2 } from '../../../components/Headings';
import Message from '../../../components/Message/Message';
import config from '../../../constants/config';

class EmailNotification extends Component {
  static propTypes = {
    title: PropTypes.string,
    attributes: PropTypes.object,
  };
  static defaultProps = {
    title: undefined,
    attributes: {},
  };
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      isValid: undefined,
      error: undefined,
      done: false,
      duplicatedEmail: false,
    };
  }

  onSubmit = async () => {
    const { isValid, email } = this.state;
    const { attributes } = this.props;

    if (isValid) {
      try {
        await axios.post(
          config.sendInBlueUrl,
          {
            email,
            attributes,
            listIds: config.sendInBlueListIds,
          },
          {
            headers: {
              'api-key': config.sendInBlueKey,
            },
          },
        );

        this.setState({ done: true });
      } catch (err) {
        if (err.response.status === 400)
          this.setState({ duplicatedEmail: true });
        else this.setState({ error: err.message });
      }
    }
  };

  onChange = ({ target: { value: email } }) =>
    this.setState({
      email,
      isValid: validEmail(email),
      error: '',
      duplicatedEmail: false,
    });

  render() {
    const { email, isValid, error, done, duplicatedEmail } = this.state;
    return (
      <Padding bottom="s">
        <H2>{this.props.title}</H2>
        {!done && (
          <Fragment>
            <Message>{tr('add.email.notify_message')}</Message>
            <LabeledInput
              label={tr('add.email.notify_email')}
              componentName="input"
              type="email"
              name="EMAIL"
              handleChange={this.onChange}
              value={email}
              isValid={isValid}
              error={
                duplicatedEmail ? tr('add.email.notify_repeated_email') : error
              }
            />
            <Button
              type="submit"
              theme="primary"
              disabled={!isValid}
              onClick={this.onSubmit}
            >
              {tr('add.email.notify_button')}
            </Button>
          </Fragment>
        )}
        {!!done && <Message>{tr('add.email.notify_done')}</Message>}
      </Padding>
    );
  }
}
export default EmailNotification;
