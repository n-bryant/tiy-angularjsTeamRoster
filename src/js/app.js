(function() {
    'use strict';

    // // module is an angular library method
    // // module has two arguments.  1. name | 2. array
    // angular.module('helloWorld', [])
    //   // would have distinct controllers for each piece of functionality
    //   // controller takes two arguments.  1. NameController | 2. anonymous function
    //   .controller('HeaderController', function() {
    //     // not prefacing these variables with 'this' makes them private
    //     const firstName = 'Greatest';
    //     const lastName = 'Ever';
    //     this.displayName = function() {
    //       return `${firstName} ${lastName}`;
    //     };
    //   });

    const app = angular.module('rosters', []);

    // passing service name into controller
    // all angular services are denoted with a $. i.e. $q, $http
    app.controller('RosterController', function(teamRosters , $q) {

      this.allTeams = {};
      this.activeTeam = null;
      this.activePlayer = null;
      this.teamName = null;
      this.orderByField = 'position';
      this.reverseSort = 'false';

      this.updateTable = function(col) {
        this.orderByField = col;
        this.reverseSort = !this.reverseSort;
      }

      // $q stands for queue, and is used to queue up multiple requests then do something once they resolve.  similar to promise.all().
      $q.when(teamRosters.get('./src/js/data/teams.json')).then((response) => {
        this.allTeams = response.data;
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });

      // updates activeTeam when a team is clicked
      this.updateTeam = function(name) {
        this.activeTeam = this.allTeams[name];
        if (this.teamName === name) return;
        this.teamName = name;
        this.activePlayer = null;
        // console.log(this.activeTeam);
      };
      // updates activePlayer when a player is clicked
      this.showPlayer = function(playerObj) {
        this.activePlayer = playerObj;
        // console.log(this.activePlayer);
      }
    });
})();
