/**
 * Created by santosh on 3/27/17.
 */
$rootScope.$on('$locationChangeStart', function (event, next, current) {
    var absurl = window.location.pathname;

    var restrictedPage = true;
    if(absurl.match("login.html"+"$") || absurl.match("accregi.html"+"$") ) {
        restrictedPage = false;
    }

    // jst supppose we are reading cookies.
    var loggedIn = $cookies.getObject("currentUser");

    if (restrictedPage && !loggedIn) {

        window.location.href = 'login.html';
    } else if(restrictedPage && loggedIn) {

        // redirect the user to appropriate router.

    }
});