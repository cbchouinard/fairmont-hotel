export default function() {
  return `
(function(){function d(b){for(var a=window.location.search.substring(1).split("&"),c=0;c<a.length;c++){var d=a[c].split("=");if(d[0]==b)return d[1]}return!1}var b=d("utm_source"),a=d("utm_medium"),c;try{window.localStorage,c=!0}catch(e){c=!1}c&&(b&&a?(localStorage.setItem("utm_source",b),localStorage.setItem("utm_medium",a)):(b=localStorage.getItem("utm_source"),a=localStorage.getItem("utm_medium")));b&&a&&(window.grid_affiliate={utm_source:b,utm_medium:a})})();
`

  return `
    (function(){
      function getQueryVariable(variable){
         var query = window.location.search.substring(1)
         var vars = query.split("&")
         for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1]}
         }
         return(false);
      }
      var utm_source=getQueryVariable('utm_source')
      var utm_medium=getQueryVariable('utm_medium')
      var canUseLocalStorage;
      try {
        window.localStorage;
        canUseLocalStorage = true;
        } catch (e) {
        canUseLocalStorage = false;
      }
      if (canUseLocalStorage){
        if (utm_source && utm_medium){
          localStorage.setItem('utm_source',utm_source);
          localStorage.setItem('utm_medium',utm_medium);
        }
        else{
          utm_source=localStorage.getItem('utm_source');
          utm_medium=localStorage.getItem('utm_medium');
        }
      }
      if (utm_source && utm_medium){
        window.grid_affiliate={utm_source: utm_source, utm_medium: utm_medium}
      }
    })();
    `;
}
