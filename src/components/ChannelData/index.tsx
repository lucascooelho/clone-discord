import React, { useRef, useEffect} from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
            key={n}
            author="Lucas Coelho" 
            date="13/12/2020" 
            content="You underestimate my power!!!" 
          />
        ))}

        <ChannelMessage 
          author="Lucas BOT" 
          date="13/12/2020" 
          content={
            <>
              <Mention>@lucascooelho</Mention>, Let's play World of Warcraft??
            </>
          }
          hasMention
          isBot
        />

      </Messages>

      <InputWrapper>        
        <Input type="text" placeholder="Chat in #open-chat" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;