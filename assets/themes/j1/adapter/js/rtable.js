

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rtable.js
 # J1 Adapter for rtable
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-06-29 18:45:20 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.rtable=function(e,t){var a,n,i,r,d={};return{init:function(r){$.extend({module_name:'j1.adapter.rtable',generated:'2022-06-29 18:45:20 +0000'},r);n=e.adapter.rtable,i=log4javascript.getLogger('j1.adapter.rtable'),n.setState('started'),i.debug("\nstate: "+n.getState()),i.info("\nmodule is being initialized"),a=null!=r?$.extend({},r):{},d=$.extend({},{enabled:!0,breakpoint:992}),void 0!==a&&(d=e.mergeData(d,a));var s=setInterval(function(){if('finished'==e.getState()){var a="\nrtable is being initialized";i.info(a),$('table').each(function(){var e,a=$(this);$(a).hasClass('rtable')&&($(a).addClass('tablesaw'),$(a).attr('data-tablesaw-mode','stack'),Tablesaw.init(a,d),$(t).width()<d.breakpoint?(e="\nhide colgroups: "+a.attr('id'),a.find('colgroup').hide(),i.debug(e)):(e="\nshow colgroup: "+a.attr('id'),a.find('colgroup').show(),i.debug(e)))}),n.setState('finished'),i.debug("\nstate: "+n.getState()),clearInterval(s)}},25)},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return r="\nreceived message from "+e+': '+a,i.debug(r),'command'===t.type&&'module_initialized'===t.action&&i.info('\n'+t.text),!0},setState:function(e){n.state=e},getState:function(){return n.state}}}(j1,window);


