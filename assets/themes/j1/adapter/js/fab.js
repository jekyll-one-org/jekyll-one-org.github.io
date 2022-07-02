

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/fab.js
 # JS Adapter for J1 FAB (Floating Action Button)
 #
 # Product/Info:
 # http://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see http://jekyll.one
 # -----------------------------------------------------------------------------
 # Adapter generated: 2022-07-02 15:41:10 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.fab=function(e,n){e.core.isMobile();var o,t,i,a,l,r={};e.getCookieNames();return{init:function(n){$.extend({module_name:'j1.adapter.fab',generated:'2022-07-02 15:41:10 +0000'},n);i=e.adapter.fab,a=log4javascript.getLogger('j1.adapter.fab'),t=$('[class$="sect1"],[class$="sect2"],[class$="sect3"]'),$('[class$="sect1"],[class$="sect2"]'),$('[class$="sect1"]'),i.setState('started'),a.info("\nset module state to: "+i.getState()),a.info("\nmodule is being initialized");var l=null!=n?$.extend({},n):{};o=$.extend({},{enabled:!0,mode:"icon",xhr_container_id:"fab-container",xhr_data_path:"/assets/data/fab/index.html",icon_family:"MDI",icon_color:"mdi-md-grey",icon_size:"mdi-2x",raised:5,pulsed:!1,menu_options:{hoverEnabled:!0},menus:[{name:"Scroll to top",enabled:!0,id:"default",icon:"chevron-double-up",icon_hover:"chevron-double-up",color:"primary",items:[{item:null,enabled:!0,event_handler:"scroll_to_top"}]},{name:"Default Plus",enabled:!0,id:"default-plus",icon:"plus",icon_hover:"plus",color:"primary",items:[{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"primary",event_handler:"scroll_to_top",icon:"chevron-double-up",icon_properties:null},{item:"Reload Page",enabled:!0,id:"fam_reload_page",color:"md-red",event_handler:"reload_page",icon:"reload"}]},{name:"Open TOC",enabled:!0,id:"open_toc",icon:"plus",icon_hover:"plus",color:"primary",items:[{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"primary",event_handler:"scroll_to_top",icon:"chevron-double-up",icon_properties:null},{item:"Table of Contents",enabled:!0,id:"open_mmenu_toc",color:"info",event_handler:"open_mmenu_toc",icon:"wrap"}]},{name:"Open TOC Reload",enabled:!0,id:"open_toc_reload",icon:"plus",icon_hover:"plus",color:"primary",items:[{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"primary",event_handler:"scroll_to_top",icon:"chevron-double-up",icon_properties:null},{item:"Reload Page",enabled:!0,id:"fam_reload_page",color:"md-red",event_handler:"reload_page",icon:"reload"},{item:"Table of Contents",enabled:!0,id:"open_mmenu_toc",color:"info",event_handler:"open_mmenu_toc",icon:"wrap"}]},{name:"in-page control simple",enabled:!0,id:"page_ctrl_simple",icon:"plus",icon_hover:"plus",color:"primary",items:[{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"primary",event_handler:"scroll_to_top",icon:"chevron-double-up",icon_properties:null},{item:"Previous Section",enabled:!0,id:"fam_previous_section",color:"success",event_handler:"scroll_previous_section",icon:"step-backward",icon_properties:"rotate-90"},{item:"Next Section",enabled:!0,id:"fam_next_section",color:"success",event_handler:"scroll_next_section",icon:"step-forward",icon_properties:"rotate-90"},{item:"Reload Page",enabled:!0,id:"fam_reload_page",color:"md-red",event_handler:"reload_page",icon:"reload"},{item:"Table of Contents",enabled:!0,id:"open_mmenu_toc",color:"info",event_handler:"open_mmenu_toc",icon:"wrap"}]},{name:"in-page control",enabled:!0,id:"page_ctrl",icon:"plus",icon_hover:"plus",color:"primary",items:[{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"primary",event_handler:"scroll_to_top",icon:"chevron-double-up",icon_properties:null},{item:"Previous Section",enabled:!0,id:"fam_previous_section",color:"success",event_handler:"scroll_previous_section",icon:"step-backward",icon_properties:"rotate-90"},{item:"Next Section",enabled:!0,id:"fam_next_section",color:"success",event_handler:"scroll_next_section",icon:"step-forward",icon_properties:"rotate-90"},{item:"Reload Page",enabled:!0,id:"fam_reload_page",color:"md-red",event_handler:"reload_page",icon:"reload"},{item:"Table of Contents",enabled:!0,id:"open_mmenu_toc",color:"info",event_handler:"open_mmenu_toc",icon:"wrap"}]}]}),null!=n&&(l=$.extend({},n)),void 0!==l&&(r=e.mergeData(o,l)),i.moduleOptions=r;var c=setInterval(function(){'finished'==e.adapter.navigator.getState()&&(a.debug("\nmet dependencies for: navigator"),i.fabLoader(r),clearInterval(c))},25)},fabLoader:function(n){i.setState('loading'),a.info("\nset module state to: "+i.getState()),a.info("\nload HTML data for FAB: "+n.fab_menu_id),e.loadHTML({xhr_container_id:n.xhr_container_id,xhr_data_path:n.xhr_data_path,xhr_data_element:n.fab_menu_id},'j1.adapter.fab','data_loaded');var o=setInterval(function(){'success'==e.xhrDOMState['#'+n.xhr_container_id]&&'finished'==e.getState()&&(i.setState('loaded'),a.info("\nset module state to: "+i.getState()),a.info("\nHTML data for FAB: "+i.getState()),i.buttonInitializer(n),i.setState('finished'),a.debug("\nstate: "+i.getState()),a.info("\nmodule initialized successfully"),$('.fab-btn').show(),clearInterval(o))},25)},buttonInitializer:function(n){var o,l,r,c,d,s,_,f=$('#'+n.xhr_container_id),p=n.icon_family.toLowerCase(),m=n.menu_options,u=document.querySelectorAll('.fab-btn');1==u.length?(i.setState('processing'),a.info("\nset module state to: "+i.getState()),a.info("\ninitialize FAB menu"),c=u[0].firstElementChild.id,l=c.replace('_button',''),e.fab.init(u,m),d=$('#'+c),n.menus.forEach(function(e,o){e.id===l&&(r=n.menus[o])}),_=r.items.length,s=p+'-'+r.icon+' '+p+'-'+r.icon_hover,m.hoverEnabled?d.hover(function(){$('#fab-icon').toggleClass(s)},function(){$('#fab-icon').toggleClass(s)}):d.on('click',function(){$('#fab-icon').toggleClass(s)}),_>1?r.items.forEach(function(n){if($('#'+n.id).length)if(1==(o=n.event_handler).split(' ').length){if(a.info("\nregister pre-configured eventhandler "+o+' on id: #'+n.id),'open_mmenu_toc'===o)if($('#j1-toc-mgr').length){a.info("\nfound toc in page: enabled");var l=setInterval(function(){'finished'==e.adapter.toccer.getState()&&(a.debug("\nmet dependencies for: toccer"),$('#open_mmenu_toc').show(),clearInterval(l))},25)}else a.info("\nfound toc in page: disabled");else $('#'+n.id).show();$('#'+n.id).each(function(){$(this).on('click',function(){i[n.event_handler](t)})})}else a.info("\nregister custom eventhandler on id: #"+n.id);else a.error("\ncreating Eventhandler failed on id: #"+n.id)}):(a.info("\nsingle action found for FAB, no menu loaded/created"),r.items.forEach(function(n){if(1==(o=n.event_handler).split(' ').length&&(a.info("\nregister pre-configured eventhandler "+o+' on id: #'+c),'scroll_to_top'===o&&d.on('click',function(){var e=0;$('html, body').animate({scrollTop:e},500)}),'open_mmenu_toc'===o))if($('#j1-toc-mgr').length){a.info("\nfound toc in page: enabled");var t=setInterval(function(){'finished'==e.adapter.toccer.getState()&&(a.debug("\nmet dependencies for toccer: finished"),d.prop('id','open_mmenu_toc'),clearInterval(t))},25)}else a.info("\nfound toc in page: disabled"),a.info("\neventhandler: disabled")}))):(a.error("\nmultiple FAB buttons found: "+u.length),a.info("\nFAB container set to hidden: "+f),f.hide())},open_mmenu_toc:function(){},reload_page:function(){location.reload(!0)},scroll_previous_section:function(o){var t,i,a,l=0,r=$(o).length-1,c=$('#sidebar').find('.is-active-link').attr('href'),d=300,s=0,_=$('.attic'),f=$('nav.navbar'),p=$('#adblock'),m=f.hasClass('navbar-fixed')?'fixed':'scrolled',u=$('body').css('font-size').replace('px',''),h=(n.pageYOffset,parseInt(u)),g=_.length?_.height():0,b=f.length?f.height():0,v=p.length?p.height():0,x='fixed'==m?-1*(b+v+h):-1*(g+b+v+h);x+=s,o.each(function(){if($(this).find(c).length){if(l>r)return!1;i=l>0?o[l-1]:o[l],t=$(i).find(':header').first()[0].id,a='#'+t,e.core.scrollSmooth.scroll(a,{duration:d,offset:x,callback:null})}l<r&&l++})},scroll_next_section:function(o){var t,i,a,l,r=0,c=$(o).length-1,d=$('#sidebar'),s=300,_=0;t=d.find('.is-active-link').attr('href'),o.each(function(){if($(this).find(t).length){if(r==c)return!1;i=o[r+1],a=$(i).find(':header').first()[0].id,l='#'+a;var d=$('.attic'),f=$('nav.navbar'),p=$('#adblock'),m=f.hasClass('navbar-fixed')?'fixed':'scrolled',u=$('body').css('font-size').replace('px',''),h=(n.pageYOffset,parseInt(u)),g=d.length?d.height():0,b=f.length?f.height():0,v=p.length?p.height():0,x='fixed'==m?-1*(b+v+h):-1*(g+b+v+h);x+=_,e.core.scrollSmooth.scroll(l,{duration:s,offset:x,callback:null})}r<c&&r++})},scroll_to_top:function(){var e=0;$('html, body').animate({scrollTop:e},500)},scroll_to_bottom:function(){var e=$(document),n=$('#j1_footer'),o=n.length?n.outerHeight():0,t=e.height()-o-400;e.outerHeight();$('html, body').animate({scrollTop:t},500)},scroll_to_comments:function(){},alert_me:function(){alert('Hello world!')},messageHandler:function(e,n){var o=JSON.stringify(n);return l="\nreceived message from "+e+': '+o,a.debug(l),'command'===n.type&&'module_initialized'===n.action&&a.info('\n'+n.text),'command'===n.type&&'status'===n.action&&a.info("\nmessageHandler: received - "+n.action),!0},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);


