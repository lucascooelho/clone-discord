import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected
}) => {
  return (
      <Container>
        <div>
          <HashtagIcon className={selected ? 'active' : ''} />
          <span>{channelName}</span>
        </div>

        <div>
          <InviteIcon />
          <SettingsIcon />
        </div>
      </Container>
  );
}

export default ChannelButton;