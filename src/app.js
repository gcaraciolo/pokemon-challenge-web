var dependencies = [
	'ui.router',
	'pokemon-challenge.pokemon',
];

function appconfig($urlServiceProvider, $provide, $stateProvider, $locationProvider) {

	$provide.value('apiBaseUrl', 'http://local.api.pokemon-challenge.com');
	$locationProvider.html5Mode(true);

	$stateProvider.state('pokemon-challenge', {
		url: '/',
		templateUrl: 'src/pokemon-challenge.html'
	});

	$urlServiceProvider.rules.otherwise({
		state: 'pokemon-challenge'
	});
}

function run() {
}

var pokemonChallenge = angular
	.module('pokemon-challenge', dependencies)
	.config(appconfig)
	.run(run);
