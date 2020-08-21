import React, { useEffect, useState } from 'react';
import './../../vendor/css/Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined, MoreVert } from '@material-ui/icons/';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';

// database
import db from './../../firebase';
const Chat = () => {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data().name);
        });
    }
    // eslint-disable-next-line
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    // console.log(`you typed >>> ${input}`);
    setInput('');
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>last seen at ...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p className="chat_message ">
          {' '}
          <span className="chat__name">ayoub arahmat</span>
          hello ayoub !<span className="chat__timestamp">3:53pm</span>
        </p>
        <p className="chat_message chat__receiver">
          {' '}
          <span className="chat__name">ayoub arahmat</span>
          hello ayoub !<span className="chat__timestamp">3:53pm</span>
        </p>
      </div>

      <div className="chat__footer">
        <EmojiEmotionsIcon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type="submit" onClick={sendMessage}>
            send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
