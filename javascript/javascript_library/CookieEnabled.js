export default function cookiesEnabled () {
    let cookieEnabled = (navigator.cookieEnabled) ? true : false;
    return (cookieEnabled);
};