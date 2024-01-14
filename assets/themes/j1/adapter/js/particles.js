/*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/particles.js
 # J1 Adapter for the particles module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-01-14 18:33:29 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.particles=function(e){var a,t,n,i,o,r;e.getCookieNames();return{init:function(r){$.extend({module_name:'j1.adapter.particles',generated:'2024-01-14 18:33:29 +0100'},r);n=null!=r?$.extend({},r):{},a=$.extend({},{enabled:!1,xhr_data_path:"/assets/data/particles.yml",particle_data:{particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#ffffff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:.75}},bubble:{distance:100,size:40,duration:.4,opacity:.4,speed:3},repulse:{distance:200,duration:1.2},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!1}}),t=$.extend({},{enabled:!1,particles:[{name:"Particle Snow",particle:{enabled:!0,id:"snowflake",canvas_selector:".backstretch",particle_data:{particles:{number:{value:150,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"image",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"/assets/themes/j1/modules/particles/css/images/snowflake-1.png",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:15,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:1.5,direction:"bottom",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"}},modes:{grab:{distance:100,line_linked:{opacity:.75}},bubble:{distance:100,size:40,duration:.4,opacity:.4,speed:3},repulse:{distance:200,duration:1.2},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!1}}},{name:"Particle Default",particle:{enabled:!1,id:"particle-default"}}]}),$.extend(!0,{},a,t,n),i=e.adapter.particles,o=log4javascript.getLogger('j1.adapter.particles');var l=setInterval(function(){if('finished'===e.getState()){var t,n,r,s=a.xhr_data_path;i.setState('started'),o.debug("\nstate: "+i.getState()),o.info("\nmodule is being initialized"),r='snowflake',$('.backstretch').attr('id',r);var d=setInterval(function(){0!=$('#'+r).length?(o.info("\ncontainer found: #"+r),$.get(s).done(function(e){t=yaml.loadAll(e,'utf8'),'snowflake'==(r='snowflake')&&(n=t[0][r][0],particlesJS(r,n))}).fail(function(){o.error("\nloading data: failed")})):o.warn("\ncontainer id not found: #"+r),clearInterval(d)},10);clearInterval(l)}},10)},messageHandler:function(e,a){var t=JSON.stringify(a,undefined,2);return r="\nreceived message from "+e+': '+t,o.debug(r),'command'===a.type&&'module_initialized'===a.action&&o.info('\n'+a.text),!0},setState:function(e){i.state=e},getState:function(){return i.state}}}(j1,window);

