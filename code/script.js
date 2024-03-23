let message = document.getElementById("message");
let messageOnline = () => {
    message.textContent="Internet Connection Available";
    message.style.cssText="background-color:green; color:dark-green;";
};
let messageOffline = () => {
    message.textContent="No Internet Connection";
    message.style.cssText="background-color:red; color:dark-red;";
};
if(window.navigator.onLine){
    messageOnline();
}
else{
    messageOffline();
}
