

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
 #  Adapter generated: 2022-07-21 16:28:03 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.rangeSlider=function(e){function n(e,n){n.parentNode.insertBefore(e,n)}function t(e,n){n.appendChild(e)}var a,i,r,l,d,o={},c=[];return{init:function(d){$.extend({module_name:'j1.adapter.rangeSlider',generated:'2022-07-21 16:28:03 +0000'},d);r=e.adapter.rangeSlider,l=log4javascript.getLogger('j1.adapter.rangeSlider'),a=null!=d?$.extend({},d):{},o=$.extend({},{enabled:!0,options:{orientation:"horizontal",connect:!0,step:1,cbOnUpdate:"j1.adapter.rangeSlider.cbOnUpdate",format:{decimals:0}},sliders:[{slider:{enabled:!0,id:"example_slider_asciidoc",options:{title:"Title of the Example Slider",label:"Example Slider (Asciidoc), range: [5,50], start at: 25, step: 5",start:25,step:5,range:{min:5,max:50}}}},{slider:{enabled:!0,id:"example_slider_html",options:{title:"Title of the Example Slider (controlled)",label:"Example Slider (HTML), range: [5,50], start at: 25, step: 5",start:25,step:5,range:{min:5,max:50}}}},{slider:{enabled:!0,id:"example_slider_1",options:{title:"",label:"Slider 1, range: [0,100], start at: 20",start:20,range:{min:0,max:100}}}},{slider:{enabled:!0,id:"example_slider_2",options:{title:"",label:"Slider 2, range: [0,200], start at: 80",start:80,range:{min:0,max:200}}}},{slider:{enabled:!0,id:"jgSlider_row_heigth",options:{title:"",label:"Image Row Height [px]",start:150,range:{min:100,max:300}}}},{slider:{enabled:!0,id:"jgSlider_thumb_spacing",options:{title:"",label:"Thumb Image Spacing [px]",start:1,range:{min:0,max:10}}}},{slider:{enabled:!0,id:"jgSlider_gallery_padding",options:{title:"",label:"Gallery Padding [px]",start:0,range:{min:0,max:50}}}}]}),void 0!==a&&(o=$.extend({},o,a));var g=setInterval(function(){if('finished'==e.getState()){l.info("\nmodule is being initialized"),r.setState('started'),l.debug("\nstate: "+r.getState());var a=setInterval(function(){if((i=document.querySelectorAll('.range-slider')).length){l.info("\nnumber of rangeSlider elements found: "+i.length);var e="\nrangeSlider elements are being initialized";l.info(e),i.forEach(function(e){var a=e.id,i=document.getElementById(a);if('example_slider_asciidoc'===a){l.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('example_slider_asciidoc'),d=noUiSlider.create(r,{start:[25],connect:!0,step:5,orientation:'horizontal',range:{min:5,max:50},format:wNumb({decimals:0})});if('Title of the Example Slider'.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='Title of the Example Slider',n(o,i)}var g=document.createElement('label');g.classList.add('range-slider-label'),g.innerHTML='Example Slider (Asciidoc), range: [5,50], start at: 25, step: 5',t(g,i),r.noUiSlider.on('update',function(e,n){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[n])}),c.push(d)}}),i.forEach(function(e){var a=e.id,i=document.getElementById(a);if('example_slider_html'===a){l.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('example_slider_html'),d=noUiSlider.create(r,{start:[25],connect:!0,step:5,orientation:'horizontal',range:{min:5,max:50},format:wNumb({decimals:0})});if('Title of the Example Slider (controlled)'.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='Title of the Example Slider (controlled)',n(o,i)}var g=document.createElement('label');g.classList.add('range-slider-label'),g.innerHTML='Example Slider (HTML), range: [5,50], start at: 25, step: 5',t(g,i),r.noUiSlider.on('update',function(e,n){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[n])}),c.push(d)}}),i.forEach(function(e){var a=e.id,i=document.getElementById(a);if('example_slider_1'===a){l.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('example_slider_1'),d=noUiSlider.create(r,{start:[20],connect:!0,step:1,orientation:'horizontal',range:{min:0,max:100},format:wNumb({decimals:0})});if(''.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='',n(o,i)}var g=document.createElement('label');g.classList.add('range-slider-label'),g.innerHTML='Slider 1, range: [0,100], start at: 20',t(g,i),r.noUiSlider.on('update',function(e,n){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[n])}),c.push(d)}}),i.forEach(function(e){var a=e.id,i=document.getElementById(a);if('example_slider_2'===a){l.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('example_slider_2'),d=noUiSlider.create(r,{start:[80],connect:!0,step:1,orientation:'horizontal',range:{min:0,max:200},format:wNumb({decimals:0})});if(''.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='',n(o,i)}var g=document.createElement('label');g.classList.add('range-slider-label'),g.innerHTML='Slider 2, range: [0,200], start at: 80',t(g,i),r.noUiSlider.on('update',function(e,n){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[n])}),c.push(d)}}),i.forEach(function(e){var a=e.id,i=document.getElementById(a);if('jgSlider_row_heigth'===a){l.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('jgSlider_row_heigth'),d=noUiSlider.create(r,{start:[150],connect:!0,step:1,orientation:'horizontal',range:{min:100,max:300},format:wNumb({decimals:0})});if(''.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='',n(o,i)}var g=document.createElement('label');g.classList.add('range-slider-label'),g.innerHTML='Image Row Height [px]',t(g,i),r.noUiSlider.on('update',function(e,n){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[n])}),c.push(d)}}),i.forEach(function(e){var a=e.id,i=document.getElementById(a);if('jgSlider_thumb_spacing'===a){l.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('jgSlider_thumb_spacing'),d=noUiSlider.create(r,{start:[1],connect:!0,step:1,orientation:'horizontal',range:{min:0,max:10},format:wNumb({decimals:0})});if(''.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='',n(o,i)}var g=document.createElement('label');g.classList.add('range-slider-label'),g.innerHTML='Thumb Image Spacing [px]',t(g,i),r.noUiSlider.on('update',function(e,n){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[n])}),c.push(d)}}),i.forEach(function(e){var a=e.id,i=document.getElementById(a);if('jgSlider_gallery_padding'===a){l.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('jgSlider_gallery_padding'),d=noUiSlider.create(r,{start:[0],connect:!0,step:1,orientation:'horizontal',range:{min:0,max:50},format:wNumb({decimals:0})});if(''.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='',n(o,i)}var g=document.createElement('label');g.classList.add('range-slider-label'),g.innerHTML='Gallery Padding [px]',t(g,i),r.noUiSlider.on('update',function(e,n){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[n])}),c.push(d)}}),c.length?(l.info("\nnumber of rangeSlider instances configured: "+c.length),r.setState('finished'),l.debug("\nstate: "+r.getState()),l.info("\ninitializing module finished")):(l.error("\nno configured rangeSlider instances found"),l.warning("\ninitializing module failed"))}clearInterval(a)},25);clearInterval(g)}},25)},cbOnclick:function(e){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnClick'),$(e.target).closest('li')[0];return!0},cbOnOpen:function(e){var n=log4javascript.getLogger('j1.adapter.rangeSlider.cbOnOpen'),t=e.id;return d="\nentered cbOnOpen on id: "+t,n.info(d),!0},cbOnClose:function(e){for(var n,t,a=log4javascript.getLogger('j1.adapter.rangeSlider.cbOnClose'),i=e.id,r='#'+e.id+" li",l=document.querySelectorAll(r),o=0;o<l.length;o++)l[o].classList.contains('active')&&(n=o,t=l[o].dataset.target);return d="\nentered cbOnClose on id: "+i,a.info(d),d="\nitem selected: "+n,a.info(d),d="\nvalue selected: "+t,a.info(d),!0},messageHandler:function(e,n){var t=JSON.stringify(n,undefined,2);return d="\nreceived message from "+e+': '+t,l.debug(d),'command'===n.type&&'module_initialized'===n.action&&l.info('\n'+n.text),!0},setState:function(e){r.state=e},getState:function(){return r.state}}}(j1,window);


