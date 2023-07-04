

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
 #  Adapter generated: 2023-07-04 15:54:48 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.attic=function(t,e){var a,i,n,o,d;return{init:function(e){$.extend({module_name:'j1.adapter.attic',generated:'2023-07-04 15:54:48 +0200'},e);a=t.adapter.attic,i=log4javascript.getLogger('j1.adapter.attic'),a.state='pending';var n=null!=e?$.extend({},e):{},o=$.extend({},{enabled:!0,debug:!1,hide_page_oninit:!0,circuit:!1,notranslate:!0,pauseOnHover:!1,icon_family:"mdib",icon_color:"#9E9E9E",icon_size:"default",raised_level:0,r_text:"enabled",text_emphasis:"stronger",padding_top:400,padding_bottom:50,margin_bottom:50,title_size:"3em",title_color:"rgba(255, 255, 255, 0.8)",title_align:"left",title_animate:"animate__bounceInDown",title_animate_delay:!1,title_animate_duration:"animate__slow",tagline_size:"1.5em",tagline_color:"rgba(255, 255, 255, 0.8)",tagline_align:"left",tagline_animate:"animate__fadeInRight",tagline_animate_delay:!1,tagline_animate_duration:"animate__slow",background_color_1:"#0D47A1",background_color_2:"#0D47A1",slides:[{url:"/assets/images/modules/attics/placeholder/transparent-1920x1280.png",alt:"Placeholder background image"}],filters:{grayscale:1,contrast:.8,brightness:.8},action_enabled:!1,action_url:"#",action_button:"btn-default",action_icon:"download",action_icon_family:"mdib",action_text:"Download Now",logo_enabled:!1,logo_url:"/assets/images/modules/icons/j1/j1-512x512.png",logo_alt:"Jekyll-One-Template",logo_height:196,logo_animate:"animate__slideInDown",spinner:!1,caption:"",caption_href:"",caption_color:"rgba(255, 255, 255, 0.5)",opacity:.5,alignX:.5,alignY:.5,scale:"cover",transition:"fadeInOut",duration:5e3,transitionDuration:"normal",animateFirst:!1,start:0,paused:!1,preload:5,preloadSize:1,bypassCss:!1,alwaysTestWindowResolution:!1,resolutionRefreshRate:2500,resolutionChangeRatioThreshold:.1,isVideo:!1,loop:!1,mute:!1,attics:[{name:"Home",attic:{enabled:!1,id:"attic_home",layout:"home",notranslate:!0}},{name:"Page_Post",attic:{enabled:!1,id:"attic_page_post",layout:["page","post"],notranslate:!0}},{name:"Text attic",attic:{enabled:!1,id:"attic_text",layout:["collection","app","raw"],notranslate:!0}}]}),d=$.extend({},{attics:[{name:"Home",attic:{enabled:!0,id:"attic_home",layout:"home",title_animate:"animate__bounceInDown",title_animate_duration:"animate__fast",tagline_animate:"animate__fadeInRight",tagline_animate_duration:"animate__slow",padding_top:600}},{name:"Pages",attic:{enabled:!0,id:"attic_page",layout:"page",padding_top:600}},{name:"Posts",attic:{enabled:!0,id:"attic_post",layout:["collection","post"],title_animate:"animate__fadeInDown",padding_top:600}}]}),l=$.extend(!0,{},o,d,n);a.frontmatterOptions=n,a.atticOptions=l,a.setState('started'),i.debug("\nstate: "+a.getState()),i.info("\nmodule is being initialized");var s=setInterval(function(){'block'==$('#no_flicker').css("display")&&(i.info("\nmodule initializaton: started"),l.hide_page_oninit&&(i.debug("\nhide attic on initialization"),$('#no_flicker').css('display','none')),a.createAllAttics(),clearInterval(s))},10)},createAllAttics:function(){function n(n){var l={},s={},r={},p=$.extend({},{enabled:!0,id:"attic_home",layout:"home",title_animate:"animate__bounceInDown",title_animate_duration:"animate__fast",tagline_animate:"animate__fadeInRight",tagline_animate_duration:"animate__slow",padding_top:600});l=n.filters,r=$.extend(!0,{},l,s),o=[],$.each(r,function(t,e){var a=t+'('+e+')';o.push(a)}),d=o.join(' '),$('#attic_home').length?$('#attic_home').backstretch(n.slides,{debug:n.debug,spinner:n.spinner,alignX:n.alignX,alignY:n.alignY,scale:n.scale,transition:n.transition,transitionDuration:n.transitionDuration,animateFirst:n.animateFirst,duration:n.duration,paused:n.paused,start:n.start,preload:n.preload,preloadSize:n.preloadSize,bypassCss:n.bypassCss,alwaysTestWindowResolution:n.alwaysTestWindowResolution,resolutionRefreshRate:n.resolutionRefreshRate,resolutionChangeRatioThreshold:n.transition,isVideo:n.isVideo,loop:n.loop,mute:n.mute}):i.warn("\nno attic container found on id: attic_home"),n.spinner&&$('.backstretch').addClass(n.spinner);var _=$('#attic_home').data('backstretch');n.pauseOnHover&&$('#attic_id').hover(function(){$('#attic_home').backstretch('pause')},function(){$('#attic_home').backstretch('resume')}),$(e).on('backstretch.before',function(e,i,n){var o=a.atticOptions;i.images[n].title,i.images[n].tagline;a.setState('backstretch_before'),n===_.images.length-1&&(0==o.circuit&&$('#attic_home').backstretch('pause'),$('.backstretch').removeClass(o.spinner)),$('.backstretch').css('filter',d),$('.textOverlay').css('opacity','0'),$('.attic-caption').css('opacity','0'),$('.particles-js-canvas-el').length>0&&t.adapter.particles.init()}),$(e).on('backstretch.after',function(t,e,n){var o,d=e.images[n].title,l=e.images[n].tagline,s=a.atticOptions,r=a.frontmatterOptions;if(0==n&&('undefined'==typeof e.images[n].title&&(d=r.title),'undefined'==typeof e.images[n].tagline&&(l=r.tagline)),'undefined'!=typeof e.images[n].badge)var _=e.images[n].badge.type,c=e.images[n].badge.author,g=e.images[n].badge.href;if(a.setState('backstretch_after'),'undefined'!=typeof e.images[n].caption){var m=e.images[n].caption.text,u=e.images[n].caption.href;u?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+u+'" target="_blank">'+m+'</a>').show():$('.attic-caption').text(m).show()}else if('undefined'!=typeof e.images[n].badge&&'unsplash'===_){var f="<div class=\"attic__badge animate__animated animate__fadeIn animate__slower\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+g+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(f).hide()}o="<div id=\"head-title\" class=\"head-title animate__animated \">  <h2 id=\"head-title-text\" class=\"notoc text-"+s.title_align+' text-emphasis-stronger">'+d+"</h2></div><div id=\"head-tagline\" class=\"head-tagline animate__animated \">  <h3 id=\"head-tagline-text\" class=\"notoc text-"+s.tagline_align+'">'+l+"</h3></div>",$('.textOverlay').html(o).hide();var h=p.title_animate?p.title_animate:s.title_animate,b=p.title_animate_delay?p.title_animate_delay:s.title_animate_delay,y=p.title_animate_duration?p.title_animate_duration:s.title_animate_duration;$('#head-title').addClass(h),$('#head-title').addClass(b),$('#head-title').addClass(y);var v=p.tagline_animate?p.tagline_animate:s.tagline_animate,k=p.tagline_animate_delay?p.tagline_animate_delay:s.tagline_animate_delay,x=p.tagline_animate_duration?p.tagline_animate_duration:s.tagline_animate_duration;$('#head-tagline').addClass(v),$('#head-tagline').addClass(k),$('#head-tagline').addClass(x),$('.textOverlay').show(),$('.textOverlay').css('opacity','1'),'undefined'!=typeof e.images[n].badge&&($('.attic-caption').show(),$('.attic-caption').css('opacity','1')),$('#no_flicker').css('display','block'),$('#attic_home').backstretch('resize'),a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\ninitialize attic on id attic_home: finished"),i.info("\nmodule initializaton: finished")})}function l(n){var l={},s={},r={},p=$.extend({},{enabled:!0,id:"attic_page",layout:"page",padding_top:600});l=n.filters,r=$.extend(!0,{},l,s),o=[],$.each(r,function(t,e){var a=t+'('+e+')';o.push(a)}),d=o.join(' '),$('#attic_page').length?$('#attic_page').backstretch(n.slides,{debug:n.debug,spinner:n.spinner,alignX:n.alignX,alignY:n.alignY,scale:n.scale,transition:n.transition,transitionDuration:n.transitionDuration,animateFirst:n.animateFirst,duration:n.duration,paused:n.paused,start:n.start,preload:n.preload,preloadSize:n.preloadSize,bypassCss:n.bypassCss,alwaysTestWindowResolution:n.alwaysTestWindowResolution,resolutionRefreshRate:n.resolutionRefreshRate,resolutionChangeRatioThreshold:n.transition,isVideo:n.isVideo,loop:n.loop,mute:n.mute}):i.warn("\nno attic container found on id: attic_page"),n.spinner&&$('.backstretch').addClass(n.spinner);var _=$('#attic_page').data('backstretch');n.pauseOnHover&&$('#attic_id').hover(function(){$('#attic_page').backstretch('pause')},function(){$('#attic_page').backstretch('resume')}),$(e).on('backstretch.before',function(e,i,n){var o=a.atticOptions;i.images[n].title,i.images[n].tagline;a.setState('backstretch_before'),n===_.images.length-1&&(0==o.circuit&&$('#attic_page').backstretch('pause'),$('.backstretch').removeClass(o.spinner)),$('.backstretch').css('filter',d),$('.textOverlay').css('opacity','0'),$('.attic-caption').css('opacity','0'),$('.particles-js-canvas-el').length>0&&t.adapter.particles.init()}),$(e).on('backstretch.after',function(t,e,n){var o,d=e.images[n].title,l=e.images[n].tagline,s=a.atticOptions,r=a.frontmatterOptions;if(0==n&&('undefined'==typeof e.images[n].title&&(d=r.title),'undefined'==typeof e.images[n].tagline&&(l=r.tagline)),'undefined'!=typeof e.images[n].badge)var _=e.images[n].badge.type,c=e.images[n].badge.author,g=e.images[n].badge.href;if(a.setState('backstretch_after'),'undefined'!=typeof e.images[n].caption){var m=e.images[n].caption.text,u=e.images[n].caption.href;u?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+u+'" target="_blank">'+m+'</a>').show():$('.attic-caption').text(m).show()}else if('undefined'!=typeof e.images[n].badge&&'unsplash'===_){var f="<div class=\"attic__badge animate__animated animate__fadeIn animate__slower\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+g+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(f).hide()}o="<div id=\"head-title\" class=\"head-title animate__animated \">  <h2 id=\"head-title-text\" class=\"notoc text-"+s.title_align+' text-emphasis-stronger">'+d+"</h2></div><div id=\"head-tagline\" class=\"head-tagline animate__animated \">  <h3 id=\"head-tagline-text\" class=\"notoc text-"+s.tagline_align+'">'+l+"</h3></div>",$('.textOverlay').html(o).hide();var h=p.title_animate?p.title_animate:s.title_animate,b=p.title_animate_delay?p.title_animate_delay:s.title_animate_delay,y=p.title_animate_duration?p.title_animate_duration:s.title_animate_duration;$('#head-title').addClass(h),$('#head-title').addClass(b),$('#head-title').addClass(y);var v=p.tagline_animate?p.tagline_animate:s.tagline_animate,k=p.tagline_animate_delay?p.tagline_animate_delay:s.tagline_animate_delay,x=p.tagline_animate_duration?p.tagline_animate_duration:s.tagline_animate_duration;$('#head-tagline').addClass(v),$('#head-tagline').addClass(k),$('#head-tagline').addClass(x),$('.textOverlay').show(),$('.textOverlay').css('opacity','1'),'undefined'!=typeof e.images[n].badge&&($('.attic-caption').show(),$('.attic-caption').css('opacity','1')),$('#no_flicker').css('display','block'),$('#attic_page').backstretch('resize'),a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\ninitialize attic on id attic_page: finished"),i.info("\nmodule initializaton: finished")})}function s(n){var l={},s={},r={},p=$.extend({},{enabled:!0,id:"attic_post",layout:["collection","post"],title_animate:"animate__fadeInDown",padding_top:600});l=n.filters,r=$.extend(!0,{},l,s),o=[],$.each(r,function(t,e){var a=t+'('+e+')';o.push(a)}),d=o.join(' '),$('#attic_post').length?$('#attic_post').backstretch(n.slides,{debug:n.debug,spinner:n.spinner,alignX:n.alignX,alignY:n.alignY,scale:n.scale,transition:n.transition,transitionDuration:n.transitionDuration,animateFirst:n.animateFirst,duration:n.duration,paused:n.paused,start:n.start,preload:n.preload,preloadSize:n.preloadSize,bypassCss:n.bypassCss,alwaysTestWindowResolution:n.alwaysTestWindowResolution,resolutionRefreshRate:n.resolutionRefreshRate,resolutionChangeRatioThreshold:n.transition,isVideo:n.isVideo,loop:n.loop,mute:n.mute}):i.warn("\nno attic container found on id: attic_post"),n.spinner&&$('.backstretch').addClass(n.spinner);var _=$('#attic_post').data('backstretch');n.pauseOnHover&&$('#attic_id').hover(function(){$('#attic_post').backstretch('pause')},function(){$('#attic_post').backstretch('resume')}),$(e).on('backstretch.before',function(e,i,n){var o=a.atticOptions;i.images[n].title,i.images[n].tagline;a.setState('backstretch_before'),n===_.images.length-1&&(0==o.circuit&&$('#attic_post').backstretch('pause'),$('.backstretch').removeClass(o.spinner)),$('.backstretch').css('filter',d),$('.textOverlay').css('opacity','0'),$('.attic-caption').css('opacity','0'),$('.particles-js-canvas-el').length>0&&t.adapter.particles.init()}),$(e).on('backstretch.after',function(t,e,n){var o,d=e.images[n].title,l=e.images[n].tagline,s=a.atticOptions,r=a.frontmatterOptions;if(0==n&&('undefined'==typeof e.images[n].title&&(d=r.title),'undefined'==typeof e.images[n].tagline&&(l=r.tagline)),'undefined'!=typeof e.images[n].badge)var _=e.images[n].badge.type,c=e.images[n].badge.author,g=e.images[n].badge.href;if(a.setState('backstretch_after'),'undefined'!=typeof e.images[n].caption){var m=e.images[n].caption.text,u=e.images[n].caption.href;u?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+u+'" target="_blank">'+m+'</a>').show():$('.attic-caption').text(m).show()}else if('undefined'!=typeof e.images[n].badge&&'unsplash'===_){var f="<div class=\"attic__badge animate__animated animate__fadeIn animate__slower\"> <a class=\"attic__badge_unsplash link-no-decoration\"  href=\""+g+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(f).hide()}o="<div id=\"head-title\" class=\"head-title animate__animated \">  <h2 id=\"head-title-text\" class=\"notoc text-"+s.title_align+' text-emphasis-stronger">'+d+"</h2></div><div id=\"head-tagline\" class=\"head-tagline animate__animated \">  <h3 id=\"head-tagline-text\" class=\"notoc text-"+s.tagline_align+'">'+l+"</h3></div>",$('.textOverlay').html(o).hide();var h=p.title_animate?p.title_animate:s.title_animate,b=p.title_animate_delay?p.title_animate_delay:s.title_animate_delay,y=p.title_animate_duration?p.title_animate_duration:s.title_animate_duration;$('#head-title').addClass(h),$('#head-title').addClass(b),$('#head-title').addClass(y);var v=p.tagline_animate?p.tagline_animate:s.tagline_animate,k=p.tagline_animate_delay?p.tagline_animate_delay:s.tagline_animate_delay,x=p.tagline_animate_duration?p.tagline_animate_duration:s.tagline_animate_duration;$('#head-tagline').addClass(v),$('#head-tagline').addClass(k),$('#head-tagline').addClass(x),$('.textOverlay').show(),$('.textOverlay').css('opacity','1'),'undefined'!=typeof e.images[n].badge&&($('.attic-caption').show(),$('.attic-caption').css('opacity','1')),$('#no_flicker').css('display','block'),$('#attic_post').backstretch('resize'),a.setState('finished'),i.debug("\nstate: "+a.getState()),i.info("\ninitialize attic on id attic_post: finished"),i.info("\nmodule initializaton: finished")})}var r=a.frontmatterOptions,p=$.extend(!0,{},a.atticOptions,a.frontmatterOptions);if($('#attic_home').length){var _={padding_top:600},c={};p=$.extend({},p,_,c),r.background_color_1&&(p.background_color_1=r.background_color_1),r.background_color_2&&(p.background_color_2=r.background_color_2),r&&('undefined'!=typeof r.raised_level&&(p.raised_level=r.raised_level),'undefined'!=typeof r.r_text&&(p.r_text=r.r_text),'undefined'!=typeof r.text_emphasis&&(p.text_emphasis=r.text_emphasis),'undefined'!=typeof r.padding_top&&(p.padding_top=r.padding_top),'undefined'!=typeof r.padding_bottom&&(p.padding_bottom=r.padding_bottom),'undefined'!=typeof r.margin_bottom&&(p.margin_bottom=r.margin_bottom),'undefined'!=typeof r.title&&('undefined'!=typeof r.title.color&&(p.title_color=r.title.color),'undefined'!=typeof r.title.size&&(p.title_size=r.title.size),'undefined'!=typeof r.title.animate&&(p.title_animate=r.title.animate),'undefined'!=typeof r.title.align&&(p.title_align=r.title.align)),'undefined'!=typeof r.tagline&&('undefined'!=typeof r.tagline.color&&(p.tagline_color=r.tagline.color),'undefined'!=typeof r.tagline.size&&(p.tagline_size=r.tagline.size),'undefined'!=typeof r.tagline.animate&&(p.tagline_animate=r.tagline.animate),'undefined'!=typeof r.tagline.align&&(p.tagline_align=r.tagline.align)),'undefined'!=typeof r.spinner&&(p.spinner=r.spinner),'undefined'!=typeof r.opacity&&(p.opacity=r.opacity),'undefined'!=typeof r.alignX&&(p.alignX=r.alignX),'undefined'!=typeof r.alignY&&(p.alignY=r.alignY),'undefined'!=typeof r.scale&&(p.scale=r.scale),'undefined'!=typeof r.start&&(p.start=r.start),'undefined'!=typeof r.animateFirst&&(p.animateFirst=r.animateFirst),'undefined'!=typeof r.preload&&(p.preload=r.preload),'undefined'!=typeof r.preloadSize&&(p.preloadSize=r.preloadSize),'undefined'!=typeof r.mute&&(p.mute=r.mute),'undefined'!=typeof r.bypassCss&&(p.bypassCss=r.bypassCss),'undefined'!=typeof r.isVideo&&(p.isVideo=r.isVideo),'undefined'!=typeof r.loop&&(p.loop=r.loop),'undefined'!=typeof r.paused&&(p.paused=r.paused),'undefined'!=typeof r.transition&&(p.transition=r.transition),'undefined'!=typeof r.duration&&(p.duration=r.duration),'undefined'!=typeof r.transitionDuration&&(p.transitionDuration=r.transitionDuration),'undefined'!=typeof r.slides&&(p.slides=r.slides)),'enabled'==p.r_text&&$('#attic_home').addClass('r-text');var g='raised-z'+p.raised_level;$('#attic_home').addClass(g),$('#head-title').addClass(p.title_animate),$('#head-title').addClass(p.title_animate_delay),$('#head-title').addClass(p.title_animate_duration),$('#head-tagline').addClass(p.tagline_animate),$('#head-tagline').addClass(p.tagline_animate_duration);var m='text-emphasis-'+p.text_emphasis;$('#head-title-text').addClass(m),$('#head-tagline-text').addClass(m),p.notranslate&&$('#attic_home').addClass('notranslate');var u='';u+='<style> .attic { ',u+='background-image: -webkit-gradient(linear, left top, left bottom, from('+p.background_color_1+'), to('+p.background_color_2+')) !important;',u+='background-image: -webkit-linear-gradient(top, '+p.background_color_1+' 0%, '+p.background_color_2+' 100%) !important;',u+='background-image: -o-linear-gradient(top, '+p.background_color_1+' 0%, '+p.background_color_2+' 100%) !important;',u+='background-image: linear-gradient(to bottom, '+p.background_color_1+' 0%, '+p.background_color_2+' 100%) !important;',u+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+p.background_color_1+'", endColorstr="'+p.background_color_2+'", GradientType=0) !important;',u+='} </style>',$('head').append(u);var f=(v=$.extend({},{enabled:!0,id:"attic_home",layout:"home",title_animate:"animate__bounceInDown",title_animate_duration:"animate__fast",tagline_animate:"animate__fadeInRight",tagline_animate_duration:"animate__slow",padding_top:600})).padding_top?v.padding_top:p.padding_top,h=v.padding_bottom?v.padding_bottom:p.padding_bottom,b=v.margin_bottom?v.margin_bottom:p.margin_bottom;'undefined'!=typeof r.padding_top&&(f=r.padding_top),'undefined'!=typeof r.padding_bottom&&(h=r.padding_bottom),'undefined'!=typeof r.margin_bottom&&(b=r.margin_bottom),u='',u='<style> .attic { padding-top: '+f+'px; padding-bottom: '+h+'px; margin-bottom: '+b+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(u),$('head').append('<style> .attic .head-title h2 { color: '+p.title_color+';font-size: '+p.title_size+' !important; text-align: '+p.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+p.tagline_color+';font-size: '+p.tagline_size+' !important; text-align: '+p.tagline_align+'; } </style>');var y='<style> .backstretch-item { opacity: '+(v.opacity?v.opacity:p.opacity)+'; </style>';$('head').append(y),a.setState('initialized'),i.debug("\nstate: "+a.getState()),$(function(){var t=setInterval(function(){'initialized'===a.getState()&&(i.info("\ninitialize attic on id attic_home: started"),n(p),clearInterval(t))},10)})}if($('#attic_page').length){_={padding_top:600},c={};p=$.extend({},p,_,c),r.background_color_1&&(p.background_color_1=r.background_color_1),r.background_color_2&&(p.background_color_2=r.background_color_2),r&&('undefined'!=typeof r.raised_level&&(p.raised_level=r.raised_level),'undefined'!=typeof r.r_text&&(p.r_text=r.r_text),'undefined'!=typeof r.text_emphasis&&(p.text_emphasis=r.text_emphasis),'undefined'!=typeof r.padding_top&&(p.padding_top=r.padding_top),'undefined'!=typeof r.padding_bottom&&(p.padding_bottom=r.padding_bottom),'undefined'!=typeof r.margin_bottom&&(p.margin_bottom=r.margin_bottom),'undefined'!=typeof r.title&&('undefined'!=typeof r.title.color&&(p.title_color=r.title.color),'undefined'!=typeof r.title.size&&(p.title_size=r.title.size),'undefined'!=typeof r.title.animate&&(p.title_animate=r.title.animate),'undefined'!=typeof r.title.align&&(p.title_align=r.title.align)),'undefined'!=typeof r.tagline&&('undefined'!=typeof r.tagline.color&&(p.tagline_color=r.tagline.color),'undefined'!=typeof r.tagline.size&&(p.tagline_size=r.tagline.size),'undefined'!=typeof r.tagline.animate&&(p.tagline_animate=r.tagline.animate),'undefined'!=typeof r.tagline.align&&(p.tagline_align=r.tagline.align)),'undefined'!=typeof r.spinner&&(p.spinner=r.spinner),'undefined'!=typeof r.opacity&&(p.opacity=r.opacity),'undefined'!=typeof r.alignX&&(p.alignX=r.alignX),'undefined'!=typeof r.alignY&&(p.alignY=r.alignY),'undefined'!=typeof r.scale&&(p.scale=r.scale),'undefined'!=typeof r.start&&(p.start=r.start),'undefined'!=typeof r.animateFirst&&(p.animateFirst=r.animateFirst),'undefined'!=typeof r.preload&&(p.preload=r.preload),'undefined'!=typeof r.preloadSize&&(p.preloadSize=r.preloadSize),'undefined'!=typeof r.mute&&(p.mute=r.mute),'undefined'!=typeof r.bypassCss&&(p.bypassCss=r.bypassCss),'undefined'!=typeof r.isVideo&&(p.isVideo=r.isVideo),'undefined'!=typeof r.loop&&(p.loop=r.loop),'undefined'!=typeof r.paused&&(p.paused=r.paused),'undefined'!=typeof r.transition&&(p.transition=r.transition),'undefined'!=typeof r.duration&&(p.duration=r.duration),'undefined'!=typeof r.transitionDuration&&(p.transitionDuration=r.transitionDuration),'undefined'!=typeof r.slides&&(p.slides=r.slides)),'enabled'==p.r_text&&$('#attic_page').addClass('r-text');g='raised-z'+p.raised_level;$('#attic_page').addClass(g),$('#head-title').addClass(p.title_animate),$('#head-title').addClass(p.title_animate_delay),$('#head-title').addClass(p.title_animate_duration),$('#head-tagline').addClass(p.tagline_animate),$('#head-tagline').addClass(p.tagline_animate_duration);m='text-emphasis-'+p.text_emphasis;$('#head-title-text').addClass(m),$('#head-tagline-text').addClass(m),p.notranslate&&$('#attic_page').addClass('notranslate');u='';u+='<style> .attic { ',u+='background-image: -webkit-gradient(linear, left top, left bottom, from('+p.background_color_1+'), to('+p.background_color_2+')) !important;',u+='background-image: -webkit-linear-gradient(top, '+p.background_color_1+' 0%, '+p.background_color_2+' 100%) !important;',u+='background-image: -o-linear-gradient(top, '+p.background_color_1+' 0%, '+p.background_color_2+' 100%) !important;',u+='background-image: linear-gradient(to bottom, '+p.background_color_1+' 0%, '+p.background_color_2+' 100%) !important;',u+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+p.background_color_1+'", endColorstr="'+p.background_color_2+'", GradientType=0) !important;',u+='} </style>',$('head').append(u);f=(v=$.extend({},{enabled:!0,id:"attic_page",layout:"page",padding_top:600})).padding_top?v.padding_top:p.padding_top,h=v.padding_bottom?v.padding_bottom:p.padding_bottom,b=v.margin_bottom?v.margin_bottom:p.margin_bottom;'undefined'!=typeof r.padding_top&&(f=r.padding_top),'undefined'!=typeof r.padding_bottom&&(h=r.padding_bottom),'undefined'!=typeof r.margin_bottom&&(b=r.margin_bottom),u='',u='<style> .attic { padding-top: '+f+'px; padding-bottom: '+h+'px; margin-bottom: '+b+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(u),$('head').append('<style> .attic .head-title h2 { color: '+p.title_color+';font-size: '+p.title_size+' !important; text-align: '+p.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+p.tagline_color+';font-size: '+p.tagline_size+' !important; text-align: '+p.tagline_align+'; } </style>');y='<style> .backstretch-item { opacity: '+(v.opacity?v.opacity:p.opacity)+'; </style>';$('head').append(y),a.setState('initialized'),i.debug("\nstate: "+a.getState()),$(function(){var t=setInterval(function(){'initialized'===a.getState()&&(i.info("\ninitialize attic on id attic_page: started"),l(p),clearInterval(t))},10)})}if($('#attic_post').length){_={padding_top:600},c={};p=$.extend({},p,_,c),r.background_color_1&&(p.background_color_1=r.background_color_1),r.background_color_2&&(p.background_color_2=r.background_color_2),r&&('undefined'!=typeof r.raised_level&&(p.raised_level=r.raised_level),'undefined'!=typeof r.r_text&&(p.r_text=r.r_text),'undefined'!=typeof r.text_emphasis&&(p.text_emphasis=r.text_emphasis),'undefined'!=typeof r.padding_top&&(p.padding_top=r.padding_top),'undefined'!=typeof r.padding_bottom&&(p.padding_bottom=r.padding_bottom),'undefined'!=typeof r.margin_bottom&&(p.margin_bottom=r.margin_bottom),'undefined'!=typeof r.title&&('undefined'!=typeof r.title.color&&(p.title_color=r.title.color),'undefined'!=typeof r.title.size&&(p.title_size=r.title.size),'undefined'!=typeof r.title.animate&&(p.title_animate=r.title.animate),'undefined'!=typeof r.title.align&&(p.title_align=r.title.align)),'undefined'!=typeof r.tagline&&('undefined'!=typeof r.tagline.color&&(p.tagline_color=r.tagline.color),'undefined'!=typeof r.tagline.size&&(p.tagline_size=r.tagline.size),'undefined'!=typeof r.tagline.animate&&(p.tagline_animate=r.tagline.animate),'undefined'!=typeof r.tagline.align&&(p.tagline_align=r.tagline.align)),'undefined'!=typeof r.spinner&&(p.spinner=r.spinner),'undefined'!=typeof r.opacity&&(p.opacity=r.opacity),'undefined'!=typeof r.alignX&&(p.alignX=r.alignX),'undefined'!=typeof r.alignY&&(p.alignY=r.alignY),'undefined'!=typeof r.scale&&(p.scale=r.scale),'undefined'!=typeof r.start&&(p.start=r.start),'undefined'!=typeof r.animateFirst&&(p.animateFirst=r.animateFirst),'undefined'!=typeof r.preload&&(p.preload=r.preload),'undefined'!=typeof r.preloadSize&&(p.preloadSize=r.preloadSize),'undefined'!=typeof r.mute&&(p.mute=r.mute),'undefined'!=typeof r.bypassCss&&(p.bypassCss=r.bypassCss),'undefined'!=typeof r.isVideo&&(p.isVideo=r.isVideo),'undefined'!=typeof r.loop&&(p.loop=r.loop),'undefined'!=typeof r.paused&&(p.paused=r.paused),'undefined'!=typeof r.transition&&(p.transition=r.transition),'undefined'!=typeof r.duration&&(p.duration=r.duration),'undefined'!=typeof r.transitionDuration&&(p.transitionDuration=r.transitionDuration),'undefined'!=typeof r.slides&&(p.slides=r.slides)),'enabled'==p.r_text&&$('#attic_post').addClass('r-text');g='raised-z'+p.raised_level;$('#attic_post').addClass(g),$('#head-title').addClass(p.title_animate),$('#head-title').addClass(p.title_animate_delay),$('#head-title').addClass(p.title_animate_duration),$('#head-tagline').addClass(p.tagline_animate),$('#head-tagline').addClass(p.tagline_animate_duration);m='text-emphasis-'+p.text_emphasis;$('#head-title-text').addClass(m),$('#head-tagline-text').addClass(m),p.notranslate&&$('#attic_post').addClass('notranslate');u='';u+='<style> .attic { ',u+='background-image: -webkit-gradient(linear, left top, left bottom, from('+p.background_color_1+'), to('+p.background_color_2+')) !important;',u+='background-image: -webkit-linear-gradient(top, '+p.background_color_1+' 0%, '+p.background_color_2+' 100%) !important;',u+='background-image: -o-linear-gradient(top, '+p.background_color_1+' 0%, '+p.background_color_2+' 100%) !important;',u+='background-image: linear-gradient(to bottom, '+p.background_color_1+' 0%, '+p.background_color_2+' 100%) !important;',u+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+p.background_color_1+'", endColorstr="'+p.background_color_2+'", GradientType=0) !important;',u+='} </style>',$('head').append(u);var v;f=(v=$.extend({},{enabled:!0,id:"attic_post",layout:["collection","post"],title_animate:"animate__fadeInDown",padding_top:600})).padding_top?v.padding_top:p.padding_top,h=v.padding_bottom?v.padding_bottom:p.padding_bottom,b=v.margin_bottom?v.margin_bottom:p.margin_bottom;'undefined'!=typeof r.padding_top&&(f=r.padding_top),'undefined'!=typeof r.padding_bottom&&(h=r.padding_bottom),'undefined'!=typeof r.margin_bottom&&(b=r.margin_bottom),u='',u='<style> .attic { padding-top: '+f+'px; padding-bottom: '+h+'px; margin-bottom: '+b+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(u),$('head').append('<style> .attic .head-title h2 { color: '+p.title_color+';font-size: '+p.title_size+' !important; text-align: '+p.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+p.tagline_color+';font-size: '+p.tagline_size+' !important; text-align: '+p.tagline_align+'; } </style>');y='<style> .backstretch-item { opacity: '+(v.opacity?v.opacity:p.opacity)+'; </style>';$('head').append(y),a.setState('initialized'),i.debug("\nstate: "+a.getState()),$(function(){var t=setInterval(function(){'initialized'===a.getState()&&(i.info("\ninitialize attic on id attic_post: started"),s(p),clearInterval(t))},10)})}return!0},messageHandler:function(t,e){var a=JSON.stringify(e,undefined,2);return n="\nreceived message from "+t+': '+a,i.debug(n),'command'===e.type&&'module_initialized'===e.action&&(status='completed',i.info('\n'+e.text)),!0},setState:function(t){a.state=t},getState:function(){return a.state}}}(j1,window);


