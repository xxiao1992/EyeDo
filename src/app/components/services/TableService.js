(function(){
  'use strict';

  angular.module('app')
        .service('tableService', [
        '$q',
      tableService
  ]);

  function tableService($q){
    var tableData = [
      {
        issue: 'BBBY',
        progress: 30,
        status: 'long',
        class: 'md-accent',
		name: 'Shuni'
      },
      {
        issue: 'NKE',
        progress: 40,
        status: 'short',
        class: '',
		name: 'Buffett'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(tableData);
      }
    };
  }
})();
