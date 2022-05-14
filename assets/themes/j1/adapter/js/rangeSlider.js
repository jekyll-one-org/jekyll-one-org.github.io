

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rangeSlider.js
 # J1 Adapter for J1 Module rangeSlider
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2022 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-05-14 11:25:18 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.rangeSlider=function(e){function n(e,n){n.parentNode.insertBefore(e,n.nextSibling)}var t,a,r,i,l,d={},o=[];return{init:function(l){$.extend({module_name:'j1.adapter.rangeSlider',generated:'2022-05-14 11:25:18 +0000'},l);r=e.adapter.rangeSlider,i=log4javascript.getLogger('j1.adapter.rangeSlider'),t=null!=l?$.extend({},l):{},d=$.extend({},{enabled:!0,options:{orientation:"horizontal",connect:!0,step:1,cbOnUpdate:"j1.adapter.rangeSlider.cbOnUpdate",format:{decimals:0}},sliders:[{slider:{enabled:!0,id:"example_slider",options:{label:"Slider 1, range: [0,100], start at: 20",start:20,range:{min:0,max:100}}}},{slider:{enabled:!0,id:"example_slider_2",options:{label:"Slider 2, range: [0,200], start at: 80",start:80,range:{min:0,max:200}}}},{slider:{enabled:!0,id:"jgSlider_row_heigth",options:{label:"Image Row Height [px]",start:150,range:{min:100,max:300}}}},{slider:{enabled:!0,id:"jgSlider_thumb_spacing",options:{label:"Thumb Image Spacing [px]",start:1,range:{min:0,max:10}}}},{slider:{enabled:!0,id:"jgSlider_gallery_padding",options:{label:"Gallery Padding [px]",start:0,range:{min:0,max:50}}}}]}),void 0!==t&&(d=e.mergeData(d,t));var g=setInterval(function(){if('finished'==e.getState()){i.info("\nmodule is being initialized"),r.setState('started'),i.debug("\nstate: "+r.getState());var t=setInterval(function(){if((a=document.querySelectorAll('.range-slider')).length){i.info("\nnumber of rangeSlider elements found: "+a.length);var e="\nrangeSlider elements are being initialized";i.info(e),a.forEach(function(e){var t=e.id;if('example_slider'===t){i.info("\nconfigure rangeSlider: "+t);var a=document.getElementById('example_slider'),r=noUiSlider.create(a,{start:[20],connect:!0,step:1,orientation:'horizontal',range:{min:0,max:100},format:wNumb({decimals:0})}),l=document.createElement("label");l.classList.add('range-slider-label'),l.innerHTML='Slider 1, range: [0,100], start at: 20',n(l,document.getElementById(t)),a.noUiSlider.on('update',function(e,n){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[n])}),o.push(r)}}),a.forEach(function(e){var t=e.id;if('example_slider_2'===t){i.info("\nconfigure rangeSlider: "+t);var a=document.getElementById('example_slider_2'),r=noUiSlider.create(a,{start:[80],connect:!0,step:1,orientation:'horizontal',range:{min:0,max:200},format:wNumb({decimals:0})}),l=document.createElement("label");l.classList.add('range-slider-label'),l.innerHTML='Slider 2, range: [0,200], start at: 80',n(l,document.getElementById(t)),a.noUiSlider.on('update',function(e,n){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[n])}),o.push(r)}}),a.forEach(function(e){var t=e.id;if('jgSlider_row_heigth'===t){i.info("\nconfigure rangeSlider: "+t);var a=document.getElementById('jgSlider_row_heigth'),r=noUiSlider.create(a,{start:[150],connect:!0,step:1,orientation:'horizontal',range:{min:100,max:300},format:wNumb({decimals:0})}),l=document.createElement("label");l.classList.add('range-slider-label'),l.innerHTML='Image Row Height [px]',n(l,document.getElementById(t)),a.noUiSlider.on('update',function(e,n){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[n])}),o.push(r)}}),a.forEach(function(e){var t=e.id;if('jgSlider_thumb_spacing'===t){i.info("\nconfigure rangeSlider: "+t);var a=document.getElementById('jgSlider_thumb_spacing'),r=noUiSlider.create(a,{start:[1],connect:!0,step:1,orientation:'horizontal',range:{min:0,max:10},format:wNumb({decimals:0})}),l=document.createElement("label");l.classList.add('range-slider-label'),l.innerHTML='Thumb Image Spacing [px]',n(l,document.getElementById(t)),a.noUiSlider.on('update',function(e,n){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[n])}),o.push(r)}}),a.forEach(function(e){var t=e.id;if('jgSlider_gallery_padding'===t){i.info("\nconfigure rangeSlider: "+t);var a=document.getElementById('jgSlider_gallery_padding'),r=noUiSlider.create(a,{start:[0],connect:!0,step:1,orientation:'horizontal',range:{min:0,max:50},format:wNumb({decimals:0})}),l=document.createElement("label");l.classList.add('range-slider-label'),l.innerHTML='Gallery Padding [px]',n(l,document.getElementById(t)),a.noUiSlider.on('update',function(e,n){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[n])}),o.push(r)}}),o.length?(i.info("\nnumber of rangeSlider instances configured: "+o.length),r.setState('finished'),i.debug("\nstate: "+r.getState()),i.info("\ninitializing module finished")):(i.error("\nno configured rangeSlider instances found"),i.warning("\ninitializing module failed"))}clearInterval(t)},25);clearInterval(g)}},25)},cbOnclick:function(e){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnClick'),$(e.target).closest('li')[0];return!0},cbOnOpen:function(e){var n=log4javascript.getLogger('j1.adapter.rangeSlider.cbOnOpen'),t=e.id;return l="\nentered cbOnOpen on id: "+t,n.info(l),!0},cbOnClose:function(e){for(var n,t,a=log4javascript.getLogger('j1.adapter.rangeSlider.cbOnClose'),r=e.id,i='#'+e.id+" li",d=document.querySelectorAll(i),o=0;o<d.length;o++)d[o].classList.contains('active')&&(n=o,t=d[o].dataset.target);return l="\nentered cbOnClose on id: "+r,a.info(l),l="\nitem selected: "+n,a.info(l),l="\nvalue selected: "+t,a.info(l),!0},messageHandler:function(e,n){var t=JSON.stringify(n,undefined,2);return l="\nreceived message from "+e+': '+t,i.debug(l),'command'===n.type&&'module_initialized'===n.action&&i.info('\n'+n.text),!0},setState:function(e){r.state=e},getState:function(){return r.state}}}(j1,window);


