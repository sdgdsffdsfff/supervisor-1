!function(h){if(!("indexOf" in Array.prototype)){Array.prototype.indexOf=function(i,k){if(k===undefined){k=0;}if(k<0){k+=this.length;}if(k<0){k=0;}for(var j=this.length;k<j;k++){if(k in this&&this[k]===i){return k;}}return -1;};}function e(i){var l=h(i);var k=l.add(l.parents());var j=false;k.each(function(){if(h(this).css("position")==="fixed"){j=true;return false;}});return j;}function c(){return new Date(Date.UTC.apply(Date,arguments));}function f(){var i=new Date();return c(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate(),i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),0);}var b=function(m,l){var j=this;this.element=h(m);this.container=l.container||"body";this.language=l.language||this.element.data("date-language")||"en";this.language=this.language in a?this.language:this.language.split("-")[0];this.language=this.language in a?this.language:"en";this.isRTL=a[this.language].rtl||false;this.formatType=l.formatType||this.element.data("format-type")||"standard";this.format=g.parseFormat(l.format||this.element.data("date-format")||a[this.language].format||g.getDefaultFormat(this.formatType,"input"),this.formatType);this.isInline=false;this.isVisible=false;this.isInput=this.element.is("input");this.fontAwesome=l.fontAwesome||this.element.data("font-awesome")||false;this.bootcssVer=l.bootcssVer||(this.isInput?(this.element.is(".form-control")?3:2):(this.bootcssVer=this.element.is(".input-group")?3:2));this.component=this.element.is(".date")?(this.bootcssVer==3?this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-calendar, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent():this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar .fa-calendar .fa-clock-o").parent()):false;this.componentReset=this.element.is(".date")?(this.bootcssVer==3?this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent():this.element.find(".add-on .icon-remove, .add-on .fa-times").parent()):false;this.hasInput=this.component&&this.element.find("input").length;if(this.component&&this.component.length===0){this.component=false;}this.linkField=l.linkField||this.element.data("link-field")||false;this.linkFormat=g.parseFormat(l.linkFormat||this.element.data("link-format")||g.getDefaultFormat(this.formatType,"link"),this.formatType);this.minuteStep=l.minuteStep||this.element.data("minute-step")||5;this.pickerPosition=l.pickerPosition||this.element.data("picker-position")||"bottom-right";this.showMeridian=l.showMeridian||this.element.data("show-meridian")||false;this.initialDate=l.initialDate||new Date();this.zIndex=l.zIndex||this.element.data("z-index")||undefined;this.icons={leftArrow:this.fontAwesome?"fa-arrow-left":(this.bootcssVer===3?"glyphicon-arrow-left":"icon-arrow-left"),rightArrow:this.fontAwesome?"fa-arrow-right":(this.bootcssVer===3?"glyphicon-arrow-right":"icon-arrow-right")};this.icontype=this.fontAwesome?"fa":"glyphicon";this._attachEvents();this.clickedOutside=function(n){if(h(n.target).closest(".datetimepicker").length===0){j.hide();}};this.formatViewType="datetime";if("formatViewType" in l){this.formatViewType=l.formatViewType;}else{if("formatViewType" in this.element.data()){this.formatViewType=this.element.data("formatViewType");}}this.minView=0;if("minView" in l){this.minView=l.minView;}else{if("minView" in this.element.data()){this.minView=this.element.data("min-view");}}this.minView=g.convertViewMode(this.minView);this.maxView=g.modes.length-1;if("maxView" in l){this.maxView=l.maxView;}else{if("maxView" in this.element.data()){this.maxView=this.element.data("max-view");}}this.maxView=g.convertViewMode(this.maxView);this.wheelViewModeNavigation=false;if("wheelViewModeNavigation" in l){this.wheelViewModeNavigation=l.wheelViewModeNavigation;}else{if("wheelViewModeNavigation" in this.element.data()){this.wheelViewModeNavigation=this.element.data("view-mode-wheel-navigation");}}this.wheelViewModeNavigationInverseDirection=false;if("wheelViewModeNavigationInverseDirection" in l){this.wheelViewModeNavigationInverseDirection=l.wheelViewModeNavigationInverseDirection;}else{if("wheelViewModeNavigationInverseDirection" in this.element.data()){this.wheelViewModeNavigationInverseDirection=this.element.data("view-mode-wheel-navigation-inverse-dir");}}this.wheelViewModeNavigationDelay=100;if("wheelViewModeNavigationDelay" in l){this.wheelViewModeNavigationDelay=l.wheelViewModeNavigationDelay;}else{if("wheelViewModeNavigationDelay" in this.element.data()){this.wheelViewModeNavigationDelay=this.element.data("view-mode-wheel-navigation-delay");}}this.startViewMode=2;if("startView" in l){this.startViewMode=l.startView;}else{if("startView" in this.element.data()){this.startViewMode=this.element.data("start-view");}}this.startViewMode=g.convertViewMode(this.startViewMode);this.viewMode=this.startViewMode;this.viewSelect=this.minView;if("viewSelect" in l){this.viewSelect=l.viewSelect;}else{if("viewSelect" in this.element.data()){this.viewSelect=this.element.data("view-select");}}this.viewSelect=g.convertViewMode(this.viewSelect);this.forceParse=true;if("forceParse" in l){this.forceParse=l.forceParse;}else{if("dateForceParse" in this.element.data()){this.forceParse=this.element.data("date-force-parse");}}var i=this.bootcssVer===3?g.templateV3:g.template;while(i.indexOf("{iconType}")!==-1){i=i.replace("{iconType}",this.icontype);}while(i.indexOf("{leftArrow}")!==-1){i=i.replace("{leftArrow}",this.icons.leftArrow);}while(i.indexOf("{rightArrow}")!==-1){i=i.replace("{rightArrow}",this.icons.rightArrow);}this.picker=h(i).appendTo(this.isInline?this.element:this.container).on({click:h.proxy(this.click,this),mousedown:h.proxy(this.mousedown,this)});if(this.wheelViewModeNavigation){if(h.fn.mousewheel){this.picker.on({mousewheel:h.proxy(this.mousewheel,this)});}else{console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option");}}if(this.isInline){this.picker.addClass("datetimepicker-inline");}else{this.picker.addClass("datetimepicker-dropdown-"+this.pickerPosition+" dropdown-menu");}if(this.isRTL){this.picker.addClass("datetimepicker-rtl");var k=this.bootcssVer===3?".prev span, .next span":".prev i, .next i";this.picker.find(k).toggleClass(this.icons.leftArrow+" "+this.icons.rightArrow);}h(document).on("mousedown",this.clickedOutside);this.autoclose=false;if("autoclose" in l){this.autoclose=l.autoclose;}else{if("dateAutoclose" in this.element.data()){this.autoclose=this.element.data("date-autoclose");}}this.keyboardNavigation=true;if("keyboardNavigation" in l){this.keyboardNavigation=l.keyboardNavigation;}else{if("dateKeyboardNavigation" in this.element.data()){this.keyboardNavigation=this.element.data("date-keyboard-navigation");}}this.todayBtn=(l.todayBtn||this.element.data("date-today-btn")||false);this.todayHighlight=(l.todayHighlight||this.element.data("date-today-highlight")||false);this.weekStart=((l.weekStart||this.element.data("date-weekstart")||a[this.language].weekStart||0)%7);this.weekEnd=((this.weekStart+6)%7);this.startDate=-Infinity;this.endDate=Infinity;this.daysOfWeekDisabled=[];this.setStartDate(l.startDate||this.element.data("date-startdate"));this.setEndDate(l.endDate||this.element.data("date-enddate"));this.setDaysOfWeekDisabled(l.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled"));this.setMinutesDisabled(l.minutesDisabled||this.element.data("date-minute-disabled"));this.setHoursDisabled(l.hoursDisabled||this.element.data("date-hour-disabled"));this.fillDow();this.fillMonths();this.update();this.showMode();if(this.isInline){this.show();}};b.prototype={constructor:b,_events:[],_attachEvents:function(){this._detachEvents();if(this.isInput){this._events=[[this.element,{focus:h.proxy(this.show,this),keyup:h.proxy(this.update,this),keydown:h.proxy(this.keydown,this)}]];}else{if(this.component&&this.hasInput){this._events=[[this.element.find("input"),{focus:h.proxy(this.show,this),keyup:h.proxy(this.update,this),keydown:h.proxy(this.keydown,this)}],[this.component,{click:h.proxy(this.show,this)}]];if(this.componentReset){this._events.push([this.componentReset,{click:h.proxy(this.reset,this)}]);}}else{if(this.element.is("div")){this.isInline=true;}else{this._events=[[this.element,{click:h.proxy(this.show,this)}]];}}}for(var k=0,i,j;k<this._events.length;k++){i=this._events[k][0];j=this._events[k][1];i.on(j);}},_detachEvents:function(){for(var k=0,i,j;k<this._events.length;k++){i=this._events[k][0];j=this._events[k][1];i.off(j);}this._events=[];},show:function(i){this.picker.show();this.height=this.component?this.component.outerHeight():this.element.outerHeight();if(this.forceParse){this.update();}this.place();h(window).on("resize",h.proxy(this.place,this));if(i){i.stopPropagation();i.preventDefault();}this.isVisible=true;this.element.trigger({type:"show",date:this.date});},hide:function(i){if(!this.isVisible){return;}if(this.isInline){return;}this.picker.hide();h(window).off("resize",this.place);this.viewMode=this.startViewMode;this.showMode();if(!this.isInput){h(document).off("mousedown",this.hide);}if(this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())){this.setValue();}this.isVisible=false;this.element.trigger({type:"hide",date:this.date});},remove:function(){this._detachEvents();h(document).off("mousedown",this.clickedOutside);this.picker.remove();delete this.picker;delete this.element.data().datetimepicker;},getDate:function(){var i=this.getUTCDate();return new Date(i.getTime()+(i.getTimezoneOffset()*60000));},getUTCDate:function(){return this.date;},setDate:function(i){this.setUTCDate(new Date(i.getTime()-(i.getTimezoneOffset()*60000)));},setUTCDate:function(i){if(i>=this.startDate&&i<=this.endDate){this.date=i;this.setValue();this.viewDate=this.date;this.fill();}else{this.element.trigger({type:"outOfRange",date:i,startDate:this.startDate,endDate:this.endDate});}},setFormat:function(j){this.format=g.parseFormat(j,this.formatType);var i;if(this.isInput){i=this.element;}else{if(this.component){i=this.element.find("input");}}if(i&&i.val()){this.setValue();}},setValue:function(){var i=this.getFormattedDate();if(!this.isInput){if(this.component){this.element.find("input").val(i);}this.element.data("date",i);}else{this.element.val(i);}if(this.linkField){h("#"+this.linkField).val(this.getFormattedDate(this.linkFormat));}},getFormattedDate:function(i){if(i==undefined){i=this.format;}return g.formatDate(this.date,i,this.language,this.formatType);},setStartDate:function(i){this.startDate=i||-Infinity;if(this.startDate!==-Infinity){this.startDate=g.parseDate(this.startDate,this.format,this.language,this.formatType);}this.update();this.updateNavArrows();},setEndDate:function(i){this.endDate=i||Infinity;if(this.endDate!==Infinity){this.endDate=g.parseDate(this.endDate,this.format,this.language,this.formatType);}this.update();this.updateNavArrows();},setDaysOfWeekDisabled:function(i){this.daysOfWeekDisabled=i||[];if(!h.isArray(this.daysOfWeekDisabled)){this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/);}this.daysOfWeekDisabled=h.map(this.daysOfWeekDisabled,function(j){return parseInt(j,10);});this.update();this.updateNavArrows();},setMinutesDisabled:function(i){this.minutesDisabled=i||[];if(!h.isArray(this.minutesDisabled)){this.minutesDisabled=this.minutesDisabled.split(/,\s*/);}this.minutesDisabled=h.map(this.minutesDisabled,function(j){return parseInt(j,10);});this.update();this.updateNavArrows();},setHoursDisabled:function(i){this.hoursDisabled=i||[];if(!h.isArray(this.hoursDisabled)){this.hoursDisabled=this.hoursDisabled.split(/,\s*/);}this.hoursDisabled=h.map(this.hoursDisabled,function(j){return parseInt(j,10);});this.update();this.updateNavArrows();},place:function(){if(this.isInline){return;}if(!this.zIndex){var m=0;h("div").each(function(){var o=parseInt(h(this).css("zIndex"),10);if(o>m){m=o;}});this.zIndex=m+10;}var k,j,i,n;if(this.container instanceof h){n=this.container.offset();}else{n=h(this.container).offset();}if(this.component){k=this.component.offset();i=k.left;if(this.pickerPosition=="bottom-left"||this.pickerPosition=="top-left"){i+=this.component.outerWidth()-this.picker.outerWidth();}}else{k=this.element.offset();i=k.left;}var l=document.body.clientWidth||window.innerWidth;if(i+220>l){i=l-220;}if(this.pickerPosition=="top-left"||this.pickerPosition=="top-right"){j=k.top-this.picker.outerHeight();}else{j=k.top+this.height;}j=j-n.top;i=i-n.left;if(!e(this.element)){j=j+document.body.scrollTop;}this.picker.css({top:(j-document.body.scrollTop)+10,left:i,zIndex:this.zIndex});},update:function(){var i,j=false;if(arguments&&arguments.length&&(typeof arguments[0]==="string"||arguments[0] instanceof Date)){i=arguments[0];j=true;}else{i=(this.isInput?this.element.val():this.element.find("input").val())||this.element.data("date")||this.initialDate;if(typeof i=="string"||i instanceof String){i=i.replace(/^\s+|\s+$/g,"");}}if(!i){i=new Date();j=false;}this.date=g.parseDate(i,this.format,this.language,this.formatType);if(j){this.setValue();}if(this.date<this.startDate){this.viewDate=new Date(this.startDate);}else{if(this.date>this.endDate){this.viewDate=new Date(this.endDate);}else{this.viewDate=new Date(this.date);}}this.fill();},fillDow:function(){var i=this.weekStart,j="<tr>";while(i<this.weekStart+7){j+='<th class="dow">'+a[this.language].daysMin[(i++)%7]+"</th>";}j+="</tr>";this.picker.find(".datetimepicker-days thead").append(j);},fillMonths:function(){var j="",i=0;while(i<12){j+='<span class="month">'+a[this.language].monthsShort[i++]+"</span>";}this.picker.find(".datetimepicker-months td").html(j);},fill:function(){if(this.date==null||this.viewDate==null){return;}var v=new Date(this.viewDate),r=v.getUTCFullYear(),x=v.getUTCMonth(),G=v.getUTCDate(),n=v.getUTCHours(),B=v.getUTCMinutes(),F=this.startDate!==-Infinity?this.startDate.getUTCFullYear():-Infinity,p=this.startDate!==-Infinity?this.startDate.getUTCMonth()+1:-Infinity,j=this.endDate!==Infinity?this.endDate.getUTCFullYear():Infinity,K=this.endDate!==Infinity?this.endDate.getUTCMonth()+1:Infinity,l=(new c(this.date.getUTCFullYear(),this.date.getUTCMonth(),this.date.getUTCDate())).valueOf(),t=new Date();this.picker.find(".datetimepicker-days thead th:eq(1)").text(a[this.language].months[x]+" "+r);if(this.formatViewType=="time"){var A=this.getFormattedDate();this.picker.find(".datetimepicker-hours thead th:eq(1)").text(A);this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(A);}else{this.picker.find(".datetimepicker-hours thead th:eq(1)").text(G+" "+a[this.language].months[x]+" "+r);this.picker.find(".datetimepicker-minutes thead th:eq(1)").text(G+" "+a[this.language].months[x]+" "+r);}this.picker.find("tfoot th.today").text(a[this.language].today).toggle(this.todayBtn!==false);this.updateNavArrows();this.fillMonths();var H=c(r,x-1,28,0,0,0,0),m=g.getDaysInMonth(H.getUTCFullYear(),H.getUTCMonth());H.setUTCDate(m);H.setUTCDate(m-(H.getUTCDay()-this.weekStart+7)%7);var z=new Date(H);z.setUTCDate(z.getUTCDate()+42);z=z.valueOf();var o=[];var u;while(H.valueOf()<z){if(H.getUTCDay()==this.weekStart){o.push("<tr>");}u="";if(H.getUTCFullYear()<r||(H.getUTCFullYear()==r&&H.getUTCMonth()<x)){u+=" old";}else{if(H.getUTCFullYear()>r||(H.getUTCFullYear()==r&&H.getUTCMonth()>x)){u+=" new";}}if(this.todayHighlight&&H.getUTCFullYear()==t.getFullYear()&&H.getUTCMonth()==t.getMonth()&&H.getUTCDate()==t.getDate()){u+=" today";}if(H.valueOf()==l){u+=" active";}if((H.valueOf()+86400000)<=this.startDate||H.valueOf()>this.endDate||h.inArray(H.getUTCDay(),this.daysOfWeekDisabled)!==-1){u+=" disabled";}o.push('<td class="day'+u+'">'+H.getUTCDate()+"</td>");if(H.getUTCDay()==this.weekEnd){o.push("</tr>");}H.setUTCDate(H.getUTCDate()+1);}this.picker.find(".datetimepicker-days tbody").empty().append(o.join(""));o=[];var w="",s="",q="";var D=this.hoursDisabled||[];for(var k=0;k<24;k++){if(D.indexOf(k)!==-1){continue;}var y=c(r,x,G,k);u="";if((y.valueOf()+3600000)<=this.startDate||y.valueOf()>this.endDate){u+=" disabled";}else{if(n==k){u+=" active";}}if(this.showMeridian&&a[this.language].meridiem.length==2){s=(k<12?a[this.language].meridiem[0]:a[this.language].meridiem[1]);if(s!=q){if(q!=""){o.push("</fieldset>");}o.push('<fieldset class="hour"><legend>'+s.toUpperCase()+"</legend>");}q=s;w=(k%12?k%12:12);o.push('<span class="hour'+u+" hour_"+(k<12?"am":"pm")+'">'+w+"</span>");if(k==23){o.push("</fieldset>");}}else{w=k+":00";o.push('<span class="hour'+u+'">'+w+"</span>");}}this.picker.find(".datetimepicker-hours td").html(o.join(""));o=[];w="",s="",q="";var E=this.minutesDisabled||[];for(var k=0;k<60;k+=this.minuteStep){if(E.indexOf(k)!==-1){continue;}var y=c(r,x,G,n,k,0);u="";if(y.valueOf()<this.startDate||y.valueOf()>this.endDate){u+=" disabled";}else{if(Math.floor(B/this.minuteStep)==Math.floor(k/this.minuteStep)){u+=" active";}}if(this.showMeridian&&a[this.language].meridiem.length==2){s=(n<12?a[this.language].meridiem[0]:a[this.language].meridiem[1]);if(s!=q){if(q!=""){o.push("</fieldset>");}o.push('<fieldset class="minute"><legend>'+s.toUpperCase()+"</legend>");}q=s;w=(n%12?n%12:12);o.push('<span class="minute'+u+'">'+w+":"+(k<10?"0"+k:k)+"</span>");if(k==59){o.push("</fieldset>");}}else{w=k+":00";o.push('<span class="minute'+u+'">'+n+":"+(k<10?"0"+k:k)+"</span>");}}this.picker.find(".datetimepicker-minutes td").html(o.join(""));var J=this.date.getUTCFullYear();var i=this.picker.find(".datetimepicker-months").find("th:eq(1)").text(r).end().find("span").removeClass("active");if(J==r){var I=i.length-12;i.eq(this.date.getUTCMonth()+I).addClass("active");}if(r<F||r>j){i.addClass("disabled");}if(r==F){i.slice(0,p+1).addClass("disabled");}if(r==j){i.slice(K).addClass("disabled");}o="";r=parseInt(r/10,10)*10;var C=this.picker.find(".datetimepicker-years").find("th:eq(1)").text(r+"-"+(r+9)).end().find("td");r-=1;for(var k=-1;k<11;k++){o+='<span class="year'+(k==-1||k==10?" old":"")+(J==r?" active":"")+(r<F||r>j?" disabled":"")+'">'+r+"</span>";r+=1;}C.html(o);this.place();},updateNavArrows:function(){var j=new Date(this.viewDate),m=j.getUTCFullYear(),i=j.getUTCMonth(),l=j.getUTCDate(),k=j.getUTCHours();switch(this.viewMode){case 0:if(this.startDate!==-Infinity&&m<=this.startDate.getUTCFullYear()&&i<=this.startDate.getUTCMonth()&&l<=this.startDate.getUTCDate()&&k<=this.startDate.getUTCHours()){this.picker.find(".prev").css({visibility:"hidden"});}else{this.picker.find(".prev").css({visibility:"visible"});}if(this.endDate!==Infinity&&m>=this.endDate.getUTCFullYear()&&i>=this.endDate.getUTCMonth()&&l>=this.endDate.getUTCDate()&&k>=this.endDate.getUTCHours()){this.picker.find(".next").css({visibility:"hidden"});}else{this.picker.find(".next").css({visibility:"visible"});}break;case 1:if(this.startDate!==-Infinity&&m<=this.startDate.getUTCFullYear()&&i<=this.startDate.getUTCMonth()&&l<=this.startDate.getUTCDate()){this.picker.find(".prev").css({visibility:"hidden"});}else{this.picker.find(".prev").css({visibility:"visible"});}if(this.endDate!==Infinity&&m>=this.endDate.getUTCFullYear()&&i>=this.endDate.getUTCMonth()&&l>=this.endDate.getUTCDate()){this.picker.find(".next").css({visibility:"hidden"});}else{this.picker.find(".next").css({visibility:"visible"});}break;case 2:if(this.startDate!==-Infinity&&m<=this.startDate.getUTCFullYear()&&i<=this.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"});}else{this.picker.find(".prev").css({visibility:"visible"});}if(this.endDate!==Infinity&&m>=this.endDate.getUTCFullYear()&&i>=this.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"});}else{this.picker.find(".next").css({visibility:"visible"});}break;case 3:case 4:if(this.startDate!==-Infinity&&m<=this.startDate.getUTCFullYear()){this.picker.find(".prev").css({visibility:"hidden"});}else{this.picker.find(".prev").css({visibility:"visible"});}if(this.endDate!==Infinity&&m>=this.endDate.getUTCFullYear()){this.picker.find(".next").css({visibility:"hidden"});}else{this.picker.find(".next").css({visibility:"visible"});}break;}},mousewheel:function(l){l.preventDefault();l.stopPropagation();if(this.wheelPause){return;}this.wheelPause=true;var k=l.originalEvent;var j=k.wheelDelta;var i=j>0?1:(j===0)?0:-1;if(this.wheelViewModeNavigationInverseDirection){i=-i;}this.showMode(i);setTimeout(h.proxy(function(){this.wheelPause=false;},this),this.wheelViewModeNavigationDelay);},click:function(k){k.stopPropagation();k.preventDefault();var l=h(k.target).closest("span, td, th, legend");if(l.is("."+this.icontype)){l=h(l).parent().closest("span, td, th, legend");}if(l.length==1){if(l.is(".disabled")){this.element.trigger({type:"outOfRange",date:this.viewDate,startDate:this.startDate,endDate:this.endDate});return;}switch(l[0].nodeName.toLowerCase()){case"th":switch(l[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var r=g.modes[this.viewMode].navStep*(l[0].className=="prev"?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveHour(this.viewDate,r);break;case 1:this.viewDate=this.moveDate(this.viewDate,r);break;case 2:this.viewDate=this.moveMonth(this.viewDate,r);break;case 3:case 4:this.viewDate=this.moveYear(this.viewDate,r);break;}this.fill();this.element.trigger({type:l[0].className+":"+this.convertViewModeText(this.viewMode),date:this.viewDate,startDate:this.startDate,endDate:this.endDate});break;case"today":var s=new Date();s=c(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours(),s.getMinutes(),s.getSeconds(),0);if(s<this.startDate){s=this.startDate;}else{if(s>this.endDate){s=this.endDate;}}this.viewMode=this.startViewMode;this.showMode(0);this._setDate(s);this.fill();if(this.autoclose){this.hide();}break;}break;case"span":if(!l.is(".disabled")){var n=this.viewDate.getUTCFullYear(),m=this.viewDate.getUTCMonth(),o=this.viewDate.getUTCDate(),p=this.viewDate.getUTCHours(),i=this.viewDate.getUTCMinutes(),q=this.viewDate.getUTCSeconds();if(l.is(".month")){this.viewDate.setUTCDate(1);m=l.parent().find("span").index(l);o=this.viewDate.getUTCDate();this.viewDate.setUTCMonth(m);this.element.trigger({type:"changeMonth",date:this.viewDate});if(this.viewSelect>=3){this._setDate(c(n,m,o,p,i,q,0));}}else{if(l.is(".year")){this.viewDate.setUTCDate(1);n=parseInt(l.text(),10)||0;this.viewDate.setUTCFullYear(n);this.element.trigger({type:"changeYear",date:this.viewDate});if(this.viewSelect>=4){this._setDate(c(n,m,o,p,i,q,0));}}else{if(l.is(".hour")){p=parseInt(l.text(),10)||0;if(l.hasClass("hour_am")||l.hasClass("hour_pm")){if(p==12&&l.hasClass("hour_am")){p=0;}else{if(p!=12&&l.hasClass("hour_pm")){p+=12;}}}this.viewDate.setUTCHours(p);this.element.trigger({type:"changeHour",date:this.viewDate});if(this.viewSelect>=1){this._setDate(c(n,m,o,p,i,q,0));}}else{if(l.is(".minute")){i=parseInt(l.text().substr(l.text().indexOf(":")+1),10)||0;this.viewDate.setUTCMinutes(i);this.element.trigger({type:"changeMinute",date:this.viewDate});if(this.viewSelect>=0){this._setDate(c(n,m,o,p,i,q,0));}}}}}if(this.viewMode!=0){var j=this.viewMode;this.showMode(-1);this.fill();if(j==this.viewMode&&this.autoclose){this.hide();}}else{this.fill();if(this.autoclose){this.hide();}}}break;case"td":if(l.is(".day")&&!l.is(".disabled")){var o=parseInt(l.text(),10)||1;var n=this.viewDate.getUTCFullYear(),m=this.viewDate.getUTCMonth(),p=this.viewDate.getUTCHours(),i=this.viewDate.getUTCMinutes(),q=this.viewDate.getUTCSeconds();if(l.is(".old")){if(m===0){m=11;n-=1;}else{m-=1;}}else{if(l.is(".new")){if(m==11){m=0;n+=1;}else{m+=1;}}}this.viewDate.setUTCFullYear(n);this.viewDate.setUTCMonth(m,o);this.element.trigger({type:"changeDay",date:this.viewDate});if(this.viewSelect>=2){this._setDate(c(n,m,o,p,i,q,0));}}var j=this.viewMode;this.showMode(-1);this.fill();if(j==this.viewMode&&this.autoclose){this.hide();}break;}}},_setDate:function(k,j){if(!j||j=="date"){this.date=k;}if(!j||j=="view"){this.viewDate=k;}this.fill();this.setValue();var i;if(this.isInput){i=this.element;}else{if(this.component){i=this.element.find("input");}}if(i){i.change();if(this.autoclose&&(!j||j=="date")){}}this.element.trigger({type:"changeDate",date:this.date});if(k==null){this.date=this.viewDate;}},moveMinute:function(i,k){if(!k){return i;}var j=new Date(i.valueOf());j.setUTCMinutes(j.getUTCMinutes()+(k*this.minuteStep));return j;},moveHour:function(i,k){if(!k){return i;}var j=new Date(i.valueOf());j.setUTCHours(j.getUTCHours()+k);return j;},moveDate:function(i,k){if(!k){return i;}var j=new Date(i.valueOf());j.setUTCDate(j.getUTCDate()+k);return j;},moveMonth:function(q,i){if(!i){return q;}var l=new Date(q.valueOf()),p=l.getUTCDate(),m=l.getUTCMonth(),k=Math.abs(i),o,n;i=i>0?1:-1;if(k==1){n=i==-1?function(){return l.getUTCMonth()==m;}:function(){return l.getUTCMonth()!=o;};o=m+i;l.setUTCMonth(o);if(o<0||o>11){o=(o+12)%12;}}else{for(var j=0;j<k;j++){l=this.moveMonth(l,i);}o=l.getUTCMonth();l.setUTCDate(p);n=function(){return o!=l.getUTCMonth();};}while(n()){l.setUTCDate(--p);l.setUTCMonth(o);}return l;},moveYear:function(j,i){return this.moveMonth(j,i*12);},dateWithinRange:function(i){return i>=this.startDate&&i<=this.endDate;},keydown:function(m){if(this.picker.is(":not(:visible)")){if(m.keyCode==27){this.show();}return;}var o=false,j,p,n,q,i;switch(m.keyCode){case 27:this.hide();m.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation){break;}j=m.keyCode==37?-1:1;viewMode=this.viewMode;if(m.ctrlKey){viewMode+=2;}else{if(m.shiftKey){viewMode+=1;}}if(viewMode==4){q=this.moveYear(this.date,j);i=this.moveYear(this.viewDate,j);}else{if(viewMode==3){q=this.moveMonth(this.date,j);i=this.moveMonth(this.viewDate,j);}else{if(viewMode==2){q=this.moveDate(this.date,j);i=this.moveDate(this.viewDate,j);}else{if(viewMode==1){q=this.moveHour(this.date,j);i=this.moveHour(this.viewDate,j);}else{if(viewMode==0){q=this.moveMinute(this.date,j);i=this.moveMinute(this.viewDate,j);}}}}}if(this.dateWithinRange(q)){this.date=q;this.viewDate=i;this.setValue();this.update();m.preventDefault();o=true;}break;case 38:case 40:if(!this.keyboardNavigation){break;}j=m.keyCode==38?-1:1;viewMode=this.viewMode;if(m.ctrlKey){viewMode+=2;}else{if(m.shiftKey){viewMode+=1;}}if(viewMode==4){q=this.moveYear(this.date,j);i=this.moveYear(this.viewDate,j);}else{if(viewMode==3){q=this.moveMonth(this.date,j);i=this.moveMonth(this.viewDate,j);}else{if(viewMode==2){q=this.moveDate(this.date,j*7);i=this.moveDate(this.viewDate,j*7);}else{if(viewMode==1){if(this.showMeridian){q=this.moveHour(this.date,j*6);i=this.moveHour(this.viewDate,j*6);}else{q=this.moveHour(this.date,j*4);i=this.moveHour(this.viewDate,j*4);}}else{if(viewMode==0){q=this.moveMinute(this.date,j*4);i=this.moveMinute(this.viewDate,j*4);}}}}}if(this.dateWithinRange(q)){this.date=q;this.viewDate=i;this.setValue();this.update();m.preventDefault();o=true;}break;case 13:if(this.viewMode!=0){var l=this.viewMode;this.showMode(-1);this.fill();if(l==this.viewMode&&this.autoclose){this.hide();}}else{this.fill();if(this.autoclose){this.hide();}}m.preventDefault();break;case 9:this.hide();break;}if(o){var k;if(this.isInput){k=this.element;}else{if(this.component){k=this.element.find("input");}}if(k){k.change();}this.element.trigger({type:"changeDate",date:this.date});}},showMode:function(i){if(i){var j=Math.max(0,Math.min(g.modes.length-1,this.viewMode+i));if(j>=this.minView&&j<=this.maxView){this.element.trigger({type:"changeMode",date:this.viewDate,oldViewMode:this.viewMode,newViewMode:j});this.viewMode=j;}}this.picker.find(">div").hide().filter(".datetimepicker-"+g.modes[this.viewMode].clsName).css("display","block");this.updateNavArrows();},reset:function(i){this._setDate(null,"date");},convertViewModeText:function(i){switch(i){case 4:return"decade";case 3:return"year";case 2:return"month";case 1:return"day";case 0:return"hour";}}};var d=h.fn.datetimepicker;h.fn.datetimepicker=function(j){var k=Array.apply(null,arguments);k.shift();var i;this.each(function(){var l=h(this),n=l.data("datetimepicker"),m=typeof j=="object"&&j;if(!n){l.data("datetimepicker",(n=new b(this,h.extend({},h.fn.datetimepicker.defaults,m))));}if(typeof j=="string"&&typeof n[j]=="function"){i=n[j].apply(n,k);if(i!==undefined){return false;}}});if(i!==undefined){return i;}else{return this;}};h.fn.datetimepicker.defaults={};h.fn.datetimepicker.Constructor=b;var a=h.fn.datetimepicker.dates={en:{days:["周日","周一","周二","周三","周四","周五","周六","周日"],daysShort:["周日","周一","周二","周三","周四","周五","周六","周日"],daysMin:["日","一","二","三","四","五","六","日"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthsShort:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],meridiem:["上午","下午"],suffix:["st","nd","rd","th"],today:"今天"}};var g={modes:[{clsName:"minutes",navFnc:"Hours",navStep:1},{clsName:"hours",navFnc:"Date",navStep:1},{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(i){return(((i%4===0)&&(i%100!==0))||(i%400===0));},getDaysInMonth:function(i,j){return[31,(g.isLeapYear(i)?29:28),31,30,31,30,31,31,30,31,30,31][j];},getDefaultFormat:function(i,j){if(i=="standard"){if(j=="input"){return"yyyy-mm-dd hh:ii";}else{return"yyyy-mm-dd hh:ii:ss";}}else{if(i=="php"){if(j=="input"){return"Y-m-d H:i";}else{return"Y-m-d H:i:s";}}else{throw new Error("Invalid format type.");}}},validParts:function(i){if(i=="standard"){return/hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;}else{if(i=="php"){return/[dDjlNwzFmMnStyYaABgGhHis]/g;}else{throw new Error("Invalid format type.");}}},nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,parseFormat:function(j,l){var k=j.replace(this.validParts(l),"\0").split("\0"),i=j.match(this.validParts(l));if(!k||!k.length||!i||i.length==0){throw new Error("Invalid date format.");}return{separators:k,parts:i};},parseDate:function(n,x,r,v){if(n instanceof Date){var i=new Date(n.valueOf()-n.getTimezoneOffset()*60000);i.setMilliseconds(0);return i;}if(/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(n)){x=this.parseFormat("yyyy-mm-dd",v);}if(/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(n)){x=this.parseFormat("yyyy-mm-dd hh:ii",v);}if(/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(n)){x=this.parseFormat("yyyy-mm-dd hh:ii:ss",v);}if(/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(n)){var j=/([-+]\d+)([dmwy])/,o=n.match(/([-+]\d+)([dmwy])/g),k,m;n=new Date();for(var q=0;q<o.length;q++){k=j.exec(o[q]);m=parseInt(k[1]);switch(k[2]){case"d":n.setUTCDate(n.getUTCDate()+m);break;case"m":n=b.prototype.moveMonth.call(b.prototype,n,m);break;case"w":n.setUTCDate(n.getUTCDate()+m*7);break;case"y":n=b.prototype.moveYear.call(b.prototype,n,m);break;}}return c(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds(),0);}var o=n&&n.toString().match(this.nonpunctuation)||[],n=new Date(0,0,0,0,0,0,0),u={},w=["hh","h","ii","i","ss","s","yyyy","yy","M","MM","m","mm","D","DD","d","dd","H","HH","p","P"],z={hh:function(s,A){return s.setUTCHours(A);},h:function(s,A){return s.setUTCHours(A);},HH:function(s,A){return s.setUTCHours(A==12?0:A);},H:function(s,A){return s.setUTCHours(A==12?0:A);},ii:function(s,A){return s.setUTCMinutes(A);},i:function(s,A){return s.setUTCMinutes(A);},ss:function(s,A){return s.setUTCSeconds(A);},s:function(s,A){return s.setUTCSeconds(A);},yyyy:function(s,A){return s.setUTCFullYear(A);},yy:function(s,A){return s.setUTCFullYear(2000+A);},m:function(s,A){A-=1;while(A<0){A+=12;}A%=12;s.setUTCMonth(A);while(s.getUTCMonth()!=A){if(isNaN(s.getUTCMonth())){return s;}else{s.setUTCDate(s.getUTCDate()-1);}}return s;},d:function(s,A){return s.setUTCDate(A);},p:function(s,A){return s.setUTCHours(A==1?s.getUTCHours()+12:s.getUTCHours());}},l,t,k;z.M=z.MM=z.mm=z.m;z.dd=z.d;z.P=z.p;n=c(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());if(o.length==x.parts.length){for(var q=0,y=x.parts.length;q<y;q++){l=parseInt(o[q],10);k=x.parts[q];if(isNaN(l)){switch(k){case"MM":t=h(a[r].months).filter(function(){var A=this.slice(0,o[q].length),s=o[q].slice(0,A.length);return A==s;});l=h.inArray(t[0],a[r].months)+1;break;case"M":t=h(a[r].monthsShort).filter(function(){var A=this.slice(0,o[q].length),s=o[q].slice(0,A.length);return A.toLowerCase()==s.toLowerCase();});l=h.inArray(t[0],a[r].monthsShort)+1;break;case"p":case"P":l=h.inArray(o[q].toLowerCase(),a[r].meridiem);break;}}u[k]=l;}for(var q=0,p;q<w.length;q++){p=w[q];if(p in u&&!isNaN(u[p])){z[p](n,u[p]);}}}return n;},formatDate:function(o,l,n,j){if(o==null){return"";}var m;if(j=="standard"){m={yy:o.getUTCFullYear().toString().substring(2),yyyy:o.getUTCFullYear(),m:o.getUTCMonth()+1,M:a[n].monthsShort[o.getUTCMonth()],MM:a[n].months[o.getUTCMonth()],d:o.getUTCDate(),D:a[n].daysShort[o.getUTCDay()],DD:a[n].days[o.getUTCDay()],p:(a[n].meridiem.length==2?a[n].meridiem[o.getUTCHours()<12?0:1]:""),h:o.getUTCHours(),i:o.getUTCMinutes(),s:o.getUTCSeconds()};if(a[n].meridiem.length==2){m.H=(m.h%12==0?12:m.h%12);}else{m.H=m.h;}m.HH=(m.H<10?"0":"")+m.H;m.P=m.p.toUpperCase();m.hh=(m.h<10?"0":"")+m.h;m.ii=(m.i<10?"0":"")+m.i;m.ss=(m.s<10?"0":"")+m.s;m.dd=(m.d<10?"0":"")+m.d;m.mm=(m.m<10?"0":"")+m.m;}else{if(j=="php"){m={y:o.getUTCFullYear().toString().substring(2),Y:o.getUTCFullYear(),F:a[n].months[o.getUTCMonth()],M:a[n].monthsShort[o.getUTCMonth()],n:o.getUTCMonth()+1,t:g.getDaysInMonth(o.getUTCFullYear(),o.getUTCMonth()),j:o.getUTCDate(),l:a[n].days[o.getUTCDay()],D:a[n].daysShort[o.getUTCDay()],w:o.getUTCDay(),N:(o.getUTCDay()==0?7:o.getUTCDay()),S:(o.getUTCDate()%10<=a[n].suffix.length?a[n].suffix[o.getUTCDate()%10-1]:""),a:(a[n].meridiem.length==2?a[n].meridiem[o.getUTCHours()<12?0:1]:""),g:(o.getUTCHours()%12==0?12:o.getUTCHours()%12),G:o.getUTCHours(),i:o.getUTCMinutes(),s:o.getUTCSeconds()};m.m=(m.n<10?"0":"")+m.n;m.d=(m.j<10?"0":"")+m.j;m.A=m.a.toString().toUpperCase();m.h=(m.g<10?"0":"")+m.g;m.H=(m.G<10?"0":"")+m.G;m.i=(m.i<10?"0":"")+m.i;m.s=(m.s<10?"0":"")+m.s;}else{throw new Error("Invalid format type.");}}var o=[],k=h.extend([],l.separators);for(var i=0,p=l.parts.length;i<p;i++){if(k.length){o.push(k.shift());}o.push(m[l.parts[i]]);}if(k.length){o.push(k.shift());}return o.join("");},convertViewMode:function(i){switch(i){case 4:case"decade":i=4;break;case 3:case"year":i=3;break;case 2:case"month":i=2;break;case 1:case"day":i=1;break;case 0:case"hour":i=0;break;}return i;},headTemplate:'<thead><tr><th class="prev"><i class="{iconType} {leftArrow}"/></th><th colspan="5" class="switch"></th><th class="next"><i class="{iconType} {rightArrow}"/></th></tr></thead>',headTemplateV3:'<thead><tr><th class="prev"><span class="{iconType} {leftArrow}"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="{iconType} {rightArrow}"></span> </th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};g.template='<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-hours"><table class=" table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-days"><table class=" table-condensed">'+g.headTemplate+"<tbody></tbody>"+g.footTemplate+'</table></div><div class="datetimepicker-months"><table class="table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-years"><table class="table-condensed">'+g.headTemplate+g.contTemplate+g.footTemplate+"</table></div></div>";g.templateV3='<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">'+g.headTemplateV3+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-hours"><table class=" table-condensed">'+g.headTemplateV3+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-days"><table class=" table-condensed">'+g.headTemplateV3+"<tbody></tbody>"+g.footTemplate+'</table></div><div class="datetimepicker-months"><table class="table-condensed">'+g.headTemplateV3+g.contTemplate+g.footTemplate+'</table></div><div class="datetimepicker-years"><table class="table-condensed">'+g.headTemplateV3+g.contTemplate+g.footTemplate+"</table></div></div>";h.fn.datetimepicker.DPGlobal=g;h.fn.datetimepicker.noConflict=function(){h.fn.datetimepicker=d;return this;};h(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api",'[data-provide="datetimepicker"]',function(j){var i=h(this);if(i.data("datetimepicker")){return;}j.preventDefault();i.datetimepicker("show");});h(function(){h('[data-provide="datetimepicker-inline"]').datetimepicker();});}(window.jQuery);