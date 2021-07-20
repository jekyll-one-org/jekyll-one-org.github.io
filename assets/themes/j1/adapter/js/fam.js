

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/fam.js
 # JS Adapter for J1 FAM (Floating Button Menu)
 #
 # Product/Info:
 # http://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see http://jekyll.one
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-07-20 12:49:08 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.fam=function(e,t){e.core.isMobile();var n,o,i,a,r,l={};e.getCookieNames();return{init:function(t){i=e.adapter.fam,a=log4javascript.getLogger('j1.adapter.fam'),o=$('[class$="sect1"],[class$="sect2"],[class$="sect3"]'),$('[class$="sect1"],[class$="sect2"]'),$('[class$="sect1"]'),i.setState('started'),a.info("\nset module state to: "+i.getState()),a.info("\nmodule is being initialized");var r=null!=t?$.extend({},t):{};$.extend({module_name:'j1.adapter.fam',generated:'2021-07-20 12:49:08 +0000'},t);n=$.extend({},{enabled:!0,mode:"icon",xhr_container_id:"fam-container",xhr_data_path:"/assets/data/fam/index.html",icon_family:"MDI",icon_color:"mdi-md-grey",icon_size:"mdi-2x",raised_level:5,menu_options:{hoverEnabled:!0},menus:[{name:"Scroll to top",enabled:!0,id:"default",icon:"plus",icon_hover:"chevron-up",color:"md-blue",items:[{item:null,enabled:!0,event_handler:"scroll_to_top"}]},{name:"Open TOC",enabled:!0,id:"open_toc",icon:"plus",icon_hover:"cursor-pointer",color:"md-blue",items:[{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"md-green",event_handler:"scroll_to_top",icon:"step-backward-2",icon_properties:"rotate-90"},{item:"Table of Contents",enabled:!0,id:"open_mmenu_toc",color:"md-blue",event_handler:"open_mmenu_toc",icon:"wrap"}]},{name:"in-page control",enabled:!0,id:"page_ctrl_simple",icon:"plus",icon_hover:"cursor-pointer",color:"md-blue",items:[{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"md-green",event_handler:"scroll_to_top",icon:"step-backward-2",icon_properties:"rotate-90"},{item:"Previous Section",enabled:!0,id:"fam_previous_section",color:"md-green",event_handler:"scroll_previous_section",icon:"step-backward",icon_properties:"rotate-90"},{item:"Next Section",enabled:!0,id:"fam_next_section",color:"md-green",event_handler:"scroll_next_section",icon:"step-forward",icon_properties:"rotate-90"},{item:"Table of Contents",enabled:!0,id:"open_mmenu_toc",color:"md-blue",event_handler:"open_mmenu_toc",icon:"wrap"}]},{name:"in-page control",enabled:!0,id:"page_ctrl",icon:"plus",icon_hover:"cursor-pointer",color:"md-blue",items:[{item:"Reload Page",enabled:!0,id:"fam_reload_page",color:"md-red",event_handler:"reload_page",icon:"reload"},{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"md-green",event_handler:"scroll_to_top",icon:"step-backward-2",icon_properties:"rotate-90"},{item:"Previous Section",enabled:!0,id:"fam_previous_section",color:"md-green",event_handler:"scroll_previous_section",icon:"step-backward",icon_properties:"rotate-90"},{item:"Next Section",enabled:!0,id:"fam_next_section",color:"md-green",event_handler:"scroll_next_section",icon:"step-forward",icon_properties:"rotate-90"},{item:"To bottom",enabled:!0,id:"fam_scroll_to_bottom",color:"md-green",event_handler:"scroll_to_bottom",icon:"step-forward-2",icon_properties:"rotate-90"},{item:"Table of Contents",enabled:!0,id:"open_mmenu_toc",color:"md-blue",event_handler:"open_mmenu_toc",icon:"wrap"}]}]}),null!=t&&(r=$.extend({},t)),void 0!==r&&(l=e.mergeData(n,r)),i.moduleOptions=l;var c=setInterval(function(){'finished'==e.adapter.navigator.getState()&&(a.info("\nmet dependencies for: navigator"),i.famLoader(l),clearInterval(c))},25)},famLoader:function(t){i.setState('loading'),a.info("\nset module state to: "+i.getState()),a.info("\nload HTML data for fam"),e.loadHTML({xhr_container_id:t.xhr_container_id,xhr_data_path:t.xhr_data_path,xhr_data_element:t.fam_menu_id},'j1.adapter.fam','data_loaded');var n=setInterval(function(){'success'==e.xhrDOMState['#'+t.xhr_container_id]&&'finished'==e.getState()&&(i.setState('loaded'),a.info("\nset module state to: "+i.getState()),a.info("\nHTML data for fam: "+i.getState()),i.buttonInitializer(t),i.setState('finished'),a.info("\nstate: "+i.getState()),a.info("\nmodule initialized successfully"),$('.fam-btn').show(),clearInterval(n))},25)},buttonInitializer:function(t){var n,r,l,c,d,s,f,m=$('#'+t.xhr_container_id),_=t.icon_family.toLowerCase(),u=t.menu_options,p=document.querySelectorAll('.fam-btn');$('a[href="#void"]').click(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,a.info("\nbound click event to \"#void\", suppress default action")}),1==p.length?(i.setState('processing'),a.info("\nset module state to: "+i.getState()),a.info("\ninitialize fam menu"),c=p[0].firstElementChild.id,r=c.replace('_button',''),e.fam.init(p,u),d=$('#'+c),t.menus.forEach(function(e,n){e.id===r&&(l=t.menus[n])}),f=l.items.length,s=_+'-'+l.icon+' '+_+'-'+l.icon_hover,u.hoverEnabled?d.hover(function(){$('#fam-icon').toggleClass(s)},function(){$('#fam-icon').toggleClass(s)}):d.on('click',function(){$('#fam-icon').toggleClass(s)}),f>1?l.items.forEach(function(t){if($('#'+t.id).length)if(1==(n=t.event_handler).split(' ').length){if(a.info("\nregister pre-configured eventhandler "+n+' on id: #'+t.id),'open_mmenu_toc'===n)if($('#j1-toc-mgr').length){a.info("\nfound toc in page: enabled");var r=setInterval(function(){'finished'==e.adapter.toccer.getState()&&(a.info("\nmet dependencies for: toccer"),$('#open_mmenu_toc').show(),clearInterval(r))},25)}else a.info("\nfound toc in page: disabled");else $('#'+t.id).show();$('#'+t.id).each(function(){$(this).on('click',function(){i[t.event_handler](o)})})}else a.info("\nregister custom eventhandler on id: #"+t.id);else a.error("\ncreating Eventhandler failed on id: #"+t.id)}):(a.info("\nsingle action found for FAM, create: FAB"),l.items.forEach(function(t){if(1==(n=t.event_handler).split(' ').length&&(a.info("\nregister pre-configured eventhandler "+n+' on id: #'+c),'scroll_to_top'===n&&d.on('click',function(){var e=0;$('html, body').animate({scrollTop:e},500)}),'open_mmenu_toc'===n))if($('#j1-toc-mgr').length){a.info("\nfound toc in page: enabled");var o=setInterval(function(){'finished'==e.adapter.toccer.getState()&&(a.info("\nmet dependencies for toccer: finished"),d.prop('id','open_mmenu_toc'),clearInterval(o))},25)}else a.info("\nfound toc in page: disabled"),a.info("\neventhandler: disabled")}))):(a.error("\nmultiple FAM buttons found: "+p.length),a.info("\nFAM container set to hidden: "+m),m.hide())},open_mmenu_toc:function(){},reload_page:function(){location.reload(!0)},scroll_previous_section:function(n){var o,i,a,r=0,l=$(n).length-1,c=$('#sidebar').find('.is-active-link').attr('href'),d=300,s=10,f=$('.attic'),m=$('nav.navbar'),_=$('#adblock'),u=m.hasClass('navbar-fixed')?'fixed':'scrolled',p=$('body').css('font-size').replace('px',''),h=(t.pageYOffset,parseInt(p)),g=f.length?f.height():0,v=m.length?m.height():0,b=_.length?_.height():0,x='fixed'==u?-1*(v+b+h):-1*(g+v+b+h);x+=s,n.each(function(){if($(this).find(c).length){if(r>l)return!1;i=r>0?n[r-1]:n[r],o=$(i).find(':header').first()[0].id,a='#'+o,e.core.scrollSmooth.scroll(a,{duration:d,offset:x,callback:null})}r<l&&r++})},scroll_next_section:function(n){var o,i,a,r,l=0,c=$(n).length-1,d=$('#sidebar'),s=300,f=10;o=d.find('.is-active-link').attr('href'),n.each(function(){if($(this).find(o).length){if(l==c)return!1;i=n[l+1],a=$(i).find(':header').first()[0].id,r='#'+a;var d=$('.attic'),m=$('nav.navbar'),_=$('#adblock'),u=m.hasClass('navbar-fixed')?'fixed':'scrolled',p=$('body').css('font-size').replace('px',''),h=(t.pageYOffset,parseInt(p)),g=d.length?d.height():0,v=m.length?m.height():0,b=_.length?_.height():0,x='fixed'==u?-1*(v+b+h):-1*(g+v+b+h);x+=f,e.core.scrollSmooth.scroll(r,{duration:s,offset:x,callback:null})}l<c&&l++})},scroll_to_top:function(){var e=0;$('html, body').animate({scrollTop:e},500)},scroll_to_bottom:function(){var e=$(document),t=$('#j1_footer'),n=t.length?t.outerHeight():0,o=e.height()-n-400;e.outerHeight();$('html, body').animate({scrollTop:o},500)},scroll_to_comments:function(){},alert_me:function(){alert('Hello world!')},messageHandler:function(e,t){var n=JSON.stringify(t);return r="\nreceived message from "+e+': '+n,a.debug(r),'command'===t.type&&'module_initialized'===t.action&&a.info('\n'+t.text),'command'===t.type&&'status'===t.action&&a.info("\nmessageHandler: received - "+t.action),!0},scrollSpy:function(){a=log4javascript.getLogger('j1.adapter.fam.scrollSpy'),$(t).scroll(function(){var e=$('nav.navbar'),t=($('.attic'),$('.js-toc-content')),n=$('#adblock'),o=$('#j1_footer'),i=$('#fam-container'),a=$(document),r=0,l=$(document).width()>=992?-120:-116,c=$(document).scrollTop(),d=a.height(),s=(a.outerHeight(),t.offset().top),f=i.length?i.height():0,m=o.length?o.outerHeight():0,_=e.length?e.height():0,u=(n.length&&n.outerHeight(),_+r),p=s+l,h=d-f-m+l;e.hasClass('navbar-fixed')?$('#fam-container').css('top',u):$('#fam-container').css('top',s),c>=p&&c<=h?i.css('display','block'):i.css('display','none')})},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);


