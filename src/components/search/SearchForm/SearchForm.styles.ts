import { Button } from '@/components/button';
import { Input } from '@/components/core';
import { border, colors } from '@/styles';
import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: fit-content;
`;

export const Label = styled.label`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background-color: ${colors.scale.neutralVariant.s100};
  border-radius: ${border.radius.sm};
`;

export const SearchInput = styled(Input)`
  padding: 0;
  background-color: ${colors.scale.neutralVariant.s100};

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

export const DeleteButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.scale.neutralVariant.s100};

  &:hover {
    background-color: transparent;
  }
`;
