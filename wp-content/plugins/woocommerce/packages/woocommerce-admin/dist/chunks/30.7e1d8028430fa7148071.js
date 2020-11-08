(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[30],{689:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var o=r(8),a=r(28),c=r(19),n=r(0),i=r(2),l=r(175),s=r(253);function m(e){var t=e.help,r=e.label,d=e.multiple,u=void 0!==d&&d,p=e.onChange,b=e.options,_=void 0===b?[]:b,f=e.className,y=e.hideLabelFromVision,O=Object(c.a)(e,["help","label","multiple","onChange","options","className","hideLabelFromVision"]),h=Object(l.a)(m),j="inspector-select-control-".concat(h);return!Object(i.isEmpty)(_)&&Object(n.createElement)(s.a,{label:r,hideLabelFromVision:y,id:j,help:t,className:f},Object(n.createElement)("select",Object(o.a)({id:j,className:"components-select-control__input",onChange:function(e){if(u){var t=Object(a.a)(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value}));p(t)}else p(e.target.value)},"aria-describedby":t?"".concat(j,"__help"):void 0,multiple:u},O),_.map((function(e,t){return Object(n.createElement)("option",{key:"".concat(e.label,"-").concat(e.value,"-").concat(t),value:e.value,disabled:e.disabled},e.label)}))))}},719:function(e,t,r){"use strict";var o=r(14),a=r.n(o),c=r(13),n=r.n(c),i=r(16),l=r.n(i),s=r(17),m=r.n(s),d=r(6),u=r.n(d),p=r(0),b=r(3),_=r(1),f=r.n(_),y=r(68),O=r(33);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=u()(e);if(t){var a=u()(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return m()(this,r)}}var j=function(e){l()(r,e);var t=h(r);function r(){return a()(this,r),t.apply(this,arguments)}return n()(r,[{key:"render",value:function(){var e,t,r,o,a=this.props,c=a.className,n=a.isError,i=a.isEmpty;return n?(e=Object(b.__)("There was an error getting your stats. Please try again.",'woocommerce'),t=Object(b.__)("Reload",'woocommerce'),o=function(){window.location.reload()}):i&&(e=Object(b.__)("No results could be found for this date range.",'woocommerce'),t=Object(b.__)("View Orders",'woocommerce'),r=Object(O.f)("edit.php?post_type=shop_order")),Object(p.createElement)(y.EmptyContent,{className:c,title:e,actionLabel:t,actionURL:r,actionCallback:o})}}]),r}(p.Component);j.propTypes={className:f.a.string,isError:f.a.bool,isEmpty:f.a.bool},j.defaultProps={className:""},t.a=j},720:function(e,t,r){"use strict";r.d(t,"e",(function(){return m})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return b})),r.d(t,"f",(function(){return _})),r.d(t,"g",(function(){return f}));var o=r(36),a=r(42),c=r.n(a),n=r(2),i=r(32),l=r(41),s=r(721);function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,n="function"==typeof e?e(a):e,l=Object(i.getIdsFromQuery)(r);if(l.length<1)return Promise.resolve([]);var s={include:l.join(","),per_page:l.length};return c()({path:Object(o.addQueryArgs)(n,s)}).then((function(e){return e.map(t)}))}}var d=m(l.NAMESPACE+"/products/categories",(function(e){return{key:e.id,label:e.name}})),u=m(l.NAMESPACE+"/coupons",(function(e){return{key:e.id,label:e.code}})),p=m(l.NAMESPACE+"/customers",(function(e){return{key:e.id,label:e.name}})),b=m(l.NAMESPACE+"/products",(function(e){return{key:e.id,label:e.name}})),_=m(l.NAMESPACE+"/taxes",(function(e){return{key:e.id,label:Object(s.a)(e)}})),f=m((function(e){return l.NAMESPACE+"/products/".concat(e.products,"/variations")}),(function(e){return{key:e.id,label:e.attributes.map((function(e){return e.option})).join(", ")}}))},721:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r(3);function a(e){return[e.country,e.state,e.name||Object(o.__)("TAX",'woocommerce'),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}},722:function(e,t,r){"use strict";var o=r(5),a=r.n(o),c=r(14),n=r.n(c),i=r(13),l=r.n(i),s=r(16),m=r.n(s),d=r(17),u=r.n(d),p=r(6),b=r.n(p),_=r(0),f=r(3),y=r(270),O=r(137),h=r(24),j=r(2),w=r(1),v=r.n(w),g=r(68),k=r(41),x=r(35),S=r(718),C=r(719),P=r(32);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=b()(e);if(t){var a=b()(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return u()(this,r)}}var D=function(e){m()(r,e);var t=T(r);function r(){return n()(this,r),t.apply(this,arguments)}return l()(r,[{key:"shouldComponentUpdate",value:function(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(j.isEqual)(e.query,this.props.query)}},{key:"getItemChartData",value:function(){var e=this.props,t=e.primaryData,r=e.selectedChart;return t.data.intervals.map((function(e){var t={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){var o=t[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;t[e.segment_id]={label:o,value:e.subtotals[r.key]||0}}})),E({date:Object(O.a)("Y-m-d\\TH:i:s",e.date_start)},t)}))}},{key:"getTimeChartData",value:function(){var e=this.props,t=e.query,r=e.primaryData,o=e.secondaryData,a=e.selectedChart,c=e.defaultDateRange,n=Object(x.getIntervalForQuery)(t),i=Object(x.getCurrentDates)(t,c),l=i.primary,s=i.secondary;return r.data.intervals.map((function(e,r){var c=Object(x.getPreviousDate)(e.date_start,l.after,s.after,t.compare,n),i=o.data.intervals[r];return{date:Object(O.a)("Y-m-d\\TH:i:s",e.date_start),primary:{label:"".concat(l.label," (").concat(l.range,")"),labelDate:e.date_start,value:e.subtotals[a.key]||0},secondary:{label:"".concat(s.label," (").concat(s.range,")"),labelDate:c.format("YYYY-MM-DD HH:mm:ss"),value:i&&i.subtotals[a.key]||0}}}))}},{key:"getTimeChartTotals",value:function(){var e=this.props,t=e.primaryData,r=e.secondaryData,o=e.selectedChart;return{primary:Object(j.get)(t,["data","totals",o.key],null),secondary:Object(j.get)(r,["data","totals",o.key],null)}}},{key:"renderChart",value:function(e,t,r,o){var a=this.props,c=a.emptySearchResults,n=a.filterParam,i=a.interactiveLegend,l=a.itemsLabel,s=a.legendPosition,m=a.path,d=a.query,u=a.selectedChart,p=a.showHeaderControls,b=a.primaryData,y=Object(x.getIntervalForQuery)(d),O=Object(x.getAllowedIntervalsForQuery)(d),h=Object(x.getDateFormatsForInterval)(y,b.data.intervals.length),j=c?Object(f.__)("No data for the current search",'woocommerce'):Object(f.__)("No data for the selected date range",'woocommerce'),w=this.context,v=w.formatAmount,S=w.getCurrencyConfig;return Object(_.createElement)(g.Chart,{allowedIntervals:O,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:j,filterParam:n,interactiveLegend:i,interval:y,isRequesting:t,itemsLabel:l,legendPosition:s,legendTotals:o,mode:e,path:m,query:d,screenReaderFormat:h.screenReaderFormat,showHeaderControls:p,title:u.label,tooltipLabelFormat:h.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&u.label||null,tooltipValueFormat:Object(k.getTooltipValueFormat)(u.type,v),chartType:Object(x.getChartTypeForQuery)(d),valueType:u.type,xFormat:h.xFormat,x2Format:h.x2Format,currency:S()})}},{key:"renderItemComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData;if(r.isError)return Object(_.createElement)(C.a,{isError:!0});var o=t||r.isRequesting,a=this.getItemChartData();return this.renderChart("item-comparison",o,a)}},{key:"renderTimeComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData,o=e.secondaryData;if(!r||r.isError||o.isError)return Object(_.createElement)(C.a,{isError:!0});var a=t||r.isRequesting||o.isRequesting,c=this.getTimeChartData(),n=this.getTimeChartTotals();return this.renderChart("time-comparison",a,c,n)}},{key:"render",value:function(){return"item-comparison"===this.props.mode?this.renderItemComparison():this.renderTimeComparison()}}]),r}(_.Component);D.contextType=S.a,D.propTypes={filters:v.a.array,isRequesting:v.a.bool,itemsLabel:v.a.string,limitProperties:v.a.array,mode:v.a.string,path:v.a.string.isRequired,primaryData:v.a.object,query:v.a.object.isRequired,secondaryData:v.a.object,selectedChart:v.a.shape({key:v.a.string.isRequired,label:v.a.string.isRequired,order:v.a.oneOf(["asc","desc"]),orderby:v.a.string,type:v.a.oneOf(["average","number","currency"]).isRequired}).isRequired},D.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(y.a)(Object(h.withSelect)((function(e,t){var r=t.charts,o=t.endpoint,a=t.filters,c=t.isRequesting,n=t.limitProperties,i=t.query,l=t.advancedFilters,s=n||[o],m=function e(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||0===t.length)return null;var a=t.slice(0),c=a.pop();if(c.showFilters(r,o)){var n=Object(P.flattenFilters)(c.filters),i=r[c.param]||c.defaultValue||"all";return Object(j.find)(n,{value:i})}return e(a,r,o)}(a,i),d=Object(j.get)(m,["settings","param"]),u=t.mode||function(e,t){if(e&&t){var r=Object(j.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(j.get)(e,["chartMode"])}return null}(m,i)||"time-comparison",p=e(k.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,b={mode:u,filterParam:d,defaultDateRange:p};if(c)return b;var _=s.some((function(e){return i[e]&&i[e].length}));if(i.search&&!_)return E(E({},b),{},{emptySearchResults:!0});var f=r&&r.map((function(e){return e.key})),y=Object(k.getReportChartData)({endpoint:o,dataType:"primary",query:i,select:e,limitBy:s,filters:a,advancedFilters:l,defaultDateRange:p,fields:f});if("item-comparison"===u)return E(E({},b),{},{primaryData:y});var O=Object(k.getReportChartData)({endpoint:o,dataType:"secondary",query:i,select:e,limitBy:s,filters:a,advancedFilters:l,defaultDateRange:p,fields:f});return E(E({},b),{},{primaryData:y,secondaryData:O})})))(D)},745:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return i}));var o=r(3),a=r(49),c=Object(a.applyFilters)("woocommerce_admin_revenue_report_charts",[{key:"gross_sales",label:Object(o.__)("Gross Sales",'woocommerce'),order:"desc",orderby:"gross_sales",type:"currency"},{key:"refunds",label:Object(o.__)("Returns",'woocommerce'),order:"desc",orderby:"refunds",type:"currency"},{key:"coupons",label:Object(o.__)("Coupons",'woocommerce'),order:"desc",orderby:"coupons",type:"currency"},{key:"net_revenue",label:Object(o.__)("Net Sales",'woocommerce'),orderby:"net_revenue",type:"currency"},{key:"taxes",label:Object(o.__)("Taxes",'woocommerce'),order:"desc",orderby:"taxes",type:"currency"},{key:"shipping",label:Object(o.__)("Shipping",'woocommerce'),orderby:"shipping",type:"currency"},{key:"total_sales",label:Object(o.__)("Total Sales",'woocommerce'),order:"desc",orderby:"total_sales",type:"currency"}]),n=Object(a.applyFilters)("woocommerce_admin_revenue_report_filters",[]),i=Object(a.applyFilters)("woocommerce_admin_revenue_report_advanced_filters",{})},746:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return m}));var o=r(3),a=r(49),c=r(720),n=Object(a.applyFilters)("woocommerce_admin_products_report_charts",[{key:"items_sold",label:Object(o.__)("Items Sold",'woocommerce'),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:Object(o.__)("Net Sales",'woocommerce'),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:Object(o.__)("Orders",'woocommerce'),order:"desc",orderby:"orders_count",type:"number"}]),i={label:Object(o.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(o.__)("All Products",'woocommerce'),value:"all"},{label:Object(o.__)("Single Product",'woocommerce'),value:"select_product",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_product",chartMode:"item-comparison",path:["select_product"],settings:{type:"products",param:"products",getLabels:c.d,labels:{placeholder:Object(o.__)("Type to search for a product",'woocommerce'),button:Object(o.__)("Single Product",'woocommerce')}}}]},{label:Object(o.__)("Comparison",'woocommerce'),value:"compare-products",chartMode:"item-comparison",settings:{type:"products",param:"products",getLabels:c.d,labels:{helpText:Object(o.__)("Check at least two products below to compare",'woocommerce'),placeholder:Object(o.__)("Search for products to compare",'woocommerce'),title:Object(o.__)("Compare Products",'woocommerce'),update:Object(o.__)("Compare",'woocommerce')}}}]},l={showFilters:function(e){return"single_product"===e.filter&&!!e.products&&e["is-variable"]},staticParams:["filter","products","chartType","paged","per_page"],param:"filter-variations",filters:[{label:Object(o.__)("All Variations",'woocommerce'),chartMode:"item-comparison",value:"all"},{label:Object(o.__)("Single Variation",'woocommerce'),value:"select_variation",subFilters:[{component:"Search",value:"single_variation",path:["select_variation"],settings:{type:"variations",param:"variations",getLabels:c.g,labels:{placeholder:Object(o.__)("Type to search for a variation",'woocommerce'),button:Object(o.__)("Single Variation",'woocommerce')}}}]},{label:Object(o.__)("Comparison",'woocommerce'),chartMode:"item-comparison",value:"compare-variations",settings:{type:"variations",param:"variations",getLabels:c.g,labels:{helpText:Object(o.__)("Check at least two variations below to compare",'woocommerce'),placeholder:Object(o.__)("Search for variations to compare",'woocommerce'),title:Object(o.__)("Compare Variations",'woocommerce'),update:Object(o.__)("Compare",'woocommerce')}}}]},s=Object(a.applyFilters)("woocommerce_admin_products_report_filters",[i,l]),m=Object(a.applyFilters)("woocommerce_admin_products_report_advanced_filters",{})},747:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return s}));var o=r(3),a=r(49),c=r(33),n=r(720),i=Object(a.applyFilters)("woocommerce_admin_orders_report_charts",[{key:"orders_count",label:Object(o.__)("Orders",'woocommerce'),type:"number"},{key:"net_revenue",label:Object(o.__)("Net Sales",'woocommerce'),order:"desc",orderby:"net_total",type:"currency"},{key:"avg_order_value",label:Object(o.__)("Average Order Value",'woocommerce'),type:"currency"},{key:"avg_items_per_order",label:Object(o.__)("Average Items Per Order",'woocommerce'),order:"desc",orderby:"num_items_sold",type:"average"}]),l=Object(a.applyFilters)("woocommerce_admin_orders_report_filters",[{label:Object(o.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(o.__)("All Orders",'woocommerce'),value:"all"},{label:Object(o.__)("Advanced Filters",'woocommerce'),value:"advanced"}]}]),s=Object(a.applyFilters)("woocommerce_admin_orders_report_advanced_filters",{title:Object(o._x)("Orders Match {{select /}} Filters","A sentence describing filters for Orders. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ",'woocommerce'),filters:{status:{labels:{add:Object(o.__)("Order Status",'woocommerce'),remove:Object(o.__)("Remove order status filter",'woocommerce'),rule:Object(o.__)("Select an order status filter match",'woocommerce'),title:Object(o.__)("{{title}}Order Status{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(o.__)("Select an order status",'woocommerce')},rules:[{value:"is",label:Object(o._x)("Is","order status",'woocommerce')},{value:"is_not",label:Object(o._x)("Is Not","order status",'woocommerce')}],input:{component:"SelectControl",options:Object.keys(c.d).map((function(e){return{value:e,label:c.d[e]}}))}},product:{labels:{add:Object(o.__)("Products",'woocommerce'),placeholder:Object(o.__)("Search products",'woocommerce'),remove:Object(o.__)("Remove products filter",'woocommerce'),rule:Object(o.__)("Select a product filter match",'woocommerce'),title:Object(o.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(o.__)("Select products",'woocommerce')},rules:[{value:"includes",label:Object(o._x)("Includes","products",'woocommerce')},{value:"excludes",label:Object(o._x)("Excludes","products",'woocommerce')}],input:{component:"Search",type:"products",getLabels:n.d}},coupon:{labels:{add:Object(o.__)("Coupon Codes",'woocommerce'),placeholder:Object(o.__)("Search coupons",'woocommerce'),remove:Object(o.__)("Remove coupon filter",'woocommerce'),rule:Object(o.__)("Select a coupon filter match",'woocommerce'),title:Object(o.__)("{{title}}Coupon Code{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(o.__)("Select coupon codes",'woocommerce')},rules:[{value:"includes",label:Object(o._x)("Includes","coupon code",'woocommerce')},{value:"excludes",label:Object(o._x)("Excludes","coupon code",'woocommerce')}],input:{component:"Search",type:"coupons",getLabels:n.b}},customer_type:{labels:{add:Object(o.__)("Customer Type",'woocommerce'),remove:Object(o.__)("Remove customer filter",'woocommerce'),rule:Object(o.__)("Select a customer filter match",'woocommerce'),title:Object(o.__)("{{title}}Customer is{{/title}} {{filter /}}",'woocommerce'),filter:Object(o.__)("Select a customer type",'woocommerce')},input:{component:"SelectControl",options:[{value:"new",label:Object(o.__)("New",'woocommerce')},{value:"returning",label:Object(o.__)("Returning",'woocommerce')}],defaultOption:"new"}},refunds:{labels:{add:Object(o.__)("Refunds",'woocommerce'),remove:Object(o.__)("Remove refunds filter",'woocommerce'),rule:Object(o.__)("Select a refund filter match",'woocommerce'),title:Object(o.__)("{{title}}Refunds{{/title}} {{filter /}}",'woocommerce'),filter:Object(o.__)("Select a refund type",'woocommerce')},input:{component:"SelectControl",options:[{value:"all",label:Object(o.__)("All",'woocommerce')},{value:"partial",label:Object(o.__)("Partially refunded",'woocommerce')},{value:"full",label:Object(o.__)("Fully refunded",'woocommerce')},{value:"none",label:Object(o.__)("None",'woocommerce')}],defaultOption:"all"}},tax_rate:{labels:{add:Object(o.__)("Tax Rates",'woocommerce'),placeholder:Object(o.__)("Search tax rates",'woocommerce'),remove:Object(o.__)("Remove tax rate filter",'woocommerce'),rule:Object(o.__)("Select a tax rate filter match",'woocommerce'),title:Object(o.__)("{{title}}Tax Rate{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(o.__)("Select tax rates",'woocommerce')},rules:[{value:"includes",label:Object(o._x)("Includes","tax rate",'woocommerce')},{value:"excludes",label:Object(o._x)("Excludes","tax rate",'woocommerce')}],input:{component:"Search",type:"taxes",getLabels:n.f}},attribute:{allowMultiple:!0,labels:{add:Object(o.__)("Attribute",'woocommerce'),placeholder:Object(o.__)("Search attributes",'woocommerce'),remove:Object(o.__)("Remove attribute filter",'woocommerce'),rule:Object(o.__)("Select a product attribute filter match",'woocommerce'),title:Object(o.__)("{{title}}Attribute{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(o.__)("Select attributes",'woocommerce')},rules:[{value:"is",label:Object(o._x)("Is","product attribute",'woocommerce')},{value:"is_not",label:Object(o._x)("Is Not","product attribute",'woocommerce')}],input:{component:"ProductAttribute"}}}})},748:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return l}));var o=r(3),a=r(49),c=r(720),n=Object(a.applyFilters)("woocommerce_admin_coupons_report_charts",[{key:"orders_count",label:Object(o.__)("Discounted Orders",'woocommerce'),order:"desc",orderby:"orders_count",type:"number"},{key:"amount",label:Object(o.__)("Amount",'woocommerce'),order:"desc",orderby:"amount",type:"currency"}]),i=Object(a.applyFilters)("woocommerce_admin_coupons_report_filters",[{label:Object(o.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(o.__)("All Coupons",'woocommerce'),value:"all"},{label:Object(o.__)("Single Coupon",'woocommerce'),value:"select_coupon",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_coupon",chartMode:"item-comparison",path:["select_coupon"],settings:{type:"coupons",param:"coupons",getLabels:c.b,labels:{placeholder:Object(o.__)("Type to search for a coupon",'woocommerce'),button:Object(o.__)("Single Coupon",'woocommerce')}}}]},{label:Object(o.__)("Comparison",'woocommerce'),value:"compare-coupons",settings:{type:"coupons",param:"coupons",getLabels:c.b,labels:{title:Object(o.__)("Compare Coupon Codes",'woocommerce'),update:Object(o.__)("Compare",'woocommerce'),helpText:Object(o.__)("Check at least two coupon codes below to compare",'woocommerce')}}}]}]),l=Object(a.applyFilters)("woocommerce_admin_coupon_report_advanced_filters",{})},749:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return m}));var o=r(3),a=r(49),c=r(41),n=r(720),i=r(721),l=Object(a.applyFilters)("woocommerce_admin_taxes_report_charts",[{key:"total_tax",label:Object(o.__)("Total Tax",'woocommerce'),order:"desc",orderby:"total_tax",type:"currency"},{key:"order_tax",label:Object(o.__)("Order Tax",'woocommerce'),order:"desc",orderby:"order_tax",type:"currency"},{key:"shipping_tax",label:Object(o.__)("Shipping Tax",'woocommerce'),order:"desc",orderby:"shipping_tax",type:"currency"},{key:"orders_count",label:Object(o.__)("Orders",'woocommerce'),order:"desc",orderby:"orders_count",type:"number"}]),s=Object(a.applyFilters)("woocommerce_admin_taxes_report_filters",[{label:Object(o.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(o.__)("All Taxes",'woocommerce'),value:"all"},{label:Object(o.__)("Comparison",'woocommerce'),value:"compare-taxes",chartMode:"item-comparison",settings:{type:"taxes",param:"taxes",getLabels:Object(n.e)(c.NAMESPACE+"/taxes",(function(e){return{id:e.id,label:Object(i.a)(e)}})),labels:{helpText:Object(o.__)("Check at least two tax codes below to compare",'woocommerce'),placeholder:Object(o.__)("Search for tax codes to compare",'woocommerce'),title:Object(o.__)("Compare Tax Codes",'woocommerce'),update:Object(o.__)("Compare",'woocommerce')}}}]}]),m=Object(a.applyFilters)("woocommerce_admin_taxes_report_advanced_filters",{})},750:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return p})),r.d(t,"a",(function(){return b}));var o,a,c=r(12),n=r.n(c),i=r(86),l=r.n(i),s=r(3),m=r(49),d=r(720),u=Object(m.applyFilters)("woocommerce_admin_downloads_report_charts",[{key:"download_count",label:Object(s.__)("Downloads",'woocommerce'),type:"number"}]),p=Object(m.applyFilters)("woocommerce_admin_downloads_report_filters",[{label:Object(s.__)("Show",'woocommerce'),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:function(){return!0},filters:[{label:Object(s.__)("All Downloads",'woocommerce'),value:"all"},{label:Object(s.__)("Advanced Filters",'woocommerce'),value:"advanced"}]}]),b=Object(m.applyFilters)("woocommerce_admin_downloads_report_advanced_filters",{title:Object(s._x)("Downloads Match {{select /}} Filters","A sentence describing filters for Downloads. See screen shot for context: https://cloudup.com/ccxhyH2mEDg",'woocommerce'),filters:{product:{labels:{add:Object(s.__)("Product",'woocommerce'),placeholder:Object(s.__)("Search",'woocommerce'),remove:Object(s.__)("Remove product filter",'woocommerce'),rule:Object(s.__)("Select a product filter match",'woocommerce'),title:Object(s.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(s.__)("Select product",'woocommerce')},rules:[{value:"includes",label:Object(s._x)("Includes","products",'woocommerce')},{value:"excludes",label:Object(s._x)("Excludes","products",'woocommerce')}],input:{component:"Search",type:"products",getLabels:d.d}},customer:{labels:{add:Object(s.__)("Username",'woocommerce'),placeholder:Object(s.__)("Search customer username",'woocommerce'),remove:Object(s.__)("Remove customer username filter",'woocommerce'),rule:Object(s.__)("Select a customer username filter match",'woocommerce'),title:Object(s.__)("{{title}}Username{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(s.__)("Select customer username",'woocommerce')},rules:[{value:"includes",label:Object(s._x)("Includes","customer usernames",'woocommerce')},{value:"excludes",label:Object(s._x)("Excludes","customer usernames",'woocommerce')}],input:{component:"Search",type:"usernames",getLabels:d.c}},order:{labels:{add:Object(s.__)("Order #",'woocommerce'),placeholder:Object(s.__)("Search order number",'woocommerce'),remove:Object(s.__)("Remove order number filter",'woocommerce'),rule:Object(s.__)("Select a order number filter match",'woocommerce'),title:Object(s.__)("{{title}}Order #{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(s.__)("Select order number",'woocommerce')},rules:[{value:"includes",label:Object(s._x)("Includes","order numbers",'woocommerce')},{value:"excludes",label:Object(s._x)("Excludes","order numbers",'woocommerce')}],input:{component:"Search",type:"orders",getLabels:(a=l()(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.split(","),e.next=3,r.map((function(e){return{id:e,label:"#"+e}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})}},ip_address:{labels:{add:Object(s.__)("IP Address",'woocommerce'),placeholder:Object(s.__)("Search IP address",'woocommerce'),remove:Object(s.__)("Remove IP address filter",'woocommerce'),rule:Object(s.__)("Select an IP address filter match",'woocommerce'),title:Object(s.__)("{{title}}IP Address{{/title}} {{rule /}} {{filter /}}",'woocommerce'),filter:Object(s.__)("Select IP address",'woocommerce')},rules:[{value:"includes",label:Object(s._x)("Includes","IP addresses",'woocommerce')},{value:"excludes",label:Object(s._x)("Excludes","IP addresses",'woocommerce')}],input:{component:"Search",type:"downloadIps",getLabels:(o=l()(n.a.mark((function e(t){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.split(","),e.next=3,r.map((function(e){return{id:e,label:e}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})}}}})},86:function(e,t){function r(e,t,r,o,a,c,n){try{var i=e[c](n),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(o,a)}e.exports=function(e){return function(){var t=this,o=arguments;return new Promise((function(a,c){var n=e.apply(t,o);function i(e){r(n,a,c,i,l,"next",e)}function l(e){r(n,a,c,i,l,"throw",e)}i(void 0)}))}}},887:function(e,t,r){},888:function(e,t,r){},911:function(e,t,r){"use strict";r.r(t);var o=r(5),a=r.n(o),c=r(38),n=r.n(c),i=r(60),l=r.n(i),s=r(0),m=r(3),d=r(4),u=r.n(d),p=r(90),b=r.n(p),_=r(1),f=r.n(_),y=r(689),O=r(509),h=r(72),j=r(68),w=r(41),v=r(35),g=r(61),k=r(14),x=r.n(k),S=r(13),C=r.n(S),P=r(10),R=r.n(P),E=r(16),T=r.n(E),D=r(17),F=r.n(D),q=r(6),A=r.n(q),I=r(32),N=r(33),L=r(722);r(887);function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=A()(e);if(t){var a=A()(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return F()(this,r)}}var B=function(e){T()(r,e);var t=M(r);function r(){var e;x()(this,r);for(var o=arguments.length,c=new Array(o),n=0;n<o;n++)c[n]=arguments[n];return e=t.call.apply(t,[this].concat(c)),a()(R()(e),"handleChartClick",(function(){var t=e.props.selectedChart;Object(I.getHistory)().push(e.getChartPath(t))})),e}return C()(r,[{key:"getChartPath",value:function(e){return Object(I.getNewPath)({chart:e.key},"/analytics/"+e.endpoint,Object(I.getPersistedQuery)())}},{key:"render",value:function(){var e=this.props,t=e.charts,r=e.endpoint,o=e.path,a=e.query,c=e.selectedChart,n=e.filters;return c?Object(s.createElement)("div",{role:"presentation",className:"woocommerce-dashboard__chart-block-wrapper",onClick:this.handleChartClick},Object(s.createElement)(j.Card,{className:"woocommerce-dashboard__chart-block woocommerce-analytics__card",title:c.label},Object(s.createElement)("a",{className:"screen-reader-text",href:Object(N.f)(this.getChartPath(c))},Object(m.sprintf)(Object(m.__)("%s Report",'woocommerce'),c.label)),Object(s.createElement)(L.a,{charts:t,endpoint:r,query:a,interactiveLegend:!1,legendPosition:"bottom",path:o,selectedChart:c,showHeaderControls:!1,filters:n}))):null}}]),r}(s.Component);B.propTypes={charts:f.a.array,endpoint:f.a.string.isRequired,path:f.a.string.isRequired,query:f.a.object.isRequired,selectedChart:f.a.object.isRequired};var V=B,H=r(49),U=r(747),Q=r(746),Y=r(745),G=r(748),J=r(749),z=r(750);function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W={revenue:Y.b,orders:U.b,products:Q.b,coupons:G.b,taxes:J.b,downloads:z.b},Z=[{label:Object(m.__)("Total Sales",'woocommerce'),report:"revenue",key:"total_sales"},{label:Object(m.__)("Net Sales",'woocommerce'),report:"revenue",key:"net_revenue"},{label:Object(m.__)("Orders",'woocommerce'),report:"orders",key:"orders_count"},{label:Object(m.__)("Average Order Value",'woocommerce'),report:"orders",key:"avg_order_value"},{label:Object(m.__)("Items Sold",'woocommerce'),report:"products",key:"items_sold"},{label:Object(m.__)("Returns",'woocommerce'),report:"revenue",key:"refunds"},{label:Object(m.__)("Discounted Orders",'woocommerce'),report:"coupons",key:"orders_count"},{label:Object(m.__)("Gross discounted",'woocommerce'),report:"coupons",key:"amount"},{label:Object(m.__)("Total Tax",'woocommerce'),report:"taxes",key:"total_tax"},{label:Object(m.__)("Order Tax",'woocommerce'),report:"taxes",key:"order_tax"},{label:Object(m.__)("Shipping Tax",'woocommerce'),report:"taxes",key:"shipping_tax"},{label:Object(m.__)("Shipping",'woocommerce'),report:"revenue",key:"shipping"},{label:Object(m.__)("Downloads",'woocommerce'),report:"downloads",key:"download_count"}],$=Object(H.applyFilters)("woocommerce_admin_dashboard_charts_filter",Z.map((function(e){return K(K({},W[e.report].find((function(t){return t.key===e.key}))),{},{label:e.label,endpoint:e.report})})));r(888);function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=function(e){var t=e.controls,r=e.hiddenBlocks,o=e.isFirst,a=e.isLast,c=e.onMove,i=e.onRemove,d=e.onTitleBlur,p=e.onTitleChange,_=e.onToggleHiddenBlock,f=e.path,k=e.title,x=e.titleInput,S=e.filters,C=Object(w.useUserPreferences)(),P=C.updateUserPreferences,R=l()(C,["updateUserPreferences"]),E=Object(s.useState)(R.dashboard_chart_type||"line"),T=n()(E,2),D=T[0],F=T[1],q=Object(s.useState)(R.dashboard_chart_interval||"day"),A=n()(q,2),I=A[0],N=A[1],L=te(te({},e.query),{},{chartType:D,interval:I}),M=function(e){return function(){F(e),P({dashboard_chart_type:e}),Object(g.recordEvent)("dash_charts_type_toggle",{chart_type:e})}};return Object(s.createElement)("div",{className:"woocommerce-dashboard__dashboard-charts"},Object(s.createElement)(j.SectionHeader,{title:k||Object(m.__)("Charts",'woocommerce'),menu:Object(s.createElement)(j.EllipsisMenu,{label:Object(m.__)("Choose which charts to display",'woocommerce'),renderContent:function(e){var n=e.onToggle;return Object(s.createElement)(s.Fragment,null,Object(s.createElement)(j.MenuTitle,null,Object(m.__)("Charts",'woocommerce')),function(e){var t=e.hiddenBlocks,r=e.onToggleHiddenBlock;return $.map((function(e){var o=e.endpoint+"_"+e.key,a=!t.includes(o);return Object(s.createElement)(j.MenuItem,{checked:a,isCheckbox:!0,isClickable:!0,key:e.endpoint+"_"+e.key,onInvoke:function(){r(o)(),Object(g.recordEvent)("dash_charts_chart_toggle",{status:a?"off":"on",key:o})}},e.label)}))}({hiddenBlocks:r,onToggleHiddenBlock:_}),window.wcAdminFeatures["analytics-dashboard/customizable"]&&Object(s.createElement)(t,{onToggle:n,onMove:c,onRemove:i,isFirst:o,isLast:a,onTitleBlur:d,onTitleChange:p,titleInput:x}))}}),className:"has-interval-select"},function(e){var t=e.chartInterval,r=e.setInterval,o=e.query,a=Object(v.getAllowedIntervalsForQuery)(o);if(!a||a.length<1)return null;var c={hour:Object(m.__)("By hour",'woocommerce'),day:Object(m.__)("By day",'woocommerce'),week:Object(m.__)("By week",'woocommerce'),month:Object(m.__)("By month",'woocommerce'),quarter:Object(m.__)("By quarter",'woocommerce'),year:Object(m.__)("By year",'woocommerce')};return Object(s.createElement)(y.a,{className:"woocommerce-chart__interval-select",value:t,options:a.map((function(e){return{value:e,label:c[e]}})),onChange:r})}({chartInterval:I,setInterval:function(e){N(e),P({dashboard_chart_interval:e}),Object(g.recordEvent)("dash_charts_interval",{interval:e})},query:L}),Object(s.createElement)(O.a,{className:"woocommerce-chart__types",orientation:"horizontal",role:"menubar"},Object(s.createElement)(h.a,{className:u()("woocommerce-chart__type-button",{"woocommerce-chart__type-button-selected":!L.chartType||"line"===L.chartType}),title:Object(m.__)("Line chart",'woocommerce'),"aria-checked":"line"===L.chartType,role:"menuitemradio",tabIndex:"line"===L.chartType?0:-1,onClick:M("line")},Object(s.createElement)(b.a,{icon:"line-graph"})),Object(s.createElement)(h.a,{className:u()("woocommerce-chart__type-button",{"woocommerce-chart__type-button-selected":"bar"===L.chartType}),title:Object(m.__)("Bar chart",'woocommerce'),"aria-checked":"bar"===L.chartType,role:"menuitemradio",tabIndex:"bar"===L.chartType?0:-1,onClick:M("bar")},Object(s.createElement)(b.a,{icon:"stats-alt"})))),function(e){var t=e.hiddenBlocks,r=e.path,o=e.query,a=e.filters,c=$.reduce((function(e,t){return void 0===e[t.endpoint]&&(e[t.endpoint]=[]),e[t.endpoint].push(t),e}),{});return Object(s.createElement)("div",{className:"woocommerce-dashboard__columns"},$.map((function(e){return t.includes(e.endpoint+"_"+e.key)?null:Object(s.createElement)(V,{charts:c[e.endpoint],endpoint:e.endpoint,key:e.endpoint+"_"+e.key,path:r,query:o,selectedChart:e,filters:a})})))}({hiddenBlocks:r,path:f,query:L,filters:S}))};re.propTypes={path:f.a.string.isRequired,query:f.a.object.isRequired};t.default=re}}]);