var config = {
	param1: '', // example
	param2: process.env.NODE_ENV === 'development' ? 'foo' : 'bar', // example
	git: {
		remoteList: ['origin', 'heroku'] // add any other remotes here
	},
	app_name: 'Reactatouille Boilerplate', // your app name here
	build_name: 'Reactatouille Boilerplate' + ' | ' + process.env.NODE_ENV + ' | ' + 'v0.6', // name your build here for referencing, to help you trace and debug (if you don't need it, remove the tag from the src/index.html file)
	defaultDevPort: 3000
}

// Modified production configuration parameters
if (process.env.NODE_ENV === 'production') {
	config.param1 = 'valueProduction';
}

module.exports = config;
