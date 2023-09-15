app.factory('Data', function() {
    return { 
        FirstName: '',
        marker: !!localStorage.getItem('plainMarker')
    };
});