

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/analytics.js
 # J1 Adapter for the analytics module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-01-15 03:15:22 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.analytics=function(e,t){var n,i,o,a,r;new liteURL(t.location.href).hostname,document.createElement('script'),e.getCookieNames(),(new Date).toISOString();return{init:function(){setInterval(function(){var t='block'==$('#no_flicker').css("display");'finished'===e.getState()&&t&&(n=$.extend({},{enabled:!1,provider:"webwhiz",trackingID:"your-tracking-id",skipAllHosts:"localhost, 127.0.0.1",google:{optInOut:!0,anonymizeIP:!0}}),i=$.extend({},{enabled:!0,skipAllHosts:"localhost, 127.0.0.1",trackingID:"<your-tracking-id>",google:{anonymizeIP:!1}}),$.extend(!0,{},n,i))},10)},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return r="\nreceived message from "+e+': '+n,a.debug(r),'command'===t.type&&'module_initialized'===t.action&&a.info('\n'+t.text),!0},setState:function(e){o.state=e},getState:function(){return o.state}}}(j1,window);


