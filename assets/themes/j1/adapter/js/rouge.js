

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rouge.js
 # J1 Adapter for rouge
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 # Note:
 #  https://github.com/jirutka/asciidoctor-rouge/issues/9
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-07-03 19:37:15 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.rouge=function(e){var t,s,a,r,o,n={},i=e.getCookieNames().user_state,l=$.extend({},{monitor:{performance_observer:!0},theme:{name:"UnoLight",author:"J1 Team",author_url:"https://jekyll.one/"},css:{custom_scss:!1,custom_css:!1},typography:{rtext:!0,rtext_size:300},asset_path:"/assets/themes/j1",app_path:"/assets/apps",image_path:"/assets/images",archive_path:"/builder/posts/timeline",categories_path:"/builder/categories",tags_path:"/builder/tags","about-site-url":"/pages/public/about/site/",user_info_url:"/pages/public/legal/en/privacy/",theme_author_url:"https://jekyll.one",runtime_data_path:"/assets/data/runtime-data.yml",message_catalog_data_path:"/assets/data/messages.yml",colors_data_path:"/assets/data/colors.json",font_size_data_path:"/assets/data/font_sizes.json",country_data_path:"/assets/data/countries.json",cookies:{app_session:"j1.app.session",user_session:"j1.user.session",user_state:"j1.user.state",user_consent:"j1.user.consent",user_translate:"j1.user.translate"},prettify:!0,pages:null,page_on_load_timeout:1e3,timeoutScrollDynamicPages:1e3,scrollDynamicPagesTopOnChange:!1,body:{scrollbar:!1,"background-color":"md_gray_50","font-color":"md_gray_900","font-size":"1em","font-weight":400,"line-height":1.5,animation:!0,animation_type:"fadeIn",animation_duration:2},posts:{category_blacklist:["posts","public","private","protected","featured","series","qa"]},user:{provider:"j1",provider_site_url:"https://jekyll.one",provider_home_url:"https://jekyll.one",provider_blog_url:"/pages/public/blog/navigator/",provider_member_url:"/pages/public/learn/whats_up/",provider_privacy_url:"/pages/public/legal/en/privacy/",user_name:"guest",status:"active",provider_membership:"guest",provider_permissions:["public"]},bootstrap:{default_theme:"bootstrap",cards:{card_deck:{break_on_sm:1,break_on_md:2,break_on_lg:3,break_on_xl:3}},tooltips:{enabled:!0,trigger:"hover"},popovers:{enabled:!0,trigger:"hover"}},rouge:{theme_light:"uno.light",theme_dark:"uno.dark"},fa:{color:"default"},preload:{image:{preload:!1,files:["/assets/images/modules/icons/j1/j1-512x512.png"]},font:{preload:!1,cors:"crossorigin",fonts:[]},css:{preload:!1,css:["/assets/themes/j1/core/css/themes/unolight/bootstrap","/assets/themes/j1/core/css/vendor"],files:[]},js:{preload:!1,js:["/assets/themes/j1/modules/bmd/js/bmd","/assets/themes/j1/modules/backstretch/js/backstretch","/assets/themes/j1/core/js/template"],files:["/assets/themes/j1/adapter/js/attic.js","/assets/themes/j1/adapter/js/logger.js","/assets/themes/j1/adapter/js/bmd.js","/assets/themes/j1/adapter/js/navigator.js"]}},preconnect:{enabled:!0,urls:["https://bootswatch.com"]}});return{init:function(r){$.extend({module_name:'j1.adapter.rouge',generated:'2023-07-03 19:37:15 +0200'},r);s=e.adapter.rouge,a=log4javascript.getLogger('j1.adapter.rouge');var d=setInterval(function(){'finished'==e.getState()&&(s.setState('started'),a.debug("\nstate: "+s.getState()),a.info("\nmodule is being initialized"),e.existsCookie(i)?(n=e.readCookie(i),t=n.theme_css,o=t.includes('dark')||t.includes('cyborg')||t.includes('darkly')||t.includes('slate')||t.includes('superhero')):(log_text="\nuser_state cookie not found",a.warn(log_text)),$('.dropdown-menu a').click(function(){$('#selected-theme').html('Current selection: <div class="md-gray-900 mt-1 p-2" style="background-color: #BDBDBD; font-weight: 700;">'+$(this).text()+'</div>')}),[...document.getElementsByClassName('highlight')].forEach(function(e){e.className.includes('notranslate')||(e.className+=" notranslate")}),s.setState('finished'),a.debug("\nstate: "+s.getState()),a.info("\ninitializing module finished"),clearInterval(d))},10),u=setInterval(function(){'finished'===e.adapter.rouge.getState()&&(o?e.adapter.rouge.reaplyStyles(l.rouge.theme_dark):e.adapter.rouge.reaplyStyles(l.rouge.theme_light),clearInterval(u))},10)},reaplyStyles:function(e){return s.removeAllRougeStyles(),s.addStyle(e),!0},removeAllRougeStyles:function(){$('link[rel=stylesheet][href*="/assets/themes/j1/modules/rouge"]').remove()},addStyle:function(e){$('<link>').attr('rel','stylesheet').attr('type','text/css').attr('href','/assets/themes/j1/modules/rouge/css/'+e+'/theme.css').appendTo('head')},messageHandler:function(e,t){var s=JSON.stringify(t,undefined,2);return r="\nreceived message from "+e+': '+s,a.debug(r),'command'===t.type&&'module_initialized'===t.action&&a.info('\n'+t.text),!0},setState:function(e){s.state=e},getState:function(){return s.state}}}(j1,window);


