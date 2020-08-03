

  /*
 # -----------------------------------------------------------------------------
 #  ~/assets/themes/j1/adapter/js/back2top.js
 #  JS Adapter for J1 Back2Top
 #
 #  Product/Info:
 #  https://jekyll.one
 #  http://dynamicdrive.com/dynamicindex3/scrolltop.htm
 #
 #  Copyright (C) 2020 Juergen Adams
 #  Copyright (C) 2009 dynamicdrive.com
 #
 #  J1 Template is licensed under the MIT License.
 #  For details, see https://jekyll.one
 #
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2020-08-03 18:40:25 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.back2top=function(t){var e,a,o,n={};return{init:function(o){t.adapter.back2top.state='pending';var i=$.extend({module_name:'j1.adapter.back2top',generated:'2020-08-03 18:40:25 +0200'},o);if(e=t.adapter.back2top,a=log4javascript.getLogger('j1.adapter.back2top'),n=$.extend({},{enabled:!0,active_color:"#0D47A1",background_color:"#212121",icon:"f05d",icon_family:"Material Design Icons",icon_position:"absolute",startline:100,scrollto:0,scrollduration:1e3,fadeduration:{fadeIn:500,fadeOut:500},controlattrs:{offsetx:5,offsety:5}}),void 0!==i&&(n=t.mergeData(n,i)),n.enabled){e.setState('started'),a.info('state: '+e.getState()),a.info('module is being initialized'),e.moduleOptions=n,e.setCss();var r=setInterval(function(){'finished'==t.getState()&&(a.info('met dependencies for: j1'),t.core.back2top.init(n),e.setState('finished'),a.info('state: '+e.getState()),clearInterval(r))},25)}else e.setState('finished'),a.info('state: '+e.getState()),a.warn('module disabled')},setCss:function(){t.getStyleValue('body','color');$('head').append('<style>#topcontrol {background: '+n.background_color+';}</style>'),$('head').append('<style>#topcontrol:hover {background: '+n.active_color+';}</style>'),$('head').append('<style>#topcontrol:after {content: "\\f05d"; font-family: Material Design Icons;}</style>')},messageHandler:function(t,e){var n=JSON.stringify(e);return o='Received message from '+t+': '+n,a.debug(o),'command'===e.type&&'module_initialized'===e.action&&a.info(e.text),!0},setState:function(e){t.adapter.back2top.state=e},getState:function(){return t.adapter.back2top.state}}}(j1,window);


