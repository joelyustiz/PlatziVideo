import React from 'react'
import { render } from 'react-dom'
import Playlist from './src/playlist/componets/playlist'
import data from './src/api.json'

const app = document.getElementById('app')

const holamundo = <h1>Hola mundo</h1>;
render( < Playlist data= {data}/> , app);
