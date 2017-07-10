var dependencies = [
	
];

function appconfig($stateProvider) {
	$stateProvider.state('pokemon-market', {
		url: '/pokemon-market',
		templateUrl: 'src/pokemon/pokemon-market.html',
		controller: 'PokemonMarketController',
		resolve: {
			pokemons: function(PokemonService, SweetAlert) {
				return PokemonService
					.list()
					.catch(function(error) {
						SweetAlert.error('server off')
					})
			}
		}
	});
}

var pokemonChallenge = angular
	.module('pokemon-challenge.pokemon', dependencies)
	.config(appconfig);
