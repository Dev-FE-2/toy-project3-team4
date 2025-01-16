import styled from 'styled-components';
import { width } from '@/styles/token/width';
import { border, colors, font, padding } from '@/styles';
import { Button } from '@/components';
import { hexToRgba } from '@/utils';

export const Container = styled.div`
  position: relative;
  max-width: ${width.desktop};
  width: 100%;
  margin: 0 auto;
  padding-bottom: 3.2rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${padding.lg};

  @media (width >= 1280px) {
    width: 66.66%;
    padding-right: 3rem;
  }
`;

export const Header = styled.header`
  margin-bottom: 3.2rem;
`;

export const Footer = styled.div`
  margin-top: 3.2rem;
  text-align: center;
`;

export const FormItem = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: ${padding.sm};
`;

export const Label = styled.label`
  font-weight: ${font.weight.subHeading};
`;

export const Input = styled.input`
  width: 100%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 100px;
`;

export const AddButton = styled(Button)`
  color: ${colors.semantic.text.white};
`;

export const SaveButton = styled(Button)`
  max-width: 400px;
  color: ${colors.semantic.text.white};
`;

export const InputBtnGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${padding.sm};
  margin-top: ${padding.md};

  @media (width >= 1280px) {
    width: 33.33%;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 0;
    padding: ${padding.xs};
    border: ${border.default};
    border-radius: ${border.radius.xs};
  }
`;

export const VideoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${padding.md};
  padding: ${padding.sm} 0;
  border-radius: ${border.radius.xs};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.semantic.background.gray};
  }
`;

export const GripButton = styled.button`
  line-height: 0;
  padding: 0;
  margin-top: ${padding.sm};
  cursor: move;
`;

export const ThumbnailBox = styled.div`
  position: relative;
  flex-shrink: 0;
  font-size: 0;

  img {
    width: 12rem;
    height: 6.8rem;
    object-fit: cover;
    border-radius: ${border.radius.xs};
  }

  span {
    position: absolute;
    bottom: 0.4rem;
    right: 0.4rem;
    font-size: ${font.size.min};
    color: ${colors.semantic.text.white};
    background-color: ${hexToRgba(colors.semantic.background.dark, 0.8)};
    padding: 0 ${padding.xs};
  }
`;

export const VideoInfoBox = styled.div`
  flex: 1 1 0;
  min-width: 0;

  p {
    font-size: ${font.size.info};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p:last-child {
    font-size: ${font.size.min};
    margin-top: ${padding.xs};
    color: ${colors.semantic.text.grayDark};
  }
`;

export const DeleteVideoButton = styled.button`
  line-height: 0;
  color: ${colors.semantic.text.grayDark};
  padding: ${padding.xs};
  margin-top: -${padding.xs};
  margin-right: ${padding.xs};
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: ${colors.semantic.text.dark};
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${padding.sm};
`;

export const Tag = styled.span`
  background-color: ${colors.semantic.secondary};
  color: white;
  padding: ${padding.xs} 0.6rem ${padding.xs} ${padding.sm};
  border-radius: ${border.radius.lg};
  font-size: 1.2rem;
  font-weight: ${font.weight.subHeading};
  display: inline-flex;
  align-items: center;

  button {
    line-height: 0;
    background: none;
    border: none;
    margin-left: ${padding.xs};
    padding: 0.2rem;
    color: ${colors.semantic.text.white};
    cursor: pointer;
  }

  &:hover {
    background-color: ${colors.semantic.hover.secondary};
  }
`;
