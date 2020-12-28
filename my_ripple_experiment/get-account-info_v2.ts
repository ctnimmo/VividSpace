
// import * as ripple from 'ripple-lib';

const RippleAPI = require('ripple-lib').RippleAPI;

// export const RippleAPI = ripple.RippleAPI;

const api = new RippleAPI({
  server: 'wss://s1.ripple.com' // Public rippled server
});

function tada(){
	
	api.connect()
	.then(() => {
	  /* begin custom code ------------------------------------ */
	  const myAddress = 'rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn';

	  console.log('getting account info for', myAddress);
	  return api.getAccountInfo(myAddress);

	}).then(info => {
	  console.log(info);
	  console.log('getAccountInfo done');

	  /* end custom code -------------------------------------- */
	}).then(() => {
	  return api.disconnect();
	}).then(() => {
	  console.log('done and disconnected.');
	}).catch(console.error);
}

tada();
