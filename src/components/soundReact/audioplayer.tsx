// components/AudioPlayer.tsx

import ReactPlayer from "react-player";
import { useRef, useState } from "react";
import { AudioDetails } from "./Audiodetails";
import { PlayerControls } from "./Playercontrols";

type Props = {
    url: string;
    title: string;
  };
  


export const AudioPlayer = ({ url, title }: Props) => {
    const playerRef = useRef<ReactPlayer | null>(null);
    const [playing, setPlaying] = useState<boolean>(false);
    const [muted, setMuted] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(0.5);
    const [progress, setProgress] = useState<number>(0);
    const [loop, setLoop] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
  
    // event handlers for custom controls
  
    const handlePlay = () => {
      setPlaying(true);
    };
  
    const handlePause = () => {
      setPlaying(false);
    };
  
    const handleVolumeChange = (newVolume: number) => {
      setVolume(newVolume);
    };
  
    const toggleMute = () => {
      setMuted((prevMuted) => !prevMuted);
    };
  
    const handleProgress = (state: any) => {
      setProgress(state.played);
    };
  
    const handleDuration = (duration: number) => {
      setDuration(duration);
    };
  
    const toggleLoop = () => {
      setLoop((prevLoop) => !prevLoop);
    };
  
    return (
      <div>
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={playing}
          volume={volume}
          muted={muted}
          loop={loop}
          onPlay={handlePlay}
          onPause={handlePause}
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
  
        <div className="shadow rounded-xl">

          <PlayerControls
            playerRef={playerRef}
            playing={playing}
            volume={volume}
            muted={muted}
            progress={progress}
            duration={duration}
            loop={loop}
            // event handler props
            toggleMute={toggleMute}
            handlePlay={handlePlay}
            toggleLoop={toggleLoop}
            handlePause={handlePause}
            handleVolumeChange={handleVolumeChange}
          />
        </div>
      </div>
    );
  };