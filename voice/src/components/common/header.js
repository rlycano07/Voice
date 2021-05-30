import React from 'react';
import { Anchor} from 'antd';

const { Link } = Anchor;

function AppHeader() {
    return (
        <div className="container-fluid">
            <div id="head" className="header">
                <div className="logo">
                    <i className="fas fa-microphone-alt"> </i>
                    <a href="http://www.google.com/debate">Voice</a>
                </div>
                <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#create" title="Create" />
                        <Link href="#video" title="Videos" />
                        <Link href="#feature" title="Articles" />
                        <Link href="#about" title="Polls" />
                        <Link href="#posts" title="Posts" />
                        <Link href="#create" title="Account" />
                </Anchor>
            </div>
        </div>
    );
}

export default AppHeader;
