/* =====================
!     Open link in new browser tab
        ====================== */
export default function OpenInNewTab(href) {
    Object.assign(document.createElement('a'), {
        target: '_blank',
        href: href,
    }).click();
};