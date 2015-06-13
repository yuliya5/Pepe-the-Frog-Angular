var peppitControllers = angular.module('peppitControllers', []);

peppitControllers.controller('submitCtrl', ['$scope',
        function($scope) {
          
        var randomNumber = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

        var pep = ['anime.png',
                  'bane.jpg',
                  'hair.jpg',
                  'phone.jpg',
                  'rana.jpg',
                  'regal.jpg',
                  'sad.jpg',
                  'shark.jpg',
                  'slowpoke.jpg',
                  'smug.jpg'];
          
        var tagSplice = function(str){
  return (arr = str.split(", ")); 
};
          
          
        var timeStamp = function() {
  var now = new Date();
  var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
  time[0] = time[0] || 12;
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }
  return date.join("/") + " " + time.join(":") + " " + suffix;
            
            
};
          
      //not sure about this    
     $scope.posts = [];
        $scope.list = [];
        $scope.title = [];
        $scope.content = [];
        $scope.tags = 'tags';

        
//       $scope.NewPost = function(title, content, tags, type) {
        
        
 
        
//        // this.user = pep[randomNumber];
//        // this.title = title;
//        // this.content = content;
//       //  this.tags = tags;
//       //  this.karma = 1;
//        // this.type = type;
//        // this.timeStamp = timeStamp();
//        // console.log(this);
        
//       };

        $scope.submit = function() {
          var newPost = {};
          newPost.title = $scope.title;
          newPost.content = $scope.content;
          newPost.tags = tagSplice($scope.tags);
          newPost.user = pep[randomNumber];
          newPost.karma = 1;
          newPost.timeStamp = timeStamp();
          
          $scope.posts.push(newPost);
          
          //go through and set the $scope.title/content/tags to ''
          
        };
        }]);        
 