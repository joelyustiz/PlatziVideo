import React, {Component} from 'react'
import  Media from './media.js'
import PropTypes from 'prop-types'

 class Playlist extends Component {
    render() {
        const Playlist = this.props.data.categories
        return (
            <div>
                {
                    Playlist.map((item) =>{
                        return item.playlist.map((item) =>{
                            return <Media {...item} key= {item.id}/>
                        }) 
                    })
                }
                
            </div>
        )
    }
 }

 export default Playlist;