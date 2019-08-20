import styled from 'styled-components';

export const MainWrapper = styled.View`
  width: 100%;
  height: auto;
  background-color: #f2f2f2;
  flex-direction: row;
  display: flex;
`;

export const SubWrapper = styled.View`
  flex: 3.5;
  margin: 5%;
  align-items: center;
`;

export const InfoWrapper = styled.View`
  margin-top: 10%;
  margin-bottom: 10%;
`;

export const TextTitletRight = styled.Text`
  color: #3183AD;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: right;
`;

export const TextDefaultRight = styled.Text`
  color: #626262;
  font-size: 14px;
  text-align: right;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const TextTitleLeft = styled.Text`
  color: #3183AD;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: left;
`;

export const TextDefaultLeft = styled.Text`
  color: #626262;
  font-size: 14px;
  text-align: left;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const ImageView = styled.Image`
  width: 100%;
  height: 40%;
  resize-mode: cover;
  align-self: center;
  top: 120;
`;

