import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Text Channel</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="open-chat" />
      <ChannelButton channelName="work" />
      <ChannelButton channelName="world of warcraft" />
      <ChannelButton channelName="call of duty" />
      <ChannelButton channelName="pokemon-go" />
    </Container>
  );
}

export default ChannelList;