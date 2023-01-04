

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/attic.js
 # JS Adapter for J1 Master Header
 #
 # Product/Info:
 # https://jekyll.one
 # http://www.jquery-backstretch.com/
 #
 # Copyright (C) 2023 Juergen Adams
 # Copyright (C) 2012 Scott Robbin
 #
 # J1 Theme is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # Backstretch is licensed under the MIT License.
 # For details, see https://github.com/jquery-backstretch/jquery-backstretch
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2023-01-04 16:26:30 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.attic=function(t,e){var a,i,n;return{init:function(e){$.extend({module_name:'j1.adapter.attic',generated:'2023-01-04 16:26:30 +0100'},e);a=t.adapter.attic,i=log4javascript.getLogger('j1.adapter.attic'),a.state='pending';var n=null!=e?$.extend({},e):{},o=$.extend({},{debug:!1,circuit:!1,notranslate:!0,pauseOnHover:!1,icon_family:"MDI",icon_color:"#9E9E9E",icon_size:"default",raised_level:0,r_text:"enabled",text_emphasis:"stronger",padding_top:200,padding_bottom:50,margin_bottom:50,title_size:"3em",title_color:"rgba(255, 255, 255, 0.8)",title_animate:"animate__bounceInDown",title_animate_duration:"animate__slower",title_align:"left",tagline_size:"1.5em",tagline_color:"rgba(255, 255, 255, 0.8)",tagline_animate:"animate__fadeInRight",tagline_animate_duration:"animate__slower",tagline_align:"left",background_color_1:"#0D47A1",background_color_2:"#0D47A1",action_enabled:!1,action_url:"#void",action_button:"btn-default",action_icon:"download",action_icon_family:"MDI",action_text:"Download Now",logo_enabled:!1,logo_url:"/assets/images/modules/icons/j1/j1-512x512.png",logo_alt:"Jekyll-One-Template",logo_height:196,logo_animate:"animate__slideInDown",spinner:!1,caption:"",caption_href:"",caption_color:"rgba(255, 255, 255, 0.5)",opacity:1,alignX:.5,alignY:.5,scale:"cover",transition:"fadeInOut",duration:5e3,transitionDuration:"normal",animateFirst:!1,start:0,paused:!1,preload:2,preloadSize:1,bypassCss:!1,alwaysTestWindowResolution:!1,resolutionRefreshRate:2500,resolutionChangeRatioThreshold:.1,isVideo:!1,loop:!1,mute:!1,attics:[{name:"Home",attic:{enabled:!1,id:"attic_home",layout:"home",notranslate:!0}},{name:"Page_Post",attic:{enabled:!1,id:"attic_page_post",layout:["page","post"],notranslate:!0}},{name:"Text attic",attic:{enabled:!1,id:"attic_text",layout:["collection","app","raw"],notranslate:!0}}]}),d=$.extend({},{debug:!1,attics:[{name:"Home",attic:{enabled:!0,id:"attic_home",layout:"home",padding_top:400,padding_bottom:50,opacity:.5,background_color_1:"#0D47A1",background_color_2:"#0D47A1",filters:{grayscale:1,contrast:.8,brightness:.8}}},{name:"Pages and Posts",attic:{enabled:!0,id:"attic_page_post",layout:["page","post","blog_archive"],padding_top:400,padding_bottom:50,opacity:.5,filters:{grayscale:.5,sepia:.5}}},{name:"Raw pages",attic:{enabled:!0,id:"attic_raw",layout:["raw"],padding_top:400,padding_bottom:50,opacity:.5}},{name:"Text pages",attic:{enabled:!0,id:"attic_text",layout:["collection","app"]}}]}),s=$.extend({},o,d,n);a.frontmatterOptions=n,a.atticOptions=s,a.setState('started'),i.debug("\nstate: "+a.getState()),i.info("\nmodule is being initialized"),a.loadHeader()},loadHeader:function(){function n(n){$('#attic_home').length&&$('#attic_home').backstretch(n.slides,{debug:n.debug,spinner:n.spinner,alignX:n.alignX,alignY:n.alignY,scale:n.scale,transition:n.transition,transitionDuration:n.transitionDuration,animateFirst:n.animateFirst,duration:n.duration,paused:n.paused,start:n.start,preload:n.preload,preloadSize:n.preloadSize,bypassCss:n.bypassCss,alwaysTestWindowResolution:n.alwaysTestWindowResolution,resolutionRefreshRate:n.resolutionRefreshRate,resolutionChangeRatioThreshold:n.transition,isVideo:n.isVideo,loop:n.loop,mute:n.mute}),n.spinner&&$('.backstretch').addClass(n.spinner);var o=$('#attic_home').data('backstretch');n.pauseOnHover&&$('#attic_home').hover(function(){$('#attic_home').backstretch('pause')},function(){$('#attic_home').backstretch('resume')}),$(e).on('backstretch.before',function(e,i,n){var d=a.atticOptions;i.images[n].title,i.images[n].tagline;a.setState('backstretch_before'),n===o.images.length-1&&(0==d.circuit&&$('#attic_home').backstretch('pause'),$('.backstretch').removeClass(d.spinner)),$('.backstretch').css('filter','sepia(1) brightness(0.9) contrast(0.6)'),$('.backstretch').css('filter','grayscale(1) contrast(1) brightness(1)'),$('.textOverlay').css('opacity','0'),$('.attic-caption').css('opacity','0'),$('.particles-js-canvas-el').length>0&&t.adapter.particles.init()}),$(e).on('backstretch.after',function(t,e,n){var o,d=e.images[n].title,s=e.images[n].tagline,l=a.atticOptions,r=a.frontmatterOptions;if(0==n&&('undefined'==typeof e.images[n].title&&(d=r.title),'undefined'==typeof e.images[n].tagline&&(s=r.tagline)),'undefined'!=typeof e.images[n].badge)var p=e.images[n].badge.type,c=e.images[n].badge.author,g=e.images[n].badge.href;if(a.setState('backstretch_after'),'undefined'!=typeof e.images[n].caption){var _=e.images[n].caption.text,u=e.images[n].caption.href;u?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+u+'" target="_blank">'+_+'</a>').show():$('.attic-caption').text(_).show()}else if('undefined'!=typeof e.images[n].badge&&'unsplash'===p){var m="<div class=\"attic__badge animate__animated animate__fadeIn animate__slower\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+g+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(m).hide()}o="<div id=\"head-title\" class=\"head-title animate__animated \">  <h2 id=\"head-title-text\" class=\"notoc text-emphasis-stronger\">"+d+"</h2></div><div id=\"head-tagline\" class=\"head-tagline animate__animated \">  <h3 id=\"head-tagline-tagline\" class=\"notoc\">"+s+"</h3></div>",$('.textOverlay').html(o).hide(),$('#head-title').addClass(l.title_animate),$('#head-title').addClass(l.title_animate_delay),$('#head-title').addClass(l.title_animate_duration),$('#head-tagline').addClass(l.tagline_animate),$('#head-tagline').addClass(l.tagline_animate_duration),$('.textOverlay').show(),$('.textOverlay').css('opacity','1'),'undefined'!=typeof e.images[n].badge&&($('.attic-caption').show(),$('.attic-caption').css('opacity','1')),$('#attic_home').backstretch('resize'),a.setState('finished'),i.debug("\nstate: "+a.getState())})}function o(n){$('#attic_page_post').length&&$('#attic_page_post').backstretch(n.slides,{debug:n.debug,spinner:n.spinner,alignX:n.alignX,alignY:n.alignY,scale:n.scale,transition:n.transition,transitionDuration:n.transitionDuration,animateFirst:n.animateFirst,duration:n.duration,paused:n.paused,start:n.start,preload:n.preload,preloadSize:n.preloadSize,bypassCss:n.bypassCss,alwaysTestWindowResolution:n.alwaysTestWindowResolution,resolutionRefreshRate:n.resolutionRefreshRate,resolutionChangeRatioThreshold:n.transition,isVideo:n.isVideo,loop:n.loop,mute:n.mute}),n.spinner&&$('.backstretch').addClass(n.spinner);var o=$('#attic_page_post').data('backstretch');n.pauseOnHover&&$('#attic_home').hover(function(){$('#attic_page_post').backstretch('pause')},function(){$('#attic_page_post').backstretch('resume')}),$(e).on('backstretch.before',function(e,i,n){var d=a.atticOptions;i.images[n].title,i.images[n].tagline;a.setState('backstretch_before'),n===o.images.length-1&&(0==d.circuit&&$('#attic_page_post').backstretch('pause'),$('.backstretch').removeClass(d.spinner)),$('.backstretch').css('filter','sepia(1) brightness(0.9) contrast(0.6)'),$('.backstretch').css('filter','grayscale(1) contrast(1) brightness(1)'),$('.textOverlay').css('opacity','0'),$('.attic-caption').css('opacity','0'),$('.particles-js-canvas-el').length>0&&t.adapter.particles.init()}),$(e).on('backstretch.after',function(t,e,n){var o,d=e.images[n].title,s=e.images[n].tagline,l=a.atticOptions,r=a.frontmatterOptions;if(0==n&&('undefined'==typeof e.images[n].title&&(d=r.title),'undefined'==typeof e.images[n].tagline&&(s=r.tagline)),'undefined'!=typeof e.images[n].badge)var p=e.images[n].badge.type,c=e.images[n].badge.author,g=e.images[n].badge.href;if(a.setState('backstretch_after'),'undefined'!=typeof e.images[n].caption){var _=e.images[n].caption.text,u=e.images[n].caption.href;u?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+u+'" target="_blank">'+_+'</a>').show():$('.attic-caption').text(_).show()}else if('undefined'!=typeof e.images[n].badge&&'unsplash'===p){var m="<div class=\"attic__badge animate__animated animate__fadeIn animate__slower\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+g+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(m).hide()}o="<div id=\"head-title\" class=\"head-title animate__animated \">  <h2 id=\"head-title-text\" class=\"notoc text-emphasis-stronger\">"+d+"</h2></div><div id=\"head-tagline\" class=\"head-tagline animate__animated \">  <h3 id=\"head-tagline-tagline\" class=\"notoc\">"+s+"</h3></div>",$('.textOverlay').html(o).hide(),$('#head-title').addClass(l.title_animate),$('#head-title').addClass(l.title_animate_delay),$('#head-title').addClass(l.title_animate_duration),$('#head-tagline').addClass(l.tagline_animate),$('#head-tagline').addClass(l.tagline_animate_duration),$('.textOverlay').show(),$('.textOverlay').css('opacity','1'),'undefined'!=typeof e.images[n].badge&&($('.attic-caption').show(),$('.attic-caption').css('opacity','1')),$('#attic_page_post').backstretch('resize'),a.setState('finished'),i.debug("\nstate: "+a.getState())})}function d(n){$('#attic_raw').length&&$('#attic_raw').backstretch(n.slides,{debug:n.debug,spinner:n.spinner,alignX:n.alignX,alignY:n.alignY,scale:n.scale,transition:n.transition,transitionDuration:n.transitionDuration,animateFirst:n.animateFirst,duration:n.duration,paused:n.paused,start:n.start,preload:n.preload,preloadSize:n.preloadSize,bypassCss:n.bypassCss,alwaysTestWindowResolution:n.alwaysTestWindowResolution,resolutionRefreshRate:n.resolutionRefreshRate,resolutionChangeRatioThreshold:n.transition,isVideo:n.isVideo,loop:n.loop,mute:n.mute}),n.spinner&&$('.backstretch').addClass(n.spinner);var o=$('#attic_raw').data('backstretch');n.pauseOnHover&&$('#attic_home').hover(function(){$('#attic_raw').backstretch('pause')},function(){$('#attic_raw').backstretch('resume')}),$(e).on('backstretch.before',function(e,i,n){var d=a.atticOptions;i.images[n].title,i.images[n].tagline;a.setState('backstretch_before'),n===o.images.length-1&&(0==d.circuit&&$('#attic_raw').backstretch('pause'),$('.backstretch').removeClass(d.spinner)),$('.backstretch').css('filter','sepia(1) brightness(0.9) contrast(0.6)'),$('.backstretch').css('filter','grayscale(1) contrast(1) brightness(1)'),$('.textOverlay').css('opacity','0'),$('.attic-caption').css('opacity','0'),$('.particles-js-canvas-el').length>0&&t.adapter.particles.init()}),$(e).on('backstretch.after',function(t,e,n){var o,d=e.images[n].title,s=e.images[n].tagline,l=a.atticOptions,r=a.frontmatterOptions;if(0==n&&('undefined'==typeof e.images[n].title&&(d=r.title),'undefined'==typeof e.images[n].tagline&&(s=r.tagline)),'undefined'!=typeof e.images[n].badge)var p=e.images[n].badge.type,c=e.images[n].badge.author,g=e.images[n].badge.href;if(a.setState('backstretch_after'),'undefined'!=typeof e.images[n].caption){var _=e.images[n].caption.text,u=e.images[n].caption.href;u?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+u+'" target="_blank">'+_+'</a>').show():$('.attic-caption').text(_).show()}else if('undefined'!=typeof e.images[n].badge&&'unsplash'===p){var m="<div class=\"attic__badge animate__animated animate__fadeIn animate__slower\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+g+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(m).hide()}o="<div id=\"head-title\" class=\"head-title animate__animated \">  <h2 id=\"head-title-text\" class=\"notoc text-emphasis-stronger\">"+d+"</h2></div><div id=\"head-tagline\" class=\"head-tagline animate__animated \">  <h3 id=\"head-tagline-tagline\" class=\"notoc\">"+s+"</h3></div>",$('.textOverlay').html(o).hide(),$('#head-title').addClass(l.title_animate),$('#head-title').addClass(l.title_animate_delay),$('#head-title').addClass(l.title_animate_duration),$('#head-tagline').addClass(l.tagline_animate),$('#head-tagline').addClass(l.tagline_animate_duration),$('.textOverlay').show(),$('.textOverlay').css('opacity','1'),'undefined'!=typeof e.images[n].badge&&($('.attic-caption').show(),$('.attic-caption').css('opacity','1')),$('#attic_raw').backstretch('resize'),a.setState('finished'),i.debug("\nstate: "+a.getState())})}function s(n){$('#attic_text').length&&$('#attic_text').backstretch(n.slides,{debug:n.debug,spinner:n.spinner,alignX:n.alignX,alignY:n.alignY,scale:n.scale,transition:n.transition,transitionDuration:n.transitionDuration,animateFirst:n.animateFirst,duration:n.duration,paused:n.paused,start:n.start,preload:n.preload,preloadSize:n.preloadSize,bypassCss:n.bypassCss,alwaysTestWindowResolution:n.alwaysTestWindowResolution,resolutionRefreshRate:n.resolutionRefreshRate,resolutionChangeRatioThreshold:n.transition,isVideo:n.isVideo,loop:n.loop,mute:n.mute}),n.spinner&&$('.backstretch').addClass(n.spinner);var o=$('#attic_text').data('backstretch');n.pauseOnHover&&$('#attic_home').hover(function(){$('#attic_text').backstretch('pause')},function(){$('#attic_text').backstretch('resume')}),$(e).on('backstretch.before',function(e,i,n){var d=a.atticOptions;i.images[n].title,i.images[n].tagline;a.setState('backstretch_before'),n===o.images.length-1&&(0==d.circuit&&$('#attic_text').backstretch('pause'),$('.backstretch').removeClass(d.spinner)),$('.backstretch').css('filter','sepia(1) brightness(0.9) contrast(0.6)'),$('.backstretch').css('filter','grayscale(1) contrast(1) brightness(1)'),$('.textOverlay').css('opacity','0'),$('.attic-caption').css('opacity','0'),$('.particles-js-canvas-el').length>0&&t.adapter.particles.init()}),$(e).on('backstretch.after',function(t,e,n){var o,d=e.images[n].title,s=e.images[n].tagline,l=a.atticOptions,r=a.frontmatterOptions;if(0==n&&('undefined'==typeof e.images[n].title&&(d=r.title),'undefined'==typeof e.images[n].tagline&&(s=r.tagline)),'undefined'!=typeof e.images[n].badge)var p=e.images[n].badge.type,c=e.images[n].badge.author,g=e.images[n].badge.href;if(a.setState('backstretch_after'),'undefined'!=typeof e.images[n].caption){var _=e.images[n].caption.text,u=e.images[n].caption.href;u?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+u+'" target="_blank">'+_+'</a>').show():$('.attic-caption').text(_).show()}else if('undefined'!=typeof e.images[n].badge&&'unsplash'===p){var m="<div class=\"attic__badge animate__animated animate__fadeIn animate__slower\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+g+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(m).hide()}o="<div id=\"head-title\" class=\"head-title animate__animated \">  <h2 id=\"head-title-text\" class=\"notoc text-emphasis-stronger\">"+d+"</h2></div><div id=\"head-tagline\" class=\"head-tagline animate__animated \">  <h3 id=\"head-tagline-tagline\" class=\"notoc\">"+s+"</h3></div>",$('.textOverlay').html(o).hide(),$('#head-title').addClass(l.title_animate),$('#head-title').addClass(l.title_animate_delay),$('#head-title').addClass(l.title_animate_duration),$('#head-tagline').addClass(l.tagline_animate),$('#head-tagline').addClass(l.tagline_animate_duration),$('.textOverlay').show(),$('.textOverlay').css('opacity','1'),'undefined'!=typeof e.images[n].badge&&($('.attic-caption').show(),$('.attic-caption').css('opacity','1')),$('#attic_text').backstretch('resize'),a.setState('finished'),i.debug("\nstate: "+a.getState())})}var l=a.frontmatterOptions,r=$.extend({},a.atticOptions,a.frontmatterOptions);if($('#attic_home').length){var p={opacity:.5,padding_top:400,padding_bottom:50,background_color_1:"#0D47A1",background_color_2:"#0D47A1"},c={opacity:.5};r=$.extend({},r,p,c),l.background_color_1&&(r.background_color_1=l.background_color_1),l.background_color_2&&(r.background_color_2=l.background_color_2),l&&('undefined'!=typeof l.raised_level&&(r.raised_level=l.raised_level),'undefined'!=typeof l.r_text&&(r.r_text=l.r_text),'undefined'!=typeof l.text_emphasis&&(r.text_emphasis=l.text_emphasis),'undefined'!=typeof l.padding_top&&(r.padding_top=l.padding_top),'undefined'!=typeof l.padding_bottom&&(r.padding_bottom=l.padding_bottom),'undefined'!=typeof l.margin_bottom&&(r.margin_bottom=l.margin_bottom),'undefined'!=typeof l.title&&('undefined'!=typeof l.title.color&&(r.title_color=l.title.color),'undefined'!=typeof l.title.size&&(r.title_size=l.title.size),'undefined'!=typeof l.title.animate&&(r.title_animate=l.title.animate),'undefined'!=typeof l.title.align&&(r.title_align=l.title.align)),'undefined'!=typeof l.tagline&&('undefined'!=typeof l.tagline.color&&(r.tagline_color=l.tagline.color),'undefined'!=typeof l.tagline.size&&(r.tagline_size=l.tagline.size),'undefined'!=typeof l.tagline.animate&&(r.tagline_animate=l.tagline.animate),'undefined'!=typeof l.tagline.align&&(r.tagline_align=l.tagline.align)),'undefined'!=typeof l.spinner&&(r.spinner=l.spinner),'undefined'!=typeof l.opacity&&(r.opacity=l.opacity),'undefined'!=typeof l.alignX&&(r.alignX=l.alignX),'undefined'!=typeof l.alignY&&(r.alignY=l.alignY),'undefined'!=typeof l.scale&&(r.scale=l.scale),'undefined'!=typeof l.start&&(r.start=l.start),'undefined'!=typeof l.animateFirst&&(r.animateFirst=l.animateFirst),'undefined'!=typeof l.preload&&(r.preload=l.preload),'undefined'!=typeof l.preloadSize&&(r.preloadSize=l.preloadSize),'undefined'!=typeof l.mute&&(r.mute=l.mute),'undefined'!=typeof l.bypassCss&&(r.bypassCss=l.bypassCss),'undefined'!=typeof l.isVideo&&(r.isVideo=l.isVideo),'undefined'!=typeof l.loop&&(r.loop=l.loop),'undefined'!=typeof l.paused&&(r.paused=l.paused),'undefined'!=typeof l.transition&&(r.transition=l.transition),'undefined'!=typeof l.duration&&(r.duration=l.duration),'undefined'!=typeof l.transitionDuration&&(r.transitionDuration=l.transitionDuration),'undefined'!=typeof l.slides&&(r.slides=l.slides)),'enabled'==r.r_text&&$('#attic_home').addClass('r-text');var g='raised-z'+r.raised_level;$('#attic_home').addClass(g),$('#head-title').addClass(r.title_animate),$('#head-title').addClass(r.title_animate_delay),$('#head-title').addClass(r.title_animate_duration),$('#head-tagline').addClass(r.tagline_animate),$('#head-tagline').addClass(r.tagline_animate_duration);var _='text-emphasis-'+r.text_emphasis;$('#head-title-text').addClass(_),$('#head-tagline-text').addClass(_),r.notranslate&&$('#attic_home').addClass('notranslate');var u='';u+='<style> .attic { ',u+='background-image: -webkit-gradient(linear, left top, left bottom, from('+r.background_color_1+'), to('+r.background_color_2+')) !important;',u+='background-image: -webkit-linear-gradient(top, '+r.background_color_1+' 0%, '+r.background_color_2+' 100%) !important;',u+='background-image: -o-linear-gradient(top, '+r.background_color_1+' 0%, '+r.background_color_2+' 100%) !important;',u+='background-image: linear-gradient(to bottom, '+r.background_color_1+' 0%, '+r.background_color_2+' 100%) !important;',u+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+r.background_color_1+'", endColorstr="'+r.background_color_2+'", GradientType=0) !important;',u+='} </style>',$('head').append(u),u='',u='<style> .attic { padding-top: '+r.padding_top+'px; padding-bottom: '+r.padding_bottom+'px; margin-bottom: '+r.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(u),$('head').append('<style> .attic .head-title h2 { color: '+r.title_color+';font-size: '+r.title_size+' !important; text-align: '+r.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+r.tagline_color+';font-size: '+r.tagline_size+' !important; text-align: '+r.tagline_align+'; } </style>'),m='<style> .backstretch-item { opacity: '+r.opacity+'; </style>',$('head').append(m),a.setState('initialized'),i.debug("\nstate: "+a.getState()),'undefined'!=typeof r.slides&&$(function(){i.debug("\nLoad image header"),n(r),a.setState('completed'),i.debug("\nstate: "+a.getState())})}if($('#attic_page_post').length){p={opacity:.5,padding_top:400,padding_bottom:50},c={opacity:.5};r=$.extend({},r,p,c),l.background_color_1&&(r.background_color_1=l.background_color_1),l.background_color_2&&(r.background_color_2=l.background_color_2),l&&('undefined'!=typeof l.raised_level&&(r.raised_level=l.raised_level),'undefined'!=typeof l.r_text&&(r.r_text=l.r_text),'undefined'!=typeof l.text_emphasis&&(r.text_emphasis=l.text_emphasis),'undefined'!=typeof l.padding_top&&(r.padding_top=l.padding_top),'undefined'!=typeof l.padding_bottom&&(r.padding_bottom=l.padding_bottom),'undefined'!=typeof l.margin_bottom&&(r.margin_bottom=l.margin_bottom),'undefined'!=typeof l.title&&('undefined'!=typeof l.title.color&&(r.title_color=l.title.color),'undefined'!=typeof l.title.size&&(r.title_size=l.title.size),'undefined'!=typeof l.title.animate&&(r.title_animate=l.title.animate),'undefined'!=typeof l.title.align&&(r.title_align=l.title.align)),'undefined'!=typeof l.tagline&&('undefined'!=typeof l.tagline.color&&(r.tagline_color=l.tagline.color),'undefined'!=typeof l.tagline.size&&(r.tagline_size=l.tagline.size),'undefined'!=typeof l.tagline.animate&&(r.tagline_animate=l.tagline.animate),'undefined'!=typeof l.tagline.align&&(r.tagline_align=l.tagline.align)),'undefined'!=typeof l.spinner&&(r.spinner=l.spinner),'undefined'!=typeof l.opacity&&(r.opacity=l.opacity),'undefined'!=typeof l.alignX&&(r.alignX=l.alignX),'undefined'!=typeof l.alignY&&(r.alignY=l.alignY),'undefined'!=typeof l.scale&&(r.scale=l.scale),'undefined'!=typeof l.start&&(r.start=l.start),'undefined'!=typeof l.animateFirst&&(r.animateFirst=l.animateFirst),'undefined'!=typeof l.preload&&(r.preload=l.preload),'undefined'!=typeof l.preloadSize&&(r.preloadSize=l.preloadSize),'undefined'!=typeof l.mute&&(r.mute=l.mute),'undefined'!=typeof l.bypassCss&&(r.bypassCss=l.bypassCss),'undefined'!=typeof l.isVideo&&(r.isVideo=l.isVideo),'undefined'!=typeof l.loop&&(r.loop=l.loop),'undefined'!=typeof l.paused&&(r.paused=l.paused),'undefined'!=typeof l.transition&&(r.transition=l.transition),'undefined'!=typeof l.duration&&(r.duration=l.duration),'undefined'!=typeof l.transitionDuration&&(r.transitionDuration=l.transitionDuration),'undefined'!=typeof l.slides&&(r.slides=l.slides)),'enabled'==r.r_text&&$('#attic_page_post').addClass('r-text');g='raised-z'+r.raised_level;$('#attic_page_post').addClass(g),$('#head-title').addClass(r.title_animate),$('#head-title').addClass(r.title_animate_delay),$('#head-title').addClass(r.title_animate_duration),$('#head-tagline').addClass(r.tagline_animate),$('#head-tagline').addClass(r.tagline_animate_duration);_='text-emphasis-'+r.text_emphasis;$('#head-title-text').addClass(_),$('#head-tagline-text').addClass(_),r.notranslate&&$('#attic_page_post').addClass('notranslate');u='';u+='<style> .attic { ',u+='background-image: -webkit-gradient(linear, left top, left bottom, from('+r.background_color_1+'), to('+r.background_color_2+')) !important;',u+='background-image: -webkit-linear-gradient(top, '+r.background_color_1+' 0%, '+r.background_color_2+' 100%) !important;',u+='background-image: -o-linear-gradient(top, '+r.background_color_1+' 0%, '+r.background_color_2+' 100%) !important;',u+='background-image: linear-gradient(to bottom, '+r.background_color_1+' 0%, '+r.background_color_2+' 100%) !important;',u+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+r.background_color_1+'", endColorstr="'+r.background_color_2+'", GradientType=0) !important;',u+='} </style>',$('head').append(u),u='',u='<style> .attic { padding-top: '+r.padding_top+'px; padding-bottom: '+r.padding_bottom+'px; margin-bottom: '+r.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(u),$('head').append('<style> .attic .head-title h2 { color: '+r.title_color+';font-size: '+r.title_size+' !important; text-align: '+r.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+r.tagline_color+';font-size: '+r.tagline_size+' !important; text-align: '+r.tagline_align+'; } </style>'),m='<style> .backstretch-item { opacity: '+r.opacity+'; </style>',$('head').append(m),a.setState('initialized'),i.debug("\nstate: "+a.getState()),'undefined'!=typeof r.slides&&$(function(){i.debug("\nLoad image header"),o(r),a.setState('completed'),i.debug("\nstate: "+a.getState())})}if($('#attic_raw').length){p={opacity:.5,padding_top:400,padding_bottom:50},c={opacity:.5};r=$.extend({},r,p,c),l.background_color_1&&(r.background_color_1=l.background_color_1),l.background_color_2&&(r.background_color_2=l.background_color_2),l&&('undefined'!=typeof l.raised_level&&(r.raised_level=l.raised_level),'undefined'!=typeof l.r_text&&(r.r_text=l.r_text),'undefined'!=typeof l.text_emphasis&&(r.text_emphasis=l.text_emphasis),'undefined'!=typeof l.padding_top&&(r.padding_top=l.padding_top),'undefined'!=typeof l.padding_bottom&&(r.padding_bottom=l.padding_bottom),'undefined'!=typeof l.margin_bottom&&(r.margin_bottom=l.margin_bottom),'undefined'!=typeof l.title&&('undefined'!=typeof l.title.color&&(r.title_color=l.title.color),'undefined'!=typeof l.title.size&&(r.title_size=l.title.size),'undefined'!=typeof l.title.animate&&(r.title_animate=l.title.animate),'undefined'!=typeof l.title.align&&(r.title_align=l.title.align)),'undefined'!=typeof l.tagline&&('undefined'!=typeof l.tagline.color&&(r.tagline_color=l.tagline.color),'undefined'!=typeof l.tagline.size&&(r.tagline_size=l.tagline.size),'undefined'!=typeof l.tagline.animate&&(r.tagline_animate=l.tagline.animate),'undefined'!=typeof l.tagline.align&&(r.tagline_align=l.tagline.align)),'undefined'!=typeof l.spinner&&(r.spinner=l.spinner),'undefined'!=typeof l.opacity&&(r.opacity=l.opacity),'undefined'!=typeof l.alignX&&(r.alignX=l.alignX),'undefined'!=typeof l.alignY&&(r.alignY=l.alignY),'undefined'!=typeof l.scale&&(r.scale=l.scale),'undefined'!=typeof l.start&&(r.start=l.start),'undefined'!=typeof l.animateFirst&&(r.animateFirst=l.animateFirst),'undefined'!=typeof l.preload&&(r.preload=l.preload),'undefined'!=typeof l.preloadSize&&(r.preloadSize=l.preloadSize),'undefined'!=typeof l.mute&&(r.mute=l.mute),'undefined'!=typeof l.bypassCss&&(r.bypassCss=l.bypassCss),'undefined'!=typeof l.isVideo&&(r.isVideo=l.isVideo),'undefined'!=typeof l.loop&&(r.loop=l.loop),'undefined'!=typeof l.paused&&(r.paused=l.paused),'undefined'!=typeof l.transition&&(r.transition=l.transition),'undefined'!=typeof l.duration&&(r.duration=l.duration),'undefined'!=typeof l.transitionDuration&&(r.transitionDuration=l.transitionDuration),'undefined'!=typeof l.slides&&(r.slides=l.slides)),'enabled'==r.r_text&&$('#attic_raw').addClass('r-text');g='raised-z'+r.raised_level;$('#attic_raw').addClass(g),$('#head-title').addClass(r.title_animate),$('#head-title').addClass(r.title_animate_delay),$('#head-title').addClass(r.title_animate_duration),$('#head-tagline').addClass(r.tagline_animate),$('#head-tagline').addClass(r.tagline_animate_duration);_='text-emphasis-'+r.text_emphasis;$('#head-title-text').addClass(_),$('#head-tagline-text').addClass(_),r.notranslate&&$('#attic_raw').addClass('notranslate');u='';u+='<style> .attic { ',u+='background-image: -webkit-gradient(linear, left top, left bottom, from('+r.background_color_1+'), to('+r.background_color_2+')) !important;',u+='background-image: -webkit-linear-gradient(top, '+r.background_color_1+' 0%, '+r.background_color_2+' 100%) !important;',u+='background-image: -o-linear-gradient(top, '+r.background_color_1+' 0%, '+r.background_color_2+' 100%) !important;',u+='background-image: linear-gradient(to bottom, '+r.background_color_1+' 0%, '+r.background_color_2+' 100%) !important;',u+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+r.background_color_1+'", endColorstr="'+r.background_color_2+'", GradientType=0) !important;',u+='} </style>',$('head').append(u),u='',u='<style> .attic { padding-top: '+r.padding_top+'px; padding-bottom: '+r.padding_bottom+'px; margin-bottom: '+r.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(u),$('head').append('<style> .attic .head-title h2 { color: '+r.title_color+';font-size: '+r.title_size+' !important; text-align: '+r.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+r.tagline_color+';font-size: '+r.tagline_size+' !important; text-align: '+r.tagline_align+'; } </style>'),m='<style> .backstretch-item { opacity: '+r.opacity+'; </style>',$('head').append(m),a.setState('initialized'),i.debug("\nstate: "+a.getState()),'undefined'!=typeof r.slides&&$(function(){i.debug("\nLoad image header"),d(r),a.setState('completed'),i.debug("\nstate: "+a.getState())})}if($('#attic_text').length){p={},c={};r=$.extend({},r,p,c),l.background_color_1&&(r.background_color_1=l.background_color_1),l.background_color_2&&(r.background_color_2=l.background_color_2),l&&('undefined'!=typeof l.raised_level&&(r.raised_level=l.raised_level),'undefined'!=typeof l.r_text&&(r.r_text=l.r_text),'undefined'!=typeof l.text_emphasis&&(r.text_emphasis=l.text_emphasis),'undefined'!=typeof l.padding_top&&(r.padding_top=l.padding_top),'undefined'!=typeof l.padding_bottom&&(r.padding_bottom=l.padding_bottom),'undefined'!=typeof l.margin_bottom&&(r.margin_bottom=l.margin_bottom),'undefined'!=typeof l.title&&('undefined'!=typeof l.title.color&&(r.title_color=l.title.color),'undefined'!=typeof l.title.size&&(r.title_size=l.title.size),'undefined'!=typeof l.title.animate&&(r.title_animate=l.title.animate),'undefined'!=typeof l.title.align&&(r.title_align=l.title.align)),'undefined'!=typeof l.tagline&&('undefined'!=typeof l.tagline.color&&(r.tagline_color=l.tagline.color),'undefined'!=typeof l.tagline.size&&(r.tagline_size=l.tagline.size),'undefined'!=typeof l.tagline.animate&&(r.tagline_animate=l.tagline.animate),'undefined'!=typeof l.tagline.align&&(r.tagline_align=l.tagline.align)),'undefined'!=typeof l.spinner&&(r.spinner=l.spinner),'undefined'!=typeof l.opacity&&(r.opacity=l.opacity),'undefined'!=typeof l.alignX&&(r.alignX=l.alignX),'undefined'!=typeof l.alignY&&(r.alignY=l.alignY),'undefined'!=typeof l.scale&&(r.scale=l.scale),'undefined'!=typeof l.start&&(r.start=l.start),'undefined'!=typeof l.animateFirst&&(r.animateFirst=l.animateFirst),'undefined'!=typeof l.preload&&(r.preload=l.preload),'undefined'!=typeof l.preloadSize&&(r.preloadSize=l.preloadSize),'undefined'!=typeof l.mute&&(r.mute=l.mute),'undefined'!=typeof l.bypassCss&&(r.bypassCss=l.bypassCss),'undefined'!=typeof l.isVideo&&(r.isVideo=l.isVideo),'undefined'!=typeof l.loop&&(r.loop=l.loop),'undefined'!=typeof l.paused&&(r.paused=l.paused),'undefined'!=typeof l.transition&&(r.transition=l.transition),'undefined'!=typeof l.duration&&(r.duration=l.duration),'undefined'!=typeof l.transitionDuration&&(r.transitionDuration=l.transitionDuration),'undefined'!=typeof l.slides&&(r.slides=l.slides)),'enabled'==r.r_text&&$('#attic_text').addClass('r-text');g='raised-z'+r.raised_level;$('#attic_text').addClass(g),$('#head-title').addClass(r.title_animate),$('#head-title').addClass(r.title_animate_delay),$('#head-title').addClass(r.title_animate_duration),$('#head-tagline').addClass(r.tagline_animate),$('#head-tagline').addClass(r.tagline_animate_duration);_='text-emphasis-'+r.text_emphasis
;$('#head-title-text').addClass(_),$('#head-tagline-text').addClass(_),r.notranslate&&$('#attic_text').addClass('notranslate');var m;u='';u+='<style> .attic { ',u+='background-image: -webkit-gradient(linear, left top, left bottom, from('+r.background_color_1+'), to('+r.background_color_2+')) !important;',u+='background-image: -webkit-linear-gradient(top, '+r.background_color_1+' 0%, '+r.background_color_2+' 100%) !important;',u+='background-image: -o-linear-gradient(top, '+r.background_color_1+' 0%, '+r.background_color_2+' 100%) !important;',u+='background-image: linear-gradient(to bottom, '+r.background_color_1+' 0%, '+r.background_color_2+' 100%) !important;',u+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+r.background_color_1+'", endColorstr="'+r.background_color_2+'", GradientType=0) !important;',u+='} </style>',$('head').append(u),u='',u='<style> .attic { padding-top: '+r.padding_top+'px; padding-bottom: '+r.padding_bottom+'px; margin-bottom: '+r.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(u),$('head').append('<style> .attic .head-title h2 { color: '+r.title_color+';font-size: '+r.title_size+' !important; text-align: '+r.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+r.tagline_color+';font-size: '+r.tagline_size+' !important; text-align: '+r.tagline_align+'; } </style>'),m='<style> .backstretch-item { opacity: '+r.opacity+'; </style>',$('head').append(m),a.setState('initialized'),i.debug("\nstate: "+a.getState()),'undefined'!=typeof r.slides&&$(function(){i.debug("\nLoad image header"),s(r),a.setState('completed'),i.debug("\nstate: "+a.getState())})}return $('#no_header').length&&(a.setState('completed'),i.debug("\nstate: "+a.getState()),i.warn("\nno header configured or found in page")),!0},messageHandler:function(t,e){var a=JSON.stringify(e,undefined,2);return n="\nreceived message from "+t+': '+a,i.debug(n),'command'===e.type&&'module_initialized'===e.action&&(status='completed',i.info('\n'+e.text)),!0},setState:function(t){a.state=t},getState:function(){return a.state}}}(j1,window);


