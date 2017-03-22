// using http://closure-compiler.appspot.com/
export default function() {

  return `
(function(){var b=/\d+/gmi,c;try{window.localStorage,c=!0}catch(f){c=!1}var a=window.location.hash.slice(1),d=(b=/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gmi.test(a)||b.test(a)||0<parseInt(a,10))?a:"";if(c){var e;(e=localStorage.getItem("grid-referrer"))?d=e:b&&localStorage.setItem("grid-referrer",a)}window.ref=d})();`

  return `
  (function(){
    var uuidPattern = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gmi;
    var numPattern = /\d+/gmi;
    var isReferrer = function(value) {
      return uuidPattern.test(value) || numPattern.test(value) || (parseInt(value, 10) > 0);
    }
    var canUseLocalStorage;
    try {
      window.localStorage;
      canUseLocalStorage = true;
      } catch (e) {
      canUseLocalStorage = false;
    }
    var hash = window.location.hash.slice(1);
    var isValidHash = isReferrer(hash)

    var ref = isValidHash ? hash : '';
    if (canUseLocalStorage) {
      var storedRef;
      if(storedRef = localStorage.getItem('grid-referrer')) {
        ref = storedRef
      } else if(isValidHash) {
        localStorage.setItem('grid-referrer', hash);
      }
    }

    // adding to use in cta
    window.ref = ref;
  })();`
}
