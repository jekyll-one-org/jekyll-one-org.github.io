

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rtable.js
 # J1 Adapter for rtable
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-01 01:16:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.rtable=((e,t)=>{var a,n,i,s,r,d,l,o;return{init:d=>{$.extend({module_name:'j1.adapter.rtable',generated:'2024-04-01 01:16:05 +0200'},d);var b,g={xs:575,sm:576,md:768,lg:992,xl:1200};s=e.adapter.rtable,r=log4javascript.getLogger('j1.adapter.rtable'),a=$.extend({},{enabled:!1,rtable:{breakpoint:"lg",type:"default",hover:!1,mode:"stack",sort:!1,minimap:!1},"table-responsive":{breakpoint:"lg",type:"default",hover:!1}}),n=$.extend({},{enabled:!0}),i=$.extend(!0,{},a,n),s.setState('started'),r.debug("\nstate: "+s.getState()),r.info("\nmodule is being initialized");var m=setInterval(()=>{var a='block'===$('#content').css("display");'finished'===e.getState()&&a&&(l=Date.now(),s.setState('started'),r.debug("\nset module state to: "+s.getState()),r.info("\ninitializing module: started"),$('table').each(function(){var e,a=$(this);if($(a).hasClass('rtable')&&($(a).addClass('table'),$(a).addClass('tablesaw'),$(a).attr('data-tablesaw-mode',i.rtable.mode),Tablesaw.init(a,{breakpoint:i.rtable.breakpoint}),(b=g[i.rtable.breakpoint])||(b=g.lg),$(t).width()<b?(e="\nhide colgroups: "+a.attr('id'),a.find('colgroup').hide(),r.debug(e)):(e="\nshow colgroup: "+a.attr('id'),a.find('colgroup').show(),r.debug(e))),$(a).hasClass(/table-responsive/)){const t=/table-responsive[-]*\w*/,i='b-table-'+Math.floor(1e4*Math.random())+1;var n,s=$(a).attr("class").match(t);s?n=s[0]:(e="\nno matching responsive class found",r.warn(e)),$(a).removeClass(/table-responsive[-]*\w+/),$(a).addClass('table'),$('<div>',{id:i,"class":n}).insertBefore($(a)),$('#'+i).append($(a))}}),s.setState('finished'),r.debug("\nstate: "+s.getState()),r.info("\ninitializing module: finished"),o=Date.now(),r.info("\nmodule initializing time: "+(o-l)+'ms'),clearInterval(m))},10)},messageHandler:(e,t)=>{var a=JSON.stringify(t,undefined,2);return d="\nreceived message from "+e+': '+a,r.debug(d),'command'===t.type&&'module_initialized'===t.action&&r.info('\n'+t.text),!0},setState:e=>{s.state=e},getState:()=>s.state}})(j1,window);


