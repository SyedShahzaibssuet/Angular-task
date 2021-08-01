app.controller('editcontroller',function($scope, $rootScope, $translate,$stateParams,$state) {
    $scope.changeLanguage = function (key) {
        $rootScope.lang = key;
        $translate.use(key);
    };
    $scope.NewEmployee={};
    console.log($stateParams.param);
    if($stateParams != null){
        console.log($stateParams.param);
        $scope.NewEmployee.Name= $stateParams.param.Name;
        $scope.NewEmployee.Department= $stateParams.param.Department;
        $scope.NewEmployee.Status= $stateParams.param.Status;
        }
    $scope.goback=function() {
        $state.go('home');
        $scope.NewEmployee={};
    };
    $scope.updateemployee =function(employee) {
        $state.go("home",{data:employee})
    };
});