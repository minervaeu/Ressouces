/* =========================
!     Swap between 2 Classes by Events 
            ========================= */
export default function SwapTwoClassesbyEvents(
    element_ID,
    event_1,
    event_2,
    first_Class,
    second_Class
) {
    document
    .getElementById(`${element_ID}`)
    .addEventListener(`${event_1}`, () => {
        document
        .getElementById(`${element_ID}`)
        .classList.remove(`${second_Class}`);
        document.getElementById(`${element_ID}`).classList.add(`${first_Class}`);
    });
    document
    .getElementById(`${element_ID}`)
    .addEventListener(`${event_2}`, () => {
        document
        .getElementById(`${element_ID}`)
        .classList.remove(`${first_Class}`);
        document.getElementById(`${element_ID}`).classList.add(`${second_Class}`);
    });
};