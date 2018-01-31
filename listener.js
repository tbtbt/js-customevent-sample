import { listen } from './event.js';
listen('app:ping', (e) => alert(`ping - ${e.detail}`));