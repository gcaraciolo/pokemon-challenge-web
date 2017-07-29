var dependencies = [
	'$http',
	'apiBaseUrl'
];

var pokemonModule = angular.module('pokemon-challenge.pokemon');

pokemonModule.service('PokemonService', PokemonService);

PokemonService.$inject = dependencies;

function PokemonService($http, apiBaseUrl) { 
	return {
		list: function() {
			return $http
				.get(apiBaseUrl + '/pokemons')
				.then(response => response.data);
		},
		create: function(body) {
			return $http
				.post(apiBaseUrl + '/pokemons', body)
				.then(response => response.data);
		},
		buyPokemon: function(body) {
			return $http
				.post(apiBaseUrl + '/pokemons/buy', body)
				.then(response => response.data);
		}
	};
}
