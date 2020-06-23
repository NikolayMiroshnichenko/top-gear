( function () {

  function disableBodyScroll() {
    var body = document.querySelector( 'body' );
    body.classList.add( 'scroll-disable' );
  }

  function enableBodyScroll() {
    var body = document.querySelector( 'body' );
    body.classList.remove( 'scroll-disable' );
  }

  function openMenu() {
    var menuEl = document.querySelector( '.menu-list' );
    var menuBtn = document.querySelector( '.menu-icon' );

    if ( menuEl ) {
      menuEl.style.display = 'block';
      menuBtn.addEventListener( 'click', closeMenu );
    }
  }

  function closeMenu() {
    var menuEl = document.querySelector( '.menu-list' );
    var menuBtn = document.querySelector( '.menu-icon' );

    if ( menuEl ) {
      menuBtn.removeEventListener( 'click', closeMenu );
      menuEl.style.display = 'none';
    }
  }

  function initMenu() {
    var menuBtn = document.querySelector( '.menu-icon' );
    var closeBtn = document.querySelector( '.js-close-menu' );

    menuBtn.addEventListener( 'click', openMenu );
    if ( window.matchMedia( "(max-width: 968px)" ).matches ) {
      document.addEventListener( 'scroll', closeMenu );
      closeBtn.addEventListener( 'click', closeMenu );

    }
  }

  initMenu();
} )();

$( function () {
  var slider = tns( {
    container: '.slider',
    items: 2,
    slideBy: 1,
    autoplay: true,
    controlsPosition: 'bottom',
    controlsText: '',
    controlsContainer: '.slider-btn',
    nav: false,
    autoplayTimeout: 2000,
    autoplayButtonOutput: false,
    responsive: {
      320: {
        items: 1
      },
      968: {
        items: 2
      }
    }
  } );
} );
$( '#btn-modal-1' ).click( function () {

  $( '#modal-1' ).fadeIn();
  $( '#modal-1' ).addClass( 'disabled' );
} );
$( '#btn-modal-2' ).click( function () {

  $( '#modal-2' ).fadeIn();
  $( '#modal-2' ).addClass( 'disabled' );
} );
$( '#btn-modal-3' ).click( function () {

  $( '#modal-3' ).fadeIn();
  $( '#modal-3' ).addClass( 'disabled' );
} );
$( '#btn-modal-4' ).click( function () {

  $( '#modal-4' ).fadeIn();
  $( '#modal-4' ).addClass( 'disabled' );
} );
$( '#btn-modal-5' ).click( function () {

  $( '#modal-5' ).fadeIn();
  $( '#modal-5' ).addClass( 'disabled' );
} );

$( '.js-close-campaign' ).click( function () {
  $( '.open-modal' ).fadeOut();

} );

$( document ).mouseup( function ( e ) {
  var popup = $( '.js-popup-campaign' );
  if ( e.target != popup[0] && popup.has( e.target ).length === 0 ) {
    $( '.open-modal' ).fadeOut();

  }
} );

