import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>
      
      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
      <Container>
        <Role>Available - 1</Role> 
        <UserRow nickname="Lucas Coelho" />

        <Role>Offline - 23</Role> 
        <UserRow nickname="LucasBot" isBot />
        <UserRow nickname="LucasBot" isBot />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
        <UserRow nickname="UserTest" />
      </Container>
  );
}

export default UserList;