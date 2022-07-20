/* ================================
!     Set multiple Attributes on multiple Elements
        ================================= */
export default function SetAttributesArr(arr, attrs) {
    for (let el of arr) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        };
    };
    // Call: setAttributesArr(arr with (DOM-Objects!), {"src": "http://example.com/something.jpeg", "height": "100%", ...});
};