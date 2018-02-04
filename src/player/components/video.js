import React, { Component } from 'react'
import './video.css'
class Video extends Component {
 togglePlay() {
        if (this.props.pause) {
            this.video.play()
        } else {
            this.video.pause()
        }
    }
    
    componentWillReceiveProps(nextProps){
        if (nextProps.pause !== this.props.pause) {
            this.togglePlay()
        }
    }

    setRef = element => {
        this.video = element;
    }
    render(){
        const {
            handleLoadedMetaData,
            handleTimeUpdate
        } = this.props;
        
        return(
            <div className="Video">
                <video              
                     autoPlay={this.props.autoplay}
                     src={this.props.src}
                     ref={this.setRef}  // hacemos referencia react
                     onLoadedMetadata={handleLoadedMetaData} //miramos la duracion del video
                     onTimeUpdate={handleTimeUpdate} // miramos el tiempo transcurrido
                 />
            </div>
            
        )
    }
}

export default Video;

