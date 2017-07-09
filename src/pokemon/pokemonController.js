var dependencies = [
	'$scope',
	'pokemons',
	'PokemonService'
];

var pokemonModule = angular.module('pokemon-challenge.pokemon');
	
pokemonModule.controller('PokemonMarketController', PokemonMarketController);

PokemonMarketController.$inject = dependencies;

function PokemonMarketController($scope, pokemons, PokemonService) {
	$scope.listPokemons = function() {
		return pokemons;
	}

	$scope.createPokemon = function(data) {
		PokemonService
			.create(data)
			.then(function(pokemon) {
				console.log(pokemon)
			})
			.catch(function(error) {
				console.log(error)
			})
	}

	$scope.buyPokemon = function(data) {
		PokemonService
			.buyPokemon(data)
			.then(function(transaction) {

			})
			.catch(function(error) {
				console.log(error)
			})
	}
}
