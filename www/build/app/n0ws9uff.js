/*! Built with http://stenciljs.com */

App.loadStyles("app-profile","app-profile div{padding:10px}\napp-profile.hydrated{visibility:inherit}");
App.loadComponents("n0ws9uff",function(a,e,p,s){"use strict";class t{render(){if(this.match&&this.match.params.name)return e("div",null,e("p",null,"Hello! My name is ",this.match.params.name,". My name was passed in through a route param!"))}}a["app-profile"]=t},["app-profile",[["match",1,1,1]],{}]);;