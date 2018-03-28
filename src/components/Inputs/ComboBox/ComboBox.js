import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import tokens from '../../../styles/tokens';
import {
  Wrapper,
  SearchField,
  DropDownBtn,
  Results,
  ResultItem,
  NoResultItem,
  InputStatusIcon,
} from './styles';

const getOptionsContainingWord = (word, options) => {
  const lowerWord = word.toLowerCase();
  return options.filter(option => {
    const lowerCaseName = option.name.toLowerCase();
    return lowerCaseName.includes(lowerWord);
  });
};

class ComboBox extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    name: PropTypes.string,
    onSelectedOption: PropTypes.func,
    placeholder: PropTypes.string,
    hasError: PropTypes.bool,
    isValid: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    defaultOption: PropTypes.any,
  };

  static defaultProps = {
    onSelectedOption: () => {},
    onChange: () => {},
    onBlur: () => {},
    hasError: false,
    isValid: false,
    data: [],
    name: '',
    placeholder: null,
    defaultOption: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultOption || '',
      options: [...this.props.data],
      showOptions: false,
      inputFocus: false,
    };
  }

  onFocus = () => this.setState({ inputFocus: true, showOptions: true });

  onBlur = () => {
    const { onBlur } = this.props;
    const { options, value } = this.state;

    const matchOption = options.find(
      option => option.name.toUpperCase() === value.toUpperCase(),
    );
    if (matchOption) this.onSelectOption(matchOption)();

    this.setState({ inputFocus: true });
    setTimeout(() => {
      this.setState({ showOptions: false });
      onBlur();
    }, 200);
  };

  onChange = event => {
    this.props.onChange();
    const val = event.target.value;
    this.filterOption(val);
    this.setState({ value: val, showOptions: true });
  };

  onSelectOption = option => () => {
    this.setState({ value: option.name, showOptions: false });
    this.filterOption(option.name);
    this.props.onSelectedOption(option);
  };

  filterOption = filter => {
    const newOptions = getOptionsContainingWord(filter, this.props.data);
    this.setState({ options: newOptions });
  };

  displayOptions = () => this.setState({ showOptions: true });

  toggleOptions = () => this.setState({ showOptions: !this.state.showOptions });

  render() {
    const { name, placeholder, hasError, isValid } = this.props;
    const { options, showOptions, inputFocus, value } = this.state;

    return (
      <ComboBox.Wrapper
        hasError={hasError}
        showOptions={showOptions}
        isValid={isValid}
        isFocus={inputFocus}
      >
        <ComboBox.SearchField
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          name={name}
          onChange={this.onChange}
          placeholder={placeholder}
          value={value}
        />
        <ComboBox.DropDownBtn onClick={this.toggleOptions}>
          <Icon
            name={showOptions ? 'carretUp' : 'carretDown'}
            size="1.2rem"
            strokeWidth="0.2rem"
            color={tokens.colors.grey.darkest}
          />
        </ComboBox.DropDownBtn>
        {(hasError || isValid) && (
          <ComboBox.InputStatusIcon hasError={hasError} isValid={isValid} />
        )}
        <ComboBox.Results showOptions={showOptions}>
          {options.length === 0 && (
            <ComboBox.NoResultItem>no results</ComboBox.NoResultItem>
          )}
          {options.map(option => (
            <ComboBox.ResultItem
              key={option.name}
              onClick={this.onSelectOption(option)}
            >
              {option.name}
            </ComboBox.ResultItem>
          ))}
        </ComboBox.Results>
      </ComboBox.Wrapper>
    );
  }
}

ComboBox.Wrapper = Wrapper;
ComboBox.SearchField = SearchField;
ComboBox.DropDownBtn = DropDownBtn;
ComboBox.Results = Results;
ComboBox.ResultItem = ResultItem;
ComboBox.NoResultItem = NoResultItem;
ComboBox.InputStatusIcon = InputStatusIcon;

export default ComboBox;
