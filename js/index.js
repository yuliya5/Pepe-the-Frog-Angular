

angular.module('MyApp', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('blue');
}).
 controller('AppCtrl', function($scope, $timeout, $mdSidenav, $mdUtil, $log, $rootScope) {

	$scope.toggleRight = buildToggler('right');
	$rootScope.posts = [
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of 1 thing",
			user: "shark.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of two things",
			user: "bane.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of three things",
			user: "anime.png"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of 1 thing",
			user: "hair.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of two things",
			user: "sad.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of 1 thing",
			user: "regal.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of two things",
			user: "slowpoke.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of 1 thing",
			user: "smug.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of two things",
			user: "phone.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of 1 thing",
			user: "shark.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of two things",
			user: "rana.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of 1 thing",
			user: "smug.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of two things",
			user: "hair.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of 1 thing",
			user: "slowpoke.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of two things",
			user: "shark.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of two things",
			user: "sad.jpg"
		},
		{
			content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui itaque sapiente voluptates possimus est odit laboriosam architecto, atque ratione aut perspiciatis iste ullam unde dolore alias soluta, inventore laborum eaque?",
			karma: 1,
			tags: ["newpost", "firstpost"],
			timeStamp: "1434235036372",
			title: "This is an example post of 1 thing",
			user: "regal.jpg"
		},
	];

	$scope.upvote = function(post){
		post.karma++;
	};

	$scope.downvote = function(post){
		post.karma--;
	};

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

		$scope.cancel = function(){
			$scope.newPost = {};
			$mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
		}
    $scope.submit = function() {
	    $scope.newPost.user = pep[randomNumber];
	    $scope.newPost.karma = 1;
	    $scope.newPost.timeStamp = Date.now();

	    $rootScope.posts.push($scope.newPost);

	    $scope.newPost = {};
	    $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
	    //go through and set the $scope.title/content/tags to ''

  	};
  });
