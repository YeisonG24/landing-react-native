import React from 'react';
import PropTypes from 'prop-types';
import {
  MainWrapper,
  WrapperOptions,
  WrapperItem,
  ButtonItem,
  ImageIcon,
  TextSubTitles,
  TextDefault,
} from './style';

export default function InteractiveSection({ action, visible }) {
  return (
    <MainWrapper>
      <WrapperOptions>
        <WrapperItem>
          <ButtonItem onPress={action}>
            <ImageIcon source={require('../../../assets/icon_react.png')}/>
            <TextSubTitles>React JS</TextSubTitles>
          </ButtonItem>
          {visible && (
            <TextDefault>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris tristique nunc sit amet molestie consequat.
            </TextDefault>
          )}
        </WrapperItem>
        <WrapperItem>
          <ButtonItem onPress={action}>
            <ImageIcon source={require('../../../assets/icon_react.png')}/>
            <TextSubTitles>React Native</TextSubTitles>
          </ButtonItem>
          {visible && (
            <TextDefault>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris tristique nunc sit amet molestie consequat.
            </TextDefault>
          )}
        </WrapperItem>
      </WrapperOptions>
    </MainWrapper>
  );
}

InteractiveSection.propTypes = {
  action: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};
