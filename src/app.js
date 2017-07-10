var dependencies = [
	'ui.router',
	'angularSpinner',
	'ng-sweet-alert',
	'pokemon-challenge.pokemon',
];

function appconfig($urlServiceProvider, $stateProvider, $locationProvider, $httpProvider, usSpinnerConfigProvider) {
	$locationProvider.html5Mode(true);
	$httpProvider.interceptors.push('httpRequestInterceptor');
	usSpinnerConfigProvider.setDefaults({ color: 'white' });

	$stateProvider.state('pokemon-challenge', {
		url: '/',
		templateUrl: 'src/pokemon-challenge.html'
	});

	$urlServiceProvider.rules.otherwise({
		state: 'pokemon-challenge'
	});
}

function httpRequestInterceptor() {
	return {
		request: function(config) {
			config.headers['Accept'] = 'application/json;';
			return config;
		}
	};
}

function run() {
}

var pokemonChallenge = angular
	.module('pokemon-challenge', dependencies)
	.factory('httpRequestInterceptor', httpRequestInterceptor)
	.config(appconfig)
	.run(run);

