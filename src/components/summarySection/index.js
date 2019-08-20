import React from 'react';
import {
  MainWrapper,
  TextTitle,
  TextDefault,
  TextButton,
  ButtonRadius,
  WrapperInfo,
} from './style';

export default function SummarySection() {
  return (
    <MainWrapper source={require('../../../assets/background.jpg')}>
      <TextTitle>Desarrollo en React Native</TextTitle>
      <WrapperInfo>
        <TextDefault>
          Proin turpis ante, viverra sed mattis vitae, volutpat nec sapien.
          Sed condimentum ipsum dapibus sem scelerisque, quis feugiat est lacinia.
          Ut nec blandit sem. Aenean egestas, est in luctus cursus, magna purus posuere tortor,
          a mattis nisl risus id massa. Suspendisse lorem arcu, imperdiet quis lectus in, dignissim malesuada justo.
          Proin at metus pulvinar, tempus urna eget, consectetur diam.
        </TextDefault>
        <ButtonRadius>
          <TextButton>Documentación</TextButton>
        </ButtonRadius>
      </WrapperInfo>
    </MainWrapper>
  );
}
