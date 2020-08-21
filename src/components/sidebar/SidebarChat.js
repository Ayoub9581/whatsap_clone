import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './../../vendor/css/SidebarChat.css';
import db from './../../firebase';
const SidebarChat = ({ addNewChat, id, name }) => {
  const [seed, setSeed] = useState('');
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    console.log('create new chat');
    const roomName = prompt('please enter name for chat');
    if (roomName) {
      // do some clever database stuff...
      db.collection('rooms').add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>{name} </h2>
        <p> last message ...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat_addchat">
      <h2>Add new Chat</h2>
    </div>
  );
};

export default SidebarChat;
