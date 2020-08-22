import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import db from './../../firebase';
import { Link } from 'react-router-dom';
// css
import './../../vendor/css/SidebarChat.css';

const SidebarChat = ({ addNewChat, id, name }) => {
  const [seed, setSeed] = useState('');
  const [messages, setMessages] = useState('');

  useEffect(() => {
    if (id) {
      db.collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);
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
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name} </h2>
          <p> {messages[0]?.message} ...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat_addchat">
      <h2>Add new Chat</h2>
    </div>
  );
};

export default SidebarChat;
