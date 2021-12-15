

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rtable.js
 # J1 Adapter for rtable
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2021 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2021-12-15 17:01:50 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.rtable=function(e,t){var a,i,n,r,d={};return{init:function(r){i=e.adapter.rtable,n=log4javascript.getLogger('j1.adapter.rtable'),i.setState('started'),n.info("\nstate: "+i.getState()),n.info("\nmodule is being initialized");$.extend({module_name:'j1.adapter.rtable',generated:'2021-12-15 17:01:50 +0000'},r);a=null!=r?$.extend({},r):{},d=$.extend({},{enabled:!0,breakpoint:992}),void 0!==a&&(d=e.mergeData(d,a));var o=setInterval(function(){if('finished'==e.getState()){var a="\nrtable is being initialized";a="\nrtable is being initialized";n.info(a),$('table').each(function(){var e,a=$(this);$(a).hasClass('rtable')&&($(a).addClass('tablesaw'),$(a).attr('data-tablesaw-mode','stack'),Tablesaw.init(a,d),$(t).width()<d.breakpoint?(e="\nhide colgroups: "+a.attr('id'),a.find('colgroup').hide(),n.debug(e)):(e="\nshow colgroup: "+a.attr('id'),a.find('colgroup').show(),n.debug(e)))}),i.setState('finished'),n.info("\nstate: "+i.getState()),clearInterval(o)}},25)},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return r="\nreceived message from "+e+': '+a,n.debug(r),'command'===t.type&&'module_initialized'===t.action&&n.info('\n'+t.text),!0},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);


