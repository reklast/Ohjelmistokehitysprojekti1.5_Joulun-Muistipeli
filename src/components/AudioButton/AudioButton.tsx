import { useState } from 'react';
import useSound from 'use-sound';

import "./AudioButton.css";

import song from '../../assets/song/joyful-snowman.mp3';

import { FloatButton } from 'antd';
import { SoundOutlined, SoundFilled } from '@ant-design/icons';


function AudioButton() {
    const [soundIsEnabled, setSoundIsEnabled] = useState(false)
    const [playSound, { stop }] = useSound(song, { volume: 0.1, loop: 1});

    const handleClick = () => {
        if (soundIsEnabled) {
            setSoundIsEnabled(false);
            stop();
        }
        else {
            setSoundIsEnabled(true)
            playSound();
        }
    }

    return (
        <FloatButton className="audioButton" icon={soundIsEnabled ? <SoundFilled /> : <SoundOutlined />} onClick={() => handleClick()} />
    )
}

export default AudioButton