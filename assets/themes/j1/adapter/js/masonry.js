

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/masonry.js
 # J1 Adapter for the comments module
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023 Juergen Adams
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-09-14 22:19:01 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.masonry=function(e,i){var t,n,o,a,l,r,s=e.getCookieNames(),d=e.readCookie(s.user_state);$(i).width();return{init:function(i){var r={};$.extend({module_name:'j1.adapter.masonry',generated:'2023-09-14 22:19:01 +0200'},i);a=e.adapter.masonry,d.theme_name,l=log4javascript.getLogger('j1.adapter.masonry'),t=$.extend({},{enabled:!1,initTimeout:500,hideDisabled:!0,responsive:{xs:12,sm:12,md:6,lg:4,xl:3},filters:{enabled:!1,grayscale:1,contrast:1,brightness:1},xhr_data_path:"/assets/data/masonry",initLayout:!0,originTop:!0,originLeft:!0,percentPosition:!0,horizontalOrder:!0,stagger:.03,transitionDuration:.8,gutter:0,itemSelector:!1,resize:!0,containerStyle:null,columnWidth:80}),n=$.extend({},{enabled:!0,grids:[{grid:null,enabled:!0,id:"post_series_example",type:"post",group:"Featured",gutters:!0,image_styles:"img-fluid img-object--cover",image_height:"300px",translate_links:!1,link_new_window:!0,options:{originTop:!0,originLeft:!0,initLayout:!0,percentPosition:!0},filters:{enabled:!0,grayscale:1,contrast:.8,brightness:.4}},{grid:null,enabled:!0,id:"collection_portfolio",type:"collection",collection:"portfolio",image_styles:"img-fluid img-object--cover",image_height:"300px",image_width:"300px",translate_titles:!1,lightbox:!1,gutters:!0,preview:{enabled:!0},options:{originTop:!0,originLeft:!0,initLayout:!0,percentPosition:!0}},{grid:null,enabled:!0,id:"collection_biography",type:"collection",collection:"biography",image_styles:"img-fluid img-object--cover",image_height:"470px",image_width:"400px",translate_titles:!1,preview:!0,gutters:!0,options:{originTop:!0,originLeft:!0,initLayout:!0,percentPosition:!0}},{grid:null,enabled:!0,id:"collection_fantasy",type:"collection",collection:"fantasy",image_styles:"img-fluid img-object--cover",image_height:"470px",image_width:"400px",translate_titles:!1,preview:!0,gutters:!0,options:{originTop:!0,originLeft:!0,initLayout:!0,percentPosition:!0}},{grid:null,enabled:!0,id:"collection_romance",type:"collection",translate_titles:!0,collection:"romance",image_styles:"img-fluid img-object--cover",image_height:"470px",image_width:"400px",preview:!0,gutters:!0,options:{originTop:!0,originLeft:!0,initLayout:!0,percentPosition:!0}},{grid:null,enabled:!0,id:"card_example",type:"card",image_base_path:"/assets/images/modules/gallery/mega_cities",image_styles:"img-fluid",image_height:"300px",lightbox:!0,gutters:!0,caption:{enabled:!0,position:"bottom"},options:{originTop:!0,originLeft:!0,initLayout:!0,percentPosition:!0},images:[{image:null,file:"denys-nevozhai-1_b.jpg",caption:"Man posing at the rooftop of Jin Mao Tower Shanghai - China"},{image:null,file:"thomas-tucker_b.jpg",caption:"Sunset over Taipei City - Taiwan"},{image:null,file:"emmad-mazhari_b.jpg",caption:"Chicago - United States"},{image:null,file:"johan-mouchet_b.jpg",caption:"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"},{image:null,file:"federico-rizzarelli_b.jpg",caption:"Shanghai - China"},{image:null,file:"gints-gailis_b.jpg",caption:"Shangri-La Hotel Jakarta - Indonesia"}]},{grid:null,enabled:!0,id:"image_grid_base_example",type:"image",image_base_path:"/assets/images/modules/gallery/mega_cities",image_styles:"img-fluid",lightbox:!1,gutters:!1,caption:{enabled:!1,position:"bottom"},options:{originTop:!0,originLeft:!0,initLayout:!0,percentPosition:!0},images:[{image:null,file:"denys-nevozhai-1_b.jpg",caption:"Man posing at the rooftop of Jin Mao Tower Shanghai - China"},{image:null,file:"thomas-tucker_b.jpg",caption:"Sunset over Taipei City - Taiwan"},{image:null,file:"emmad-mazhari_b.jpg",caption:"Chicago - United States"},{image:null,file:"johan-mouchet_b.jpg",caption:"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"},{image:null,file:"federico-rizzarelli_b.jpg",caption:"Shanghai - China"},{image:null,file:"gints-gailis_b.jpg",caption:"Shangri-La Hotel Jakarta - Indonesia"}]},{grid:null,enabled:!0,id:"image_grid_full_example",type:"image",image_base_path:"/assets/images/modules/gallery/mega_cities",image_styles:"img-fluid",lightbox:!0,gutters:!0,caption:{enabled:!0,position:"bottom"},options:{originTop:!0,originLeft:!0,initLayout:!0,percentPosition:!0},images:[{image:null,file:"denys-nevozhai-1_b.jpg",caption:"Man posing at the rooftop of Jin Mao Tower Shanghai - China"},{image:null,file:"thomas-tucker_b.jpg",caption:"Sunset over Taipei City - Taiwan"},{image:null,file:"emmad-mazhari_b.jpg",caption:"Chicago - United States"},{image:null,file:"johan-mouchet_b.jpg",caption:"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"},{image:null,file:"federico-rizzarelli_b.jpg",caption:"Shanghai - China"},{image:null,file:"gints-gailis_b.jpg",caption:"Shangri-La Hotel Jakarta - Indonesia"}]},{grid:null,enabled:!0,id:"image_grid_full_example_filters",type:"image",image_base_path:"/assets/images/modules/gallery/mega_cities",image_styles:"img-fluid",lightbox:!0,gutters:!0,caption:{enabled:!0,position:"bottom"},filters:{enabled:!0,grayscale:.8,contrast:.8,brightness:.7,sepia:1},options:{originTop:!0,originLeft:!0,initLayout:!0,percentPosition:!0},images:[{image:null,file:"denys-nevozhai-1_b.jpg",caption:"Man posing at the rooftop of Jin Mao Tower Shanghai - China"},{image:null,file:"thomas-tucker_b.jpg",caption:"Sunset over Taipei City - Taiwan"},{image:null,file:"emmad-mazhari_b.jpg",caption:"Chicago - United States"},{image:null,file:"johan-mouchet_b.jpg",caption:"The Queen Bee at the Eureka Tower - Melbourne Southbank Australia"},{image:null,file:"federico-rizzarelli_b.jpg",caption:"Shanghai - China"},{image:null,file:"gints-gailis_b.jpg",caption:"Shangri-La Hotel Jakarta - Indonesia"}]}]}),o=$.extend(!0,{},t,n),console.debug('loading HTML portion for all Masonry grids configured'),a.loadGridHTML(o,o.grids);var s=setInterval(function(){var i='block'==$('#no_flicker').css("display");e.adapter.attic.getState();'finished'===e.getState()&&i&&(a.setState('started'),l.debug("\nstate: "+a.getState()),l.info("\nmodule is being initialized"),l.info("\nfound masonry grid on id: post_series_example"),r['dependencies_met_html_loaded_post_series_example']='',r.dependencies_met_html_loaded_post_series_example=setInterval(function(){'success'===e.xhrDOMState['#post_series_example_parent']&&setTimeout(function(){var e=$('#post_series_example');l.info("\ninitialize grid on id: post_series_example"),l.info("\ninstall event handlers for grid on id: post_series_example"),e.on('layoutComplete',function(){l.debug("\ninitializing layout completed for grid on id: post_series_example"),l.debug("\nadjust positions of all modals on id: ");var e=$("#post_series_example > .article-modal");$.each($(e),function(e,i){$(i).attr('style','left: 0%')})}),l.info("\ngrid is being setup on id: post_series_example"),e.masonry({percentPosition:!0,horizontalOrder:!0,originLeft:!0,originTop:!0,initLayout:!0,transitionDuration:"0.8s",stagger:"0.03s",resize:!0,gutter:0})},o.initTimeout),clearInterval(r.dependencies_met_html_loaded_post_series_example)},10),l.info("\nfound masonry grid on id: collection_portfolio"),r['dependencies_met_html_loaded_collection_portfolio']='',r.dependencies_met_html_loaded_collection_portfolio=setInterval(function(){'success'===e.xhrDOMState['#collection_portfolio_parent']&&setTimeout(function(){var e=$('#collection_portfolio');l.info("\ninitialize grid on id: collection_portfolio"),l.info("\ninstall event handlers for grid on id: collection_portfolio"),e.on('layoutComplete',function(){l.debug("\ninitializing layout completed for grid on id: collection_portfolio"),l.debug("\nadjust positions of all modals on id: ");var e=$("#collection_portfolio > .article-modal");$.each($(e),function(e,i){$(i).attr('style','left: 0%')})}),l.info("\ngrid is being setup on id: collection_portfolio"),e.masonry({percentPosition:!0,horizontalOrder:!0,originLeft:!0,originTop:!0,initLayout:!0,transitionDuration:"0.8s",stagger:"0.03s",resize:!0,gutter:0})},o.initTimeout),clearInterval(r.dependencies_met_html_loaded_collection_portfolio)},10),l.info("\nfound masonry grid on id: collection_biography"),r['dependencies_met_html_loaded_collection_biography']='',r.dependencies_met_html_loaded_collection_biography=setInterval(function(){'success'===e.xhrDOMState['#collection_biography_parent']&&setTimeout(function(){var e=$('#collection_biography');l.info("\ninitialize grid on id: collection_biography"),l.info("\ninstall event handlers for grid on id: collection_biography"),e.on('layoutComplete',function(){l.debug("\ninitializing layout completed for grid on id: collection_biography"),l.debug("\nadjust positions of all modals on id: ");var e=$("#collection_biography > .article-modal");$.each($(e),function(e,i){$(i).attr('style','left: 0%')})}),l.info("\ngrid is being setup on id: collection_biography"),e.masonry({percentPosition:!0,horizontalOrder:!0,originLeft:!0,originTop:!0,initLayout:!0,transitionDuration:"0.8s",stagger:"0.03s",resize:!0,gutter:0})},o.initTimeout),clearInterval(r.dependencies_met_html_loaded_collection_biography)},10),l.info("\nfound masonry grid on id: collection_fantasy"),r['dependencies_met_html_loaded_collection_fantasy']='',r.dependencies_met_html_loaded_collection_fantasy=setInterval(function(){'success'===e.xhrDOMState['#collection_fantasy_parent']&&setTimeout(function(){var e=$('#collection_fantasy');l.info("\ninitialize grid on id: collection_fantasy"),l.info("\ninstall event handlers for grid on id: collection_fantasy"),e.on('layoutComplete',function(){l.debug("\ninitializing layout completed for grid on id: collection_fantasy"),l.debug("\nadjust positions of all modals on id: ");var e=$("#collection_fantasy > .article-modal");$.each($(e),function(e,i){$(i).attr('style','left: 0%')})}),l.info("\ngrid is being setup on id: collection_fantasy"),e.masonry({percentPosition:!0,horizontalOrder:!0,originLeft:!0,originTop:!0,initLayout:!0,transitionDuration:"0.8s",stagger:"0.03s",resize:!0,gutter:0})},o.initTimeout),clearInterval(r.dependencies_met_html_loaded_collection_fantasy)},10),l.info("\nfound masonry grid on id: collection_romance"),r['dependencies_met_html_loaded_collection_romance']='',r.dependencies_met_html_loaded_collection_romance=setInterval(function(){'success'===e.xhrDOMState['#collection_romance_parent']&&setTimeout(function(){var e=$('#collection_romance');l.info("\ninitialize grid on id: collection_romance"),l.info("\ninstall event handlers for grid on id: collection_romance"),e.on('layoutComplete',function(){l.debug("\ninitializing layout completed for grid on id: collection_romance"),l.debug("\nadjust positions of all modals on id: ");var e=$("#collection_romance > .article-modal");$.each($(e),function(e,i){$(i).attr('style','left: 0%')})}),l.info("\ngrid is being setup on id: collection_romance"),e.masonry({percentPosition:!0,horizontalOrder:!0,originLeft:!0,originTop:!0,initLayout:!0,transitionDuration:"0.8s",stagger:"0.03s",resize:!0,gutter:0})},o.initTimeout),clearInterval(r.dependencies_met_html_loaded_collection_romance)},10),l.info("\nfound masonry grid on id: card_example"),r['dependencies_met_html_loaded_card_example']='',r.dependencies_met_html_loaded_card_example=setInterval(function(){'success'===e.xhrDOMState['#card_example_parent']&&setTimeout(function(){var e=$('#card_example');l.info("\ninitialize grid on id: card_example"),l.info("\ninstall event handlers for grid on id: card_example"),e.on('layoutComplete',function(){l.debug("\ninitializing layout completed for grid on id: card_example"),l.debug("\nadjust positions of all modals on id: ");var e=$("#card_example > .article-modal");$.each($(e),function(e,i){$(i).attr('style','left: 0%')})}),l.info("\ngrid is being setup on id: card_example"),e.masonry({percentPosition:!0,horizontalOrder:!0,originLeft:!0,originTop:!0,initLayout:!0,transitionDuration:"0.8s",stagger:"0.03s",resize:!0,gutter:0})},o.initTimeout),clearInterval(r.dependencies_met_html_loaded_card_example)},10),l.info("\nfound masonry grid on id: image_grid_base_example"),r['dependencies_met_html_loaded_image_grid_base_example']='',r.dependencies_met_html_loaded_image_grid_base_example=setInterval(function(){'success'===e.xhrDOMState['#image_grid_base_example_parent']&&setTimeout(function(){var e=$('#image_grid_base_example');l.info("\ninitialize grid on id: image_grid_base_example"),l.info("\ninstall event handlers for grid on id: image_grid_base_example"),e.on('layoutComplete',function(){l.debug("\ninitializing layout completed for grid on id: image_grid_base_example"),l.debug("\nadjust positions of all modals on id: ");var e=$("#image_grid_base_example > .article-modal");$.each($(e),function(e,i){$(i).attr('style','left: 0%')})}),l.info("\ngrid is being setup on id: image_grid_base_example"),e.masonry({percentPosition:!0,horizontalOrder:!0,originLeft:!0,originTop:!0,initLayout:!0,transitionDuration:"0.8s",stagger:"0.03s",resize:!0,gutter:0})},o.initTimeout),clearInterval(r.dependencies_met_html_loaded_image_grid_base_example)},10),l.info("\nfound masonry grid on id: image_grid_full_example"),r['dependencies_met_html_loaded_image_grid_full_example']='',r.dependencies_met_html_loaded_image_grid_full_example=setInterval(function(){'success'===e.xhrDOMState['#image_grid_full_example_parent']&&setTimeout(function(){var e=$('#image_grid_full_example');l.info("\ninitialize grid on id: image_grid_full_example"),l.info("\ninstall event handlers for grid on id: image_grid_full_example"),e.on('layoutComplete',function(){l.debug("\ninitializing layout completed for grid on id: image_grid_full_example"),l.debug("\nadjust positions of all modals on id: ");var e=$("#image_grid_full_example > .article-modal");$.each($(e),function(e,i){$(i).attr('style','left: 0%')})}),l.info("\ngrid is being setup on id: image_grid_full_example"),e.masonry({percentPosition:!0,horizontalOrder:!0,originLeft:!0,originTop:!0,initLayout:!0,transitionDuration:"0.8s",stagger:"0.03s",resize:!0,gutter:0})},o.initTimeout),clearInterval(r.dependencies_met_html_loaded_image_grid_full_example)},10),l.info("\nfound masonry grid on id: image_grid_full_example_filters"),r['dependencies_met_html_loaded_image_grid_full_example_filters']='',r.dependencies_met_html_loaded_image_grid_full_example_filters=setInterval(function(){'success'===e.xhrDOMState['#image_grid_full_example_filters_parent']&&setTimeout(function(){var e=$('#image_grid_full_example_filters');l.info("\ninitialize grid on id: image_grid_full_example_filters"),l.info("\ninstall event handlers for grid on id: image_grid_full_example_filters"),e.on('layoutComplete',function(){l.debug("\ninitializing layout completed for grid on id: image_grid_full_example_filters"),l.debug("\nadjust positions of all modals on id: ");var e=$("#image_grid_full_example_filters > .article-modal");$.each($(e),function(e,i){$(i).attr('style','left: 0%')})}),l.info("\ngrid is being setup on id: image_grid_full_example_filters"),e.masonry({percentPosition:!0,horizontalOrder:!0,originLeft:!0,originTop:!0,initLayout:!0,transitionDuration:"0.8s",stagger:"0.03s",resize:!0,gutter:0})},o.initTimeout),clearInterval(r.dependencies_met_html_loaded_image_grid_full_example_filters)},10),l.info("\ninitializing module finished"),clearInterval(s))},10)},loadGridHTML:function(i,t){var n,o=Object.keys(t).length,l=o,r=i.xhr_data_path+'/index.html';console.debug('number of grids found: '+o),a.setState('load_data'),Object.keys(t).forEach(function(i){t[i].enabled?(n=t[i].id+'_parent',console.debug('load HTML portion on grid id: '+t[i].id),e.loadHTML({xhr_container_id:n,xhr_data_path:r,xhr_data_element:t[i].id})):(console.debug('grid found disabled on id: '+t[i].id),l--)}),console.debug('grids loaded in page enabled|all: '+l+'|'+o),a.setState('data_loaded')},messageHandler:function(e,i){var t=JSON.stringify(i,undefined,2);return r="\nreceived message from "+e+': '+t,l.debug(r),'command'===i.type&&'module_initialized'===i.action&&l.info('\n'+i.text),!0},setState:function(e){a.state=e},getState:function(){return a.state}}}(j1,window);


