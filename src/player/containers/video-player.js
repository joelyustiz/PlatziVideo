import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import VideoPlayerControls from '../components/video-player-controls'
class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })

    }
    componentDidMount(){
        this.setState({
            pause: (!this.props.autoPlay) //if ternario
        })
    }

    handleLoadedMetaData = event => {
        this.video = event.target
        this.setState({
            duration: this.video.duration,
        })
    }
    render(){
        return(
            <VideoPlayerLayout>
                <Title 
                    title = "Video chido"
                />
                <VideoPlayerControls>
                    <PlayPause
                        pause = {this.state.pause} 
                        handleClick = {this.togglePlay}
                    />
                    <Timer 
                        duration={this.state.duration}
                    />
                </VideoPlayerControls>
               
               <Video 
                    autoplay={this.props.autoPlay}
                    pause={this.state.pause}
                    src= "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    handleLoadedMetaData = {this.handleLoadedMetaData}
               />
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer;