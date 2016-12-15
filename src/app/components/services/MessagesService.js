(function(){
  'use strict';

  angular.module('app')
        .service('messagesService', [
        '$q',
        messagesService
  ]);

  function messagesService($q){
    var messages = [
      {
        userPhoto : '/assets/images/Alex.jpg',
        subject: 'Apple\'s price may rise',
        userName: 'Alex',
        date: '2016-12-15',
        text: 'Apple is publishing the new iPhone 7 SE which is an indicator to long signal!'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(messages);
      }
    };
  }

})();
