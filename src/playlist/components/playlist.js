import React, {Component} from 'react'
import  Media from './media.js'
import PropTypes from 'prop-types'
import './playlist.css'
import Play from '../../icons/components/play'
import Volumen from '../../icons/components/volumen'
import Pause from '../../icons/components/pause'
import FullScreen from '../../icons/components/full-screen'

 class Playlist extends Component {
    render() {
        const Playlist = this.props.data.categories[0].playlist
        return (
            <div className="Playlist">
                <Volumen
                    size={50}
                    color="red"
                />
                {
                    Playlist.map((item) =>{
                        return <Media {...item} key= {item.id}/>
                    })
                }
                
            </div>
        )
    }
 }

 export default Playlist;