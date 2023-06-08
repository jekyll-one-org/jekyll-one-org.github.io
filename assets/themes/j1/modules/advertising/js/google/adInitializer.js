

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/modules/advertising/js/google/adInitializer.js
 # JS helper for Google Adsense to initialze all units in a page
 #
 #  Product/Info:
 #  http://jekyll.one
 #
 #  Copyright (C) 2023 Juergen Adams
 #
 #  J1 Theme is licensed under MIT License.
 #  See: https://github.com/jekyll-one/J1 Theme/blob/master/LICENSE
 # -----------------------------------------------------------------------------
*/
$(document).ready(function(){var e=log4javascript.getLogger('j1.core.advertising.google'),n=document.getElementsByClassName('adsbygoogle').length,o=j1.getCookieNames(),a=j1.readCookie(o.user_consent),i=!'pub-123456789012345'.includes('your'),l='Google Adsense',r=setInterval(function(){if('finished'===j1.getState()){if(!i)return e.warn("\ndisabled provider: "+l),clearInterval(r),!1;a.personalization?n?(e.info("\ninitialize all ads in page: #"+n),[].forEach.call(document.querySelectorAll('.adsbygoogle'),function(){(adsbygoogle=window.adsbygoogle||[]).push({})})):e.warn("\nno ads found in page"):(e.warn("\ninitializing ads skipped"),e.warn("\nconsent on cookies disabled for personalization")),clearInterval(r)}},25)});


