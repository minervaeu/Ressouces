/* ===========================
!     Set multiple Attributes on 1 Element
        =========================== */
export default function SetAttributes(el, attrs) {
    for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
    }
    // Call: setAttributes(elem, {"src": "http://example.com/something.jpeg", "height": "100%", ...});
};