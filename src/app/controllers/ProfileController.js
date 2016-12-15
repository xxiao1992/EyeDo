(function(){

  angular
    .module('app')
    .controller('ProfileController', [
      ProfileController
    ]);

  function ProfileController() {
    var vm = this;

    vm.user = {
      title: 'xx2226',
      email: 'xx2226@columbia.edu',
      firstName: 'Xuyan',
      lastName: 'Xiao' ,
      company: 'Columbia University' ,
      address: '116th Street and Broadway' ,
      city: 'New York' ,
      state: 'NY' ,
      biography: 'First User of EyeDo',
      postalCode : '10025'
    };
  }

})();
