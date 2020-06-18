import * as $ from 'jquery'
import Post from '@models/Post'
import json from './assets/json'
import WebpackLogo from './assets/webpack-logo'
import './styles/style.css'


const post = new Post('WebpackPostTitle', WebpackLogo)

$('pre').html(post.toString())

console.log('JSON: ', json)