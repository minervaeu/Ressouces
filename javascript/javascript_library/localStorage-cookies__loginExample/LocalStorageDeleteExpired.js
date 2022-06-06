import LocalStorageGetWithExpiry from "./LocalStorageGetWithExpiry";

export default function LocalStorageDeleteExpired() {

    let eachitem, eachkey, dummyitem;
    
    // Loop all localStorage items that has an expiry date
    for (let i = 0; i < localStorage.length; i++){
    eachitem = localStorage.getItem(localStorage.key(i));
    eachkey = localStorage.key(i);
    // If value includes "expiry", call GetWithExpiry to read it and delete if expired
    if (eachitem.includes("expiry")) {
    // Call function to read it and delete if expired
    dummyitem = LocalStorageGetWithExpiry(eachkey);
    };};
    // call it on  for automated check on onload
};