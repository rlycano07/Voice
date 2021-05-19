import React from 'react';
import { Menu } from 'antd';

function AppHeader() {
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i class="fas fa-microphone-alt"> </i>
                    <a href="http://www.google.com">Voice</a>
                </div>
                    <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="create">Create</Menu.Item> 
                    <Menu.Item key="challenge">Videos</Menu.Item>
                    <Menu.Item key="articles">Articles</Menu.Item>
                    <Menu.Item key="polls">Polls</Menu.Item>
                    <Menu.Item key="FAQ">FAQ</Menu.Item>
                    <Menu.Item key="account">Account</Menu.Item>
                    </Menu>
            </div>
        </div>
    );
}

export default AppHeader;
