

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/rangeSlider.js
 # J1 Adapter for J1 Module rangeSlider
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-07-02 20:26:42 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.rangeSlider=function(e){function t(e,t){t.parentNode.insertBefore(e,t)}function n(e,t){t.appendChild(e)}var a,i,r,l,d,o,c=[];return{init:function(o){$.extend({module_name:'j1.adapter.rangeSlider',generated:'2023-07-02 20:26:42 +0200'},o);l=e.adapter.rangeSlider,d=log4javascript.getLogger('j1.adapter.rangeSlider'),a=$.extend({},{enabled:!1,options:{orientation:"vertical",connect:!0,step:1,cbOnUpdate:"j1.adapter.rangeSlider.cbOnUpdate",format:{decimals:0}}}),i=$.extend({},{enabled:!0,options:{orientation:"horizontal"},sliders:[{slider:{enabled:!0,id:"example_slider_asciidoc",options:{title:"Title of the Example Slider",label:"Example Slider (Asciidoc), range: [5,50], start at: 25, step: 5",start:25,step:5,connect:!0,range:{min:5,max:50},format:{decimals:0}}}},{slider:{enabled:!0,id:"example_slider_html",options:{title:"Title of the Example Slider (controlled)",label:"Example Slider (HTML), range: [5,50], start at: 25, step: 5",start:25,step:5,connect:!0,range:{min:5,max:50},format:{decimals:0}}}},{slider:{enabled:!0,id:"example_slider_1",options:{title:"",label:"Slider 1, range: [0,100], start at: 20",start:20,connect:!0,step:1,range:{min:0,max:100},format:{decimals:0}}}},{slider:{enabled:!0,id:"example_slider_2",options:{title:"",label:"Slider 2, range: [0,200], start at: 80",start:80,connect:!0,step:1,range:{min:0,max:200},format:{decimals:0}}}},{slider:{enabled:!0,id:"jgSlider_row_heigth",options:{title:"",label:"Image Row Height [px]",start:150,connect:!0,step:1,range:{min:100,max:300},format:{decimals:0}}}},{slider:{enabled:!0,id:"jgSlider_thumb_spacing",options:{title:"",label:"Thumb Image Spacing [px]",start:1,connect:!0,step:1,range:{min:0,max:10},format:{decimals:0}}}},{slider:{enabled:!0,id:"jgSlider_gallery_padding",options:{title:"",label:"Gallery Padding [px]",start:0,connect:!0,step:1,range:{min:0,max:50},format:{decimals:0}}}}]}),$.extend(!0,{},a,i);var s=setInterval(function(){if('finished'==e.getState()){d.info("\nmodule is being initialized"),l.setState('started'),d.debug("\nstate: "+l.getState());var a=setInterval(function(){if((r=document.querySelectorAll('.range-slider')).length){d.info("\nnumber of rangeSlider elements found: "+r.length);var e="\nrangeSlider elements are being initialized";d.info(e),r.forEach(function(e){var a=e.id,i=document.getElementById(a);if('example_slider_asciidoc'===a){d.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('example_slider_asciidoc'),l=noUiSlider.create(r,{start:[25],connect:!0,step:5,orientation:'horizontal',range:{min:5,max:50},format:wNumb({decimals:0})});if('Title of the Example Slider'.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='Title of the Example Slider',t(o,i)}var s=document.createElement('label');s.classList.add('range-slider-label'),s.innerHTML='Example Slider (Asciidoc), range: [5,50], start at: 25, step: 5',n(s,i),r.noUiSlider.on('update',function(e,t){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[t])}),c.push(l)}}),r.forEach(function(e){var a=e.id,i=document.getElementById(a);if('example_slider_html'===a){d.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('example_slider_html'),l=noUiSlider.create(r,{start:[25],connect:!0,step:5,orientation:'horizontal',range:{min:5,max:50},format:wNumb({decimals:0})});if('Title of the Example Slider (controlled)'.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='Title of the Example Slider (controlled)',t(o,i)}var s=document.createElement('label');s.classList.add('range-slider-label'),s.innerHTML='Example Slider (HTML), range: [5,50], start at: 25, step: 5',n(s,i),r.noUiSlider.on('update',function(e,t){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[t])}),c.push(l)}}),r.forEach(function(e){var a=e.id,i=document.getElementById(a);if('example_slider_1'===a){d.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('example_slider_1'),l=noUiSlider.create(r,{start:[20],connect:!0,step:1,orientation:'horizontal',range:{min:0,max:100},format:wNumb({decimals:0})});if(''.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='',t(o,i)}var s=document.createElement('label');s.classList.add('range-slider-label'),s.innerHTML='Slider 1, range: [0,100], start at: 20',n(s,i),r.noUiSlider.on('update',function(e,t){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[t])}),c.push(l)}}),r.forEach(function(e){var a=e.id,i=document.getElementById(a);if('example_slider_2'===a){d.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('example_slider_2'),l=noUiSlider.create(r,{start:[80],connect:!0,step:1,orientation:'horizontal',range:{min:0,max:200},format:wNumb({decimals:0})});if(''.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='',t(o,i)}var s=document.createElement('label');s.classList.add('range-slider-label'),s.innerHTML='Slider 2, range: [0,200], start at: 80',n(s,i),r.noUiSlider.on('update',function(e,t){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[t])}),c.push(l)}}),r.forEach(function(e){var a=e.id,i=document.getElementById(a);if('jgSlider_row_heigth'===a){d.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('jgSlider_row_heigth'),l=noUiSlider.create(r,{start:[150],connect:!0,step:1,orientation:'horizontal',range:{min:100,max:300},format:wNumb({decimals:0})});if(''.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='',t(o,i)}var s=document.createElement('label');s.classList.add('range-slider-label'),s.innerHTML='Image Row Height [px]',n(s,i),r.noUiSlider.on('update',function(e,t){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[t])}),c.push(l)}}),r.forEach(function(e){var a=e.id,i=document.getElementById(a);if('jgSlider_thumb_spacing'===a){d.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('jgSlider_thumb_spacing'),l=noUiSlider.create(r,{start:[1],connect:!0,step:1,orientation:'horizontal',range:{min:0,max:10},format:wNumb({decimals:0})});if(''.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='',t(o,i)}var s=document.createElement('label');s.classList.add('range-slider-label'),s.innerHTML='Thumb Image Spacing [px]',n(s,i),r.noUiSlider.on('update',function(e,t){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[t])}),c.push(l)}}),r.forEach(function(e){var a=e.id,i=document.getElementById(a);if('jgSlider_gallery_padding'===a){d.info("\nconfigure rangeSlider: "+a);var r=document.getElementById('jgSlider_gallery_padding'),l=noUiSlider.create(r,{start:[0],connect:!0,step:1,orientation:'horizontal',range:{min:0,max:50},format:wNumb({decimals:0})});if(''.length){var o=document.createElement('div');o.classList.add('range-slider-title'),o.innerHTML='',t(o,i)}var s=document.createElement('label');s.classList.add('range-slider-label'),s.innerHTML='Gallery Padding [px]',n(s,i),r.noUiSlider.on('update',function(e,t){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnUpdate').debug("\ncurrent value: "+e[t])}),c.push(l)}}),c.length?(d.info("\nnumber of rangeSlider instances configured: "+c.length),l.setState('finished'),d.debug("\nstate: "+l.getState()),d.info("\ninitializing module finished")):(d.error("\nno configured rangeSlider instances found"),d.warning("\ninitializing module failed"))}clearInterval(a)},10);clearInterval(s)}},10)},cbOnclick:function(e){log4javascript.getLogger('j1.adapter.rangeSlider.cbOnClick'),$(e.target).closest('li')[0];return!0},cbOnOpen:function(e){var t=log4javascript.getLogger('j1.adapter.rangeSlider.cbOnOpen'),n=e.id;return o="\nentered cbOnOpen on id: "+n,t.info(o),!0},cbOnClose:function(e){for(var t,n,a=log4javascript.getLogger('j1.adapter.rangeSlider.cbOnClose'),i=e.id,r='#'+e.id+" li",l=document.querySelectorAll(r),d=0;d<l.length;d++)l[d].classList.contains('active')&&(t=d,n=l[d].dataset.target);return o="\nentered cbOnClose on id: "+i,a.info(o),o="\nitem selected: "+t,a.info(o),o="\nvalue selected: "+n,a.info(o),!0},messageHandler:function(e,t){var n=JSON.stringify(t,undefined,2);return o="\nreceived message from "+e+': '+n,d.debug(o),'command'===t.type&&'module_initialized'===t.action&&d.info('\n'+t.text),!0},setState:function(e){l.state=e},getState:function(){return l.state}}}(j1,window);


