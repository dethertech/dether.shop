import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import tr from '../../../translate';
import { Padding, Margin } from '../../../components/Spaces';
import tokens from '../../../styles/tokens';
import {
  Loader,
  ButtonLink,
  Message,
  ProgressBar,
  Mention,
} from '../../../components';
import { H1 } from '../../../components/Headings';

const CodeBlock = styled.div`
  position: relative;
  z-index: 1;
  display: block;
  text-align: center;
  line-height: 9rem;
  margin: ${tokens.spaces.xxs};
  font-size: 4.5rem;
  font-weight: 500;
  color: ${tokens.colors.grey.darker};
  height: 9rem;
  width: 4.5rem;
  background: ${tokens.colors.grey.lightest};
  border-radius: ${tokens.radius.s};

  ${({ isFocus }) =>
    isFocus &&
    css`
      border: solid 1px ${tokens.colors.grey.lighter};
    `} );
`;

const HidddenInput = styled.input`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  z-index: 0;
  transform: translateY(-100vh);
`;

const CodeWrapper = styled.button`
  position: relative;
  display: inline-flex;
  flex-flow: row nowrap;
  margin-bottom: ${tokens.spaces.xl};
`;

const ErrorWrapper = styled.div`
  display: inline-block;
  max-width: 20rem;
  margin: 0 auto;
`;

class ValidationCode extends PureComponent {
  static propTypes = {
    sendCode: PropTypes.func.isRequired,
    isPending: PropTypes.bool,
    phoneNumber: PropTypes.string.isRequired,
    editPhoneNumber: PropTypes.func.isRequired,
    reSendSms: PropTypes.func.isRequired,
    error: PropTypes.string,
  };

  static defaultProps = {
    isPending: false,
    error: null,
  };

  state = {
    code: '',
  };

  componentDidMount() {
    this.focusInput();
  }

  handleChange = ({ target: { value } }) => {
    const { code } = this.state;

    if (code.length <= 4) {
      this.setState(
        () => ({
          code: value.toString(),
        }),
        this.sendVerificationCode,
      );
    }
  };

  sendVerificationCode = () => {
    const { sendCode } = this.props;
    const { code } = this.state;
    if (code.length === 4) return sendCode(code);
  };

  focusInput = () => this.codeInput && this.codeInput.focus();

  render() {
    const { code } = this.state;
    const {
      phoneNumber,
      editPhoneNumber,
      reSendSms,
      error,
      isPending,
    } = this.props;
    return (
      <Padding all="m">
        <H1>{tr('validate_code.title')}</H1>
        <Mention>{tr('validate_code.step')}</Mention>
        <ProgressBar progressRatio={1 / 2} />
        <br />
        <br />
        {isPending && (
          <Margin vertical="l">
            <Mention>
              {tr('validate_code.loader_message')} <br /> <br />
            </Mention>
            <Loader />
          </Margin>
        )}
        {!isPending &&
          error && (
            <ErrorWrapper>
              <Message alignLeft theme="error">
                <b>{tr('api.errors.Error')}&nbsp;:&nbsp;</b>
                {error}
              </Message>
            </ErrorWrapper>
          )}
        {!isPending && (
          <div>
            <CodeWrapper onClick={this.focusInput}>
              <HidddenInput
                noValidate
                value={code}
                name="code"
                type="number"
                pattern="[0-9]*"
                onBlur={this.focusInput}
                onChange={this.handleChange}
                innerRef={c => (this.codeInput = c)}
              />
              {Array(4)
                .fill(null)
                .map((arrItem, i) => (
                  <CodeBlock
                    key={`CodeBlock-${i}`}
                    onClick={this.focusInput}
                    isFocus={code.length === i}
                  >
                    {code.charAt(i)}
                  </CodeBlock>
                ))}
            </CodeWrapper>
            <Mention>
              {tr('validate_code.code_sent', { phoneNumber }, { html: true })}
            </Mention>
          </div>
        )}
        <Margin top="l" bottom="xs">
          <ButtonLink theme="primary" onClick={editPhoneNumber}>
            {tr('validate_code.change_button')}
          </ButtonLink>
        </Margin>
        <ButtonLink theme="primary" onClick={reSendSms}>
          {tr('validate_code.resend_button')}
        </ButtonLink>
      </Padding>
    );
  }
}

export default ValidationCode;
