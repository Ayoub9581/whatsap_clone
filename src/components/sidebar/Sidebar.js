import React, { useState, useEffect } from 'react';
import './../../vendor/css/Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import db from './../../firebase';

import SidebarChat from './../sidebar/SidebarChat';
const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className="sidebar">
      {/* Sidebar header */}
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {/* Sidebar search */}
      <div className="sidebar__search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      {/* Sidebar Chats */}
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
