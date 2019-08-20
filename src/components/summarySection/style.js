import styled from 'styled-components';

export const MainWrapper = styled.ImageBackground`
  width: 100%;
  height: 400px;
  background-color: #000;
  padding: 10%;
`;

export const TextTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
  margin: 5%;
  text-align: center;
  font-weight: 700;
`;

export const TextDefault = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: justify;
`;

export const TextButton = styled.Text`
  color: #939393;
  font-size: 16px;
  margin: 2.5%;
  text-align: center;
`;

export const ButtonRadius = styled.TouchableOpacity`
  width: 100%;
  height: 20%;
  background-color: #fff;
  border-radius: 50px;
  margin-top: 10%;
  margin-bottom: 5%;
  align-items: center;
  align-self: center;
`;

export const WrapperInfo = styled.View`
  width: 100%;
  height: 100%;
  margin: 2% 2%; 
`;
