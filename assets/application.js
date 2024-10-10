// Put your application javascript here
// alert("This page working || not working");
if(document.getElementById('sort_by') != null){
document.querySelector('#sort_by').addEventListener('change', function(e) {
    var url = new URL(window.location.href);
    url.searchParams.set('sort_by', e.currentTarget.value);
    window.location.href = url.href;
});
}

// if( document.getElementById('AddressCountryNew') != null){
//     document.getElementById('AddressCountryNew').addEventListener('change', function(e){
//             var province = this.options[selectedIndex].getAttribute('data-provinces');
//             var proviceSelector = document.getElementById('AddressCountryNew');
//             var provinceArray = JSON.parse(provinces);

//             console.log(provinceArray);
        
//     });
// }