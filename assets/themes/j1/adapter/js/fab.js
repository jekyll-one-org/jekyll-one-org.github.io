

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/fab.js
 # JS Adapter for J1 FAB (Floating Action Button)
 #
 # Product/Info:
 # http://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see http://jekyll.one
 # -----------------------------------------------------------------------------
 # Adapter generated: 2023-06-17 21:16:55 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.fab=function(e,n){var o,t,i,a,r,l,c,d;e.core.isMobile(),e.getCookieNames();return{init:function(n){$.extend({module_name:'j1.adapter.fab',generated:'2023-06-17 21:16:55 +0200'},n);l=e.adapter.fab,c=log4javascript.getLogger('j1.adapter.fab'),r=$('[class$="sect1"],[class$="sect2"],[class$="sect3"]'),$('[class$="sect1"],[class$="sect2"]'),$('[class$="sect1"]'),l.setState('started'),c.info("\nset module state to: "+l.getState()),c.info("\nmodule is being initialized"),a=null!=n?$.extend({},n):{},o=$.extend({},{enabled:!1,mode:"icon",xhr_container_id:"fab-container",xhr_data_path:"/assets/data/fab/index.html",icon_family:"MDI",icon_color:"mdi-md-grey",icon_size:"mdi-2x",raised:5,pulsed:!1,menu_options:{direction:"top",hoverEnabled:!1,toolbarEnabled:!1}}),t=$.extend({},{enabled:!0,menu_options:{hoverEnabled:!0},menus:[{name:"Scroll to top",enabled:!0,id:"default",icon:"chevron-double-up",icon_family:"MDI",icon_color:"md-gray-900",icon_hover:"chevron-double-up",color:"primary",items:[{item:null,enabled:!0,event_handler:"scroll_to_top"}]},{name:"Top and Reload",enabled:!0,id:"top-reload",icon:"plus",icon_family:"MDI",icon_color:"md-gray-900",icon_hover:"chevron-up",color:"primary",items:[{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"md-green",event_handler:"scroll_to_top",icon:"chevron-double-up",icon_properties:null},{item:"Reload Page",enabled:!0,id:"fam_reload_page",color:"md-red",event_handler:"reload_page",icon:"reload",icon_properties:null}]},{name:"Open TOC",enabled:!0,id:"open_toc",icon:"plus",icon_family:"MDI",icon_color:"md-gray-900",icon_hover:"chevron-up",color:"primary",items:[{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"md-green",event_handler:"scroll_to_top",icon:"chevron-double-up",icon_properties:null},{item:"Table of Contents",enabled:!0,id:"open_mmenu_toc",color:"md-green",event_handler:"open_mmenu_toc",icon:"wrap",icon_properties:null}]},{name:"Open TOC Reload",enabled:!0,id:"open_toc_reload",icon:"plus",icon_family:"MDI",icon_color:"md-gray-900",icon_hover:"chevron-up",color:"primary",items:[{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"md-green",event_handler:"scroll_to_top",icon:"chevron-double-up",icon_properties:null},{item:"Reload Page",enabled:!0,id:"fam_reload_page",color:"md-red",event_handler:"reload_page",icon:"reload",icon_properties:null},{item:"Table of Contents",enabled:!0,id:"open_mmenu_toc",color:"md-green",event_handler:"open_mmenu_toc",icon:"wrap",icon_properties:null}]},{name:"page control",enabled:!0,id:"page_ctrl",icon:"plus",icon_family:"MDI",icon_color:"md-gray-900",icon_hover:"chevron-up",color:"primary",items:[{item:"To Top",enabled:!0,id:"fam_scroll_to_top",color:"md-green",event_handler:"scroll_to_top",icon:"chevron-double-up",icon_properties:null},{item:"Previous Section",enabled:!0,id:"fam_previous_section",color:"md-green",event_handler:"scroll_previous_section",icon:"step-backward",icon_properties:"mdi-rotate-90"},{item:"Next Section",enabled:!0,id:"fam_next_section",color:"md-green",event_handler:"scroll_next_section",icon:"step-forward",icon_properties:"mdi-rotate-90"},{item:"Reload Page",enabled:!0,id:"fam_reload_page",color:"md-red",event_handler:"reload_page",icon:"reload",icon_properties:null},{item:"Table of Contents",enabled:!0,id:"open_mmenu_toc",color:"md-green",event_handler:"open_mmenu_toc",icon:"wrap",icon_properties:null}]}]}),i=$.extend(!0,{},o,t,a),l.moduleOptions=i;var d=setInterval(function(){var n='block'==$('#no_flicker').css("display");e.adapter.attic.getState();'finished'==e.adapter.navigator.getState()&&n&&(c.debug("\nmet dependencies for: navigator"),l.fabLoader(i),clearInterval(d))},10)},fabLoader:function(n){l.setState('loading'),c.info("\nset module state to: "+l.getState()),c.info("\nload HTML data for FAB: "+n.fab_menu_id),e.loadHTML({xhr_container_id:n.xhr_container_id,xhr_data_path:n.xhr_data_path,xhr_data_element:n.fab_menu_id},'j1.adapter.fab','data_loaded');var o=setInterval(function(){var t='block'==$('#no_flicker').css("display");e.adapter.attic.getState();'success'==e.xhrDOMState['#'+n.xhr_container_id]&&'finished'==e.getState()&&t&&(l.setState('loaded'),c.info("\nset module state to: "+l.getState()),c.info("\nHTML data for FAB: "+l.getState()),l.buttonInitializer(n),l.setState('finished'),c.debug("\nstate: "+l.getState()),c.info("\nmodule initialized successfully"),$('.fab-btn').show(),clearInterval(o))},10)},buttonInitializer:function(n){var o,t,i,a,d,s,_,f=$('#'+n.xhr_container_id),m=n.icon_family.toLowerCase(),p=n.menu_options,u=document.querySelectorAll('.fab-btn');1==u.length?(l.setState('processing'),c.info("\nset module state to: "+l.getState()),c.info("\ninitialize FAB menu"),a=u[0].firstElementChild.id,t=a.replace('_button',''),e.fab.init(u,p),d=$('#'+a),n.menus.forEach(function(e,o){e.id===t&&(i=n.menus[o])}),_=i.items.length,s=m+'-'+i.icon+' '+m+'-'+i.icon_hover,p.hoverEnabled?d.hover(function(){$('#fab-icon').toggleClass(s)},function(){$('#fab-icon').toggleClass(s)}):d.on('click',function(){$('#fab-icon').toggleClass(s)}),_>1?i.items.forEach(function(n){if($('#'+n.id).length)if(1==(o=n.event_handler).split(' ').length){if(c.info("\nregister pre-configured eventhandler "+o+' on id: #'+n.id),'open_mmenu_toc'===o)if($('#j1-toc-mgr').length){c.info("\nfound toc in page: enabled");var t=setInterval(function(){'finished'==e.adapter.toccer.getState()&&(c.debug("\nmet dependencies for: toccer"),$('#open_mmenu_toc').show(),clearInterval(t))},10)}else c.info("\nfound toc in page: disabled");else $('#'+n.id).show();$('#'+n.id).each(function(){$(this).on('click',function(){l[n.event_handler](r)})})}else c.info("\nregister custom eventhandler on id: #"+n.id);else c.error("\ncreating Eventhandler failed on id: #"+n.id)}):(c.info("\nsingle action found for FAB, no menu loaded/created"),i.items.forEach(function(n){if(1==(o=n.event_handler).split(' ').length&&(c.info("\nregister pre-configured eventhandler "+o+' on id: #'+a),'scroll_to_top'===o&&d.on('click',function(){var e=0;$('html, body').animate({scrollTop:e},500)}),'open_mmenu_toc'===o))if($('#j1-toc-mgr').length){c.info("\nfound toc in page: enabled");var t=setInterval(function(){'finished'==e.adapter.toccer.getState()&&(c.debug("\nmet dependencies for toccer: finished"),d.prop('id','open_mmenu_toc'),clearInterval(t))},10)}else c.info("\nfound toc in page: disabled"),c.info("\neventhandler: disabled")}))):(c.error("\nmultiple FAB buttons found: "+u.length),c.info("\nFAB container set to hidden: "+f),f.hide())},open_mmenu_toc:function(){},reload_page:function(){location.reload(!0)},scroll_previous_section:function(o){var t,i,a,r=0,l=$(o).length-1,c=$('#sidebar').find('.is-active-link').attr('href'),d=300,s=0,_=$('.attic'),f=$('nav.navbar'),m=$('#adblock'),p=f.hasClass('navbar-fixed')?'fixed':'scrolled',u=$('body').css('font-size').replace('px',''),h=(n.pageYOffset,parseInt(u)),g=_.length?_.height():0,b=f.length?f.height():0,v=m.length?m.height():0,x='fixed'==p?-1*(b+v+h):-1*(g+b+v+h);x+=s,o.each(function(){if($(this).find(c).length){if(r>l)return!1;i=r>0?o[r-1]:o[r],t=$(i).find(':header').first()[0].id,a='#'+t,e.core.scrollSmooth.scroll(a,{duration:d,offset:x,callback:null})}r<l&&r++})},scroll_next_section:function(o){var t,i,a,r,l=0,c=$(o).length-1,d=$('#sidebar'),s=300,_=0;t=d.find('.is-active-link').attr('href'),o.each(function(){if($(this).find(t).length){if(l==c)return!1;i=o[l+1],a=$(i).find(':header').first()[0].id,r='#'+a;var d=$('.attic'),f=$('nav.navbar'),m=$('#adblock'),p=f.hasClass('navbar-fixed')?'fixed':'scrolled',u=$('body').css('font-size').replace('px',''),h=(n.pageYOffset,parseInt(u)),g=d.length?d.height():0,b=f.length?f.height():0,v=m.length?m.height():0,x='fixed'==p?-1*(b+v+h):-1*(g+b+v+h);x+=_,e.core.scrollSmooth.scroll(r,{duration:s,offset:x,callback:null})}l<c&&l++})},scroll_to_top:function(){var e=0;$('html, body').animate({scrollTop:e},500)},scroll_to_bottom:function(){var e=$(document),n=$('#j1_footer'),o=n.length?n.outerHeight():0,t=e.height()-o-400;e.outerHeight();$('html, body').animate({scrollTop:t},500)},scroll_to_comments:function(){},alert_me:function(){alert('Hello world!')},messageHandler:function(e,n){var o=JSON.stringify(n);return d="\nreceived message from "+e+': '+o,c.debug(d),'command'===n.type&&'module_initialized'===n.action&&c.info('\n'+n.text),'command'===n.type&&'status'===n.action&&c.info("\nmessageHandler: received - "+n.action),!0},setState:function(e){l.state=e},getState:function(){return l.state}}}(j1,window);


