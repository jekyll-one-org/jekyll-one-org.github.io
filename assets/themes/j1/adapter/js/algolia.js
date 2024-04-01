

  /*
 # -----------------------------------------------------------------------------
 # ~/assets/themes/j1/adapter/js/algolia.js
 # J1 Adapter for Algolia
 #
 # Product/Info:
 # https://jekyll.one
 #
 # Copyright (C) 2023, 2024 Juergen Adams
 #
 # J1 Template is licensed under the MIT License.
 # For details, see: https://github.com/jekyll-one-org/j1-template/blob/main/LICENSE.md
 # -----------------------------------------------------------------------------
 #  Adapter generated: 2024-04-01 01:16:05 +0200
 # -----------------------------------------------------------------------------
*/
'use strict';j1.adapter.algolia=(e=>{var a,t,i,n,s,d={};return{init:i=>{var r=$.extend({module_name:'j1.adapter.algolia',generated:'2024-04-01 01:16:05 +0200'},i);a=e.adapter.algolia,t=log4javascript.getLogger('j1.adapter.algolia'),n=Date.now(),a.setState('started'),t.debug("\nstate: "+a.getState()),t.info("\nmodule is being initialized"),d=$.extend({},{enabled:!1,application_id:"your_application_id",search_only_api_key:"your_searchonly_api_key",index_name:"your_index_name",extensions_to_index:["adoc"],files_to_exclude:[]}),void 0!==r&&(d=$.extend({},d,r));var l=instantsearch({appId:d.application_id,apiKey:d.search_only_api_key,indexName:d.index_name,routing:!0}),o=e=>{if(new RegExp('^/pages|^/posts|^/collections').test(e.url)){var a='';e.date&&(a=moment.unix(e.date).format('MMM D, YYYY'));var t=e.url;const n=e._highlightResult.title.value;e._highlightResult.headings&&e._highlightResult.headings.map(e=>`<span class="post-breadcrumb">${e.value}</span>`).join(' > ');var i=e._highlightResult.html.value;return`\n            <li class="search-result-item">\n              <div class="card card-flat">\n                <div class="card-body">\n                  <span class="post-meta">${a}</span>\n                  <h2 class="card-title">${n}</h2>\n                  <h6 class="card-subtitle mb-2 text-muted">${e.tagline}</h6>\n                  <div class="card-text">${i}</div>\n                  <div class="card-footer">\n                    <a class="card-link" href="${t}" target="_blank">Read more ..</a>\n                  </div>\n                </div>\n              </div>\n            </li>\n          `}};return 1==d.enabled&&(l.addWidget(instantsearch.widgets.currentRefinedValues({container:'#current-refined-values',clearAll:!1})),l.addWidget(instantsearch.widgets.clearAll({container:'#clear-all',templates:{link:'Reset TAGS'},clearsQuery:!1,autoHideContainer:!1})),l.addWidget(instantsearch.widgets.pagination({container:'#pagination',maxPages:20,scrollTo:!1})),l.addWidget(instantsearch.widgets.searchBox({container:'#search-searchbar',placeholder:'Search this site ..',autofocus:!0,reset:!0,loadingIndicator:!1,poweredBy:!0})),l.addWidget(instantsearch.widgets.hits({container:'#search-hits',templates:{empty:'No results',item:o}})),l.addWidget(instantsearch.widgets.refinementList({container:'#refinement-list',attributeName:'tags',collapsible:!0,operator:'and',limit:5,sortBy:['isRefined','count:desc','name:asc'],templates:{header:'Tags'},showMore:!0}))),!0===d.enabled?(l.start(),$('#searcher').addClass('row'),a.setState('finished'),t.debug("\nstate: "+a.getState()),t.info("\nmodule initialized successfully"),s=Date.now(),t.info("\nmodule initializing time: "+(s-n)+'ms')):($('#algolia-site-search').append('<p class="ml-5 mt-5 mb-5 "> <strong>Algolia Search DISABLED</strong> </p>'),a.setState('finished'),t.debug("\nstate: "+a.getState()),t.warn("\nmodule disabled")),!0},messageHandler:(e,a)=>{var n=JSON.stringify(a,undefined,2);return i="\nreceived message from "+e+': '+n,t.debug(i),'command'===a.type&&'module_initialized'===a.action&&t.info('\n'+a.text),!0},setState:e=>{a.state=e},getState:()=>a.state}})(j1,window);


