angular.module('rosters').service('teamRosters', TeamRosterService);

function TeamRosterService($http) {
    function fetchTeams() {
        return $http({
            method: 'GET',
            url: './data/teams.json'
        });
    }

    return {
        get: fetchTeams
    };
}
