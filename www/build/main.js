webpackJsonp([24],{111:function(n,e,t){"use strict";t.d(e,"a",function(){return l});t(1);var o=t(116),l=function(){function n(n){this.http=n,this.url="https://agrofloresta.diegomr86.ga/",this.loading=!1}return n.prototype.fileUpload=function(n,e){var t=new FormData;if(t.append("image",n,n.name),e)for(var l in e)t.append(l,e[l]);var a=new o.h("POST",this.url+"images",t);return this.http.request(a)},n.prototype.setPreview=function(n,e){var t=this.imageUrl(n,e);this.preview=t},n.prototype.imageUrl=function(n,e){return"string"==typeof n&&n.startsWith("http")?encodeURI(n):n&&n.url?n.url.startsWith("http")?encodeURI(n.url):encodeURI(this.url+(e&&n[e]?n[e]:"static/"+n.url)):void 0},n.prototype.processWebImage=function(n,e){var t=this;this.loading=!0,this.fileUpload(n.target.files[0]).subscribe(function(n){n.body&&(t.loading=!1,t.setPreview(n.body,"medium"),e.patchValue({picture:n.body}))},function(n){t.loading=!1})},n.prototype.get=function(n,e,t){if(t||(t={params:new o.g}),e){t.params=new o.g;for(var l in e)t.params=t.params.set(l,e[l])}return this.http.get(this.url+n,t)},n.prototype.post=function(n,e,t){return this.http.post(this.url+n,e,t)},n.prototype.put=function(n,e,t){return this.http.put(this.url+n,e,t)},n.prototype.delete=function(n,e){return this.http.delete(this.url+n,e)},n.prototype.patch=function(n,e,t){return this.http.patch(this.url+n,e,t)},n}()},112:function(n,e,t){"use strict";t.d(e,"a",function(){return s});t(1);var o=t(334),l=t(337),a=t(338),r=t.n(a),i=t(342),u=t.n(i);t(53),t(64);o.a.plugin(r.a),o.a.plugin(l.a),o.a.plugin(u.a);var s=function(){function n(n,e){this.storage=n,this.plt=e,this.syncSuccess=!1,this.cycles={placenta1:"Placenta 1 (Até 3 meses)",placenta2:"Placenta 2 (3 meses a 1 ano)",secundaria1:"Secundária 1 (1 a 10 anos)",secundaria2:"Secundária 2 (10 a 25 anos)",secundaria3:"Secundária 3 (25 a 50 anos)",climax:"Climax (Mais de 50 anos)"},this.stratums={baixo:"Baixo",medio:"Médio",alto:"Alto",emergente:"Emergente"}}return n.prototype.sync=function(){this.db=this.plt.is("android")?new o.a("agrofloresta-local",{adapter:"cordova-sqlite",location:"default",androidDatabaseProvider:"system"}):new o.a("agrofloresta-local"),this.remote="https://23bf9857-dbb4-4bc1-bc27-9413f91dfe3b-bluemix.cloudant.com/agrofloresta";var n={auth:{username:"23bf9857-dbb4-4bc1-bc27-9413f91dfe3b-bluemix",password:"0ae78ba4ae29a03231d943f56d5408346f46ffd7dfde57f73accdc64a4d76578"}},e=this;this.db.sync(this.remote,n).on("complete",function(){console.log("DB sync first complete!"),n.live=!0,n.retry=!0,n.continuous=!0,e.db.sync(e.remote,n).on("change",function(n){console.log("DB sync change: ",n)}).on("paused",function(n){console.log("DB sync paused: ",n)}).on("active",function(){console.log("DB sync active")}).on("denied",function(n){console.log("DB sync denied: ",n)}).on("complete",function(n){console.log("DB sync complete: ",n)}).on("error",function(n){console.log("DB sync error: ",n)}),e.syncSuccess=!0}).on("error",function(n){console.log("DB sync error: ",n)})},n.prototype.query=function(n,e,t){var o={type:{$eq:n}};e&&(o.name={$regex:RegExp(e,"i")}),t&&Object.keys(t).forEach(function(n){console.log(n,t[n]),t[n]&&(o[n]={$eq:t[n]})}),console.log("query: sel "+JSON.stringify(o)),console.log("query: index "+JSON.stringify(Object.keys(o)));var l=this;return this.db.createIndex({index:{fields:Object.keys(o)}}).then(function(n){return l.db.find({selector:o}).then(function(n){console.log("query: res length: "+JSON.stringify(n.docs.length));var e={},t={};return n.docs.forEach(function(n){n.$id||(n.$id=n._id),n.$deleted?(delete e[n.$id],t[n.$id]=!0):t[n.$id]||(e[n.$id]=e[n.$id]?Object.assign(e[n.$id],n):n)}),Object.values(e)})}).catch(function(n){console.log("query: index error: "+JSON.stringify(n,Object.getOwnPropertyNames(n)))})},n.prototype.get=function(n){return this.db.get(n).then(function(n){return n.$id||(n.$id=n._id),n})},n.prototype.save=function(n){return this.db.save(n).then(function(n){return n})},n.prototype.remove=function(n){var e=this;return this.get(n._id).then(function(n){return n.$deleted=!0,e.save(n)})},n.prototype.loadAdditionalFields=function(n){var e=this;return this.query(n).then(function(n){return e.additional_fields=n.map(function(n){return n.additional_fields}).filter(function(n){return n}),e.additional_fields=e.additional_fields.reduce(function(n,e){return n.concat(e)},[]),e.additional_fields=e.additional_fields.reduce(function(n,e){return n.concat(e.name)},[]),e.additional_fields=e.additional_fields.filter(function(n,e,t){return e===t.indexOf(n)}),e.additional_fields})},n.prototype.put=function(n){var e=this;return this.db.put(n).then(function(n){return e.db.get(n.id).then(function(n){return n})})},n.prototype.login=function(n){var e=this;return console.log("user login",n),this.query("user","",{email:n}).then(function(n){if(console.log("user query",n),n&&n.length>0)return e.storage.set("currentUser",n[0]),e.currentUser=n[0],n[0];throw{name:"not_found"}})},n.prototype.saveProfile=function(n){var e=this;return this.db.put(n).then(function(n){return e.db.get(n.id).then(function(n){return e.storage.set("currentUser",n).then(function(t){return e.currentUser=n,n})})})},n.prototype.signup=function(n){var e=this;return console.log("user signup",n),this.login(n.email).catch(function(t){return e.storage.get("currentPosition").then(function(t){return n.position=t,e.db.post(n).then(function(t){console.log("user post",t),e.storage.set("currentUser",n).then(function(t){return e.currentUser=n,t})})})})},n.prototype.logout=function(){return this.currentUser=void 0,this.storage.remove("currentUser")},n.prototype.getCurrentUser=function(){var n=this;return this.storage.get("currentUser").then(function(e){return console.log("user currentUser",e),n.currentUser=e,e})},n.prototype.skipTour=function(){return this.storage.get("skipTour").then(function(n){return n})},n.prototype.setSkipTour=function(n){this.storage.set("skipTour",n).then(function(n){return n})},n}()},173:function(n,e,t){"use strict";var o=t(1),l=t(0),a=(t(15),function(){return function(){this.placeholderActive=!0}}()),r=t(61),i=function(){function n(n,e,t){this.el=n,this.imgCacheService=e,this.renderer=t,this.source="",this.loaded=new l.n}return n.prototype.ngOnInit=function(){var n=this,e=this.el.nativeElement;console.log("ELEMENT: ",e),console.log("SRC: ",this.source),this.loadListener=this.renderer.listen(e,"load",function(){n.renderer.addClass(e,"loaded"),n.loaded.emit()}),this.errorListener=this.renderer.listen(e,"error",function(){e.remove()}),this.renderer.setAttribute(e,"src",this.source),this.cacheSubscription=this.imgCacheService.cache(this.source).subscribe(function(t){n.renderer.setAttribute(e,"src",t)},function(n){return console.log(n)})},n.prototype.ngOnDestroy=function(){this.loadListener(),this.errorListener(),this.cacheSubscription.unsubscribe()},n}(),u=function(){function n(n){}return e=n,n.forRoot=function(){return{ngModule:e,providers:[r.a]}},n=e=Object(o.__decorate)([Object(o.__param)(0,Object(l.y)()),Object(o.__param)(0,Object(l.I)())],n);var e}(),s=t(278);t.d(e,!1,function(){return r.a}),t.d(e,!1,function(){return u}),t.d(e,!1,function(){return a}),t.d(e,!1,function(){return i}),t.d(e,!1,function(){return s.a})},176:function(n,e,t){"use strict";t(111);var o=t(205);t.d(e,"a",function(){return o.a});t(112)},177:function(n,e,t){"use strict";t.d(e,"a",function(){return o});t(1),t(182);var o=function(){return function(){}}()},180:function(n,e,t){"use strict";t.d(e,"a",function(){return o});t(1),t(53);var o=function(){function n(n,e){this.alertCtrl=n,this.toastCtrl=e}return n.prototype.showConfirm=function(n){this.alertCtrl.create({title:"Tem certeza disso?",message:"Essa é uma plataforma colaborativa e essa mudança vai valer para todos os usuários.",buttons:[{text:"Cancelar"},{text:"Continuar",handler:n}]}).present()},n.prototype.showToast=function(n,e){this.toastCtrl.create({message:n,duration:3e3,position:"bottom",cssClass:e}).present()},n}()},182:function(n,e,t){"use strict";t.d(e,"a",function(){return l});t(1);var o=t(0),l=(t(173),function(){function n(n,e,t){this.el=n,this.imgCacheService=e,this.renderer=t,this.source="",this.loaded=new o.n}return n.prototype.ngOnInit=function(){var n=this,e=this.el.nativeElement;this.loadListener=this.renderer.listen(e,"load",function(){n.renderer.addClass(e,"loaded"),n.loaded.emit()}),this.errorListener=this.renderer.listen(e,"error",function(){}),this.renderer.setAttribute(e,"src",this.source),this.cacheSubscription=this.imgCacheService.cache(this.source).subscribe(function(t){n.renderer.setAttribute(e,"src",t)},function(n){return console.log(n)})},n.prototype.ngOnDestroy=function(){this.loadListener(),this.errorListener(),this.cacheSubscription.unsubscribe()},n}())},205:function(n,e,t){"use strict";t.d(e,"a",function(){return o});t(1),t(64);var o=function(){function n(n,e){this.storage=n,this.SETTINGS_KEY="_settings",this._defaults=e}return n.prototype.load=function(){var n=this;return this.storage.get(this.SETTINGS_KEY).then(function(e){return e?(n.settings=e,n._mergeDefaults(n._defaults)):n.setAll(n._defaults).then(function(e){n.settings=e})})},n.prototype._mergeDefaults=function(n){for(var e in n)e in this.settings||(this.settings[e]=n[e]);return this.setAll(this.settings)},n.prototype.merge=function(n){for(var e in n)this.settings[e]=n[e];return this.save()},n.prototype.setValue=function(n,e){return this.settings[n]=e,this.storage.set(this.SETTINGS_KEY,this.settings)},n.prototype.setAll=function(n){return this.storage.set(this.SETTINGS_KEY,n)},n.prototype.getValue=function(n){return this.storage.get(this.SETTINGS_KEY).then(function(e){return e[n]})},n.prototype.save=function(){return this.setAll(this.settings)},Object.defineProperty(n.prototype,"allSettings",{get:function(){return this.settings},enumerable:!0,configurable:!0}),n}()},216:function(n,e){function t(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id=216},248:function(n,e,t){function o(n){var e=l[n];return e?t.e(e[1]).then(function(){return t(e[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var l={"../pages/about/about.module.ngfactory":[438,20],"../pages/cards/cards.module.ngfactory":[439,19],"../pages/content/content.module.ngfactory":[440,18],"../pages/donate/donate.module.ngfactory":[441,17],"../pages/feed/feed.module.ngfactory":[442,7],"../pages/guide-form/guide-form.module.ngfactory":[443,3],"../pages/guide/guide.module.ngfactory":[444,9],"../pages/guides/guides.module.ngfactory":[454,12],"../pages/how-to-help/how-to-help.module.ngfactory":[445,16],"../pages/login/login.module.ngfactory":[446,13],"../pages/menu/menu.module.ngfactory":[447,23],"../pages/plant-form/plant-form.module.ngfactory":[448,2],"../pages/plant/plant.module.ngfactory":[449,8],"../pages/plants/plants.module.ngfactory":[450,10],"../pages/post-form/post-form.module.ngfactory":[451,1],"../pages/post/post.module.ngfactory":[452,0],"../pages/profile-edit/profile-edit.module.ngfactory":[453,5],"../pages/profile/profile.module.ngfactory":[455,6],"../pages/settings/settings.module.ngfactory":[456,11],"../pages/share/share.module.ngfactory":[457,15],"../pages/signup/signup.module.ngfactory":[458,4],"../pages/tabs/tabs.module.ngfactory":[459,22],"../pages/tutorial/tutorial.module.ngfactory":[460,14],"../pages/welcome/welcome.module.ngfactory":[461,21]};o.keys=function(){return Object.keys(l)},o.id=248,n.exports=o},278:function(n,e,t){"use strict";function o(n){return n.replace(/(cdvfile|file):\/\//g,"")}t.d(e,"a",function(){return o})},295:function(n,e,t){"use strict";t.d(e,"a",function(){return o}),t.d(e,"b",function(){return l}),t.d(e,"c",function(){return a}),t.d(e,"d",function(){return r}),t.d(e,"e",function(){return i});var o="WelcomePage",l="FeedPage",a="WelcomePage",r="SearchPage",i="SettingsPage"},301:function(n,e,t){"use strict";function o(n){return new k.a(n,{option1:!0,option2:"Ionitron J. Framework",option3:"3",option4:"Hello"})}function l(n){return s._27(0,[(n()(),s._3(0,0,null,null,7,"button",[["icon-only",""],["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(n,e,t){var o=!0;if("click"===e){o=!1!==s._15(n,2).toggle()&&o}return o},$.b,$.a)),s._2(1,1097728,[[6,4],[5,4]],0,q.a,[[8,""],A.a,s.l,s.C],null,null),s._2(2,1064960,null,0,B.a,[G.a,[2,K.a],[2,q.a],[2,W.a]],{menuToggle:[0,"menuToggle"]},null),s._2(3,16384,null,1,J.a,[A.a,s.l,s.C,[2,Y.a],[2,W.a]],null,null),s._23(603979776,6,{_buttons:1}),(n()(),s._25(-1,0,["\n              "])),(n()(),s._3(6,0,null,0,0,"img",[["src","assets/img/logo_white.png"],["style","width: 40px;"]],null,null,null,null,null)),(n()(),s._25(-1,0,["\n            "]))],function(n,e){n(e,2,0,"")},function(n,e){n(e,0,0,s._15(e,2).isHidden)})}function a(n){return s._27(0,[(n()(),s._3(0,0,null,null,2,"ion-title",[],null,null,null,X.b,X.a)),s._2(1,49152,null,0,z.a,[A.a,s.l,s.C,[2,Y.a],[2,W.a]],null,null),(n()(),s._25(-1,0,["\n            Rede Agrofloresta\n          "]))],null,null)}function r(n){return s._27(0,[(n()(),s._3(0,0,null,null,19,"ion-item",[["class","menu_profile item item-block"]],null,[[null,"click"]],function(n,e,t){var o=!0,l=n.component;if("click"===e){o=!1!==l.profile(l.database.currentUser)&&o}return o},V.b,V.a)),s._2(1,1097728,null,3,Q.a,[Z.a,A.a,s.l,s.C,[2,nn.a]],null,null),s._23(335544320,7,{contentLabel:0}),s._23(603979776,8,{_buttons:1}),s._23(603979776,9,{_icons:1}),s._2(5,16384,null,0,en.a,[],null,null),(n()(),s._25(-1,2,["\n            "])),(n()(),s._3(7,0,null,0,5,"ion-avatar",[["item-start",""]],null,null,null,null,null)),s._2(8,16384,null,0,tn.a,[],null,null),(n()(),s._25(-1,null,["\n              "])),(n()(),s._3(10,0,null,null,1,"img",[["img-cache",""]],null,null,null,null,null)),s._2(11,212992,null,0,on.a,[s.l,ln.a,s.D],{source:[0,"source"]},null),(n()(),s._25(-1,null,["\n            "])),(n()(),s._25(-1,2,["\n            "])),(n()(),s._3(14,0,null,2,1,"h2",[],null,null,null,null,null)),(n()(),s._25(15,null,["",""])),(n()(),s._25(-1,2,["\n            "])),(n()(),s._3(17,0,null,2,1,"p",[],null,null,null,null,null)),(n()(),s._25(18,null,["",""])),(n()(),s._25(-1,2,["\n          "]))],function(n,e){var t=e.component;n(e,11,0,t.api.imageUrl(t.database.currentUser.picture,"thumb"))},function(n,e){var t=e.component;n(e,15,0,t.database.currentUser.name);n(e,18,0,t.database.currentUser.email)})}function i(n){return s._27(0,[s._23(402653184,1,{nav:0}),(n()(),s._3(1,0,null,null,108,"ion-split-pane",[],null,null,null,null,null)),s._2(2,4341760,null,1,an.b,[s.x,rn.a,A.a,s.l,s.C],{enabled:[0,"enabled"]},null),s._23(603979776,2,{_setchildren:1}),s._21(2048,[[2,4]],an.a,null,[an.b]),(n()(),s._25(-1,null,["\n    "])),(n()(),s._3(6,0,null,null,98,"ion-menu",[["role","navigation"]],null,null,null,un.b,un.a)),s._2(7,245760,null,2,sn.a,[G.a,s.l,A.a,rn.a,s.C,cn.a,dn.l,gn.a,fn.a],{content:[0,"content"]},null),s._23(335544320,3,{menuContent:0}),s._23(335544320,4,{menuNav:0}),s._21(2048,[[2,4]],an.a,null,[sn.a]),(n()(),s._25(-1,0,["\n      "])),(n()(),s._3(12,0,null,0,17,"ion-header",[],null,null,null,null,null)),s._2(13,16384,null,0,pn.a,[A.a,s.l,s.C,[2,K.a]],null,null),(n()(),s._25(-1,null,["\n        "])),(n()(),s._3(15,0,null,null,13,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,_n.b,_n.a)),s._2(16,49152,null,0,Y.a,[A.a,s.l,s.C],null,null),(n()(),s._25(-1,3,["\n          "])),(n()(),s._3(18,0,null,0,6,"ion-buttons",[["left",""]],null,null,null,null,null)),s._2(19,16384,null,1,J.a,[A.a,s.l,s.C,[2,Y.a],[2,W.a]],null,null),s._23(603979776,5,{_buttons:1}),(n()(),s._25(-1,null,["\n            "])),(n()(),s.Y(16777216,null,null,1,null,l)),s._2(23,16384,null,0,mn.k,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(n()(),s._25(-1,null,["\n          "])),(n()(),s._25(-1,3,["\n\n          "])),(n()(),s.Y(16777216,null,3,1,null,a)),s._2(27,16384,null,0,mn.k,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(n()(),s._25(-1,3,["\n        "])),(n()(),s._25(-1,null,["\n      "])),(n()(),s._25(-1,0,["\n\n      "])),(n()(),s._3(31,0,null,0,72,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,hn.b,hn.a)),s._2(32,4374528,[[3,4]],0,bn.a,[A.a,rn.a,gn.a,s.l,s.C,fn.a,cn.a,s.x,[2,K.a],[2,yn.a]],null,null),(n()(),s._25(-1,1,["\n        "])),(n()(),s._3(34,0,null,1,68,"ion-list",[],null,null,null,null,null)),s._2(35,16384,null,0,vn.a,[A.a,s.l,s.C,rn.a,dn.l,gn.a],null,null),(n()(),s._25(-1,null,["\n          "])),(n()(),s.Y(16777216,null,null,1,null,r)),s._2(38,16384,null,0,mn.k,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(n()(),s._25(-1,null,["\n          "])),(n()(),s._3(40,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,e,t){var o=!0,l=n.component;if("click"===e){o=!1!==s._15(n,46).close()&&o}if("click"===e){o=!1!==l.openPage("FeedPage")&&o}return o},V.b,V.a)),s._2(41,1097728,null,3,Q.a,[Z.a,A.a,s.l,s.C,[2,nn.a]],null,null),s._23(335544320,10,{contentLabel:0}),s._23(603979776,11,{_buttons:1}),s._23(603979776,12,{_icons:1}),s._2(45,16384,null,0,en.a,[],null,null),s._2(46,16384,null,0,Pn.a,[G.a],{menuClose:[0,"menuClose"]},null),(n()(),s._25(-1,2,["Postagens"])),(n()(),s._25(-1,null,["\n          "])),(n()(),s._3(49,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,e,t){var o=!0,l=n.component;if("click"===e){o=!1!==s._15(n,55).close()&&o}if("click"===e){o=!1!==l.openPage("GuidesPage")&&o}return o},V.b,V.a)),s._2(50,1097728,null,3,Q.a,[Z.a,A.a,s.l,s.C,[2,nn.a]],null,null),s._23(335544320,13,{contentLabel:0}),s._23(603979776,14,{_buttons:1}),s._23(603979776,15,{_icons:1}),s._2(54,16384,null,0,en.a,[],null,null),s._2(55,16384,null,0,Pn.a,[G.a],{menuClose:[0,"menuClose"]},null),(n()(),s._25(-1,2,["Guias de cultivo"])),(n()(),s._25(-1,null,["\n          "])),(n()(),s._3(58,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,e,t){var o=!0,l=n.component;if("click"===e){o=!1!==s._15(n,64).close()&&o}if("click"===e){o=!1!==l.openPage("PlantsPage")&&o}return o},V.b,V.a)),s._2(59,1097728,null,3,Q.a,[Z.a,A.a,s.l,s.C,[2,nn.a]],null,null),s._23(335544320,16,{contentLabel:0}),s._23(603979776,17,{_buttons:1}),s._23(603979776,18,{_icons:1}),s._2(63,16384,null,0,en.a,[],null,null),s._2(64,16384,null,0,Pn.a,[G.a],{menuClose:[0,"menuClose"]},null),(n()(),s._25(-1,2,["Tabela de plantas"])),(n()(),s._25(-1,null,["\n          "])),(n()(),s._3(67,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,e,t){var o=!0,l=n.component;if("click"===e){o=!1!==s._15(n,73).close()&&o}if("click"===e){o=!1!==l.openPage("FeedPage",{category:"event"})&&o}return o},V.b,V.a)),s._2(68,1097728,null,3,Q.a,[Z.a,A.a,s.l,s.C,[2,nn.a]],null,null),s._23(335544320,19,{contentLabel:0}),s._23(603979776,20,{_buttons:1}),s._23(603979776,21,{_icons:1}),s._2(72,16384,null,0,en.a,[],null,null),s._2(73,16384,null,0,Pn.a,[G.a],{menuClose:[0,"menuClose"]},null),(n()(),s._25(-1,2,["Eventos"])),(n()(),s._25(-1,null,["\n          "])),(n()(),s._3(76,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,e,t){var o=!0,l=n.component;if("click"===e){o=!1!==s._15(n,82).close()&&o}if("click"===e){o=!1!==l.openPage("AboutPage")&&o}return o},V.b,V.a)),s._2(77,1097728,null,3,Q.a,[Z.a,A.a,s.l,s.C,[2,nn.a]],null,null),s._23(335544320,22,{contentLabel:0}),s._23(603979776,23,{_buttons:1}),s._23(603979776,24,{_icons:1}),s._2(81,16384,null,0,en.a,[],null,null),s._2(82,16384,null,0,Pn.a,[G.a],{menuClose:[0,"menuClose"]},null),(n()(),s._25(-1,2,["Sobre"])),(n()(),s._25(-1,null,["\n          "])),(n()(),s._3(85,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,e,t){var o=!0,l=n.component;if("click"===e){o=!1!==s._15(n,91).close()&&o}if("click"===e){o=!1!==l.openPage("DonatePage")&&o}return o},V.b,V.a)),s._2(86,1097728,null,3,Q.a,[Z.a,A.a,s.l,s.C,[2,nn.a]],null,null),s._23(335544320,25,{contentLabel:0}),s._23(603979776,26,{_buttons:1}),s._23(603979776,27,{_icons:1}),s._2(90,16384,null,0,en.a,[],null,null),s._2(91,16384,null,0,Pn.a,[G.a],{menuClose:[0,"menuClose"]},null),(n()(),s._25(-1,2,["Seja um apoiador"])),(n()(),s._25(-1,null,["\n          "])),(n()(),s._3(94,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,e,t){var o=!0,l=n.component;if("click"===e){o=!1!==s._15(n,100).close()&&o}if("click"===e){o=!1!==l.logout()&&o}return o},V.b,V.a)),s._2(95,1097728,null,3,Q.a,[Z.a,A.a,s.l,s.C,[2,nn.a]],null,null),s._23(335544320,28,{contentLabel:0}),s._23(603979776,29,{_buttons:1}),s._23(603979776,30,{_icons:1}),s._2(99,16384,null,0,en.a,[],null,null),s._2(100,16384,null,0,Pn.a,[G.a],{menuClose:[0,"menuClose"]},null),(n()(),s._25(-1,2,["\n            Sair\n          "])),(n()(),s._25(-1,null,["\n        "])),(n()(),s._25(-1,1,["\n      "])),(n()(),s._25(-1,0,["\n\n    "])),(n()(),s._25(-1,null,["\n    "])),(n()(),s._3(106,0,null,null,2,"ion-nav",[["main",""]],null,null,null,Cn.b,Cn.a)),s._2(107,4374528,[[1,4],["content",4]],0,wn.a,[[2,K.a],[2,yn.a],fn.a,A.a,rn.a,s.l,s.x,s.C,s.k,dn.l,kn.a,[2,Fn.a],gn.a,s.m],{root:[0,"root"]},null),s._21(2048,[[2,4]],an.a,null,[wn.a]),(n()(),s._25(-1,null,["\n  "]))],function(n,e){var t=e.component;n(e,2,0,t.database.currentUser);n(e,7,0,s._15(e,107));n(e,23,0,!t.form);n(e,27,0,t.database.currentUser);n(e,38,0,t.database.currentUser);n(e,46,0,"");n(e,55,0,"");n(e,64,0,"");n(e,73,0,"");n(e,82,0,"");n(e,91,0,"");n(e,100,0,"");n(e,107,0,t.rootPage)},function(n,e){n(e,15,0,s._15(e,16)._sbPadding);n(e,31,0,s._15(e,32).statusbarPadding,s._15(e,32)._hasRefresher)})}Object.defineProperty(e,"__esModule",{value:!0});var u=t(38),s=t(0),c=(t(1),t(116)),d=t(192),g=t(85),f=t(86),p=t(64),_=t(110),m=t(329),h=(t(53),t(199)),b=t(200),y=t(109),v=t(121),P=t(280),C=(t(298),t(281)),w=t(177),k=t(176),F=t(180),S=t(295),O=(t(173),function(){function n(n,e,t,o,l,a,r,i,u,s,c){var d=this;this.translate=n,this.config=t,this.statusBar=o,this.splashScreen=l,this.api=a,this.database=r,this.menuCtrl=i,this.storage=u,this.geolocation=s,e.ready().then(function(){d.statusBar.styleDefault(),c.initImgCache().subscribe(function(n){return console.log("init")},function(n){return console.log("fail init",n)}),d.database.sync(),d.splashScreen.hide()}),this.initTranslate(),this.storage.get("currentPosition").then(function(n){n&&n.latitude||d.geolocation.getCurrentPosition().then(function(n){d.storage.set("currentPosition",{latitude:n.coords.latitude,longitude:n.coords.longitude,accuracy:n.coords.accuracy,altitude:n.coords.altitude,timestamp:n.timestamp}).catch(function(n){console.log("errr",n)})}).catch(function(n){console.log("Error getting location",n)})}),this.database.skipTour().then(function(n){n?d.database.getCurrentUser().then(function(n){d.rootPage=n?S.b:S.a}):d.rootPage="TutorialPage"})}return n.prototype.initTranslate=function(){var n=this;this.translate.setDefaultLang("pt-br");this.translate.use("pt-br"),this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(function(e){n.config.set("ios","backButtonText",e.BACK_BUTTON_TEXT)})},n.prototype.logout=function(){this.nav.setRoot("WelcomePage"),this.database.logout()},n.prototype.openPage=function(n,e){this.nav.setRoot(n,e)},n.prototype.profile=function(n){this.nav.setRoot("ProfilePage",{id:n._id})},n}()),N=function(n){return new m.a(n,"./assets/i18n/",".json")},T=function(){return function(){}}(),M=t(65),U=t(283),j=t(284),E=t(285),x=t(286),H=t(287),L=t(288),I=t(289),D=t(290),R=t(291),$=t(54),q=t(26),A=t(2),B=t(119),G=t(30),K=t(6),W=t(46),J=t(114),Y=t(47),X=t(293),z=t(72),V=t(181),Q=t(20),Z=t(18),nn=t(56),en=t(73),tn=t(118),on=t(182),ln=t(61),an=t(40),rn=t(5),un=t(299),sn=t(80),cn=t(33),dn=t(8),gn=t(13),fn=t(12),pn=t(113),_n=t(437),mn=t(15),hn=t(292),bn=t(29),yn=t(28),vn=t(62),Pn=t(127),Cn=t(300),wn=t(63),kn=t(39),Fn=t(19),Sn=t(37),On=t(111),Nn=t(112),Tn=t(140),Mn=s._1({encapsulation:2,styles:[],data:{}}),Un=s.Z("ng-component",O,function(n){return s._27(0,[(n()(),s._3(0,0,null,null,1,"ng-component",[],null,null,null,i,Mn)),s._2(1,49152,null,0,O,[Sn.a,rn.a,A.a,f.a,g.a,On.a,Nn.a,G.a,Tn.a,y.a,ln.a],null,null)],null,null)},{},{},[]),jn=t(157),En=t(282),xn=t(117),Hn=t(24),Ln=t(74),In=t(75),Dn=t(77),Rn=t(76),$n=t(115),qn=t(147),An=t(149),Bn=t(156),Gn=t(41),Kn=t(154),Wn=t(178),Jn=t(67),Yn=t(55),Xn=t(126),zn=t(79),Vn=t(162),Qn=t(159),Zn=t(120),ne=t(205),ee=t(279),te=t(158),oe=t(155),le=t(160),ae=s._0(T,[M.b],function(n){return s._11([s._12(512,s.k,s.W,[[8,[U.a,j.a,E.a,x.a,H.a,L.a,I.a,D.a,R.a,Un]],[3,s.k],s.v]),s._12(5120,s.t,s._22,[[3,s.t]]),s._12(4608,mn.m,mn.l,[s.t,[2,mn.w]]),s._12(5120,s.b,s._5,[]),s._12(5120,s.r,s._13,[]),s._12(5120,s.s,s._16,[]),s._12(4608,u.c,u.q,[mn.d]),s._12(6144,s.G,null,[u.c]),s._12(4608,u.f,jn.a,[]),s._12(5120,u.d,function(n,e,t,o,l){return[new u.k(n,e),new u.o(t),new u.n(o,l)]},[mn.d,s.x,mn.d,mn.d,u.f]),s._12(4608,u.e,u.e,[u.d,s.x]),s._12(135680,u.m,u.m,[mn.d]),s._12(4608,u.l,u.l,[u.e,u.m]),s._12(5120,En.a,C.d,[]),s._12(5120,En.c,C.e,[]),s._12(4608,En.b,C.c,[En.a,En.c]),s._12(5120,s.E,C.f,[u.l,En.b,s.x]),s._12(6144,u.p,null,[u.m]),s._12(4608,s.K,s.K,[s.x]),s._12(4608,u.h,u.h,[mn.d]),s._12(4608,u.i,u.i,[mn.d]),s._12(4608,xn.b,C.b,[s.E,u.b]),s._12(4608,c.j,c.p,[mn.d,s.z,c.n]),s._12(4608,c.q,c.q,[c.j,c.o]),s._12(5120,c.a,function(n){return[n]},[c.q]),s._12(4608,c.m,c.m,[]),s._12(6144,c.k,null,[c.m]),s._12(4608,c.i,c.i,[c.k]),s._12(6144,c.b,null,[c.i]),s._12(4608,c.f,c.l,[c.b,s.q]),s._12(4608,c.c,c.c,[c.f]),s._12(4608,Hn.y,Hn.y,[]),s._12(4608,Hn.e,Hn.e,[]),s._12(5120,Ln.b,N,[c.c]),s._12(4608,In.a,In.b,[]),s._12(4608,Dn.b,Dn.a,[]),s._12(4608,Rn.b,Rn.a,[]),s._12(4608,$n.a,$n.a,[]),s._12(4608,Sn.a,Sn.a,[$n.a,Ln.b,In.a,Dn.b,Rn.b,Sn.b,Sn.c]),s._12(4608,qn.a,qn.a,[fn.a,A.a]),s._12(4608,An.a,An.a,[fn.a,A.a]),s._12(4608,Bn.a,Bn.a,[]),s._12(4608,Z.a,Z.a,[]),s._12(4608,Gn.a,Gn.a,[rn.a]),s._12(4608,cn.a,cn.a,[A.a,rn.a,s.x,gn.a]),s._12(4608,Kn.a,Kn.a,[fn.a,A.a]),s._12(5120,mn.h,Wn.c,[mn.t,[2,mn.a],A.a]),s._12(4608,mn.g,mn.g,[mn.h]),s._12(5120,Jn.b,Jn.d,[fn.a,Jn.a]),s._12(5120,Fn.a,Fn.b,[fn.a,Jn.b,mn.g,Yn.b,s.k]),s._12(4608,Xn.a,Xn.a,[fn.a,A.a,Fn.a]),s._12(4608,zn.a,zn.a,[fn.a,A.a]),s._12(4608,Vn.a,Vn.a,[fn.a,A.a,Fn.a]),s._12(4608,Qn.a,Qn.a,[A.a,rn.a,gn.a,fn.a,dn.l]),s._12(4608,Zn.a,Zn.a,[fn.a,A.a]),s._12(4608,kn.a,kn.a,[rn.a,A.a]),s._12(5120,Tn.a,Tn.c,[Tn.b]),s._12(4608,On.a,On.a,[c.c]),s._12(4608,Nn.a,Nn.a,[Tn.a,rn.a]),s._12(4608,F.a,F.a,[An.a,Zn.a]),s._12(4608,d.a,d.a,[]),s._12(4608,g.a,g.a,[]),s._12(4608,f.a,f.a,[]),s._12(4608,h.a,h.a,[]),s._12(4608,b.a,b.a,[]),s._12(4608,y.a,y.a,[]),s._12(4608,v.a,v.a,[]),s._12(4608,ln.a,ln.a,[rn.a,v.a]),s._12(4608,P.a,P.a,[]),s._12(5120,ne.a,o,[Tn.a]),s._12(512,mn.c,mn.c,[]),s._12(512,s.m,ee.a,[]),s._12(256,A.b,{},[]),s._12(1024,te.a,te.b,[]),s._12(1024,rn.a,rn.b,[u.b,te.a,s.x]),s._12(1024,A.a,A.c,[A.b,rn.a]),s._12(512,gn.a,gn.a,[rn.a]),s._12(512,G.a,G.a,[]),s._12(512,fn.a,fn.a,[A.a,rn.a,[2,G.a]]),s._12(512,dn.l,dn.l,[fn.a]),s._12(256,Jn.a,{links:[{loadChildren:"../pages/about/about.module.ngfactory#AboutPageModuleNgFactory",name:"AboutPage",segment:"about",priority:"low",defaultHistory:[]},{loadChildren:"../pages/cards/cards.module.ngfactory#CardsPageModuleNgFactory",name:"CardsPage",segment:"cards",priority:"low",defaultHistory:[]},{loadChildren:"../pages/content/content.module.ngfactory#ContentPageModuleNgFactory",name:"ContentPage",segment:"content",priority:"low",defaultHistory:[]},{loadChildren:"../pages/donate/donate.module.ngfactory#DonatePageModuleNgFactory",name:"DonatePage",segment:"donate",priority:"low",defaultHistory:[]},{loadChildren:"../pages/feed/feed.module.ngfactory#FeedPageModuleNgFactory",name:"FeedPage",segment:"feed",priority:"low",defaultHistory:[]},{loadChildren:"../pages/guide-form/guide-form.module.ngfactory#GuideFormPageModuleNgFactory",name:"GuideFormPage",segment:"guide-form",priority:"low",defaultHistory:[]},{loadChildren:"../pages/guide/guide.module.ngfactory#GuidePageModuleNgFactory",name:"GuidePage",segment:"guide/:id",priority:"low",defaultHistory:[]},{loadChildren:"../pages/how-to-help/how-to-help.module.ngfactory#HowToHelpPageModuleNgFactory",name:"HowToHelpPage",segment:"how-to-help",priority:"low",defaultHistory:[]},{loadChildren:"../pages/login/login.module.ngfactory#LoginPageModuleNgFactory",name:"LoginPage",segment:"login",priority:"low",defaultHistory:[]},{loadChildren:"../pages/menu/menu.module.ngfactory#MenuPageModuleNgFactory",name:"MenuPage",segment:"menu",priority:"low",defaultHistory:[]},{loadChildren:"../pages/plant-form/plant-form.module.ngfactory#PlantFormPageModuleNgFactory",name:"PlantFormPage",segment:"plant-form",priority:"low",defaultHistory:[]},{loadChildren:"../pages/plant/plant.module.ngfactory#PlantPageModuleNgFactory",name:"PlantPage",segment:"plant/:id",priority:"low",defaultHistory:[]},{loadChildren:"../pages/plants/plants.module.ngfactory#PlantsPageModuleNgFactory",name:"PlantsPage",segment:"plants",priority:"low",defaultHistory:[]},{loadChildren:"../pages/post-form/post-form.module.ngfactory#PostFormPageModuleNgFactory",name:"PostFormPage",segment:"post-form",priority:"low",defaultHistory:[]},{loadChildren:"../pages/post/post.module.ngfactory#PostPageModuleNgFactory",name:"PostPage",segment:"post/:id",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profile-edit/profile-edit.module.ngfactory#ProfileEditPageModuleNgFactory",name:"ProfileEditPage",segment:"profile-edit",priority:"low",defaultHistory:[]},{loadChildren:"../pages/guides/guides.module.ngfactory#GuidesPageModuleNgFactory",name:"GuidesPage",segment:"guides",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profile/profile.module.ngfactory#ProfilePageModuleNgFactory",name:"ProfilePage",segment:"profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/share/share.module.ngfactory#SharePageModuleNgFactory",name:"SharePage",segment:"share",priority:"low",defaultHistory:[]},{loadChildren:"../pages/signup/signup.module.ngfactory#SignupPageModuleNgFactory",name:"SignupPage",segment:"signup",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsPageModuleNgFactory",name:"TabsPage",segment:"tabs",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tutorial/tutorial.module.ngfactory#TutorialPageModuleNgFactory",name:"TutorialPage",segment:"tutorial",priority:"low",defaultHistory:[]},{loadChildren:"../pages/welcome/welcome.module.ngfactory#WelcomePageModuleNgFactory",name:"WelcomePage",segment:"welcome",priority:"low",defaultHistory:[]}]},[]),s._12(512,s.i,s.i,[]),s._12(512,oe.a,oe.a,[s.i]),s._12(1024,Yn.b,Yn.c,[oe.a,s.q]),s._12(1024,s.c,function(n,e,t,o,l,a,r,i,s,c,d,g,f){return[u.s(n),le.a(e),Bn.b(t,o),Qn.b(l,a,r,i,s),Yn.d(c,d,g,f)]},[[2,s.w],A.a,rn.a,gn.a,A.a,rn.a,gn.a,fn.a,dn.l,A.a,Jn.a,Yn.b,s.x]),s._12(512,s.d,s.d,[[2,s.c]]),s._12(131584,s.f,s.f,[s.x,s.X,s.q,s.m,s.k,s.d]),s._12(512,s.e,s.e,[s.f]),s._12(512,u.a,u.a,[[3,u.a]]),s._12(512,C.a,C.a,[]),s._12(512,c.e,c.e,[]),s._12(512,c.d,c.d,[]),s._12(512,_.a,_.a,[]),s._12(512,Hn.w,Hn.w,[]),s._12(512,Hn.l,Hn.l,[]),s._12(512,Hn.u,Hn.u,[]),s._12(512,Wn.a,Wn.a,[]),s._12(512,p.a,p.a,[]),s._12(512,w.a,w.a,[]),s._12(512,T,T,[]),s._12(256,c.n,"XSRF-TOKEN",[]),s._12(256,c.o,"X-XSRF-TOKEN",[]),s._12(256,Sn.c,void 0,[]),s._12(256,Sn.b,void 0,[]),s._12(256,M.a,O,[]),s._12(256,mn.a,"/",[]),s._12(256,Tn.b,null,[])])});Object(s.Q)(),Object(u.j)().bootstrapModuleFactory(ae)},61:function(n,e,t){"use strict";t.d(e,"a",function(){return s});t(1),t(121),t(53);var o=t(346),l=t.n(o),a=t(174),r=(t.n(a),t(296)),i=(t.n(r),t(435)),u=(t.n(i),t(278)),s=function(){function n(n,e){this.platform=n,this.file=e,this.initNotifier$=new a.ReplaySubject,l.a.options.debug=!0}return Object.defineProperty(n.prototype,"notifier$",{get:function(){return this.initNotifier$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.initImgCache=function(){var n=this;return Object(i.bindCallback)(l.a.init)().pipe(Object(r.take)(1),Object(r.tap)(function(){return n.initNotifier$.next("init")}))},n.prototype.cache=function(n){var e=this;return this.notifier$.pipe(Object(r.switchMapTo)(this.isCached(n).pipe(Object(r.flatMap)(function(n){var t=n[0];return n[1]?e.getCachedFileURL(t):e.cacheFile(t)}),Object(r.flatMap)(function(n){return e.platform.is("ios")?e.normalizeURlWKWview(n):e.platform.is("cordova")||e.platform.is("android")?e.file.resolveLocalFilesystemUrl(n).then(function(n){var e=n.toURL();return console.log("Native URI: "+e),e}):n}))))},n.prototype.normalizeURlWKWview=function(n){return(Object(u.a)(this.file.applicationStorageDirectory)+"Library/files/"+Object(u.a)(n)).replace("/localhost/persistent","")},n.prototype.getCachedFileURL=function(n){return Object(i.bindCallback)(l.a.getCachedFileURL)(n).pipe(Object(r.map)(function(n){return n[1]}))},n.prototype.cacheFile=function(n){return Object(i.bindCallback)(l.a.cacheFile)(n)},n.prototype.isCached=function(n){return Object(i.bindCallback)(l.a.isCached)(n)},n}()}},[301]);