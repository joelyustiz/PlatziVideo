import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
class VideoPlayer extends Component {

    state = {
        pause: true,
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
    render(){
        return(
            <VideoPlayerLayout>
                <Title 
                    title = "Video chido"
                />
                <PlayPause
                    pause = {this.state.pause} 
                    handleClick = {this.togglePlay}
                />
               <Video 
                    autoplay={this.props.autoPlay}
                    pause={this.state.pause}
                    src= "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
               />
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer;