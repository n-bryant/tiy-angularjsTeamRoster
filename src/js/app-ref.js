(function() {
    'use strict';

    angular
        .module('classwork', [])
        .controller('HeaderController', function() {
            this.title = 'Hello';
            this.firstName = 'Greatest';
            this.lastName = 'Ever';
            this.greet = function() {
                return this.title + ', ' + this.firstName + ' ' + this.lastName;
            };
        });
})();


(function() {
    'use strict';

    angular.module('rosters', []).controller('RosterController', function(teamRosters, $q) {
        var self = this;
        this.allTeams = {};
        this.selectedTeam = null;
        this.selectedPlayer = null;
        this.teamName = null;

        $q.when(teamRosters.get()).then(function(response) {
            self.allTeams = response.data;
        });
        this.showRoster = function(team) {
            this.selectedPlayer = null;
            this.selectedTeam = this.allTeams[team];
            this.teamName = team;
        };

        this.showPlayer = function(player) {
            this.selectedPlayer = player;
        };
    });
})();
