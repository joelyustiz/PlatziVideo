import React, {Component} from 'react'
import  Media from './media.js'
import PropTypes from 'prop-types'
import './playlist.css'

 class Playlist extends Component {
    render() {
        const Playlist = this.props.data.categories[0].playlist
        return (
            <div className= "Playlist">
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