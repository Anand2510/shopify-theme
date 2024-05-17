// Put your application javascript here
// alert("This page working || not working");
document.querySelector('#sort_by').addEventListener('change', function(e) {
    var url = new URL(window.location.href);
    url.searchParams.set('sort_by', e.currentTarget.value);
    window.location.href = url.href;
});

