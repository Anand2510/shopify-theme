// Put your application javascript here
// alert("This page working || not working");
if(document.getElementById('sort_by') != null){
document.querySelector('#sort_by').addEventListener('change', function(e) {
    var url = new URL(window.location.href);
    url.searchParams.set('sort_by', e.currentTarget.value);
    window.location.href = url.href;
});
}

if( document.getElementById('AddressCountryNew') != null){
    document.getElementById('AddressCountryNew').addEventListener('change', function(e){
            var province = this.options[this.selectedIndex].getAttribute('data-provinces');
            var proviceSelector = document.getElementById('AddressProvinceNew');
            var provinceArray = JSON.parse(province);

            // console.log(provinceArray);
            if(provinceArray.length < 1 ){
                proviceSelector.setAttribute('disabled','disabled');

            }else{
                proviceSelector.removeAttribute('disabled');

            }
            proviceSelector.innerHTML = '';
            var options = '';
            for(var i = 0; i < provinceArray.length; i++ ){
                options +='<option value="'+ provinceArray[i][0] + '">'+ provinceArray[i][0] +'</option>';
            }
            proviceSelector.innerHTML = options;
        
    });
}
if(document.getElementById("forgotpassword") != null){
    document.getElementById('forgotpassword').addEventListener("click", function(e){
        console.log("I Clicked");
        const element = document.querySelector("#forgot_password_form");
        if(element.classList.contains("d-none")){
            element.classList.remove("d-none");
            element.classList.add("d-block");
        }
    });
}
var localeItems = document.querySelectorAll("#localItem");
if(localeItems.length > 0){
    localeItems.forEach(item => {
        item.addEventListener("click", event =>{
            document.getElementById("localeCode").value = item.getAttribute("lang");
    });
     });
}