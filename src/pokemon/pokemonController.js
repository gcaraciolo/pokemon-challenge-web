var dependencies = [
	'$scope',
	'pokemons',
	'PokemonService'
];

var pokemonModule = angular.module('pokemon-challenge.pokemon');
	
pokemonModule.controller('PokemonMarketController', PokemonMarketController);

PokemonMarketController.$inject = dependencies;

function PokemonMarketController($scope, pokemons, PokemonService) {
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
				$scope.errors.push({
					type: 'danger',
					msg: 'Something does wrong'
				})
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
				$scope.alerts.push({
					type: 'success',
					msg: 'Pokemon advertised with success'
				})
				$scope.pokemons.push(pokemon)
			})
			.catch(function(response) {
				$scope.errors = response.data.errors
			})
			.finally(function() {
				$scope.loading = false;
			})
	}

	$scope.buyPokemon = function(data) {
		$scope.loading = true;
		PokemonService
			.buyPokemon(data)
			.then(function(transaction) {
				$scope.alerts.push({
					type: 'success',
					msg: 'Pokemon bought with success!'
				})
				reloadPokemonList()
			})
			.catch(function(response) {
				if(response.data.errors) {
					$scope.errors = response.data.errors	
				} else if(response.data.error){
					$scope.errors.push(response.data.error)
				} else {
					$scope.errors.push('something goes worng')
				}
			})
			.finally(function() {
				$scope.loading = false;
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
