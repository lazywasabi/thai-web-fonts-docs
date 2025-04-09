// Scroll the active sidebar link into view
const sidenavActiveLink = document.querySelector('.twf-sidebar .offcanvas-body a.nav-link.active');

if (sidenavActiveLink) {
  const sidenav = document.querySelector('.twf-sidebar .offcanvas-body');
  const sidenavHeight = sidenav.clientHeight;
  const sidenavActiveLinkTop = sidenavActiveLink.offsetTop;
  const sidenavActiveLinkHeight = sidenavActiveLink.clientHeight;
  const viewportTop = sidenavActiveLinkTop;
  const viewportBottom = viewportTop - sidenavHeight + sidenavActiveLinkHeight + 300;

  if (sidenav.scrollTop > viewportTop || sidenav.scrollTop < viewportBottom) {
    sidenav.scrollTop =
      viewportTop - sidenavHeight / 2 + sidenavActiveLinkHeight / 2;
  }
}