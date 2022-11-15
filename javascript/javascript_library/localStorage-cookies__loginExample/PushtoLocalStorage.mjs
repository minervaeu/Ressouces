/* ====================
!     Push values to local Storage 
            ===================== */
export default function PushToLocalStorage(IDfromTrigger, IDfromValue, key, event) {
    document
    .getElementById(`${IDfromTrigger}`)
    .addEventListener(`${event}`, () => {
        localStorage.setItem(
        `${key}`,
        document.getElementById(`${IDfromValue}`).value
        );
    });
};