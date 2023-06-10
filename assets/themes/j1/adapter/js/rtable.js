

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
 #  Adapter generated: 2023-06-10 02:03:01 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.rtable=function(e,t){var a,n,i,r,s,d;return{init:function(d){$.extend({module_name:'j1.adapter.rtable',generated:'2023-06-10 02:03:01 +0200'},d);var l,o={xs:575,sm:576,md:768,lg:992,xl:1200};r=e.adapter.rtable,s=log4javascript.getLogger('j1.adapter.rtable'),a=$.extend({},{enabled:!1,rtable:{breakpoint:"lg",type:"default",hover:!1,mode:"stack",sort:!1,minimap:!1},"table-responsive":{breakpoint:"lg",type:"default",hover:!1}}),n=$.extend({},{enabled:!0}),i=$.extend(!0,{},a,n),r.setState('started'),s.debug("\nstate: "+r.getState()),s.info("\nmodule is being initialized");var b=setInterval(function(){if('finished'==e.getState()){var a="\nrtable is being initialized";s.info(a),$('table').each(function(){var e,a=$(this);if($(a).hasClass('rtable')&&($(a).addClass('table'),$(a).addClass('tablesaw'),$(a).attr('data-tablesaw-mode',i.rtable.mode),Tablesaw.init(a,{breakpoint:i.rtable.breakpoint}),(l=o[i.rtable.breakpoint])||(l=o.lg),$(t).width()<l?(e="\nhide colgroups: "+a.attr('id'),a.find('colgroup').hide(),s.debug(e)):(e="\nshow colgroup: "+a.attr('id'),a.find('colgroup').show(),s.debug(e))),$(a).hasClass(/table-responsive/)){const t=/table-responsive[-]*\w*/,i='b-table-'+Math.floor(1e4*Math.random())+1;var n,r=$(a).attr("class").match(t);r?n=r[0]:(e="\nno matching responsive class found",s.warn(e)),$(a).removeClass(/table-responsive[-]*\w+/),$(a).addClass('table'),jQuery('<div>',{id:i,"class":n}).insertBefore($(a)),$('#'+i).append($(a))}}),r.setState('finished'),s.debug("\nstate: "+r.getState()),clearInterval(b)}},10)},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return d="\nreceived message from "+e+': '+a,s.debug(d),'command'===t.type&&'module_initialized'===t.action&&s.info('\n'+t.text),!0},setState:function(e){r.state=e},getState:function(){return r.state}}}(j1,window);


