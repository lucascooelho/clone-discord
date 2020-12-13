import React from "react";

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>Open-chat</Title>

      <Separator />

      <Description>Open channel for talking</Description>
    </Container>
  );
};

export default ChannelInfo;
