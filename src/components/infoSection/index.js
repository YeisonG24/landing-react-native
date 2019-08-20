import React from 'react';
import { MainWrapper, SubWrapper, InfoWrapper, TextTitletRight, TextTitleLeft, TextDefaultRight, TextDefaultLeft, ImageView } from './style';

export default function InfoSection() {
  return (
    <MainWrapper>
      <SubWrapper>
        <InfoWrapper>
          <TextTitleLeft>Lorem ipsum.</TextTitleLeft>
          <TextDefaultLeft>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextDefaultLeft>
        </InfoWrapper>
        <InfoWrapper>
          <TextTitleLeft>Lorem ipsum.</TextTitleLeft>
          <TextDefaultLeft>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextDefaultLeft>
        </InfoWrapper>
        <InfoWrapper>
          <TextTitleLeft>Lorem ipsum.</TextTitleLeft>
          <TextDefaultLeft>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextDefaultLeft>
        </InfoWrapper>
      </SubWrapper>
      <SubWrapper>
        <ImageView source={require('../../../assets/cellphone.png')} />
      </SubWrapper>
      <SubWrapper>
        <InfoWrapper>
          <TextTitletRight>Lorem ipsum.</TextTitletRight>
          <TextDefaultRight>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextDefaultRight>
        </InfoWrapper>
        <InfoWrapper>
          <TextTitletRight>Lorem ipsum.</TextTitletRight>
          <TextDefaultRight>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextDefaultRight>
        </InfoWrapper>
        <InfoWrapper>
          <TextTitletRight>Lorem ipsum.</TextTitletRight>
          <TextDefaultRight>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextDefaultRight>
        </InfoWrapper>
      </SubWrapper>
    </MainWrapper>
  );
};
