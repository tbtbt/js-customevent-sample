/**
 * 指定したkey名のカスタムイベントを送信する
 * @method send
 * @param  {string} key   カスタムイベント名
 * @param  {object} value データ
 */
export const dispatch = (key, value) => {
	let ev;
	try {
		ev = new CustomEvent(key, {detail: value});
	} catch(e) { // for IE
		ev = document.createEvent('CustomEvent');
		ev.initCustomEvent(key, false, false, value);
	}
	document.getElementsByTagName('body')[0].dispatchEvent(ev);
};

/**
 * カスタムイベントのリスナーを登録する
 * @method listen
 * @param  {string}   key      カスタムイベント名
 * @param  {Function} callback イベントリスナーから呼ばれる関数
 */
export const listen = (key, callback) => {
	document.getElementsByTagName('body')[0].addEventListener(key, callback);
};