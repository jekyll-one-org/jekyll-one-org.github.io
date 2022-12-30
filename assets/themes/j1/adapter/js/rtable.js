

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rtable.js
 # J1 Adapter for rtable
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-12-30 16:55:47 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.rtable=function(e,t){var a,n,i,r,s={};return{init:function(r){$.extend({module_name:'j1.adapter.rtable',generated:'2022-12-30 16:55:47 +0100'},r);var d,l={xs:575,sm:576,md:768,lg:992,xl:1200};n=e.adapter.rtable,i=log4javascript.getLogger('j1.adapter.rtable'),n.setState('started'),i.debug("\nstate: "+n.getState()),i.info("\nmodule is being initialized"),a=null!=r?$.extend({},r):{},s=$.extend({},{enabled:!0,rtable:{breakpoint:"lg",type:"default",hover:!1,mode:"stack",sort:!1,minimap:!1},"table-responsive":{breakpoint:"lg",type:"default",hover:!1}}),void 0!==a&&(s=$.extend({},s,a));var o=setInterval(function(){if('finished'==e.getState()){var a="\nrtable is being initialized";i.info(a),$('table').each(function(){var e,a=$(this);if($(a).hasClass('rtable')&&($(a).addClass('table'),$(a).addClass('tablesaw'),$(a).attr('data-tablesaw-mode',s.rtable.mode),Tablesaw.init(a,{breakpoint:s.rtable.breakpoint}),(d=l[s.rtable.breakpoint])||(d=l.lg),$(t).width()<d?(e="\nhide colgroups: "+a.attr('id'),a.find('colgroup').hide(),i.debug(e)):(e="\nshow colgroup: "+a.attr('id'),a.find('colgroup').show(),i.debug(e))),$(a).hasClass(/table-responsive/)){const t=/table-responsive[-]*\w*/,s='b-table-'+Math.floor(1e4*Math.random())+1;var n,r=$(a).attr("class").match(t);r?n=r[0]:(e="\nno matching responsive class found",i.warn(e)),$(a).removeClass(/table-responsive[-]*\w+/),$(a).addClass('table'),jQuery('<div>',{id:s,"class":n}).insertBefore($(a)),$('#'+s).append($(a))}}),n.setState('finished'),i.debug("\nstate: "+n.getState()),clearInterval(o)}},25)},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return r="\nreceived message from "+e+': '+a,i.debug(r),'command'===t.type&&'module_initialized'===t.action&&i.info('\n'+t.text),!0},setState:function(e){n.state=e},getState:function(){return n.state}}}(j1,window);


