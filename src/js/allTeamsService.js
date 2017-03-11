// when only the first argument is present in the module method, you are selecting a module with the name given
angular.module('rosters').service('teamRosters', TeamRosterService);

// angular has a built in http service $http
function TeamRosterService($http) {
  function getTeams(url) {
    return $http({
      method: 'GET',
      url: url
    });
  }

  // revealing the get method
  return {
    get: getTeams
  };
}
