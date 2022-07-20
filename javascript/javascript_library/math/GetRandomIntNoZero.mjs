/* ===========================
!     Get a random Integer within 2 values
            =========================== */
export default function GetRandomIntNoZero(minvalue, maxvalue) {
    return minvalue + Math.floor(Math.random() * (maxvalue - minvalue + 1));
};