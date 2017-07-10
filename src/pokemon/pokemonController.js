var dependencies = [
	'$scope',
	'pokemons',
	'PokemonService',
	'SweetAlert'
];

var pokemonModule = angular.module('pokemon-challenge.pokemon');
	
pokemonModule.controller('PokemonMarketController', PokemonMarketController);

PokemonMarketController.$inject = dependencies;

function PokemonMarketController($scope, pokemons, PokemonService, SweetAlert) {
	$scope.pokemons = pokemons;
	$scope.errors = [];
	$scope.alerts = [];

	$scope.loading = false;

	function reloadPokemonList() {
		$scope.loading = true;
		PokemonService
			.list()
			.then(function(pokemons) {
				$scope.pokemons = pokemons;
			})
			.catch(function(error) {
				SweetAlert.error('Something goes wrong.');
			})
			.finally(function() {
				$scope.loading = false;
			})
	}

	$scope.createPokemon = function(data) {
		$scope.loading = true;
		PokemonService
			.create(data)
			.then(function(pokemon) {
				SweetAlert.success("Pokemon announced with success!");
				$scope.pokemons.push(pokemon)
			})
			.catch(function() {
				SweetAlert.error('Something goes wrong.');
			})
			.finally(function() {
				$scope.loading = false;
				$scope.create = {};
			})
	}

	$scope.buyPokemon = function(data) {
		$scope.loading = true;
		PokemonService
			.buyPokemon(data)
			.then(function(transaction) {
				SweetAlert.success('Pokemon bought with success!');
				reloadPokemonList()
			})
			.catch(function(response) {
				var msg = response.data.error || 'Something goes wrong.';
				SweetAlert.error(msg);
			})
			.finally(function() {
				$scope.loading = false;
				$scope.buy = {};
			})
	}

	$scope.show = true;
	$scope.closeUpdateSuccess = function() {
		$scope.show = false;
	}

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};

	$scope.closeError = function(index) {
		$scope.errors.splice(index, 1);
	};
}
