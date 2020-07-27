

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/attic.js
 # JS Adapter for J1 Master Header
 #
 # Product/Info:
 # https://jekyll.one
 # http://www.jquery-backstretch.com/
 #
 # Copyright (C) 2020 Juergen Adams
 # Copyright (C) 2012 Scott Robbin
 #
 # J1 Template is licensed under the MIT License.
 # For details, see https://jekyll.one
 # Backstretch is licensed under the MIT License.
 # For details, see https://github.com/jquery-backstretch/jquery-backstretch
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2020-07-27 01:53:35 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.attic=function(e,t){var a,i,o;return{init:function(t){a=e.adapter.attic,i=log4javascript.getLogger('j1.adapter.attic'),a.state='pending';var o=null!=t?$.extend({},t):{};a.frontmatterOptions=o,a.setState('started'),i.info('state: '+a.getState()),i.info('module is being initialized'),a.loadHeader(o)},loadHeader:function(){function n(e){$('#home_attic').length&&$('#home_attic').backstretch(e.slides,{debug:e.debug,spinner:e.spinner,alignX:e.alignX,alignY:e.alignY,scale:e.scale,transition:e.transition,transitionDuration:e.transitionDuration,animateFirst:e.animateFirst,duration:e.duration,paused:e.paused,start:e.start,preload:e.preload,preloadSize:e.preloadSize,bypassCss:e.bypassCss,alwaysTestWindowResolution:e.alwaysTestWindowResolution,resolutionRefreshRate:e.resolutionRefreshRate,resolutionChangeRatioThreshold:e.transition,isVideo:e.isVideo,loop:e.loop,mute:e.mute}),e.spinner&&$('.backstretch').addClass(e.spinner);var n=$('#home_attic').data('backstretch');$(t).on('backstretch.before',function(){a.setState('backstretch_before'),i.debug('state: '+a.getState())}),$(t).on('backstretch.after',function(t,n,l){if(o='add caption text',a.setState('backstretch_after'),i.debug('state: '+status),i.debug(o),'undefined'!=typeof e.slides[l].caption){var d=e.slides[l].caption.text,r=e.slides[l].caption.href;r?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+r+'" target="_blank">'+d+'</a>').show():$('.attic-caption').text(d).show()}else if('undefined'!=typeof e.slides[l].badge){var s=e.slides[l].badge.type,c=e.slides[l].badge.author,g=e.slides[l].badge.href;if('unsplash'===s){var p="<div class=\"attic__badge\"> <a class=\"attic__badge_unsplash\"  href=\""+g+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <title>search unsplash</title>      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(p).show()}}a.setState('finished'),i.info('state: '+a.getState()),i.info('module initialized successfully')}),$(t).on('backstretch.before',function(t,o,l){a.setState('backstretch_before_image_once'),i.debug('state: '+a.getState()),l===n.images.length-1&&($('#home_attic').backstretch('pause'),$('.backstretch').removeClass(e.spinner))})}function l(e){$('#image_attic').length&&$('#image_attic').backstretch(e.slides,{debug:e.debug,spinner:e.spinner,alignX:e.alignX,alignY:e.alignY,scale:e.scale,transition:e.transition,transitionDuration:e.transitionDuration,animateFirst:e.animateFirst,duration:e.duration,paused:e.paused,start:e.start,preload:e.preload,preloadSize:e.preloadSize,bypassCss:e.bypassCss,alwaysTestWindowResolution:e.alwaysTestWindowResolution,resolutionRefreshRate:e.resolutionRefreshRate,resolutionChangeRatioThreshold:e.transition,isVideo:e.isVideo,loop:e.loop,mute:e.mute}),e.spinner&&$('.backstretch').addClass(e.spinner);var n=$('#image_attic').data('backstretch');$(t).on('backstretch.before',function(){a.setState('backstretch_before'),i.debug('state: '+a.getState())}),$(t).on('backstretch.after',function(t,n,l){if(o='add caption text',a.setState('backstretch_after'),i.debug('state: '+status),i.debug(o),'undefined'!=typeof e.slides[l].caption){var d=e.slides[l].caption.text,r=e.slides[l].caption.href;r?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+r+'" target="_blank">'+d+'</a>').show():$('.attic-caption').text(d).show()}else if('undefined'!=typeof e.slides[l].badge){var s=e.slides[l].badge.type,c=e.slides[l].badge.author,g=e.slides[l].badge.href;if('unsplash'===s){var p="<div class=\"attic__badge\"> <a class=\"attic__badge_unsplash\"  href=\""+g+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <title>search unsplash</title>      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(p).show()}}a.setState('finished'),i.info('state: '+a.getState()),i.info('module initialized successfully')}),$(t).on('backstretch.before',function(t,o,l){a.setState('backstretch_before_image_once'),i.debug('state: '+a.getState()),l===n.images.length-1&&($('#image_attic').backstretch('pause'),$('.backstretch').removeClass(e.spinner))})}function d(e){$('#text_attic').length&&$('#text_attic').backstretch(e.slides,{debug:e.debug,spinner:e.spinner,alignX:e.alignX,alignY:e.alignY,scale:e.scale,transition:e.transition,transitionDuration:e.transitionDuration,animateFirst:e.animateFirst,duration:e.duration,paused:e.paused,start:e.start,preload:e.preload,preloadSize:e.preloadSize,bypassCss:e.bypassCss,alwaysTestWindowResolution:e.alwaysTestWindowResolution,resolutionRefreshRate:e.resolutionRefreshRate,resolutionChangeRatioThreshold:e.transition,isVideo:e.isVideo,loop:e.loop,mute:e.mute}),e.spinner&&$('.backstretch').addClass(e.spinner);var n=$('#text_attic').data('backstretch');$(t).on('backstretch.before',function(){a.setState('backstretch_before'),i.debug('state: '+a.getState())}),$(t).on('backstretch.after',function(t,n,l){if(o='add caption text',a.setState('backstretch_after'),i.debug('state: '+status),i.debug(o),'undefined'!=typeof e.slides[l].caption){var d=e.slides[l].caption.text,r=e.slides[l].caption.href;r?$('.attic-caption').html('<a class="j1-masthead-caption-anchor" href="'+r+'" target="_blank">'+d+'</a>').show():$('.attic-caption').text(d).show()}else if('undefined'!=typeof e.slides[l].badge){var s=e.slides[l].badge.type,c=e.slides[l].badge.author,g=e.slides[l].badge.href;if('unsplash'===s){var p="<div class=\"attic__badge\"> <a class=\"attic__badge_unsplash\"  href=\""+g+"?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge\"  target=\"_blank\"  rel=\"noopener noreferrer\"  title=\"Free high-resolution photos from "+c+"\">  <span class=\"attic__badge_unsplash_icon\">    <svg xmlns=\"http://www.w3.org/2000/svg\"\t   class=\"attic__badge_unsplash_icon-size\"      viewBox=\"0 0 32 32\">      <title>search unsplash</title>      <path d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"></path>    </svg>  </span>  <span class=\"attic__badge_unsplash_text\">"+c+"</span> </a></div>";$('.attic-caption').html(p).show()}}a.setState('finished'),i.info('state: '+a.getState()),i.info('module initialized successfully')}),$(t).on('backstretch.before',function(t,o,l){a.setState('backstretch_before_image_once'),i.debug('state: '+a.getState()),l===n.images.length-1&&($('#text_attic').backstretch('pause'),$('.backstretch').removeClass(e.spinner))})}var r=a.frontmatterOptions;if($('#home_attic').length){var s={raised_level:0,padding_top:300,margin_bottom:0,title_align:"center",tagline_align:"center"},s={},c=$.extend({},{debug:!1,icon_family:"MDI",icon_color:"#9E9E9E",icon_size:"default",raised_level:0,r_text:"enabled",text_emphasis:"stronger",padding_top:200,padding_bottom:50,margin_bottom:50,title_size:"3em",title_color:"rgba(255, 255, 255, 0.8)",title_animate:"fadeInLeft",title_align:"left",tagline_size:"1.5em",tagline_color:"rgba(255, 255, 255, 0.8)",tagline_animate:"fadeInRight",tagline_align:"left",background_color_1:"#546E7A",background_color_2:"#78909C",action_enabled:!1,action_url:"#",action_button:"btn-default btn-raised",action_icon:"download",action_icon_family:"MDI",action_text:"Download Now",logo_enabled:!1,logo_url:"/assets/images/modules/icons/j1/j1-512x512.png",logo_alt:"Jekyll-One-Template",logo_height:196,logo_animate:"slideInDown",spinner:!1,caption:"",caption_href:"",caption_color:"rgba_lighten",opacity:1,alignX:.5,alignY:.5,scale:"cover",transition:"fadeInOut",duration:5e3,transitionDuration:"normal",animateFirst:!0,start:0,paused:!1,preload:2,preloadSize:1,bypassCss:!1,alwaysTestWindowResolution:!1,resolutionRefreshRate:2500,resolutionChangeRatioThreshold:.1,isVideo:!1,loop:!1,mute:!1,attics:[{name:"Home attic",attic:{enabled:!0,id:"home_attic",layout:"home",raised_level:0,padding_top:300,margin_bottom:0,title:{align:"center"},tagline:{align:"center"}}},{name:"Image attic",attic:{enabled:!0,id:"image_attic",layout:["page","post"],raised_level:0,text_emphasis:"strong",title:{color:"rgba(255, 255, 255, 0.8)"},tagline:{color:"rgba(255, 255, 255, 0.8)"},image_attic:{duration:3e3,transitionDuration:2500,animateFirst:!1,slides:[{url:"/assets/images/modules/attics/pagehead-default-1200.webp",alt:"Image attic - Default image for Layout PAGE",caption:"Caption for the header image with a link",caption_href:"#",caption_color:"rgba(255, 255, 255, 0.8)"}]}}},{name:"Text attic",attic:{enabled:!0,id:"text_attic",layout:["collection","app","raw","blog_archive"],raised_level:0}}],headers:[{name:"Home attic",header:{enabled:!0,id:"home_attic",layout:"home",raised_level:0,padding_top:300,margin_bottom:0,title:{align:"center"},tagline:{align:"center"}}},{name:"Image attic",header:{enabled:!0,id:"image_attic",layout:["page","post"],raised_level:0,text_emphasis:"strong",title:{color:"rgba_lighten_800"},tagline:{color:"rgba_lighten_800"}}},{name:"Text attic",header:{enabled:!0,id:"text_attic",layout:["collection","app","raw","blog_archive"],raised_level:0}}]}),s=e.mergeData(s,c);r&&('undefined'!=typeof r.raised_level&&(s.raised_level=r.raised_level),'undefined'!=typeof r.r_text&&(s.r_text=r.r_text),'undefined'!=typeof r.text_emphasis&&(s.text_emphasis=r.text_emphasis),'undefined'!=typeof r.padding_top&&(s.padding_top=r.padding_top),'undefined'!=typeof r.padding_bottom&&(s.padding_bottom=r.padding_bottom),'undefined'!=typeof r.margin_bottom&&(s.margin_bottom=r.margin_bottom),'undefined'!=typeof r.title&&('undefined'!=typeof r.title.color&&(s.title_color=r.title.color),'undefined'!=typeof r.title.size&&(s.title_size=r.title.size),'undefined'!=typeof r.title.animate&&(s.title_animate=r.title.animate),'undefined'!=typeof r.title.align&&(s.title_align=r.title.align)),'undefined'!=typeof r.tagline&&('undefined'!=typeof r.tagline.color&&(s.tagline_color=r.tagline.color),'undefined'!=typeof r.tagline.size&&(s.tagline_size=r.tagline.size),'undefined'!=typeof r.tagline.animate&&(s.tagline_animate=r.tagline.animate),'undefined'!=typeof r.tagline.align&&(s.tagline_align=r.tagline.align)),'undefined'!=typeof r.background_color&&('undefined'!=typeof r.background_color.color_1&&(s.background_color_1=r.background_color.color_1),'undefined'!=typeof r.background_color.color_2&&(s.background_color_2=r.background_color.color_1)),'undefined'!=typeof r.spinner&&(s.spinner=r.spinner),'undefined'!=typeof r.opacity&&(s.opacity=r.opacity),'undefined'!=typeof r.alignX&&(s.alignX=r.alignX),'undefined'!=typeof r.alignY&&(s.alignY=r.alignY),'undefined'!=typeof r.scale&&(s.scale=r.scale),'undefined'!=typeof r.start&&(s.start=r.start),'undefined'!=typeof r.animateFirst&&(s.animateFirst=r.animateFirst),'undefined'!=typeof r.preload&&(s.preload=r.preload),'undefined'!=typeof r.preloadSize&&(s.preloadSize=r.preloadSize),'undefined'!=typeof r.mute&&(s.mute=r.mute),'undefined'!=typeof r.bypassCss&&(s.bypassCss=r.bypassCss),'undefined'!=typeof r.isVideo&&(s.isVideo=r.isVideo),'undefined'!=typeof r.loop&&(s.loop=r.loop),'undefined'!=typeof r.paused&&(s.paused=r.paused),'undefined'!=typeof r.transition&&(s.transition=r.transition),'undefined'!=typeof r.duration&&(s.duration=r.duration),'undefined'!=typeof r.transitionDuration&&(s.transitionDuration=r.transitionDuration),'undefined'!=typeof r.slides&&(s.slides=r.slides)),s.title_color=s.title_color,s.tagline_color=s.tagline_color,s.background_color_1=s.background_color_1,s.background_color_2=s.background_color_2,s.title_size=s.title_size,s.tagline_size=s.tagline_size,'enabled'==s.r_text&&$('#home_attic').addClass('r-text');var g='raised-z'+s.raised_level;$('#home_attic').addClass(g),$('#head-title').addClass(s.title_animate),$('#head-tagline').addClass(s.tagline_animate);var p='text-emphasis-'+s.text_emphasis;$('#head-title-text').addClass(p),$('#head-tagline-text').addClass(p);var _='';_+='<style> .attic { ',_+='background-image: -webkit-gradient(linear, left top, left bottom, from('+s.background_color_1+'), to('+s.background_color_2+')) !important;',_+='background-image: -webkit-linear-gradient(top, '+s.background_color_1+' 0%, '+s.background_color_2+' 100%) !important;',_+='background-image: -o-linear-gradient(top, '+s.background_color_1+' 0%, '+s.background_color_2+' 100%) !important;',_+='background-image: linear-gradient(to bottom, '+s.background_color_1+' 0%, '+s.background_color_2+' 100%) !important;',_+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+s.background_color_1+'", endColorstr="'+s.background_color_2+'", GradientType=0) !important;',_+='} </style>',$('head').append(_),_='',_='<style> .attic { padding-top: '+s.padding_top+'px; padding-bottom: '+s.padding_bottom+'px; margin-bottom: '+s.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(_),$('head').append('<style> .attic .head-title h2 { color: '+s.title_color+';font-size: '+s.title_size+' !important; text-align: '+s.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+s.tagline_color+';font-size: '+s.tagline_size+' !important; text-align: '+s.tagline_align+'; } </style>');var u;u='<style> .backstretch-item { opacity: '+s.opacity+'; </style>',$('head').append(u),a.setState('initialized'),i.info('state: '+a.getState()),'undefined'!=typeof s.slides&&$(function(){i.debug('Load image header'),n(s),a.setState('completed'),i.info('state: '+a.getState())})}if($('#image_attic').length){var s={raised_level:0,text_emphasis:"strong",title_color:"rgba(255, 255, 255, 0.8)",tagline_color:"rgba(255, 255, 255, 0.8)"},s={},c=$.extend({},{debug:!1,icon_family:"MDI",icon_color:"#9E9E9E",icon_size:"default",raised_level:0,r_text:"enabled",text_emphasis:"stronger",padding_top:200,padding_bottom:50,margin_bottom:50,title_size:"3em",title_color:"rgba(255, 255, 255, 0.8)",title_animate:"fadeInLeft",title_align:"left",tagline_size:"1.5em",tagline_color:"rgba(255, 255, 255, 0.8)",tagline_animate:"fadeInRight",tagline_align:"left",background_color_1:"#546E7A",background_color_2:"#78909C",action_enabled:!1,action_url:"#",action_button:"btn-default btn-raised",action_icon:"download",action_icon_family:"MDI",action_text:"Download Now",logo_enabled:!1,logo_url:"/assets/images/modules/icons/j1/j1-512x512.png",logo_alt:"Jekyll-One-Template",logo_height:196,logo_animate:"slideInDown",spinner:!1,caption:"",caption_href:"",caption_color:"rgba_lighten",opacity:1,alignX:.5,alignY:.5,scale:"cover",transition:"fadeInOut",duration:5e3,transitionDuration:"normal",animateFirst:!0,start:0,paused:!1,preload:2,preloadSize:1,bypassCss:!1,alwaysTestWindowResolution:!1,resolutionRefreshRate:2500,resolutionChangeRatioThreshold:.1,isVideo:!1,loop:!1,mute:!1,attics:[{name:"Home attic",attic:{enabled:!0,id:"home_attic",layout:"home",raised_level:0,padding_top:300,margin_bottom:0,title:{align:"center"},tagline:{align:"center"}}},{name:"Image attic",attic:{enabled:!0,id:"image_attic",layout:["page","post"],raised_level:0,text_emphasis:"strong",title:{color:"rgba(255, 255, 255, 0.8)"},tagline:{color:"rgba(255, 255, 255, 0.8)"},image_attic:{duration:3e3,transitionDuration:2500,animateFirst:!1,slides:[{url:"/assets/images/modules/attics/pagehead-default-1200.webp",alt:"Image attic - Default image for Layout PAGE",caption:"Caption for the header image with a link",caption_href:"#",caption_color:"rgba(255, 255, 255, 0.8)"}]}}},{name:"Text attic",attic:{enabled:!0,id:"text_attic",layout:["collection","app","raw","blog_archive"],raised_level:0}}],headers:[{name:"Home attic",header:{enabled:!0,id:"home_attic",layout:"home",raised_level:0,padding_top:300,margin_bottom:0,title:{align:"center"},tagline:{align:"center"}}},{name:"Image attic",header:{enabled:!0,id:"image_attic",layout:["page","post"],raised_level:0,text_emphasis:"strong",title:{color:"rgba_lighten_800"},tagline:{color:"rgba_lighten_800"}}},{name:"Text attic",header:{enabled:!0,id:"text_attic",layout:["collection","app","raw","blog_archive"],raised_level:0}}]}),s=e.mergeData(s,c);r&&('undefined'!=typeof r.raised_level&&(s.raised_level=r.raised_level),'undefined'!=typeof r.r_text&&(s.r_text=r.r_text),'undefined'!=typeof r.text_emphasis&&(s.text_emphasis=r.text_emphasis),'undefined'!=typeof r.padding_top&&(s.padding_top=r.padding_top),'undefined'!=typeof r.padding_bottom&&(s.padding_bottom=r.padding_bottom),'undefined'!=typeof r.margin_bottom&&(s.margin_bottom=r.margin_bottom),'undefined'!=typeof r.title&&('undefined'!=typeof r.title.color&&(s.title_color=r.title.color),'undefined'!=typeof r.title.size&&(s.title_size=r.title.size),'undefined'!=typeof r.title.animate&&(s.title_animate=r.title.animate),'undefined'!=typeof r.title.align&&(s.title_align=r.title.align)),'undefined'!=typeof r.tagline&&('undefined'!=typeof r.tagline.color&&(s.tagline_color=r.tagline.color),'undefined'!=typeof r.tagline.size&&(s.tagline_size=r.tagline.size),'undefined'!=typeof r.tagline.animate&&(s.tagline_animate=r.tagline.animate),'undefined'!=typeof r.tagline.align&&(s.tagline_align=r.tagline.align)),'undefined'!=typeof r.background_color&&('undefined'!=typeof r.background_color.color_1&&(s.background_color_1=r.background_color.color_1),'undefined'!=typeof r.background_color.color_2&&(s.background_color_2=r.background_color.color_1)),'undefined'!=typeof r.spinner&&(s.spinner=r.spinner),'undefined'!=typeof r.opacity&&(s.opacity=r.opacity),'undefined'!=typeof r.alignX&&(s.alignX=r.alignX),'undefined'!=typeof r.alignY&&(s.alignY=r.alignY),'undefined'!=typeof r.scale&&(s.scale=r.scale),'undefined'!=typeof r.start&&(s.start=r.start),'undefined'!=typeof r.animateFirst&&(s.animateFirst=r.animateFirst),'undefined'!=typeof r.preload&&(s.preload=r.preload),'undefined'!=typeof r.preloadSize&&(s.preloadSize=r.preloadSize),'undefined'!=typeof r.mute&&(s.mute=r.mute),'undefined'!=typeof r.bypassCss&&(s.bypassCss=r.bypassCss),'undefined'!=typeof r.isVideo&&(s.isVideo=r.isVideo),'undefined'!=typeof r.loop&&(s.loop=r.loop),'undefined'!=typeof r.paused&&(s.paused=r.paused),'undefined'!=typeof r.transition&&(s.transition=r.transition),'undefined'!=typeof r.duration&&(s.duration=r.duration),'undefined'!=typeof r.transitionDuration&&(s.transitionDuration=r.transitionDuration),'undefined'!=typeof r.slides&&(s.slides=r.slides)),s.title_color=s.title_color,s.tagline_color=s.tagline_color,s.background_color_1=s.background_color_1,s.background_color_2=s.background_color_2,s.title_size=s.title_size,s.tagline_size=s.tagline_size,'enabled'==s.r_text&&$('#image_attic').addClass('r-text');var g='raised-z'+s.raised_level;$('#image_attic').addClass(g),$('#head-title').addClass(s.title_animate),$('#head-tagline').addClass(s.tagline_animate);var p='text-emphasis-'+s.text_emphasis;$('#head-title-text').addClass(p),$('#head-tagline-text').addClass(p);var _='';_+='<style> .attic { ',_+='background-image: -webkit-gradient(linear, left top, left bottom, from('+s.background_color_1+'), to('+s.background_color_2+')) !important;',_+='background-image: -webkit-linear-gradient(top, '+s.background_color_1+' 0%, '+s.background_color_2+' 100%) !important;',_+='background-image: -o-linear-gradient(top, '+s.background_color_1+' 0%, '+s.background_color_2+' 100%) !important;',_+='background-image: linear-gradient(to bottom, '+s.background_color_1+' 0%, '+s.background_color_2+' 100%) !important;',_+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+s.background_color_1+'", endColorstr="'+s.background_color_2+'", GradientType=0) !important;',_+='} </style>',$('head').append(_),_='',_='<style> .attic { padding-top: '+s.padding_top+'px; padding-bottom: '+s.padding_bottom+'px; margin-bottom: '+s.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(_),$('head').append('<style> .attic .head-title h2 { color: '+s.title_color+';font-size: '+s.title_size+' !important; text-align: '+s.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+s.tagline_color+';font-size: '+s.tagline_size+' !important; text-align: '+s.tagline_align+'; } </style>');var u;u='<style> .backstretch-item { opacity: '+s.opacity+'; </style>',$('head').append(u),a.setState('initialized'),i.info('state: '+a.getState()),'undefined'!=typeof s.slides&&$(function(){i.debug('Load image header'),l(s),a.setState('completed'),i.info('state: '+a.getState())})}if($('#text_attic').length){var s={raised_level:0},s={},c=$.extend({},{debug:!1,icon_family:"MDI",icon_color:"#9E9E9E",icon_size:"default",raised_level:0,r_text:"enabled",text_emphasis:"stronger",padding_top:200,padding_bottom:50,margin_bottom:50,title_size:"3em",title_color:"rgba(255, 255, 255, 0.8)",title_animate:"fadeInLeft",title_align:"left",tagline_size:"1.5em",tagline_color:"rgba(255, 255, 255, 0.8)",tagline_animate:"fadeInRight",tagline_align:"left",background_color_1:"#546E7A",background_color_2:"#78909C",action_enabled:!1,action_url:"#",action_button:"btn-default btn-raised",action_icon:"download",action_icon_family:"MDI",action_text:"Download Now",logo_enabled:!1,logo_url:"/assets/images/modules/icons/j1/j1-512x512.png",logo_alt:"Jekyll-One-Template",logo_height:196,logo_animate:"slideInDown",spinner:!1,caption:"",caption_href:"",caption_color:"rgba_lighten",opacity:1,alignX:.5,alignY:.5,scale:"cover",transition:"fadeInOut",duration:5e3,transitionDuration:"normal",animateFirst:!0,start:0,paused:!1,preload:2,preloadSize:1,bypassCss:!1,alwaysTestWindowResolution:!1,resolutionRefreshRate:2500,resolutionChangeRatioThreshold:.1,isVideo:!1,loop:!1,mute:!1,attics:[{name:"Home attic",attic:{enabled:!0,id:"home_attic",layout:"home",raised_level:0,padding_top:300,margin_bottom:0,title:{align:"center"},tagline:{align:"center"}}},{name:"Image attic",attic:{enabled:!0,id:"image_attic",layout:["page","post"],raised_level:0,text_emphasis:"strong",title:{color:"rgba(255, 255, 255, 0.8)"},tagline:{color:"rgba(255, 255, 255, 0.8)"},image_attic:{duration:3e3,transitionDuration:2500,animateFirst:!1,slides:[{url:"/assets/images/modules/attics/pagehead-default-1200.webp",alt:"Image attic - Default image for Layout PAGE",caption:"Caption for the header image with a link",caption_href:"#",caption_color:"rgba(255, 255, 255, 0.8)"}]}}},{name:"Text attic",attic:{enabled:!0,id:"text_attic",layout:["collection","app","raw","blog_archive"],raised_level:0}}],headers:[{name:"Home attic",header:{enabled:!0,id:"home_attic",layout:"home",raised_level:0,padding_top:300,margin_bottom:0,title:{align:"center"},tagline:{align:"center"}}},{name:"Image attic",header:{enabled:!0,id:"image_attic",layout:["page","post"],raised_level:0,text_emphasis:"strong",title:{color:"rgba_lighten_800"},tagline:{color:"rgba_lighten_800"}}},{name:"Text attic",header:{enabled:!0,id:"text_attic",layout:["collection","app","raw","blog_archive"],raised_level:0}}]}),s=e.mergeData(s,c);r&&('undefined'!=typeof r.raised_level&&(s.raised_level=r.raised_level),'undefined'!=typeof r.r_text&&(s.r_text=r.r_text),'undefined'!=typeof r.text_emphasis&&(s.text_emphasis=r.text_emphasis),'undefined'!=typeof r.padding_top&&(s.padding_top=r.padding_top),'undefined'!=typeof r.padding_bottom&&(s.padding_bottom=r.padding_bottom),'undefined'!=typeof r.margin_bottom&&(s.margin_bottom=r.margin_bottom),'undefined'!=typeof r.title&&('undefined'!=typeof r.title.color&&(s.title_color=r.title.color),'undefined'!=typeof r.title.size&&(s.title_size=r.title.size),'undefined'!=typeof r.title.animate&&(s.title_animate=r.title.animate),'undefined'!=typeof r.title.align&&(s.title_align=r.title.align)),'undefined'!=typeof r.tagline&&('undefined'!=typeof r.tagline.color&&(s.tagline_color=r.tagline.color),'undefined'!=typeof r.tagline.size&&(s.tagline_size=r.tagline.size),'undefined'!=typeof r.tagline.animate&&(s.tagline_animate=r.tagline.animate),'undefined'!=typeof r.tagline.align&&(s.tagline_align=r.tagline.align)),'undefined'!=typeof r.background_color&&('undefined'!=typeof r.background_color.color_1&&(s.background_color_1=r.background_color.color_1),'undefined'!=typeof r.background_color.color_2&&(s.background_color_2=r.background_color.color_1)),'undefined'!=typeof r.spinner&&(s.spinner=r.spinner),'undefined'!=typeof r.opacity&&(s.opacity=r.opacity),'undefined'!=typeof r.alignX&&(s.alignX=r.alignX),'undefined'!=typeof r.alignY&&(s.alignY=r.alignY),'undefined'!=typeof r.scale&&(s.scale=r.scale),'undefined'!=typeof r.start&&(s.start=r.start),'undefined'!=typeof r.animateFirst&&(s.animateFirst=r.animateFirst),'undefined'!=typeof r.preload&&(s.preload=r.preload),'undefined'!=typeof r.preloadSize&&(s.preloadSize=r.preloadSize),'undefined'!=typeof r.mute&&(s.mute=r.mute),'undefined'!=typeof r.bypassCss&&(s.bypassCss=r.bypassCss),'undefined'!=typeof r.isVideo&&(s.isVideo=r.isVideo),'undefined'!=typeof r.loop&&(s.loop=r.loop),'undefined'!=typeof r.paused&&(s.paused=r.paused),'undefined'!=typeof r.transition&&(s.transition=r.transition),'undefined'!=typeof r.duration&&(s.duration=r.duration),'undefined'!=typeof r.transitionDuration&&(s.transitionDuration=r.transitionDuration),'undefined'!=typeof r.slides&&(s.slides=r.slides)),s.title_color=s.title_color,s.tagline_color=s.tagline_color,s.background_color_1=s.background_color_1,s.background_color_2=s.background_color_2,s.title_size=s.title_size,s.tagline_size=s.tagline_size,'enabled'==s.r_text&&$('#text_attic').addClass('r-text');var g='raised-z'+s.raised_level;$('#text_attic').addClass(g),$('#head-title').addClass(s.title_animate),$('#head-tagline').addClass(s.tagline_animate);var p='text-emphasis-'+s.text_emphasis;$('#head-title-text').addClass(p),$('#head-tagline-text').addClass(p);var _='';_+='<style> .attic { ',_+='background-image: -webkit-gradient(linear, left top, left bottom, from('+s.background_color_1+'), to('+s.background_color_2+')) !important;',_+='background-image: -webkit-linear-gradient(top, '+s.background_color_1+' 0%, '+s.background_color_2+' 100%) !important;',_+='background-image: -o-linear-gradient(top, '+s.background_color_1+' 0%, '+s.background_color_2+' 100%) !important;',_+='background-image: linear-gradient(to bottom, '+s.background_color_1+' 0%, '+s.background_color_2+' 100%) !important;',_+='filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="'+s.background_color_1+'", endColorstr="'+s.background_color_2+'", GradientType=0) !important;',_+='} </style>',$('head').append(_),_='',_='<style> .attic { padding-top: '+s.padding_top+'px; padding-bottom: '+s.padding_bottom+'px; margin-bottom: '+s.margin_bottom+'px; text-shadow: 0 1px 0 rgba(0,0,0,.1); </style>',$('head').append(_),$('head').append('<style> .attic .head-title h2 { color: '+s.title_color+';font-size: '+s.title_size+' !important; text-align: '+s.title_align+';} </style>'),$('head').append('<style> .attic .head-tagline h3 { color: '+s.tagline_color+';font-size: '+s.tagline_size+' !important; text-align: '+s.tagline_align+'; } </style>');var u;u='<style> .backstretch-item { opacity: '+s.opacity+'; </style>',$('head').append(u),a.setState('initialized'),i.info('state: '+a.getState()),'undefined'!=typeof s.slides&&$(function(){i.debug('Load image header'),d(s),a.setState('completed'),i.info('state: '+a.getState())})}return $('#no_header').length&&(a.setState('completed'),i.info('state: '+a.getState()),i.warn('No header configured or found in page')),!0},messageHandler:function(e,t){var a=JSON.stringify(t,undefined,2);return o='received message from '+e+': '+a,i.debug(o),'command'===t.type&&'module_initialized'===t.action&&(status='completed',i.info(t.text)),!0},setState:function(e){a.state=e},getState:function(){return a.state}}}(j1,window);


