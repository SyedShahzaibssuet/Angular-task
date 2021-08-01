
//controller function
app.controller("MyCtrl",($scope,$http)=>{
   //Controller Function 
   const URL ="https://covid19.mathdro.id/api";

    $scope.title="Stay Home Stay Safe";
    
    // get all data from api
    $http.get(URL).then((Response)=>{
        $scope.alldata=Response.data;
    },(error)=>{
        console.log(error);
    });

    
    //get data from api through country name
    $scope.getdatacountry=()=>{
        let country=$scope.countryname;
        if(country=="")
        {
            $scope.countryname=undefined;
        }
        else
        {
            $http.get(`${URL}/countries/${country}`).then((response)=>{
                $scope.countrydata=response.data;
            },(error)=>{
                console.log(error);
            })
        }
    }
    
})