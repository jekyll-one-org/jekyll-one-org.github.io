

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/masterslider.js
 # J1 Adapter for Averta MasterSlider Lite v2.85.13 (Feb 2022)
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-01-15 03:15:22 +0100
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.masterslider=function(e){var i,s,t,a,l,r,d='lite',n=e.stringToBoolean('true'),o=(e.stringToBoolean(''),e.stringToBoolean('true'));return{init:function(r){var m;n&&((m=document.createElement('script')).id='ms-slider-manager',m.innerHTML=''),e.masterslider={},e.masterslider.instances=e.masterslider.instances||[];$.extend({module_name:'j1.adapter.masterslider',generated:'2024-01-15 03:15:22 +0100'},r);i=$.extend({},{xhr_data_path:"/assets/data/masterslider",module_version:"lite",save_slider_config:!0,slider_manager:!0,slider_manager_load_timeout:2500,icon_family:"mdib",icon_class:!1,icon_color:"#1E88E5",icon_size:"2x",skin:"default",lightbox:{enabled:!1,type:"lb"},controls:{arrows:{enabled:!1,autohide:!1,overVideo:!0,hideUnder:null},bullets:{enabled:!1,autohide:!1,overVideo:!0,dir:"h",hideUnder:null,align:"bottom",margin:10},thumblist:{enabled:!1,width:100,height:80,autohide:!0,overVideo:!0,dir:"h",speed:17,hideUnder:null,inset:!1,arrows:!1,hover:!1,customClass:"",align:"right",type:"thumbs",margin:1,space:1,fillMode:"fill"},scrollbar:{enabled:!1,autohide:!1,overVideo:!0,dir:"h",inset:!1,align:"bottom",color:"#3D3D3D",hideUnder:null,margin:10,width:4},circletimer:{enabled:!1,autohide:!1,overVideo:!0,color:"#A2A2A2",radius:4,stroke:10,hideUnder:null},timebar:{enabled:!1,autohide:!1,overVideo:!0,color:"#FFFFFF",hideUnder:null,align:"bottom",inset:!1,margin:0},slideinfo:{enabled:!1,autohide:!1,overVideo:!0,insertTo:"",size:100,hideUnder:null,align:"bottom",inset:!1,margin:10}},options:{width:300,height:150,minHeight:0,space:0,start:1,grabCursor:!0,swipe:!0,mouse:!0,keyboard:!1,layout:"boxed",wheel:!1,autoplay:!1,instantStartLayers:!1,mobileBGVideo:!1,loop:!1,shuffle:!1,preload:0,heightLimit:!0,autoHeight:!1,smoothHeight:!0,endPause:!1,overPause:!0,fillMode:"fill",centerControls:!0,startOnAppear:!1,layersMode:"center",autofillTarget:"",hideLayers:!1,fullscreenMargin:0,speed:20,dir:"h",responsive:!0,tabletWidth:768,tabletHeight:null,phoneWidth:480,phoneHeight:null,sizingReference:"window",parallaxMode:"mouse",filters:null,view:"basic"},plugins:{MSScrollParallax:{enabled:!1,layers_parallax_depth:50,background_parallax_depth:40,fade_layers:!1}}}),s=$.extend({},{skin:"default",slider_manager_load_timeout:50,sliders:[{slider:null,enabled:!0,id:"ms_00001",controls:null,options:{height:500,fillMode:"fill",layersMode:"center",layout:"fullwidth",autoplay:!0,loop:!0,speed:10},slides:[{slide:null,alt:"Cities 1",title:"Cities 1",foreground_image:"/assets/images/modules/masterslider/slider_2/andreas-brucker.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:!1},{slide:null,alt:"Cities 2",title:"Cities 2",foreground_image:"/assets/images/modules/masterslider/slider_2/denys-nevozhai-1.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:!1},{slide:null,alt:"Cities 3",title:"Cities 3",foreground_image:"/assets/images/modules/masterslider/slider_2/denys-nevozhai-2.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:!1}]},{slider:null,enabled:!0,id:"ms_00002",skin:"light-3",lightbox:{enabled:!0,type:"lb"},controls:{arrows:{enabled:!0}},options:{width:1200,height:600,applyFiltersAllSlides:!0,duoColor:!1,filters:{grayscale:.5,sepia:.5}},slides:[{slide:null,alt:"Cat 1",title:"Cat 1",foreground_image:"/assets/images/modules/masterslider/slider_1/cat-1.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:!1},{slide:null,alt:"Cat 2",title:"Cat 2",foreground_image:"/assets/images/modules/masterslider/slider_1/cat-2.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:!1},{slide:null,alt:"Cat 3",title:"Cat 3",foreground_image:"/assets/images/modules/masterslider/slider_1/cat-3.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:!1}]},{slider:null,enabled:!0,id:"ms_00003",skin:"default",controls:{slideinfo:{enabled:!0,margin:-133}},options:{width:1200,height:600},slides:[{slide:null,alt:"MS free image - Food Restaurant",title:"MS free image - Food Restaurant",foreground_image:"/assets/images/modules/masterslider/slider_3/ms-free-food-restaurant.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:{rtext:300,boxed:!0,title:"The Art of Life",title_color:"#BDBDBD",title_animated:"fadeInRight",title_upcase:!1,tagline:"places to enjoy",tagline_color:!1,tagline_animated:"fadeInLeft",tagline_upcase:!1,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.\n",description_color:"#9E9E9E",description_animated:"fadeInRight"}},{slide:null,alt:"MS free image - Food Hamburger",title:"MS free image - Food Hamburger",foreground_image:"/assets/images/modules/masterslider/slider_3/ms-free-food-hamburger.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:{rtext:300,boxed:!0,title:"The Art of Life",title_color:"#BDBDBD",title_animated:"fadeInRight",title_upcase:!1,tagline:"places to enjoy",tagline_color:!1,tagline_animated:"fadeInLeft",tagline_upcase:!1,description:"Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.\n",description_color:"#9E9E9E",description_animated:"fadeInRight"}},{slide:null,alt:"MS free image - Food Family 2",title:"MS free image - Food Family 2",foreground_image:"/assets/images/modules/masterslider/slider_3/ms-free-food-family-2.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:{rtext:300,boxed:!0,title:"The Art of Life",title_color:"#BDBDBD",title_animated:"fadeInRight",title_upcase:!1,tagline:"places to enjoy",tagline_color:!1,tagline_animated:"fadeInLeft",tagline_upcase:!1,description:"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad veniam.\n",description_color:"#9E9E9E",description_animated:"fadeInRight"}}]},{slider:null,enabled:!0,id:"ms_00004",skin:"light-2",controls:{thumblist:{enabled:!0,width:140,height:80,type:"thumbs",autohide:!1,dir:"v",align:"right"}},options:{width:1200,height:600},slides:[{slide:null,alt:"MS free image - Animals 1",title:"MS free image - Animals 1",foreground_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-1.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-1-100x80.jpg",slideinfo:!1},{slide:null,alt:"MS free image - Animals 2",title:"MS free image - Animals 2",foreground_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-2.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-2-100x80.jpg",slideinfo:!1},{slide:null,alt:"MS free image - Animals 3",title:"MS free image - Animals 3",foreground_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-3.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-3-100x80.jpg",slideinfo:!1},{slide:null,alt:"MS free image - Animals 4",title:"MS free image - Animals 4",foreground_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-4.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-4-100x80.jpg",slideinfo:!1},{slide:null,alt:"MS free image - Animals 5",title:"MS free image - Animals 5",foreground_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-5.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-5-100x80.jpg",slideinfo:!1},{slide:null,alt:"MS free image - Animals 6",title:"MS free image - Animals 6",foreground_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-6.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-6-100x80.jpg",slideinfo:!1},{slide:null,alt:"MS free image - Animals 7",title:"MS free image - Animals 7",foreground_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-7.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_4/ms-free-animals-7-100x80.jpg",slideinfo:!1}]},{slider:null,enabled:!0,id:"ms_00005",skin:"default",controls:{thumblist:{enabled:!0,width:160,height:80,type:"thumbs",autohide:!1,align:"bottom",margin:1,space:1}},options:{width:1200,height:530},slides:[{slide:null,alt:"MS free image - Food Family",title:"MS free image - Food Family",foreground_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-family.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-family-140x80.jpg",slideinfo:!1},{slide:null,alt:"MS free image - Food Woman Hand",title:"MS free image - Food Woman Hand",foreground_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-woman-hand.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-woman-hand-140x80.jpg",slideinfo:!1},{slide:null,alt:"MS free image - Food Family 2",title:"MS free image - Food Family 2",foreground_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-family-2.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-family-2-140x80.jpg",slideinfo:!1},{slide:null,alt:"MS free image - Food Family 3",title:"MS free image - Food Family 3",foreground_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-family-3.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-family-3-140x80.jpg",slideinfo:!1},{slide:null,alt:"MS free image - Food Hamburger",title:"MS free image - Food hamburger",foreground_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-hamburger.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-hamburger-140x80.jpg",slideinfo:!1},{slide:null,alt:"MS free image - Food Pizza",title:"MS free image - Food Pizza",foreground_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-pizza.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-pizza-140x80.jpg",slideinfo:!1},{slide:null,alt:"MS free image - Food Table",title:"MS free image - Food Table",foreground_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-table.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:"/assets/images/modules/masterslider/slider_5/ms-free-food-table-140x80.jpg",slideinfo:!1}]},{slider:null,enabled:!0,id:"ms_00006",skin:"light-3",controls:{thumblist:{enabled:!0,height:160,width:280,type:"tabs",autohide:!1,dir:"h",align:"bottom",margin:-12,space:0,hideUnder:400}},options:{width:1e3,height:500,instantStartLayers:!0,loop:!0,speed:15,view:"fadeBasic"},slides:[{slide:null,alt:"MS free image - Kitchen Design Ideas",title:"MS free image - Kitchen Design Ideas",foreground_image:"/assets/images/modules/masterslider/slider_6_7/6876385555_74a0d7d7ee_b.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumbinfo:{title:"Kitchen Design Ideas",tagline:"Slider with Horizontal Tabs",description:"Lorem ipsum dolor sit amet, consectetuer elit\n"},slideinfo:!1},{slide:null,alt:"MS free image - Modern Wall Design",title:"MS free image - Modern Wall Design",foreground_image:"/assets/images/modules/masterslider/slider_6_7/6876387431_d86867a3d9_b.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumbinfo:{title:"Modern Wall Design",tagline:"Slider with Horizontal Tabs",description:"Lorem ipsum dolor sit amet, consectetuer elit\n"},slideinfo:!1},{slide:null,alt:"MS free image - Banquette Seating Kitchen",title:"MS free image - Banquette Seating Kitchen",foreground_image:"/assets/images/modules/masterslider/slider_6_7/6876388511_d618d53455_b.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumbinfo:{title:"Banquette Seating Kitchen",tagline:"Slider with Horizontal Tabs",description:"Lorem ipsum dolor sit amet, consectetuer elit\n"},slideinfo:!1},{slide:null,alt:"MS free image - Harmony in Interior Design",title:"MS free image - Harmony in Interior Design",foreground_image:"/assets/images/modules/masterslider/slider_6_7/6876389463_db27a377e1_b.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumbinfo:{title:"Harmony in Interior Design",tagline:"Slider with Horizontal Tabs",description:"Lorem ipsum dolor sit amet, consectetuer elit\n"},slideinfo:!1},{slide:null,alt:"MS free image - Make Your Workspace Better",title:"MS free image - Make Your Workspace Better",foreground_image:"/assets/images/modules/masterslider/slider_6_7/6876390339_2e4dd9dbbb_b.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumbinfo:{title:"Make Your Workspace Better",tagline:"Slider with Horizontal Tabs",description:"Lorem ipsum dolor sit amet, consectetuer elit\n"},slideinfo:!1}]},{slider:null,enabled:!0,id:"ms_00007",lightbox:{enabled:!0,type:"lb"},controls:{thumblist:{enabled:!0,height:160,width:240,type:"tabs",autohide:!1,dir:"v",align:"right",margin:-12,space:0,hideUnder:700}},options:{width:1e3,height:500,instantStartLayers:!0,loop:!0,speed:15,view:"fadeBasic"},slides:[{slide:null,alt:"MS free image - Kitchen Design Ideas",title:"MS free image - Kitchen Design Ideas",foreground_image:"/assets/images/modules/masterslider/slider_6_7/6876385555_74a0d7d7ee_b.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumbinfo:{title:"Kitchen Design Ideas",tagline:"Slider with Vertical Tabs",description:"Lorem ipsum dolor sit amet, consectetuer elit\n"},slideinfo:!1},{slide:null,alt:"MS free image - Modern Wall Design",title:"MS free image - Modern Wall Design",foreground_image:"/assets/images/modules/masterslider/slider_6_7/6876387431_d86867a3d9_b.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumbinfo:{title:"Modern Wall Design",tagline:"Slider with Vertical Tabs",description:"Lorem ipsum dolor sit amet, consectetuer elit\n"},slideinfo:!1},{slide:null,alt:"MS free image - Banquette Seating Kitchen",title:"MS free image - Banquette Seating Kitchen",foreground_image:"/assets/images/modules/masterslider/slider_6_7/6876388511_d618d53455_b.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumbinfo:{title:"Banquette Seating Kitchen",tagline:"Slider with Vertical Tabs",description:"Lorem ipsum dolor sit amet, consectetuer elit\n"},slideinfo:!1},{slide:null,alt:"MS free image - Harmony in Interior Design",title:"MS free image - Harmony in Interior Design",foreground_image:"/assets/images/modules/masterslider/slider_6_7/6876389463_db27a377e1_b.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumbinfo:{title:"Harmony in Interior Design",tagline:"Slider with Vertical Tabs",description:"Lorem ipsum dolor sit amet, consectetuer elit\n"},slideinfo:!1},{slide:null,alt:"MS free image - Make Your Workspace Better",title:"MS free image - Make Your Workspace Better",foreground_image:"/assets/images/modules/masterslider/slider_6_7/6876390339_2e4dd9dbbb_b.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumbinfo:{title:"Make Your Workspace Better",tagline:"Slider with Vertical Tabs",description:"Lorem ipsum dolor sit amet, consectetuer elit\n"},slideinfo:!1}]},{slider:null,enabled:!0,id:"ms_00008",skin:"default",controls:{slideinfo:{enabled:!0,margin:-120}},options:{width:600,height:300,layout:"partialview",autoplay:!0,loop:!0,speed:10,filters:{brightness:.8,grayscale:.5,opacity:.6}},slides:[{slide:null,alt:"MS free image - Special slider for bloggers",title:"MS free image - Special slider for bloggers",foreground_image:"/assets/images/modules/masterslider/slider_8/postslider6-bg-slide2-1024x622.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:{rtext:300,boxed:!1,title:"Slider for bloggers",title_color:"#212121",title_animated:"fadeInLeft",title_upcase:!1,tagline:!1,tagline_color:!1,tagline_animated:!1,tagline_upcase:!1,description:!1,description_animated:!1,button:{enabled:!0,align:"center",margin:"mt-4",animated:"fadeInRight","class":"btn btn-primary btn-sm",link:"#",text:"Read More"}}},{slide:null,alt:"MS free image - We love architecture websites",title:"MS free image - We love architecture websites",foreground_image:"/assets/images/modules/masterslider/slider_8/postslider-5-img-3.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:{rtext:400,boxed:!1,title:"We love architecture websites",title_color:"#212121",title_animated:"fadeInLeft",title_upcase:!1,tagline:!1,tagline_color:!1,tagline_animated:!1,tagline_upcase:!1,description:!1,description_animated:!1,button:{enabled:!0,align:"center",margin:"mt-4",animated:"fadeInRight","class":"btn btn-primary btn-sm",link:"#",text:"Read More"}}},{slide:null,alt:"MS free image - New Buildings, New Designs!",title:"MS free image - New Buildings, New Designs!",foreground_image:"/assets/images/modules/masterslider/slider_8/postslider-5-img-2.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:{rtext:400,boxed:!1,title:"New Buildings, New Designs!",title_color:"#212121",title_animated:"fadeInLeft",title_upcase:!1,tagline:!1,tagline_color:!1,tagline_animated:!1,tagline_upcase:!1,description:!1,description_animated:!1,button:{enabled:!0,align:"center",margin:"mt-4",animated:"fadeInRight","class":"btn btn-primary btn-sm",link:"#",text:"Read More"}}},{slide:null,alt:"MS free image - Greatest Modern Architect Designs",title:"MS free image - Greatest Modern Architect Designs",foreground_image:"/assets/images/modules/masterslider/slider_8/postslider-5-img-1.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:{rtext:400,boxed:!1,title:"Greatest Modern Architect Designs",title_color:"#212121",title_animated:"fadeInLeft",title_upcase:!1,tagline:!1,tagline_color:!1,tagline_animated:!1,tagline_upcase:!1,description:!1,description_animated:!1,button:{enabled:!0,align:"center",margin:"mt-4",animated:"fadeInRight","class":"btn btn-primary btn-sm",link:"#",text:"Read More"}}}]},{slider:null,enabled:!0,id:"ms_00009",skin:"default",controls:{arrows:{enabled:!0},slideinfo:{enabled:!0,margin:0}},options:{width:700,height:350,layout:"partialview",loop:!0,filters:{grayscale:.8,opacity:.4}},slides:[{slide:null,alt:"MS free image - Childhood Memories",title:"MS free image - Childhood Memories",foreground_image:"/assets/images/modules/masterslider/slider_9/6-2.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:{rtext:300,boxed:!1,title:"Childhood Memories",title_color:"#222222",title_animated:!1,title_upcase:!0,tagline:"John Wiliam",tagline_color:"#0D47A1",tagline_animated:!1,tagline_upcase:!1,description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.\n",description_color:"#616161",description_animated:!1}},{slide:null,alt:"MS free image - Consectetuer adipiscing elit",title:"MS free image - Consectetuer adipiscing elit",foreground_image:"/assets/images/modules/masterslider/slider_9/5-2.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:{rtext:300,boxed:!1,title:"Consectetuer adipiscing elit",title_color:"#222222",title_animated:"fadeInRight",title_upcase:!0,tagline:"John Wiliam",tagline_color:"#0D47A1",tagline_animated:!1,tagline_upcase:!0,description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.\n",description_color:"#616161",description_animated:!1}},{slide:null,alt:"MS free image - Suspendissue ut pulvinar mauris",title:"MS free image - Suspendissue ut pulvinar mauris",foreground_image:"/assets/images/modules/masterslider/slider_9/6-3.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:{rtext:300,boxed:!1,title:"Suspendissue ut pulvinar mauris",title_color:"#222222",title_animated:"fadeInRight",title_upcase:!0,tagline:"John Wiliam",tagline_color:"#0D47A1",tagline_animated:!1,tagline_upcase:!0,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n",description_color:"#616161",description_animated:!1}},{slide:null,alt:"MS free image - Sed dabibus sit amet felis",title:"MS free image - Sed dabibus sit amet felis",foreground_image:"/assets/images/modules/masterslider/slider_9/8.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:{rtext:300,boxed:!1,title:"Sed dabibus sit amet felis",title_color:"#222222",title_animated:"fadeInRight",title_upcase:!0,tagline:"Gregory Wilson",tagline_color:"#0D47A1",tagline_animated:!1,tagline_upcase:!0,description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.\n",description_color:"#616161",description_animated:!1}},{slide:null,alt:"MS free image - Cheetags on the edge",title:"MS free image - Cheetags on the edge",foreground_image:"/assets/images/modules/masterslider/slider_9/8-1.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:{rtext:300,boxed:!1,title:"Cheetags on the edge",title_color:"#222222",title_animated:"fadeInRight",title_upcase:!0,tagline:"Gregory Wilson",tagline_color:"#0D47A1",tagline_animated:!1,tagline_upcase:!0,description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.\n",description_color:"#616161",description_animated:!1}},{slide:null,alt:"MS free image - Consectetuer adipiscing elit",title:"MS free image - Consectetuer adipiscing elit",foreground_image:"/assets/images/modules/masterslider/slider_9/1-2.jpg",background_image:"/assets/themes/j1/modules/masterslider/css/blank.gif",thumb_image:!1,slideinfo:{rtext:300,boxed:!1,title:"Consecteur adipiscing elit",title_color:"#222222",title_animated:"fadeInRight",title_upcase:!0,tagline:"Gregory Wilson",tagline_color:"#0D47A1",tagline_animated:!1,tagline_upcase:!0,description:"Lorem ipsum dolor sit amet, consec tetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.\n",description_color:"#616161",description_animated:!1}}]}]}),t=$.extend({},i,s),a=e.adapter.masterslider,l=log4javascript.getLogger('j1.adapter.masterslider'),a.setState('started'),a.loadSliderHTML(t,t.sliders),a.createSliderInstances(t.sliders,m);var g=setInterval(function(){'data_loaded'==a.getState()&&(l.info("\nms module version detected: "+d),l.info("\nmodule is being initialized"),a.initSliders(t,t.sliders,m,o),clearInterval(g))},10),u=setInterval(function(){var i='block'==$('#content').css("display"),s='finished'==e.adapter.attic.getState();'sliders_initialized'==a.getState()&&i&&s&&(setTimeout(function(){n&&document.body.appendChild(m),a.setState('finished'),l.info("\ninitializing module finished")},t.slider_manager_load_timeout),clearInterval(u))},10)},loadSliderHTML:function(i,s){Object.keys(s).length;var t,l=i.xhr_data_path+'/index.html';a.setState('load_data'),Object.keys(s).forEach(function(i){s[i].enabled?(t='p_'+s[i].id,e.loadHTML({xhr_container_id:t,xhr_data_path:l,xhr_data_element:s[i].id})):0}),a.setState('data_loaded')},createSliderInstances:function(e,i){var s,t=i,l=(Object.keys(e).length,0);Object.keys(e).forEach(function(){l++,i?(s='  var masterslider_'+l+" = new MasterSlider();\n",t.innerHTML+=s):a["masterslider_"+l]=new MasterSlider})},initSliders:function(i,s,t,r){function d(e,i,s){const t=e.controls;var r,d=s,n=0;l.info("\ngenerate slider controls"),s&&(d.innerHTML+=u),Object.keys(i).forEach(function(e){n++,r=parseInt(e),i[r].enabled?i[r].controls?Object.keys(i[r].controls).forEach(function(e){var o='\n';l.debug("\nslider control found id|key: "+i[r].id+'|'+e),delete(f=$.extend({},t[e],i[r].controls[e])).enabled,s?(o="    masterslider_"+n+".control('"+e+"', "+JSON.stringify(f)+');',d.innerHTML+=o+'\n'):a["masterslider_"+n].control(e,f)}):l.debug("\nno slider controls found on id: "+i[e].id):l.debug("\nslider found disabled on id: "+i[e].id)})}function n(i,s,t){const a=i.plugins;var r,d,n=t,o={},m=0;l.debug("\ngenerate slider plugins"),t&&(n.innerHTML+=u),Object.keys(s).forEach(function(i){m++,d=parseInt(i),s[d].enabled?s[d].plugins?Object.keys(s[d].plugins).forEach(function(i){var g='\n';l.info("\nslider plugin found id|key: "+s[d].id+'|'+i),(o=$.extend({},a,s[d].plugins)).J1ScrollParallax.enabled&&(delete o.J1ScrollParallax.enabled,r=JSON.stringify(o.J1ScrollParallax).replace(/"/g,'').replace(/{/g,'').replace(/}/g,''),l.debug("\nplugin J1ScrollParallax found: "+r),r=(r=(r=r.replace(/layers_parallax_depth:/g,'')).replace(/background_parallax_depth:/g,'')).replace(/fade_layers:/g,''),t?(g="    MSScrollParallax.setup(masterslider_"+m+', '+r+');',n.innerHTML+=g+'\n'):MSScrollParallax.setup(e.masterslider.instances[d],r))}):l.debug("\nno slider plugins found on id: "+s[i].id):l.debug("\nslider found disabled on id: "+s[i].id)})}function o(i,s,t,r){i.controls;var d,n=t;l.info("\ngenerate slider setup"),t&&(n.innerHTML+=u);var o=0;Object.keys(s).forEach(function(i){var m='\n';if(o++,d=parseInt(i),s[d].enabled){if(l.info("\nslider is being initialized on id: "+s[i].id),null!=(_=$.extend({},c.options,s[d].options)).filters){var g=JSON.stringify(_.filters).replace(/"/g,'');l.debug("\nfilters found: "+g.replace(/{/g,'').replace(/}/g,''))}t?(m="    masterslider_"+o+".setup('"+s[i].id+"', "+JSON.stringify(_)+');',n.innerHTML+=m+'\n'):a["masterslider_"+o].setup(s[i].id,_),r&&(t?(m="    j1.masterslider.instances.push(masterslider_"+o+');',n.innerHTML+=m+'\n'):e.masterslider.instances.push(a["masterslider_"+o]))}else l.info("\nslider found disabled on id: "+s[i].id)}),a.setState('sliders_initialized'),l.debug("\nstate: "+a.getState()),l.info("\ninitializing sliders finished")}var m,g=t,u='\n',c=$.extend({},i,s),f={},_={};a.setState('initialize_sliders'),l.debug("\nstate: "+a.getState()),m="\nsliders are being initialized",l.info(m),d(i,s,g),o(i,s,g,r),n(i,s,g)},messageHandler:function(e,i){var s=JSON.stringify(i,undefined,2);return r="\nreceived message from "+e+': '+s,l.debug(r),'command'===i.type&&'module_initialized'===i.action&&l.info('\n'+i.text),!0},setState:function(e){a.state=e},registerEvents:function(e,i){var s;Object.keys(i).forEach(function(e){0,s=parseInt(e),l.debug("\nslider events are being initialized on id: "+s),i[s].api.addEventListener(MSSliderEvent.WAITING,function(e){e.target.view.controller,e.target.view.controller.value;e.target.currentSlide.$loading.length?l.info("\nslider is being loaded: "+e.target.currentSlide.bg_src):l.info("\nslider is loaded")})})},getState:function(){return a.state}}}(j1,window);


