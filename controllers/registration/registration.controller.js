app.controller('registrationController', function ($scope, $rootScope, $translate,$stateParams,$state) {
    // RegistrationService,
    $scope.changeLanguage = function (key) {
        $rootScope.lang = key;
        $translate.use(key);
    };
    $scope.message = "";
    $scope.newemployee = {};
    $scope.newemploy={};
    if($stateParams.data)
    console.log("in controller");
    $scope.Employees = [
        { 'Id': 1, 'Name': "Shahzaib", 'Department': "Incubation", "Status": "Permenant" },
        { 'Id': 2, 'Name': "Ahsaan", 'Department': "Incubation", "Status": "Permenant" },
        { 'Id': 3, 'Name': "Arsalan", 'Department': "Incubation", "Status": "Permenant" }
    ];
    $scope.deleteemployee = function (employee) {
        $scope.Employees.splice($scope.Employees.indexOf(employee), 1);
        $scope.message = `${employee.Name} Record is deleted`;
    };
    $scope.clearmessage = function () {
        $scope.message = "";
    };
    $scope.saveemployee = function () {
        if ($scope.newemployee.Name != null && $scope.newemployee.Department != null && $scope.newemployee.Status != null) {
            $scope.newemployee.Id = $scope.Employees.length + 1;
            $scope.Employees.push($scope.newemployee);
            $scope.message = `${$scope.newemployee.Name} Record is Added`;
            $scope.newemployee = {};
        }
        else
        {
            $scope.message = `Please Fill Compelete Form of Employee`;
        }
    };
    $scope.goedit =function(employee){
        console.log(employee);
        var form =employee;
        $state.go("edit",{'param':form})
    };
});