/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 29px;
  height: 26px;
  margin: auto;
  @media (max-width: 420px) {
    width: 20px;
    height: 18px;
  }
`;

const IconRefresh = props => (
  <Wrapper>
    <svg viewBox="0 0 29 26" {...props}>
      <title>Memories Icon</title>
      <path
        d="M3.39 12.953C3.64 6.273 9.133.933 15.874.933c6.9 0 12.493 5.593 12.493 12.492 0 6.9-5.593 12.493-12.493 12.493-2.904 0-5.659-.995-7.867-2.788a1.041 1.041 0 0 1 1.312-1.617 10.361 10.361 0 0 0 6.555 2.323c5.75 0 10.41-4.661 10.41-10.41 0-5.75-4.66-10.411-10.41-10.411-5.672 0-10.285 4.536-10.408 10.178l1.705-1.478a1.041 1.041 0 1 1 1.364 1.574l-3.42 2.965a1.041 1.041 0 0 1-1.419-.05L.563 13.07a1.041 1.041 0 1 1 1.472-1.472l1.355 1.355z"
        fill="#2A2B43"
        fillRule="evenodd"
      />
    </svg>
  </Wrapper>
);

export default IconRefresh;
