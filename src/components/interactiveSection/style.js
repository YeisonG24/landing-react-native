import styled from 'styled-components';

export const MainWrapper = styled.View`
  width: 100%;
  height: auto;
  background-color: #3183AD;
`;

export const WrapperOptions = styled.View`
  width: 100%;
  flex-direction: row;
  display: flex;
`;

export const WrapperItem = styled.View`
  flex: 5;
  flex-direction: column;
  margin: 5%;
`;

export const ButtonItem = styled.TouchableOpacity`
  margin-top: 10%;
  margin-bottom: 10%;
`;

export const ImageIcon = styled.Image`
  width: 50px;
  height: 50px;
  align-self: center;
  border-radius: 90px;
  background-color: #fff;
`;

export const TextSubTitles = styled.Text`
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin: 2%;
  text-align: center;
  font-weight: 600;
`;

export const TextDefault = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: justify;
  margin: 2%;
  padding-top: 10%;
  border-top-color: #fff;
  border-top-width: 1;
`;
