//For reports 

mainapp.controller('ReportController', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.vsizelabels = ["30/Jun/2015:07:51:09", "30/Jun/2015:07:53:10", "30/Jun/2015:07:53:15", "30/Jun/2015:07:53:35", "30/Jun/2015:08:03:43", "30/Jun/2015:08:04:34", "30/Jun/2015:08:56:15", "30/Jun/2015:09:24:04", "01/Jul/2015:06:50:08"];
    $scope.vsizeseries = ['21202', '18681', '21212', '21252', '29907', '31616'];
    
    $scope.vsizedata = [
      
      [343200, 343200, 343200, 343200, 343200, 343200, 343200, 343200, 343200],
      [2694444, 2692392, 2692392],
      [57364, 57364, 57364, 57364, 57364, 57364, 57364, 57364, 57364],
      [245280, 245280, 245280, 245280, 245280, 245280, 245280, 245280, 245280 ],
      [ 2301228, 2301364, 2301364],
      [0, 1383728, 2301228, 2301228]

      //[2991856, 2991866, 991876, 2991886, 2991896],
      //[62640, 62650, 626606, 62670, 62680]
    ];
    $scope.onClickVsize = function (points, evt) {
      console.log(points, evt);
    };
    $scope.onHoverVsize = function (points) {
      if (points.length > 0) {
        console.log('Point', points[0].value);
      } else {
        console.log('No point');
      }
    };


    /*$scope.rsslabels = ['07:37:21', '07:37:27', '07:37:31', '07:37:36', '07:37:41'];
    $scope.rssseries = ['rss'];
    $scope.rssdata = [
      [1764, 716, 1588, 2237240, 2237240]
      //[28, 48, 40, 19, 86, 27, 90]
    ];*/
    $scope.onClickRss = function (points, evt) {
      console.log(points, evt);
    };
    $scope.onHoverRss = function (points) {
      if (points.length > 0) {
        console.log('Point', points[0].value);
      } else {
        console.log('No point');
      }
    };



/*
    $timeout(function () {
      $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      $scope.data = [
        [28, 48, 40, 19, 86, 27, 90],
        [65, 59, 80, 81, 56, 55, 40]
      ];
      $scope.series = ['Series C', 'Series D'];
    }, 3000);*/





  }]);