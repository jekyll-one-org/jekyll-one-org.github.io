

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/attic.js
 # JS Adapter for J1 Master Header
 #
 # Product/Info:
 # https://jekyll.one
 # http://www.jquery-backstretch.com/
 #
 # Copyright (C) 2022 Juergen Adams
 # Copyright (C) 2012 Scott Robbin
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Backstretch is licensed under the MIT License.
 # For details, see https://github.com/jquery-backstretch/jquery-backstretch
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2022-08-14 10:12:43 +0000
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.attic=function(t,e){var a,i,n;return{init:function(e){$.extend({module_name:'j1.adapter.attic',generated:'2022-08-14 10:12:43 +0000'},e);a=t.adapter.attic,i=log4javascript.getLogger('j1.adapter.attic'),a.state='pending';var n=null!=e?$.extend({},e):{},o=$.extend({},{debug:!1,circuit:!1,notranslate:!0,pauseOnHover:!1,icon_family:"MDI",icon_color:"#9E9E9E",icon_size:"default",raised_level:0,r_text:"enabled",text_emphasis:"stronger",padding_top:200,padding_bottom:50,margin_bottom:50,title_size:"3em",title_color:"rgba(255, 255, 255, 0.8)",title_animate:"animate__bounceInDown",title_animate_duration:"animate__slower",title_align:"left",tagline_size:"1.5em",tagline_color:"rgba(255, 255, 255, 0.8)",tagline_animate:"animate__fadeInRight",tagline_animate_duration:"animate__slower",tagline_align:"left",background_color_1:"#0D47A1",background_color_2:"#0D47A1",action_enabled:!1,action_url:"#void",action_button:"btn-default",action_icon:"download",action_icon_family:"MDI",action_text:"Download Now",logo_enabled:!1,logo_url:"/assets/images/modules/icons/j1/j1-512x512.png",logo_alt:"Jekyll-One-Template",logo_height:196,logo_animate:"animate__slideInDown",spinner:!1,caption:"",caption_href:"",caption_color:"rgba(255, 255, 255, 0.5)",opacity:1,alignX:.5,alignY:.5,scale:"cover",transition:"fadeInOut",duration:5e3,transitionDuration:"normal",animateFirst:!1,start:0,paused:!1,preload:2,preloadSize:1,bypassCss:!1,alwaysTestWindowResolution:!1,resolutionRefreshRate:2500,resolutionChangeRatioThreshold:.1,isVideo:!1,loop:!1,mute:!1,attics:[{name:"Home",attic:{enabled:!1,id:"attic_home",layout:"home",notranslate:!0}},{name:"Page_Post",attic:{enabled:!1,id:"attic_page_post",layout:["page","post"],notranslate:!0}},{name:"Text attic",attic:{enabled:!1,id:"attic_text",layout:["collection","app","raw"],notranslate:!0}}]}),s=$.extend({},{debug:!1,attics:[{name:"Home",attic:{enabled:!0,id:"attic_home",layout:"home",padding_top:400,padding_bottom:50,opacity:.5,background_color_1:"#0D47A1",background_color_2:"#0D47A1",filters:{grayscale:1,contrast:.8,brightness:.8}}},{name:"Pages and Posts",attic:{enabled:!0,id:"attic_page_post",layout:["page","post","blog_archive"],padding_top:400,padding_bottom:50,opacity:.5,filters:{grayscale:.5,sepia:.5}}},{name:"Raw pages",attic:{enabled:!0,id:"attic_raw",layout:["raw"],padding_top:400,padding_bottom:50,opacity:.5}},{name:"Text pages",attic:{enabled:!0,id:"attic_text",layout:["collection","app"]}}]}),d=$.extend({},o,s,n);a.frontmatterOptions=n,a.atticOptions=d,a.setState('started'),i.debug("\nstate: "+a.getState()),i.info("\nmodule is being initialized"),a.loadHeader()},loadHeader:function(){function t(t){$('#attic_home').length&&$('#attic_home').backstretch(t.slides,{debug:t.debug,spinner:t.spinner,alignX:t.alignX,alignY:t.alignY,scale:t.scale,transition:t.transition,transitionDuration:t.transitionDuration,animateFirst:t.animateFirst,duration:t.duration,paused:t.paused,start:t.start,preload:t.preload,preloadSize:t.preloadSize,bypassCss:t.bypassCss,alwaysTestWindowResolution:t.alwaysTestWindowResolution,resolutionRefreshRate:t.resolutionRefreshRate,resolutionChangeRatioThreshold:t.transition,isVideo:t.isVideo,loop:t.loop,mute:t.mute}),t.spinner&&$('.backstretch').addClass(t.spinner);var n=$('#attic_home').data('backstretch');t.pauseOnHover&&$('#attic_home').hover(function(){$('#attic_home').backstretch('pause')},function(){$('#attic_home').backstretch('resume')}),$(e).on('backstretch.before',function(t,e,i){var o=a.atticOptions;e.images[i].title,e.images[i].tagline;console.log('module attic - set state: backstretch_before'),a.setState('backstretch_before'),i===n.images.length-1&&(0==o.circuit&&$('#attic_home').backstretch('pause'),$('.backstretch').removeClass(o.spinner)),console.log('module attic - entered: backstretch.before'),console.log('module attic - apply: CSS filters'),$('.backstretch').css('filter','sepia(1) brightness(0.9) contrast(0.6)'),$('.backstretch').css('filter','grayscale(1) contrast(1) brightness(1)'),$('.textOverlay').css('opacity','0'),$('.attic-caption').css('opacity','0')}),$(e).on('backstretch.after',function(t,e,n){var o,s=e.images[n].title,d=e.images[n].tagline,l=a.atticOptions;a.frontmatterOptions;if('undefined'!=typeof e.images[n].badge)var r=e.images[n].badge.type,c=e.images[n].badge.author,p=e.images[n].badge.href;if(a.setState('backstretch_after'),'undefined'!=typeof e.images[n].caption){var g=e.images[n].caption.text,_=e.images[n].caption.href;_?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+_+'" target="_blank">'+g+'</a>').show():$('.attic-caption').text(g).show()}else if('undefined'!=typeof e.images[n].badge&&'unsplash'===r){var u="<div class=\"attic__badge animate__animated animate__fadeIn animate__slower\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+p+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(u).hide()}o="<div id=\"head-title\" class=\"head-title animate__animated \">  <h2 id=\"head-title-text\" class=\"notoc text-emphasis-stronger\">"+s+"</h2></div><div id=\"head-tagline\" class=\"head-tagline animate__animated \">  <h3 id=\"head-tagline-tagline\" class=\"notoc\">"+d+"</h3></div>",$('.textOverlay').html(o).hide(),$('#head-title').addClass(l.title_animate),$('#head-title').addClass(l.title_animate_delay),$('#head-title').addClass(l.title_animate_duration),$('#head-tagline').addClass(l.tagline_animate),$('#head-tagline').addClass(l.tagline_animate_duration),$('.textOverlay').show(),$('.textOverlay').css('opacity','1'),$('.attic-caption').show(),$('.attic-caption').css('opacity','1'),$('#attic_home').backstretch('resize'),a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\nmodule initialized successfully")})}function n(t){$('#attic_page_post').length&&$('#attic_page_post').backstretch(t.slides,{debug:t.debug,spinner:t.spinner,alignX:t.alignX,alignY:t.alignY,scale:t.scale,transition:t.transition,transitionDuration:t.transitionDuration,animateFirst:t.animateFirst,duration:t.duration,paused:t.paused,start:t.start,preload:t.preload,preloadSize:t.preloadSize,bypassCss:t.bypassCss,alwaysTestWindowResolution:t.alwaysTestWindowResolution,resolutionRefreshRate:t.resolutionRefreshRate,resolutionChangeRatioThreshold:t.transition,isVideo:t.isVideo,loop:t.loop,mute:t.mute}),t.spinner&&$('.backstretch').addClass(t.spinner);var n=$('#attic_page_post').data('backstretch');t.pauseOnHover&&$('#attic_home').hover(function(){$('#attic_page_post').backstretch('pause')},function(){$('#attic_page_post').backstretch('resume')}),$(e).on('backstretch.before',function(t,e,i){var o=a.atticOptions;e.images[i].title,e.images[i].tagline;console.log('module attic - set state: backstretch_before'),a.setState('backstretch_before'),i===n.images.length-1&&(0==o.circuit&&$('#attic_page_post').backstretch('pause'),$('.backstretch').removeClass(o.spinner)),console.log('module attic - entered: backstretch.before'),console.log('module attic - apply: CSS filters'),$('.backstretch').css('filter','sepia(1) brightness(0.9) contrast(0.6)'),$('.backstretch').css('filter','grayscale(1) contrast(1) brightness(1)'),$('.textOverlay').css('opacity','0'),$('.attic-caption').css('opacity','0')}),$(e).on('backstretch.after',function(t,e,n){var o,s=e.images[n].title,d=e.images[n].tagline,l=a.atticOptions;a.frontmatterOptions;if('undefined'!=typeof e.images[n].badge)var r=e.images[n].badge.type,c=e.images[n].badge.author,p=e.images[n].badge.href;if(a.setState('backstretch_after'),'undefined'!=typeof e.images[n].caption){var g=e.images[n].caption.text,_=e.images[n].caption.href;_?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+_+'" target="_blank">'+g+'</a>').show():$('.attic-caption').text(g).show()}else if('undefined'!=typeof e.images[n].badge&&'unsplash'===r){var u="<div class=\"attic__badge animate__animated animate__fadeIn animate__slower\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+p+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(u).hide()}o="<div id=\"head-title\" class=\"head-title animate__animated \">  <h2 id=\"head-title-text\" class=\"notoc text-emphasis-stronger\">"+s+"</h2></div><div id=\"head-tagline\" class=\"head-tagline animate__animated \">  <h3 id=\"head-tagline-tagline\" class=\"notoc\">"+d+"</h3></div>",$('.textOverlay').html(o).hide(),$('#head-title').addClass(l.title_animate),$('#head-title').addClass(l.title_animate_delay),$('#head-title').addClass(l.title_animate_duration),$('#head-tagline').addClass(l.tagline_animate),$('#head-tagline').addClass(l.tagline_animate_duration),$('.textOverlay').show(),$('.textOverlay').css('opacity','1'),$('.attic-caption').show(),$('.attic-caption').css('opacity','1'),$('#attic_page_post').backstretch('resize'),a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\nmodule initialized successfully")})}function o(t){$('#attic_raw').length&&$('#attic_raw').backstretch(t.slides,{debug:t.debug,spinner:t.spinner,alignX:t.alignX,alignY:t.alignY,scale:t.scale,transition:t.transition,transitionDuration:t.transitionDuration,animateFirst:t.animateFirst,duration:t.duration,paused:t.paused,start:t.start,preload:t.preload,preloadSize:t.preloadSize,bypassCss:t.bypassCss,alwaysTestWindowResolution:t.alwaysTestWindowResolution,resolutionRefreshRate:t.resolutionRefreshRate,resolutionChangeRatioThreshold:t.transition,isVideo:t.isVideo,loop:t.loop,mute:t.mute}),t.spinner&&$('.backstretch').addClass(t.spinner);var n=$('#attic_raw').data('backstretch');t.pauseOnHover&&$('#attic_home').hover(function(){$('#attic_raw').backstretch('pause')},function(){$('#attic_raw').backstretch('resume')}),$(e).on('backstretch.before',function(t,e,i){var o=a.atticOptions;e.images[i].title,e.images[i].tagline;console.log('module attic - set state: backstretch_before'),a.setState('backstretch_before'),i===n.images.length-1&&(0==o.circuit&&$('#attic_raw').backstretch('pause'),$('.backstretch').removeClass(o.spinner)),console.log('module attic - entered: backstretch.before'),console.log('module attic - apply: CSS filters'),$('.backstretch').css('filter','sepia(1) brightness(0.9) contrast(0.6)'),$('.backstretch').css('filter','grayscale(1) contrast(1) brightness(1)'),$('.textOverlay').css('opacity','0'),$('.attic-caption').css('opacity','0')}),$(e).on('backstretch.after',function(t,e,n){var o,s=e.images[n].title,d=e.images[n].tagline,l=a.atticOptions;a.frontmatterOptions;if('undefined'!=typeof e.images[n].badge)var r=e.images[n].badge.type,c=e.images[n].badge.author,p=e.images[n].badge.href;if(a.setState('backstretch_after'),'undefined'!=typeof e.images[n].caption){var g=e.images[n].caption.text,_=e.images[n].caption.href;_?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+_+'" target="_blank">'+g+'</a>').show():$('.attic-caption').text(g).show()}else if('undefined'!=typeof e.images[n].badge&&'unsplash'===r){var u="<div class=\"attic__badge animate__animated animate__fadeIn animate__slower\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+p+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(u).hide()}o="<div id=\"head-title\" class=\"head-title animate__animated \">  <h2 id=\"head-title-text\" class=\"notoc text-emphasis-stronger\">"+s+"</h2></div><div id=\"head-tagline\" class=\"head-tagline animate__animated \">  <h3 id=\"head-tagline-tagline\" class=\"notoc\">"+d+"</h3></div>",$('.textOverlay').html(o).hide(),$('#head-title').addClass(l.title_animate),$('#head-title').addClass(l.title_animate_delay),$('#head-title').addClass(l.title_animate_duration),$('#head-tagline').addClass(l.tagline_animate),$('#head-tagline').addClass(l.tagline_animate_duration),$('.textOverlay').show(),$('.textOverlay').css('opacity','1'),$('.attic-caption').show(),$('.attic-caption').css('opacity','1'),$('#attic_raw').backstretch('resize'),a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\nmodule initialized successfully")})}function s(t){$('#attic_text').length&&$('#attic_text').backstretch(t.slides,{debug:t.debug,spinner:t.spinner,alignX:t.alignX,alignY:t.alignY,scale:t.scale,transition:t.transition,transitionDuration:t.transitionDuration,animateFirst:t.animateFirst,duration:t.duration,paused:t.paused,start:t.start,preload:t.preload,preloadSize:t.preloadSize,bypassCss:t.bypassCss,alwaysTestWindowResolution:t.alwaysTestWindowResolution,resolutionRefreshRate:t.resolutionRefreshRate,resolutionChangeRatioThreshold:t.transition,isVideo:t.isVideo,loop:t.loop,mute:t.mute}),t.spinner&&$('.backstretch').addClass(t.spinner);var n=$('#attic_text').data('backstretch');t.pauseOnHover&&$('#attic_home').hover(function(){$('#attic_text').backstretch('pause')},function(){$('#attic_text').backstretch('resume')}),$(e).on('backstretch.before',function(t,e,i){var o=a.atticOptions;e.images[i].title,e.images[i].tagline;console.log('module attic - set state: backstretch_before'),a.setState('backstretch_before'),i===n.images.length-1&&(0==o.circuit&&$('#attic_text').backstretch('pause'),$('.backstretch').removeClass(o.spinner)),console.log('module attic - entered: backstretch.before'),console.log('module attic - apply: CSS filters'),$('.backstretch').css('filter','sepia(1) brightness(0.9) contrast(0.6)'),$('.backstretch').css('filter','grayscale(1) contrast(1) brightness(1)'),$('.textOverlay').css('opacity','0'),$('.attic-caption').css('opacity','0')}),$(e).on('backstretch.after',function(t,e,n){var o,s=e.images[n].title,d=e.images[n].tagline,l=a.atticOptions;a.frontmatterOptions;if('undefined'!=typeof e.images[n].badge)var r=e.images[n].badge.type,c=e.images[n].badge.author,p=e.images[n].badge.href;if(a.setState('backstretch_after'),'undefined'!=typeof e.images[n].caption){var g=e.images[n].caption.text,_=e.images[n].caption.href;_?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+_+'" target="_blank">'+g+'</a>').show():$('.attic-caption').text(g).show()}else if('undefined'!=typeof e.images[n].badge&&'unsplash'===r){var u="<div class=\"attic__badge animate__animated animate__fadeIn animate__slower\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+p+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(u).hide()}o="<div id=\"head-title\" class=\"head-title animate__animated \">  <h2 id=\"head-title-text\" class=\"notoc text-emphasis-stronger\">"+s+"</h2></div><div id=\"head-tagline\" class=\"head-tagline animate__animated \">  <h3 id=\"head-tagline-tagline\" class=\"notoc\">"+d+"</h3></div>",$('.textOverlay').html(o).hide(),$('#head-title').addClass(l.title_animate),$('#head-title').addClass(l.title_animate_delay),$('#head-title').addClass(l.title_animate_duration),$('#head-tagline').addClass(l.tagline_animate),$('#head-tagline').addClass(l.tagline_animate_duration),$('.textOverlay').show(),$('.textOverlay').css('opacity','1'),$('.attic-caption').show(),$('.attic-caption').css('opacity','1'),$('#attic_text').backstretch('resize'),a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\nmodule initialized successfully")})}var d=a.frontmatterOptions,l=$.extend({},a.atticOptions,a.frontmatterOptions);if($('#attic_home').length){var r={opacity:.5,padding_top:400,padding_bottom:50,background_color_1:"#0D47A1",background_color_2:"#0D47A1"},c={opacity:.5};l=$.extend({},l,r,c),d.background_color_1&&(l.background_color_1=d.background_color_1),d.background_color_2&&(l.background_color_2=d.background_color_2),d&&('undefined'!=typeof d.raised_level&&(l.raised_level=d.raised_level),'undefined'!=typeof d.r_text&&(l.r_text=d.r_text),'undefined'!=typeof d.text_emphasis&&(l.text_emphasis=d.text_emphasis),'undefined'!=typeof d.padding_top&&(l.padding_top=d.padding_top),'undefined'!=typeof d.padding_bottom&&(l.padding_bottom=d.padding_bottom),'undefined'!=typeof d.margin_bottom&&(l.margin_bottom=d.margin_bottom),'undefined'!=typeof d.title&&('undefined'!=typeof d.title.color&&(l.title_color=d.title.color),'undefined'!=typeof d.title.size&&(l.title_size=d.title.size),'undefined'!=typeof d.title.animate&&(l.title_animate=d.title.animate),'undefined'!=typeof d.title.align&&(l.title_align=d.title.align)),'undefined'!=typeof d.tagline&&('undefined'!=typeof d.tagline.color&&(l.tagline_color=d.tagline.color),'undefined'!=typeof d.tagline.size&&(l.tagline_size=d.tagline.size),'undefined'!=typeof d.tagline.animate&&(l.tagline_animate=d.tagline.animate),'undefined'!=typeof d.tagline.align&&(l.tagline_align=d.tagline.align)),'undefined'!=typeof d.spinner&&(l.spinner=d.spinner),'undefined'!=typeof d.opacity&&(l.opacity=d.opacity),'undefined'!=typeof d.alignX&&(l.alignX=d.alignX),'undefined'!=typeof d.alignY&&(l.alignY=d.alignY),'undefined'!=typeof d.scale&&(l.scale=d.scale),'undefined'!=typeof d.start&&(l.start=d.start),'undefined'!=typeof d.animateFirst&&(l.animateFirst=d.animateFirst),'undefined'!=typeof d.preload&&(l.preload=d.preload),'undefined'!=typeof d.preloadSize&&(l.preloadSize=d.preloadSize),'undefined'!=typeof d.mute&&(l.mute=d.mute),'undefined'!=typeof d.bypassCss&&(l.bypassCss=d.bypassCss),'undefined'!=typeof d.isVideo&&(l.isVideo=d.isVideo),'undefined'!=typeof d.loop&&(l.loop=d.loop),'undefined'!=typeof d.paused&&(l.paused=d.paused),'undefined'!=typeof d.transition&&(l.transition=d.transition),'undefined'!=typeof d.duration&&(l.duration=d.duration),'undefined'!=typeof d.transitionDuration&&(l.transitionDuration=d.transitionDuration),'undefined'!=typeof d.slides&&(l.slides=d.slides)),'enabled'==l.r_text&&$('#attic_home').addClass('r-text');var p='raised-z'+l.raised_level;$('#attic_home').addClass(p),$('#head-title').addClass(l.title_animate),$('#head-title').addClass(l.title_animate_delay),$('#head-title').addClass(l.title_animate_duration),$('#head-tagline').addClass(l.tagline_animate),$('#head-tagline').addClass(l.tagline_animate_duration);var g='text-emphasis-'+l.text_emphasis;$('#head-title-text').addClass(g),$('#head-tagline-text').addClass(g),l.notranslate&&$('#attic_home').addClass('notranslate');var _='';_+='<style> .attic { ',_+='background-image: -webkit-gradient(linear, left top, left bottom, from('+l.background_color_1+'), to('+l.background_color_2+')) !important;',_+='background-image: -webkit-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: -o-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: linear-gradient(to bottom, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+l.background_color_1+'", endColorstr="'+l.background_color_2+'", GradientType=0) !important;',_+='} </style>',$('head').append(_),_='',_='<style> .attic { padding-top: '+l.padding_top+'px; padding-bottom: '+l.padding_bottom+'px; margin-bottom: '+l.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(_),$('head').append('<style> .attic .head-title h2 { color: '+l.title_color+';font-size: '+l.title_size+' !important; text-align: '+l.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+l.tagline_color+';font-size: '+l.tagline_size+' !important; text-align: '+l.tagline_align+'; } </style>'),u='<style> .backstretch-item { opacity: '+l.opacity+'; </style>',$('head').append(u),a.setState('initialized'),i.debug("\nstate: "+a.getState()),'undefined'!=typeof l.slides&&$(function(){i.debug("\nLoad image header"),t(l),a.setState('completed'),i.debug("\nstate: "+a.getState())})}if($('#attic_page_post').length){r={opacity:.5,padding_top:400,padding_bottom:50},c={opacity:.5};l=$.extend({},l,r,c),d.background_color_1&&(l.background_color_1=d.background_color_1),d.background_color_2&&(l.background_color_2=d.background_color_2),d&&('undefined'!=typeof d.raised_level&&(l.raised_level=d.raised_level),'undefined'!=typeof d.r_text&&(l.r_text=d.r_text),'undefined'!=typeof d.text_emphasis&&(l.text_emphasis=d.text_emphasis),'undefined'!=typeof d.padding_top&&(l.padding_top=d.padding_top),'undefined'!=typeof d.padding_bottom&&(l.padding_bottom=d.padding_bottom),'undefined'!=typeof d.margin_bottom&&(l.margin_bottom=d.margin_bottom),'undefined'!=typeof d.title&&('undefined'!=typeof d.title.color&&(l.title_color=d.title.color),'undefined'!=typeof d.title.size&&(l.title_size=d.title.size),'undefined'!=typeof d.title.animate&&(l.title_animate=d.title.animate),'undefined'!=typeof d.title.align&&(l.title_align=d.title.align)),'undefined'!=typeof d.tagline&&('undefined'!=typeof d.tagline.color&&(l.tagline_color=d.tagline.color),'undefined'!=typeof d.tagline.size&&(l.tagline_size=d.tagline.size),'undefined'!=typeof d.tagline.animate&&(l.tagline_animate=d.tagline.animate),'undefined'!=typeof d.tagline.align&&(l.tagline_align=d.tagline.align)),'undefined'!=typeof d.spinner&&(l.spinner=d.spinner),'undefined'!=typeof d.opacity&&(l.opacity=d.opacity),'undefined'!=typeof d.alignX&&(l.alignX=d.alignX),'undefined'!=typeof d.alignY&&(l.alignY=d.alignY),'undefined'!=typeof d.scale&&(l.scale=d.scale),'undefined'!=typeof d.start&&(l.start=d.start),'undefined'!=typeof d.animateFirst&&(l.animateFirst=d.animateFirst),'undefined'!=typeof d.preload&&(l.preload=d.preload),'undefined'!=typeof d.preloadSize&&(l.preloadSize=d.preloadSize),'undefined'!=typeof d.mute&&(l.mute=d.mute),'undefined'!=typeof d.bypassCss&&(l.bypassCss=d.bypassCss),'undefined'!=typeof d.isVideo&&(l.isVideo=d.isVideo),'undefined'!=typeof d.loop&&(l.loop=d.loop),'undefined'!=typeof d.paused&&(l.paused=d.paused),'undefined'!=typeof d.transition&&(l.transition=d.transition),'undefined'!=typeof d.duration&&(l.duration=d.duration),'undefined'!=typeof d.transitionDuration&&(l.transitionDuration=d.transitionDuration),'undefined'!=typeof d.slides&&(l.slides=d.slides)),'enabled'==l.r_text&&$('#attic_page_post').addClass('r-text');p='raised-z'+l.raised_level;$('#attic_page_post').addClass(p),$('#head-title').addClass(l.title_animate),$('#head-title').addClass(l.title_animate_delay),$('#head-title').addClass(l.title_animate_duration),$('#head-tagline').addClass(l.tagline_animate),$('#head-tagline').addClass(l.tagline_animate_duration);g='text-emphasis-'+l.text_emphasis;$('#head-title-text').addClass(g),$('#head-tagline-text').addClass(g),l.notranslate&&$('#attic_page_post').addClass('notranslate');_='';_+='<style> .attic { ',_+='background-image: -webkit-gradient(linear, left top, left bottom, from('+l.background_color_1+'), to('+l.background_color_2+')) !important;',_+='background-image: -webkit-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: -o-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: linear-gradient(to bottom, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+l.background_color_1+'", endColorstr="'+l.background_color_2+'", GradientType=0) !important;',_+='} </style>',$('head').append(_),_='',_='<style> .attic { padding-top: '+l.padding_top+'px; padding-bottom: '+l.padding_bottom+'px; margin-bottom: '+l.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(_),$('head').append('<style> .attic .head-title h2 { color: '+l.title_color+';font-size: '+l.title_size+' !important; text-align: '+l.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+l.tagline_color+';font-size: '+l.tagline_size+' !important; text-align: '+l.tagline_align+'; } </style>'),u='<style> .backstretch-item { opacity: '+l.opacity+'; </style>',$('head').append(u),a.setState('initialized'),i.debug("\nstate: "+a.getState()),'undefined'!=typeof l.slides&&$(function(){i.debug("\nLoad image header"),n(l),a.setState('completed'),i.debug("\nstate: "+a.getState())})}if($('#attic_raw').length){r={opacity:.5,padding_top:400,padding_bottom:50},c={opacity:.5};l=$.extend({},l,r,c),d.background_color_1&&(l.background_color_1=d.background_color_1),d.background_color_2&&(l.background_color_2=d.background_color_2),d&&('undefined'!=typeof d.raised_level&&(l.raised_level=d.raised_level),'undefined'!=typeof d.r_text&&(l.r_text=d.r_text),'undefined'!=typeof d.text_emphasis&&(l.text_emphasis=d.text_emphasis),'undefined'!=typeof d.padding_top&&(l.padding_top=d.padding_top),'undefined'!=typeof d.padding_bottom&&(l.padding_bottom=d.padding_bottom),'undefined'!=typeof d.margin_bottom&&(l.margin_bottom=d.margin_bottom),'undefined'!=typeof d.title&&('undefined'!=typeof d.title.color&&(l.title_color=d.title.color),'undefined'!=typeof d.title.size&&(l.title_size=d.title.size),'undefined'!=typeof d.title.animate&&(l.title_animate=d.title.animate),'undefined'!=typeof d.title.align&&(l.title_align=d.title.align)),'undefined'!=typeof d.tagline&&('undefined'!=typeof d.tagline.color&&(l.tagline_color=d.tagline.color),'undefined'!=typeof d.tagline.size&&(l.tagline_size=d.tagline.size),'undefined'!=typeof d.tagline.animate&&(l.tagline_animate=d.tagline.animate),'undefined'!=typeof d.tagline.align&&(l.tagline_align=d.tagline.align)),'undefined'!=typeof d.spinner&&(l.spinner=d.spinner),'undefined'!=typeof d.opacity&&(l.opacity=d.opacity),'undefined'!=typeof d.alignX&&(l.alignX=d.alignX),'undefined'!=typeof d.alignY&&(l.alignY=d.alignY),'undefined'!=typeof d.scale&&(l.scale=d.scale),'undefined'!=typeof d.start&&(l.start=d.start),'undefined'!=typeof d.animateFirst&&(l.animateFirst=d.animateFirst),'undefined'!=typeof d.preload&&(l.preload=d.preload),'undefined'!=typeof d.preloadSize&&(l.preloadSize=d.preloadSize),'undefined'!=typeof d.mute&&(l.mute=d.mute),'undefined'!=typeof d.bypassCss&&(l.bypassCss=d.bypassCss),'undefined'!=typeof d.isVideo&&(l.isVideo=d.isVideo),'undefined'!=typeof d.loop&&(l.loop=d.loop),'undefined'!=typeof d.paused&&(l.paused=d.paused),'undefined'!=typeof d.transition&&(l.transition=d.transition),'undefined'!=typeof d.duration&&(l.duration=d.duration),'undefined'!=typeof d.transitionDuration&&(l.transitionDuration=d.transitionDuration),'undefined'!=typeof d.slides&&(l.slides=d.slides)),'enabled'==l.r_text&&$('#attic_raw').addClass('r-text');p='raised-z'+l.raised_level;$('#attic_raw').addClass(p),$('#head-title').addClass(l.title_animate),$('#head-title').addClass(l.title_animate_delay),$('#head-title').addClass(l.title_animate_duration),$('#head-tagline').addClass(l.tagline_animate),$('#head-tagline').addClass(l.tagline_animate_duration);g='text-emphasis-'+l.text_emphasis;$('#head-title-text').addClass(g),$('#head-tagline-text').addClass(g),l.notranslate&&$('#attic_raw').addClass('notranslate');_='';_+='<style> .attic { ',_+='background-image: -webkit-gradient(linear, left top, left bottom, from('+l.background_color_1+'), to('+l.background_color_2+')) !important;',_+='background-image: -webkit-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: -o-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: linear-gradient(to bottom, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+l.background_color_1+'", endColorstr="'+l.background_color_2+'", GradientType=0) !important;',_+='} </style>',$('head').append(_),_='',_='<style> .attic { padding-top: '+l.padding_top+'px; padding-bottom: '+l.padding_bottom+'px; margin-bottom: '+l.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(_),$('head').append('<style> .attic .head-title h2 { color: '+l.title_color+';font-size: '+l.title_size+' !important; text-align: '+l.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+l.tagline_color+';font-size: '+l.tagline_size+' !important; text-align: '+l.tagline_align+'; } </style>'),u='<style> .backstretch-item { opacity: '+l.opacity+'; </style>',$('head').append(u),a.setState('initialized'),i.debug("\nstate: "+a.getState()),'undefined'!=typeof l.slides&&$(function(){i.debug("\nLoad image header"),o(l),a.setState('completed'),i.debug("\nstate: "+a.getState())})}if($('#attic_text').length){r={},c={};l=$.extend({},l,r,c),d.background_color_1&&(l.background_color_1=d.background_color_1),d.background_color_2&&(l.background_color_2=d.background_color_2),d&&('undefined'!=typeof d.raised_level&&(l.raised_level=d.raised_level),'undefined'!=typeof d.r_text&&(l.r_text=d.r_text),'undefined'!=typeof d.text_emphasis&&(l.text_emphasis=d.text_emphasis),'undefined'!=typeof d.padding_top&&(l.padding_top=d.padding_top),'undefined'!=typeof d.padding_bottom&&(l.padding_bottom=d.padding_bottom),'undefined'!=typeof d.margin_bottom&&(l.margin_bottom=d.margin_bottom),'undefined'!=typeof d.title&&('undefined'!=typeof d.title.color&&(l.title_color=d.title.color),'undefined'!=typeof d.title.size&&(l.title_size=d.title.size),'undefined'!=typeof d.title.animate&&(l.title_animate=d.title.animate),'undefined'!=typeof d.title.align&&(l.title_align=d.title.align)),'undefined'!=typeof d.tagline&&('undefined'!=typeof d.tagline.color&&(l.tagline_color=d.tagline.color),'undefined'!=typeof d.tagline.size&&(l.tagline_size=d.tagline.size),'undefined'!=typeof d.tagline.animate&&(l.tagline_animate=d.tagline.animate),'undefined'!=typeof d.tagline.align&&(l.tagline_align=d.tagline.align)),'undefined'!=typeof d.spinner&&(l.spinner=d.spinner),'undefined'!=typeof d.opacity&&(l.opacity=d.opacity),'undefined'!=typeof d.alignX&&(l.alignX=d.alignX),'undefined'!=typeof d.alignY&&(l.alignY=d.alignY),'undefined'!=typeof d.scale&&(l.scale=d.scale),'undefined'!=typeof d.start&&(l.start=d.start),'undefined'!=typeof d.animateFirst&&(l.animateFirst=d.animateFirst),'undefined'!=typeof d.preload&&(l.preload=d.preload),'undefined'!=typeof d.preloadSize&&(l.preloadSize=d.preloadSize),'undefined'!=typeof d.mute&&(l.mute=d.mute),'undefined'!=typeof d.bypassCss&&(l.bypassCss=d.bypassCss),'undefined'!=typeof d.isVideo&&(l.isVideo=d.isVideo),'undefined'!=typeof d.loop&&(l.loop=d.loop),'undefined'!=typeof d.paused&&(l.paused=d.paused),'undefined'!=typeof d.transition&&(l.transition=d.transition),'undefined'!=typeof d.duration&&(l.duration=d.duration),'undefined'!=typeof d.transitionDuration&&(l.transitionDuration=d.transitionDuration),'undefined'!=typeof d.slides&&(l.slides=d.slides)),'enabled'==l.r_text&&$('#attic_text').addClass('r-text');p='raised-z'+l.raised_level;$('#attic_text').addClass(p),$('#head-title').addClass(l.title_animate),$('#head-title').addClass(l.title_animate_delay),$('#head-title').addClass(l.title_animate_duration),$('#head-tagline').addClass(l.tagline_animate),$('#head-tagline').addClass(l.tagline_animate_duration);g='text-emphasis-'+l.text_emphasis;$('#head-title-text').addClass(g),$('#head-tagline-text').addClass(g),
l.notranslate&&$('#attic_text').addClass('notranslate');var u;_='';_+='<style> .attic { ',_+='background-image: -webkit-gradient(linear, left top, left bottom, from('+l.background_color_1+'), to('+l.background_color_2+')) !important;',_+='background-image: -webkit-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: -o-linear-gradient(top, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='background-image: linear-gradient(to bottom, '+l.background_color_1+' 0%, '+l.background_color_2+' 100%) !important;',_+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+l.background_color_1+'", endColorstr="'+l.background_color_2+'", GradientType=0) !important;',_+='} </style>',$('head').append(_),_='',_='<style> .attic { padding-top: '+l.padding_top+'px; padding-bottom: '+l.padding_bottom+'px; margin-bottom: '+l.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(_),$('head').append('<style> .attic .head-title h2 { color: '+l.title_color+';font-size: '+l.title_size+' !important; text-align: '+l.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+l.tagline_color+';font-size: '+l.tagline_size+' !important; text-align: '+l.tagline_align+'; } </style>'),u='<style> .backstretch-item { opacity: '+l.opacity+'; </style>',$('head').append(u),a.setState('initialized'),i.debug("\nstate: "+a.getState()),'undefined'!=typeof l.slides&&$(function(){i.debug("\nLoad image header"),s(l),a.setState('completed'),i.debug("\nstate: "+a.getState())})}return $('#no_header').length&&(a.setState('completed'),i.debug("\nstate: "+a.getState()),i.warn("\nno header configured or found in page")),!0},messageHandler:function(t,e){var a=JSON.stringify(e,undefined,2);return n="\nreceived message from "+t+': '+a,i.debug(n),'command'===e.type&&'module_initialized'===e.action&&(status='completed',i.info('\n'+e.text)),!0},setState:function(t){a.state=t},getState:function(){return a.state}}}(j1,window);


