/* =============================
!    check if cookies are enabled in browser
=============================== */
export default function CheckCookiesEnabled () {

    let cookieEnabled = (navigator.cookieEnabled) ? true : false;
    return (cookieEnabled);
    
};