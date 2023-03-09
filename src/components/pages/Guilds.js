import React, { useEffect, useState } from 'react';
import GuildList from '../GuildList';
import GuildsArray from '../GuildsArray';

import voxhead from '../../mirandushub/pics/voxHead.png'
import chatBubble from '../../mirandushub/pics/chatBubble.png'

const Guilds = () => {
    const [showChatBubble, setShowChatBubble] = useState(false);
    const [hideTimeoutId, setHideTimeoutId] = useState(null);

    useEffect(() => {
        const showTimeoutId = setTimeout(() => {
            setShowChatBubble(true);
        }, 1000);

        const hideTimeoutId = setTimeout(() => {
            setShowChatBubble(false);
        }, 6000);

        setHideTimeoutId(hideTimeoutId);

        return () => {
            clearTimeout(showTimeoutId);
            clearTimeout(hideTimeoutId);
        };
    }, []);

    const handleVoxHeadMouseEnter = () => {
        setShowChatBubble(true);
    };

    const handleChatBubbleMouseEnter = () => {
        setShowChatBubble(true);
        if (hideTimeoutId) {
            clearTimeout(hideTimeoutId);
        }
    };

    const handleChatBubbleMouseLeave = () => {
        setHideTimeoutId(setTimeout(() => {
            setShowChatBubble(false);
        }, 5000));
    };

    return (
        <div className='fullpage'>
            <h1 className='guildAppHeader'>Mirandus Guild Hub</h1>
            <GuildList guilds={GuildsArray} />
            <div onMouseEnter={handleVoxHeadMouseEnter}>
                <a href='/guild-application'>
                    <img src={voxhead} alt='Everflow Elf Vox' className='vox' onMouseEnter={handleChatBubbleMouseEnter} onMouseLeave={handleChatBubbleMouseLeave}></img>
                </a>
                {showChatBubble && (
                    <a href='/guild-application'>
                        <img src={chatBubble} onMouseEnter={handleChatBubbleMouseEnter} onMouseLeave={handleChatBubbleMouseLeave} alt='Chat bubble' className='chatBubble'></img>
                        <div  className='chatBubbleText'>Want your guild featured? Click me to fill out the application!</div>
                    </a>
                )}
            </div>
        </div>
    )
}

export default Guilds;
