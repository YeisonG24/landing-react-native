import React, { Component } from 'react';
import {
  MainWrapper
} from "./style";
import SummarySection from '../../components/summarySection';
import InteractiveSection from '../../components/interactiveSection';
import InfoSection from '../../components/infoSection';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: false,
    };
  }

  showInformation = () => {
    const { information } = this.state;
    this.setState({
      information: !information
    })
  };

  render () {
    const { information } = this.state;
    return (
      <MainWrapper>
        <SummarySection />
        <InteractiveSection action={this.showInformation} visible={information} />
        <InfoSection />
      </MainWrapper>
    );
  }
}
