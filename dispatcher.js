import { dispatch } from './event.js';
document.getElementsByTagName('button')[0].onclick = () => dispatch('app:ping', 'pong');