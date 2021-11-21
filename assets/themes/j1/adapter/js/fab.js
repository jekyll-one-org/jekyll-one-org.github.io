

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/fab.js
 # JS Adapter for J1 FAB (Floating Action Button)
 #
 # Product/Info:
 # http://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see http://jekyll.one
 # -----------------------------------------------------------------------------
 # Adapter generated: 2021-11-21 14:50:10 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.fab=function(e,n){e.core.isMobile();var t,o,i,a,r,l={};e.getCookieNames();return{init:function(n){i=e.adapter.fab,a=log4javascript.getLogger('j1.adapter.fab'),o=$('[class$="sect1"],[class$="sect2"],[class$="sect3"]'),$('[class$="sect1"],[class$="sect2"]'),$('[class$="sect1"]'),i.setState('started'),a.info("\nset module state to: "+i.getState()),a.info("\nmodule is being initialized");var r=null!=n?$.extend({},n):{};$.extend({module_name:'j1.adapter.fab',generated:'2021-11-21 14:50:10 +0000'},n);t=$.extend({},{enabled:!0,mode:"icon",xhr_container_id:"fab-container",xhr_data_path:"/assets/data/fab/index.html",icon_family:"MDI",icon_color:"mdi-md-grey",icon_size:"mdi-2x",raised:5,pulsed:!1,menu_options:{hoverEnabled:!0},menus:[{name:"Scroll to top",enabled:!0,id:"default",icon:"chevron-double-up",icon_hover:"chevron-double-up",color:"primary",items:[{item:null,enabled:!0,event_handler:"scroll_to_top"}]},{name:"Open TOC",enabled:!0,id:"open_toc",icon:"plus",icon_hover:"plus",color:"primary",items:[{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"primary",event_handler:"scroll_to_top",icon:"chevron-double-up",icon_properties:null},{item:"Table of Contents",enabled:!0,id:"open_mmenu_toc",color:"info",event_handler:"open_mmenu_toc",icon:"wrap"}]},{name:"in-page control simple",enabled:!0,id:"page_ctrl_simple",icon:"plus",icon_hover:"plus",color:"primary",items:[{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"primary",event_handler:"scroll_to_top",icon:"chevron-double-up",icon_properties:null},{item:"Previous Section",enabled:!0,id:"fam_previous_section",color:"success",event_handler:"scroll_previous_section",icon:"step-backward",icon_properties:"rotate-90"},{item:"Next Section",enabled:!0,id:"fam_next_section",color:"success",event_handler:"scroll_next_section",icon:"step-forward",icon_properties:"rotate-90"},{item:"Table of Contents",enabled:!0,id:"open_mmenu_toc",color:"info",event_handler:"open_mmenu_toc",icon:"wrap"}]},{name:"in-page control",enabled:!0,id:"page_ctrl",icon:"plus",icon_hover:"plus",color:"primary",items:[{item:"Reload Page",enabled:!0,id:"fam_reload_page",color:"md-red",event_handler:"reload_page",icon:"reload"},{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"primary",event_handler:"scroll_to_top",icon:"chevron-double-up",icon_properties:null},{item:"Previous Section",enabled:!0,id:"fam_previous_section",color:"success",event_handler:"scroll_previous_section",icon:"step-backward",icon_properties:"rotate-90"},{item:"Next Section",enabled:!0,id:"fam_next_section",color:"success",event_handler:"scroll_next_section",icon:"step-forward",icon_properties:"rotate-90"},{item:"To bottom",enabled:!0,id:"fam_scroll_to_bottom",color:"info",event_handler:"scroll_to_bottom",icon:"step-forward-2",icon_properties:"rotate-90"},{item:"Table of Contents",enabled:!0,id:"open_mmenu_toc",color:"info",event_handler:"open_mmenu_toc",icon:"wrap"}]}]}),null!=n&&(r=$.extend({},n)),void 0!==r&&(l=e.mergeData(t,r)),i.moduleOptions=l;var c=setInterval(function(){'finished'==e.adapter.navigator.getState()&&(a.info("\nmet dependencies for: navigator"),i.fabLoader(l),clearInterval(c))},25)},fabLoader:function(n){i.setState('loading'),a.info("\nset module state to: "+i.getState()),a.info("\nload HTML data for FAB: "+n.fab_menu_id),e.loadHTML({xhr_container_id:n.xhr_container_id,xhr_data_path:n.xhr_data_path,xhr_data_element:n.fab_menu_id},'j1.adapter.fab','data_loaded');var t=setInterval(function(){'success'==e.xhrDOMState['#'+n.xhr_container_id]&&'finished'==e.getState()&&(i.setState('loaded'),a.info("\nset module state to: "+i.getState()),a.info("\nHTML data for FAB: "+i.getState()),i.buttonInitializer(n),i.setState('finished'),a.info("\nstate: "+i.getState()),a.info("\nmodule initialized successfully"),$('.fab-btn').show(),clearInterval(t))},25)},buttonInitializer:function(n){var t,r,l,c,s,d,f,_=$('#'+n.xhr_container_id),u=n.icon_family.toLowerCase(),p=n.menu_options,m=document.querySelectorAll('.fab-btn');$('a[href="#void"]').click(function(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,a.info("\nbound click event to \"#void\", suppress default action"),!1}),1==m.length?(i.setState('processing'),a.info("\nset module state to: "+i.getState()),a.info("\ninitialize FAB menu"),c=m[0].firstElementChild.id,r=c.replace('_button',''),e.fab.init(m,p),s=$('#'+c),n.menus.forEach(function(e,t){e.id===r&&(l=n.menus[t])}),f=l.items.length,d=u+'-'+l.icon+' '+u+'-'+l.icon_hover,p.hoverEnabled?s.hover(function(){$('#fab-icon').toggleClass(d)},function(){$('#fab-icon').toggleClass(d)}):s.on('click',function(){$('#fab-icon').toggleClass(d)}),f>1?l.items.forEach(function(n){if($('#'+n.id).length)if(1==(t=n.event_handler).split(' ').length){if(a.info("\nregister pre-configured eventhandler "+t+' on id: #'+n.id),'open_mmenu_toc'===t)if($('#j1-toc-mgr').length){a.info("\nfound toc in page: enabled");var r=setInterval(function(){'finished'==e.adapter.toccer.getState()&&(a.info("\nmet dependencies for: toccer"),$('#open_mmenu_toc').show(),clearInterval(r))},25)}else a.info("\nfound toc in page: disabled");else $('#'+n.id).show();$('#'+n.id).each(function(){$(this).on('click',function(){i[n.event_handler](o)})})}else a.info("\nregister custom eventhandler on id: #"+n.id);else a.error("\ncreating Eventhandler failed on id: #"+n.id)}):(a.info("\nsingle action found for FAB, no menu loaded/created"),l.items.forEach(function(n){if(1==(t=n.event_handler).split(' ').length&&(a.info("\nregister pre-configured eventhandler "+t+' on id: #'+c),'scroll_to_top'===t&&s.on('click',function(){var e=0;$('html, body').animate({scrollTop:e},500)}),'open_mmenu_toc'===t))if($('#j1-toc-mgr').length){a.info("\nfound toc in page: enabled");var o=setInterval(function(){'finished'==e.adapter.toccer.getState()&&(a.info("\nmet dependencies for toccer: finished"),s.prop('id','open_mmenu_toc'),clearInterval(o))},25)}else a.info("\nfound toc in page: disabled"),a.info("\neventhandler: disabled")}))):(a.error("\nmultiple FAB buttons found: "+m.length),a.info("\nFAB container set to hidden: "+_),_.hide())},open_mmenu_toc:function(){},reload_page:function(){location.reload(!0)},scroll_previous_section:function(t){var o,i,a,r=0,l=$(t).length-1,c=$('#sidebar').find('.is-active-link').attr('href'),s=300,d=0,f=$('.attic'),_=$('nav.navbar'),u=$('#adblock'),p=_.hasClass('navbar-fixed')?'fixed':'scrolled',m=$('body').css('font-size').replace('px',''),h=(n.pageYOffset,parseInt(m)),g=f.length?f.height():0,v=_.length?_.height():0,b=u.length?u.height():0,x='fixed'==p?-1*(v+b+h):-1*(g+v+b+h);x+=d,t.each(function(){if($(this).find(c).length){if(r>l)return!1;i=r>0?t[r-1]:t[r],o=$(i).find(':header').first()[0].id,a='#'+o,e.core.scrollSmooth.scroll(a,{duration:s,offset:x,callback:null})}r<l&&r++})},scroll_next_section:function(t){var o,i,a,r,l=0,c=$(t).length-1,s=$('#sidebar'),d=300,f=0;o=s.find('.is-active-link').attr('href'),t.each(function(){if($(this).find(o).length){if(l==c)return!1;i=t[l+1],a=$(i).find(':header').first()[0].id,r='#'+a;var s=$('.attic'),_=$('nav.navbar'),u=$('#adblock'),p=_.hasClass('navbar-fixed')?'fixed':'scrolled',m=$('body').css('font-size').replace('px',''),h=(n.pageYOffset,parseInt(m)),g=s.length?s.height():0,v=_.length?_.height():0,b=u.length?u.height():0,x='fixed'==p?-1*(v+b+h):-1*(g+v+b+h);x+=f,e.core.scrollSmooth.scroll(r,{duration:d,offset:x,callback:null})}l<c&&l++})},scroll_to_top:function(){var e=0;$('html, body').animate({scrollTop:e},500)},scroll_to_bottom:function(){var e=$(document),n=$('#j1_footer'),t=n.length?n.outerHeight():0,o=e.height()-t-400;e.outerHeight();$('html, body').animate({scrollTop:o},500)},scroll_to_comments:function(){},alert_me:function(){alert('Hello world!')},messageHandler:function(e,n){var t=JSON.stringify(n);return r="\nreceived message from "+e+': '+t,a.debug(r),'command'===n.type&&'module_initialized'===n.action&&a.info('\n'+n.text),'command'===n.type&&'status'===n.action&&a.info("\nmessageHandler: received - "+n.action),!0},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);


