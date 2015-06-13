

angular.module('MyApp', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('blue');
}).
 controller('AppCtrl', function($scope, $timeout, $mdSidenav, $mdUtil, $log, $rootScope) {

	$scope.toggleRight = buildToggler('right');
	$rootScope.posts = [{}];
	$scope.posts = $rootScope.posts;
	function buildToggler(navID) {
    var debounceFn =  $mdUtil.debounce(function(){
          $mdSidenav(navID)
            .toggle()
            .then(function () {
              $log.debug("toggle " + navID + " is done");
            });
        },300);
    return debounceFn;
  }

	$scope.imagePath = 'img/washedout.png';

	$scope.togglePost = function(post){
		if(post.open){
			post.open = false;
		} else{
			post.open = true;
		}
	}

	$scope.messages = [
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		},
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		},
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		},
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		},
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		},
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		},
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		},
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		},
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		},
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		},
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		},
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		},
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		},
		{
			title: 'i am a title',
			body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptate laudantium ipsa quia suscipit nihil maxime. Architecto ad molestias, nisi doloremque. Eveniet optio assumenda quod nesciunt iure neque commodi pariatur.',
			open: false
		}
	];
}).
 controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log, $rootScope) {
    $scope.newPost = {}

  	var randomNumber = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

    var pep = [
		  'anime.png',
		  'bane.jpg',
		  'hair.jpg',
		  'phone.jpg',
		  'rana.jpg',
		  'regal.jpg',
		  'sad.jpg',
		  'shark.jpg',
		  'slowpoke.jpg',
		  'smug.jpg'
	  ];

	  var tagSplice = function(str){
		  return (arr = str.split(", "));
		};

		$scope.posts = [];
		$scope.list = [];
		$scope.title = [];
		$scope.content = [];
		$scope.tags = 'tags';


    $scope.submit = function() {
	    $scope.newPost.user = pep[randomNumber];
	    $scope.newPost.karma = 1;
	    $scope.newPost.timeStamp = Date.now();

	    $rootScope.posts.push($scope.newPost);
	    console.log($scope.posts)
	    $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
	    //go through and set the $scope.title/content/tags to ''

  	};
  });
