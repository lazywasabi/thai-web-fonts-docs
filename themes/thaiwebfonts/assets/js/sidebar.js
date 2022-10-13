// Scroll the active sidebar link into view
const sidenav = document.querySelector('.twf-sidebar .offcanvas-body');
const sidenavHeight = sidenav.clientHeight;
const sidenavActiveLink = document.querySelector(
  '.twf-sidebar .offcanvas-body a.active'
);
const sidenavActiveLinkTop = sidenavActiveLink.offsetTop;
const sidenavActiveLinkHeight = sidenavActiveLink.clientHeight;
const viewportTop = sidenavActiveLinkTop;
const viewportBottom = viewportTop - sidenavHeight + sidenavActiveLinkHeight;

if (sidenav.scrollTop > viewportTop || sidenav.scrollTop < viewportBottom) {
  sidenav.scrollTop =
    viewportTop - sidenavHeight / 2 + sidenavActiveLinkHeight / 2;
}
