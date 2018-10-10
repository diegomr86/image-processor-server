webpackJsonp([22],{105:function(n,t,e){"use strict";e.d(t,"a",function(){return l});e(1);var o=e(111),l=function(){function n(n){this.http=n,this.url="https://agrofloresta.diegomr86.ga/",this.loading=!1}return n.prototype.fileUpload=function(n,t){var e=new FormData;if(e.append("image",n,n.name),t)for(var l in t)e.append(l,t[l]);var a=new o.h("POST",this.url+"images",e);return this.http.request(a)},n.prototype.setPreview=function(n,t){var e=this.imageUrl(n,t);console.log("preview",n,t,e),this.preview=e},n.prototype.imageUrl=function(n,t){return"string"==typeof n&&n.startsWith("http")?encodeURI(n):n&&n.url?n.url.startsWith("http")?encodeURI(n.url):(console.log(n[t]),encodeURI(this.url+(t&&n[t]?n[t]:"static/"+n.url))):void 0},n.prototype.processWebImage=function(n,t){var e=this;this.loading=!0,this.fileUpload(n.target.files[0]).subscribe(function(n){n.body&&(e.loading=!1,e.setPreview(n.body,"medium"),t.patchValue({picture:n.body}))},function(n){e.loading=!1})},n.prototype.get=function(n,t,e){if(e||(e={params:new o.g}),t){e.params=new o.g;for(var l in t)e.params=e.params.set(l,t[l])}return this.http.get(this.url+n,e)},n.prototype.post=function(n,t,e){return this.http.post(this.url+n,t,e)},n.prototype.put=function(n,t,e){return this.http.put(this.url+n,t,e)},n.prototype.delete=function(n,t){return this.http.delete(this.url+n,t)},n.prototype.patch=function(n,t,e){return this.http.patch(this.url+n,t,e)},n}()},106:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var o=e(1),l=(e(63),function(n){function t(t){var e=n.call(this)||this;return e.storage=t,e}return Object(o.__extends)(t,n),t.prototype.login=function(n){var t=this;return this.query("user","",{email:n}).then(function(e){if(console.log("login: "+n,e),e&&e.length>0)return t.storage.set("currentUser",e[0]),t.currentUser=e[0],e[0];throw{name:"not_found"}})},t.prototype.put=function(n){var t=this;return console.log("item",n),this.db.put(n).then(function(n){return console.log("account",n),t.db.get(n.id).then(function(n){return t.storage.set("currentUser",n).then(function(e){return console.log("response",n),t.currentUser=n,n})})})},t.prototype.signup=function(n){var t=this;return this.login(n.email).catch(function(e){return t.storage.get("currentPosition").then(function(e){return n.position=e,t.db.post(n).then(function(e){t.storage.set("currentUser",n).then(function(e){return t.currentUser=n,e})})})})},t.prototype.logout=function(){return this.currentUser=void 0,this.storage.remove("currentUser")},t.prototype.getCurrentUser=function(){var n=this;return this.storage.get("currentUser").then(function(t){return n.currentUser=t,t})},t.prototype.skipTour=function(){return this.storage.get("skipTour").then(function(n){return n})},t.prototype.setSkipTour=function(n){this.storage.set("skipTour",n).then(function(n){return n})},t}(e(110).a))},110:function(n,t,e){"use strict";e.d(t,"a",function(){return i});e(1);var o=e(330),l=e(334),a=e(335),r=e.n(a);o.a.plugin(r.a),o.a.plugin(l.a);var i=function(){function n(){this.cycles={placenta1:"Placenta 1 (Até 3 meses)",placenta2:"Placenta 2 (3 meses a 1 ano)",secundaria1:"Secundária 1 (1 a 10 anos)",secundaria2:"Secundária 2 (10 a 25 anos)",secundaria3:"Secundária 3 (25 a 50 anos)",climax:"Climax (Mais de 50 anos)"},this.stratums={baixo:"Baixo",medio:"Médio",alto:"Alto",emergente:"Emergente"},console.log("Creating database local"),this.db=new o.a("agrofloresta-prod"),console.log("Creating database remote"),this.remoteDb=new o.a("https://agrofloresta.diegomr86.ga:6984/agrofloresta-prod"),console.log("Sync database..."),this.db.sync(this.remoteDb,{live:!0}).on("complete",function(n){console.log("DB sync change",n)}).on("error",function(n){console.log("DB sync error",n),console.log(n)}).on("denied",function(n){console.log(n)}),this.db.createIndex({index:{fields:["type","name"]}}).then(function(n){}).catch(function(n){console.log(n)})}return n.prototype.all=function(){return this.db.all()},n.prototype.query=function(n,t,e){var o={type:{$eq:n}};return t&&(o.name={$regex:RegExp(t,"i")}),e&&Object.keys(e).forEach(function(n){console.log(n,e[n]),e[n]&&(o[n]={$eq:e[n]})}),this.db.find({selector:o}).then(function(n){var t={},e={};return n.docs.forEach(function(n){n.$id||(n.$id=n._id),n.$deleted?(delete t[n.$id],e[n.$id]=!0):e[n.$id]||(t[n.$id]=t[n.$id]?Object.assign(t[n.$id],n):n)}),Object.values(t)})},n.prototype.get=function(n){return this.db.get(n).then(function(n){return n.$id||(n.$id=n._id),n})},n.prototype.save=function(n){return console.log("save: ",n),this.db.save(n).then(function(n){return console.log("saved: ",n),n})},n.prototype.remove=function(n){var t=this;return console.log("remove:",n),this.get(n._id).then(function(n){return console.log("removedoc:",n),n.$deleted=!0,t.save(n)})},n.prototype.loadAdditionalFields=function(n){var t=this;return this.query(n).then(function(n){return t.additional_fields=n.map(function(n){return n.additional_fields}).filter(function(n){return n}),t.additional_fields=t.additional_fields.reduce(function(n,t){return n.concat(t)},[]),t.additional_fields=t.additional_fields.reduce(function(n,t){return n.concat(t.name)},[]),t.additional_fields=t.additional_fields.filter(function(n,t,e){return t===e.indexOf(n)}),t.additional_fields})},n.prototype.put=function(n){var t=this;return this.db.put(n).then(function(n){return t.db.get(n.id).then(function(n){return n})})},n}()},125:function(n,t,e){"use strict";e.d(t,"a",function(){return o});e(1),e(63);var o=function(){function n(n,t){this.storage=n,this.SETTINGS_KEY="_settings",this._defaults=t}return n.prototype.load=function(){var n=this;return this.storage.get(this.SETTINGS_KEY).then(function(t){return t?(n.settings=t,n._mergeDefaults(n._defaults)):n.setAll(n._defaults).then(function(t){n.settings=t})})},n.prototype._mergeDefaults=function(n){for(var t in n)t in this.settings||(this.settings[t]=n[t]);return this.setAll(this.settings)},n.prototype.merge=function(n){for(var t in n)this.settings[t]=n[t];return this.save()},n.prototype.setValue=function(n,t){return this.settings[n]=t,this.storage.set(this.SETTINGS_KEY,this.settings)},n.prototype.setAll=function(n){return this.storage.set(this.SETTINGS_KEY,n)},n.prototype.getValue=function(n){return this.storage.get(this.SETTINGS_KEY).then(function(t){return t[n]})},n.prototype.save=function(){return this.setAll(this.settings)},Object.defineProperty(n.prototype,"allSettings",{get:function(){return this.settings},enumerable:!0,configurable:!0}),n}()},170:function(n,t,e){"use strict";var o=e(1),l=e(0),a=(e(15),function(){return function(){this.placeholderActive=!0}}()),r=e(59),i=function(){function n(n,t,e){this.el=n,this.imgCacheService=t,this.renderer=e,this.source="",this.loaded=new l.n}return n.prototype.ngOnInit=function(){var n=this,t=this.el.nativeElement;console.log("ELEMENT: ",t),console.log("SRC: ",this.source),this.loadListener=this.renderer.listen(t,"load",function(){n.renderer.addClass(t,"loaded"),n.loaded.emit()}),this.errorListener=this.renderer.listen(t,"error",function(){t.remove()}),this.renderer.setAttribute(t,"src",this.source),this.cacheSubscription=this.imgCacheService.cache(this.source).subscribe(function(e){n.renderer.setAttribute(t,"src",e)},function(n){return console.log(n)})},n.prototype.ngOnDestroy=function(){this.loadListener(),this.errorListener(),this.cacheSubscription.unsubscribe()},n}(),u=function(){function n(n){}return t=n,n.forRoot=function(){return{ngModule:t,providers:[r.a]}},n=t=Object(o.__decorate)([Object(o.__param)(0,Object(l.y)()),Object(o.__param)(0,Object(l.I)())],n);var t}(),s=e(275);e.d(t,!1,function(){return r.a}),e.d(t,!1,function(){return u}),e.d(t,!1,function(){return a}),e.d(t,!1,function(){return i}),e.d(t,!1,function(){return s.a})},173:function(n,t,e){"use strict";e(105);var o=e(125);e.d(t,"a",function(){return o.a});e(106),e(110)},174:function(n,t,e){"use strict";e.d(t,"a",function(){return o});e(1),e(179);var o=function(){return function(){}}()},177:function(n,t,e){"use strict";e.d(t,"a",function(){return o});e(1),e(57);var o=function(){function n(n,t){this.alertCtrl=n,this.toastCtrl=t}return n.prototype.showConfirm=function(n){this.alertCtrl.create({title:"Tem certeza disso?",message:"Essa é uma plataforma colaborativa e essa mudança vai valer para todos os usuários.",buttons:[{text:"Cancelar"},{text:"Continuar",handler:n}]}).present()},n.prototype.showToast=function(n,t){this.toastCtrl.create({message:n,duration:3e3,position:"bottom",cssClass:t}).present()},n}()},179:function(n,t,e){"use strict";e.d(t,"a",function(){return l});e(1);var o=e(0),l=(e(170),function(){function n(n,t,e){this.el=n,this.imgCacheService=t,this.renderer=e,this.source="",this.loaded=new o.n}return n.prototype.ngOnInit=function(){var n=this,t=this.el.nativeElement;this.loadListener=this.renderer.listen(t,"load",function(){n.renderer.addClass(t,"loaded"),n.loaded.emit()}),this.errorListener=this.renderer.listen(t,"error",function(){}),this.renderer.setAttribute(t,"src",this.source),this.cacheSubscription=this.imgCacheService.cache(this.source).subscribe(function(e){n.renderer.setAttribute(t,"src",e)},function(n){return console.log(n)})},n.prototype.ngOnDestroy=function(){this.loadListener(),this.errorListener(),this.cacheSubscription.unsubscribe()},n}())},211:function(n,t){function e(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=211},244:function(n,t,e){function o(n){var t=l[n];return t?e.e(t[1]).then(function(){return e(t[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var l={"../pages/about/about.module.ngfactory":[431,18],"../pages/cards/cards.module.ngfactory":[432,17],"../pages/content/content.module.ngfactory":[433,16],"../pages/donate/donate.module.ngfactory":[434,15],"../pages/feed/feed.module.ngfactory":[435,7],"../pages/guide/guide.module.ngfactory":[436,3],"../pages/how-to-help/how-to-help.module.ngfactory":[437,14],"../pages/login/login.module.ngfactory":[438,11],"../pages/menu/menu.module.ngfactory":[439,21],"../pages/plant-form/plant-form.module.ngfactory":[440,2],"../pages/plant/plant.module.ngfactory":[441,8],"../pages/plants/plants.module.ngfactory":[442,9],"../pages/post-form/post-form.module.ngfactory":[443,1],"../pages/post/post.module.ngfactory":[444,0],"../pages/profile-edit/profile-edit.module.ngfactory":[445,5],"../pages/profile/profile.module.ngfactory":[446,6],"../pages/settings/settings.module.ngfactory":[447,10],"../pages/share/share.module.ngfactory":[448,13],"../pages/signup/signup.module.ngfactory":[449,4],"../pages/tabs/tabs.module.ngfactory":[450,20],"../pages/tutorial/tutorial.module.ngfactory":[451,12],"../pages/welcome/welcome.module.ngfactory":[452,19]};o.keys=function(){return Object.keys(l)},o.id=244,n.exports=o},275:function(n,t,e){"use strict";function o(n){return n.replace(/(cdvfile|file):\/\//g,"")}e.d(t,"a",function(){return o})},291:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return l}),e.d(t,"c",function(){return a}),e.d(t,"d",function(){return r}),e.d(t,"e",function(){return i});var o="WelcomePage",l="FeedPage",a="WelcomePage",r="SearchPage",i="SettingsPage"},297:function(n,t,e){"use strict";function o(n){return new w.a(n,{option1:!0,option2:"Ionitron J. Framework",option3:"3",option4:"Hello"})}function l(n){return s._27(0,[(n()(),s._3(0,0,null,null,7,"button",[["icon-only",""],["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(n,t,e){var o=!0;if("click"===t){o=!1!==s._15(n,2).toggle()&&o}return o},R.b,R.a)),s._2(1,1097728,[[6,4],[5,4]],0,A.a,[[8,""],D.a,s.l,s.C],null,null),s._2(2,1064960,null,0,q.a,[K.a,[2,W.a],[2,A.a],[2,B.a]],{menuToggle:[0,"menuToggle"]},null),s._2(3,16384,null,1,G.a,[D.a,s.l,s.C,[2,Y.a],[2,B.a]],null,null),s._23(603979776,6,{_buttons:1}),(n()(),s._25(-1,0,["\n              "])),(n()(),s._3(6,0,null,0,0,"img",[["src","assets/img/logo_white.png"],["style","width: 40px;"]],null,null,null,null,null)),(n()(),s._25(-1,0,["\n            "]))],function(n,t){n(t,2,0,"")},function(n,t){n(t,0,0,s._15(t,2).isHidden)})}function a(n){return s._27(0,[(n()(),s._3(0,0,null,null,2,"ion-title",[],null,null,null,X.b,X.a)),s._2(1,49152,null,0,J.a,[D.a,s.l,s.C,[2,Y.a],[2,B.a]],null,null),(n()(),s._25(-1,0,["\n            Rede Agrofloresta\n          "]))],null,null)}function r(n){return s._27(0,[(n()(),s._3(0,0,null,null,19,"ion-item",[["class","menu_profile item item-block"]],null,[[null,"click"]],function(n,t,e){var o=!0,l=n.component;if("click"===t){o=!1!==l.profile(l.user.currentUser)&&o}return o},z.b,z.a)),s._2(1,1097728,null,3,V.a,[Q.a,D.a,s.l,s.C,[2,Z.a]],null,null),s._23(335544320,7,{contentLabel:0}),s._23(603979776,8,{_buttons:1}),s._23(603979776,9,{_icons:1}),s._2(5,16384,null,0,nn.a,[],null,null),(n()(),s._25(-1,2,["\n            "])),(n()(),s._3(7,0,null,0,5,"ion-avatar",[["item-start",""]],null,null,null,null,null)),s._2(8,16384,null,0,tn.a,[],null,null),(n()(),s._25(-1,null,["\n              "])),(n()(),s._3(10,0,null,null,1,"img",[["img-cache",""]],null,null,null,null,null)),s._2(11,212992,null,0,en.a,[s.l,on.a,s.D],{source:[0,"source"]},null),(n()(),s._25(-1,null,["\n            "])),(n()(),s._25(-1,2,["\n            "])),(n()(),s._3(14,0,null,2,1,"h2",[],null,null,null,null,null)),(n()(),s._25(15,null,["",""])),(n()(),s._25(-1,2,["\n            "])),(n()(),s._3(17,0,null,2,1,"p",[],null,null,null,null,null)),(n()(),s._25(18,null,["",""])),(n()(),s._25(-1,2,["\n          "]))],function(n,t){var e=t.component;n(t,11,0,e.api.imageUrl(e.user.currentUser.picture,"thumb"))},function(n,t){var e=t.component;n(t,15,0,e.user.currentUser.name);n(t,18,0,e.user.currentUser.email)})}function i(n){return s._27(0,[s._23(402653184,1,{nav:0}),(n()(),s._3(1,0,null,null,99,"ion-split-pane",[],null,null,null,null,null)),s._2(2,4341760,null,1,ln.b,[s.x,an.a,D.a,s.l,s.C],{enabled:[0,"enabled"]},null),s._23(603979776,2,{_setchildren:1}),s._21(2048,[[2,4]],ln.a,null,[ln.b]),(n()(),s._25(-1,null,["\n    "])),(n()(),s._3(6,0,null,null,89,"ion-menu",[["role","navigation"]],null,null,null,rn.b,rn.a)),s._2(7,245760,null,2,un.a,[K.a,s.l,D.a,an.a,s.C,sn.a,cn.l,dn.a,gn.a],{content:[0,"content"]},null),s._23(335544320,3,{menuContent:0}),s._23(335544320,4,{menuNav:0}),s._21(2048,[[2,4]],ln.a,null,[un.a]),(n()(),s._25(-1,0,["\n      "])),(n()(),s._3(12,0,null,0,17,"ion-header",[],null,null,null,null,null)),s._2(13,16384,null,0,fn.a,[D.a,s.l,s.C,[2,W.a]],null,null),(n()(),s._25(-1,null,["\n        "])),(n()(),s._3(15,0,null,null,13,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,pn.b,pn.a)),s._2(16,49152,null,0,Y.a,[D.a,s.l,s.C],null,null),(n()(),s._25(-1,3,["\n          "])),(n()(),s._3(18,0,null,0,6,"ion-buttons",[["left",""]],null,null,null,null,null)),s._2(19,16384,null,1,G.a,[D.a,s.l,s.C,[2,Y.a],[2,B.a]],null,null),s._23(603979776,5,{_buttons:1}),(n()(),s._25(-1,null,["\n            "])),(n()(),s.Y(16777216,null,null,1,null,l)),s._2(23,16384,null,0,_n.k,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(n()(),s._25(-1,null,["\n          "])),(n()(),s._25(-1,3,["\n\n          "])),(n()(),s.Y(16777216,null,3,1,null,a)),s._2(27,16384,null,0,_n.k,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(n()(),s._25(-1,3,["\n        "])),(n()(),s._25(-1,null,["\n      "])),(n()(),s._25(-1,0,["\n\n      "])),(n()(),s._3(31,0,null,0,63,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,hn.b,hn.a)),s._2(32,4374528,[[3,4]],0,mn.a,[D.a,an.a,dn.a,s.l,s.C,gn.a,sn.a,s.x,[2,W.a],[2,bn.a]],null,null),(n()(),s._25(-1,1,["\n        "])),(n()(),s._3(34,0,null,1,59,"ion-list",[],null,null,null,null,null)),s._2(35,16384,null,0,yn.a,[D.a,s.l,s.C,an.a,cn.l,dn.a],null,null),(n()(),s._25(-1,null,["\n          "])),(n()(),s.Y(16777216,null,null,1,null,r)),s._2(38,16384,null,0,_n.k,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(n()(),s._25(-1,null,["\n          "])),(n()(),s._3(40,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var o=!0,l=n.component;if("click"===t){o=!1!==s._15(n,46).close()&&o}if("click"===t){o=!1!==l.openPage("FeedPage")&&o}return o},z.b,z.a)),s._2(41,1097728,null,3,V.a,[Q.a,D.a,s.l,s.C,[2,Z.a]],null,null),s._23(335544320,10,{contentLabel:0}),s._23(603979776,11,{_buttons:1}),s._23(603979776,12,{_icons:1}),s._2(45,16384,null,0,nn.a,[],null,null),s._2(46,16384,null,0,vn.a,[K.a],{menuClose:[0,"menuClose"]},null),(n()(),s._25(-1,2,["Postagens"])),(n()(),s._25(-1,null,["\n          "])),(n()(),s._3(49,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var o=!0,l=n.component;if("click"===t){o=!1!==s._15(n,55).close()&&o}if("click"===t){o=!1!==l.openPage("FeedPage",{category:"event"})&&o}return o},z.b,z.a)),s._2(50,1097728,null,3,V.a,[Q.a,D.a,s.l,s.C,[2,Z.a]],null,null),s._23(335544320,13,{contentLabel:0}),s._23(603979776,14,{_buttons:1}),s._23(603979776,15,{_icons:1}),s._2(54,16384,null,0,nn.a,[],null,null),s._2(55,16384,null,0,vn.a,[K.a],{menuClose:[0,"menuClose"]},null),(n()(),s._25(-1,2,["Eventos"])),(n()(),s._25(-1,null,["\n          "])),(n()(),s._3(58,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var o=!0,l=n.component;if("click"===t){o=!1!==s._15(n,64).close()&&o}if("click"===t){o=!1!==l.openPage("PlantsPage")&&o}return o},z.b,z.a)),s._2(59,1097728,null,3,V.a,[Q.a,D.a,s.l,s.C,[2,Z.a]],null,null),s._23(335544320,16,{contentLabel:0}),s._23(603979776,17,{_buttons:1}),s._23(603979776,18,{_icons:1}),s._2(63,16384,null,0,nn.a,[],null,null),s._2(64,16384,null,0,vn.a,[K.a],{menuClose:[0,"menuClose"]},null),(n()(),s._25(-1,2,["Tabela de plantas"])),(n()(),s._25(-1,null,["\n          "])),(n()(),s._3(67,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var o=!0,l=n.component;if("click"===t){o=!1!==s._15(n,73).close()&&o}if("click"===t){o=!1!==l.openPage("DonatePage")&&o}return o},z.b,z.a)),s._2(68,1097728,null,3,V.a,[Q.a,D.a,s.l,s.C,[2,Z.a]],null,null),s._23(335544320,19,{contentLabel:0}),s._23(603979776,20,{_buttons:1}),s._23(603979776,21,{_icons:1}),s._2(72,16384,null,0,nn.a,[],null,null),s._2(73,16384,null,0,vn.a,[K.a],{menuClose:[0,"menuClose"]},null),(n()(),s._25(-1,2,["Seja um apoiador"])),(n()(),s._25(-1,null,["\n          "])),(n()(),s._3(76,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var o=!0,l=n.component;if("click"===t){o=!1!==s._15(n,82).close()&&o}if("click"===t){o=!1!==l.openPage("AboutPage")&&o}return o},z.b,z.a)),s._2(77,1097728,null,3,V.a,[Q.a,D.a,s.l,s.C,[2,Z.a]],null,null),s._23(335544320,22,{contentLabel:0}),s._23(603979776,23,{_buttons:1}),s._23(603979776,24,{_icons:1}),s._2(81,16384,null,0,nn.a,[],null,null),s._2(82,16384,null,0,vn.a,[K.a],{menuClose:[0,"menuClose"]},null),(n()(),s._25(-1,2,["Sobre"])),(n()(),s._25(-1,null,["\n          "])),(n()(),s._3(85,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(n,t,e){var o=!0,l=n.component;if("click"===t){o=!1!==s._15(n,91).close()&&o}if("click"===t){o=!1!==l.logout()&&o}return o},z.b,z.a)),s._2(86,1097728,null,3,V.a,[Q.a,D.a,s.l,s.C,[2,Z.a]],null,null),s._23(335544320,25,{contentLabel:0}),s._23(603979776,26,{_buttons:1}),s._23(603979776,27,{_icons:1}),s._2(90,16384,null,0,nn.a,[],null,null),s._2(91,16384,null,0,vn.a,[K.a],{menuClose:[0,"menuClose"]},null),(n()(),s._25(-1,2,["\n            Sair\n          "])),(n()(),s._25(-1,null,["\n        "])),(n()(),s._25(-1,1,["\n      "])),(n()(),s._25(-1,0,["\n\n    "])),(n()(),s._25(-1,null,["\n    "])),(n()(),s._3(97,0,null,null,2,"ion-nav",[["main",""]],null,null,null,Cn.b,Cn.a)),s._2(98,4374528,[[1,4],["content",4]],0,Pn.a,[[2,W.a],[2,bn.a],gn.a,D.a,an.a,s.l,s.x,s.C,s.k,cn.l,wn.a,[2,kn.a],dn.a,s.m],{root:[0,"root"]},null),s._21(2048,[[2,4]],ln.a,null,[Pn.a]),(n()(),s._25(-1,null,["\n  "]))],function(n,t){var e=t.component;n(t,2,0,e.user.currentUser);n(t,7,0,s._15(t,98));n(t,23,0,!e.form);n(t,27,0,e.user.currentUser);n(t,38,0,e.user.currentUser);n(t,46,0,"");n(t,55,0,"");n(t,64,0,"");n(t,73,0,"");n(t,82,0,"");n(t,91,0,"");n(t,98,0,e.rootPage)},function(n,t){n(t,15,0,s._15(t,16)._sbPadding);n(t,31,0,s._15(t,32).statusbarPadding,s._15(t,32)._hasRefresher)})}Object.defineProperty(t,"__esModule",{value:!0});var u=e(38),s=e(0),c=(e(1),e(111)),d=e(186),g=e(82),f=e(83),p=e(63),_=e(104),h=e(325),m=(e(57),e(194)),b=e(195),y=e(103),v=e(115),C=(e(294),e(277)),P=e(174),w=e(173),k=e(177),T=e(291),F=(e(170),function(){function n(n,t,e,o,l,a,r,i,u,s,c,d){var g=this;this.translate=n,this.config=o,this.statusBar=l,this.splashScreen=a,this.user=r,this.api=i,this.menuCtrl=u,this.storage=s,this.geolocation=c,t.ready().then(function(){g.statusBar.styleDefault(),g.splashScreen.hide(),d.initImgCache().subscribe(function(n){return console.log("init")},function(n){return console.log("fail init",n)})}),this.initTranslate(),this.storage.get("currentPosition").then(function(n){n&&n.latitude||g.geolocation.getCurrentPosition().then(function(n){g.storage.set("currentPosition",{latitude:n.coords.latitude,longitude:n.coords.longitude,accuracy:n.coords.accuracy,altitude:n.coords.altitude,timestamp:n.timestamp}).catch(function(n){console.log("errr",n)})}).catch(function(n){console.log("Error getting location",n)})}),this.user.skipTour().then(function(n){n?g.user.getCurrentUser().then(function(n){g.rootPage=n?T.b:T.a}):g.rootPage="TutorialPage"})}return n.prototype.initTranslate=function(){var n=this;this.translate.setDefaultLang("pt-br");this.translate.use("pt-br"),this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(function(t){n.config.set("ios","backButtonText",t.BACK_BUTTON_TEXT)})},n.prototype.logout=function(){this.nav.setRoot("WelcomePage"),this.user.logout()},n.prototype.openPage=function(n,t){this.nav.setRoot(n,t)},n.prototype.profile=function(n){this.nav.setRoot("ProfilePage",{id:n._id})},n}()),S=function(n){return new h.a(n,"./assets/i18n/",".json")},O=function(){return function(){}}(),N=e(64),M=e(279),j=e(280),U=e(281),E=e(282),x=e(283),H=e(284),L=e(285),I=e(286),$=e(287),R=e(52),A=e(26),D=e(2),q=e(113),K=e(30),W=e(6),B=e(45),G=e(109),Y=e(46),X=e(289),J=e(69),z=e(178),V=e(20),Q=e(18),Z=e(54),nn=e(70),tn=e(112),en=e(179),on=e(59),ln=e(40),an=e(5),rn=e(295),un=e(77),sn=e(33),cn=e(8),dn=e(13),gn=e(12),fn=e(107),pn=e(430),_n=e(15),hn=e(288),mn=e(29),bn=e(28),yn=e(61),vn=e(121),Cn=e(296),Pn=e(62),wn=e(39),kn=e(19),Tn=e(37),Fn=e(125),Sn=e(106),On=e(105),Nn=e(136),Mn=s._1({encapsulation:2,styles:[],data:{}}),jn=s.Z("ng-component",F,function(n){return s._27(0,[(n()(),s._3(0,0,null,null,1,"ng-component",[],null,null,null,i,Mn)),s._2(1,49152,null,0,F,[Tn.a,an.a,Fn.a,D.a,f.a,g.a,Sn.a,On.a,K.a,Nn.a,y.a,on.a],null,null)],null,null)},{},{},[]),Un=e(153),En=e(278),xn=e(119),Hn=e(24),Ln=e(71),In=e(72),$n=e(74),Rn=e(73),An=e(108),Dn=e(143),qn=e(145),Kn=e(152),Wn=e(41),Bn=e(150),Gn=e(175),Yn=e(66),Xn=e(53),Jn=e(122),zn=e(76),Vn=e(158),Qn=e(155),Zn=e(114),nt=e(110),tt=e(276),et=e(154),ot=e(151),lt=e(156),at=s._0(O,[N.b],function(n){return s._11([s._12(512,s.k,s.W,[[8,[M.a,j.a,U.a,E.a,x.a,H.a,L.a,I.a,$.a,jn]],[3,s.k],s.v]),s._12(5120,s.t,s._22,[[3,s.t]]),s._12(4608,_n.m,_n.l,[s.t,[2,_n.w]]),s._12(5120,s.b,s._5,[]),s._12(5120,s.r,s._13,[]),s._12(5120,s.s,s._16,[]),s._12(4608,u.c,u.q,[_n.d]),s._12(6144,s.G,null,[u.c]),s._12(4608,u.f,Un.a,[]),s._12(5120,u.d,function(n,t,e,o,l){return[new u.k(n,t),new u.o(e),new u.n(o,l)]},[_n.d,s.x,_n.d,_n.d,u.f]),s._12(4608,u.e,u.e,[u.d,s.x]),s._12(135680,u.m,u.m,[_n.d]),s._12(4608,u.l,u.l,[u.e,u.m]),s._12(5120,En.a,C.d,[]),s._12(5120,En.c,C.e,[]),s._12(4608,En.b,C.c,[En.a,En.c]),s._12(5120,s.E,C.f,[u.l,En.b,s.x]),s._12(6144,u.p,null,[u.m]),s._12(4608,s.K,s.K,[s.x]),s._12(4608,u.h,u.h,[_n.d]),s._12(4608,u.i,u.i,[_n.d]),s._12(4608,xn.b,C.b,[s.E,u.b]),s._12(4608,c.j,c.p,[_n.d,s.z,c.n]),s._12(4608,c.q,c.q,[c.j,c.o]),s._12(5120,c.a,function(n){return[n]},[c.q]),s._12(4608,c.m,c.m,[]),s._12(6144,c.k,null,[c.m]),s._12(4608,c.i,c.i,[c.k]),s._12(6144,c.b,null,[c.i]),s._12(4608,c.f,c.l,[c.b,s.q]),s._12(4608,c.c,c.c,[c.f]),s._12(4608,Hn.y,Hn.y,[]),s._12(4608,Hn.e,Hn.e,[]),s._12(5120,Ln.b,S,[c.c]),s._12(4608,In.a,In.b,[]),s._12(4608,$n.b,$n.a,[]),s._12(4608,Rn.b,Rn.a,[]),s._12(4608,An.a,An.a,[]),s._12(4608,Tn.a,Tn.a,[An.a,Ln.b,In.a,$n.b,Rn.b,Tn.b,Tn.c]),s._12(4608,Dn.a,Dn.a,[gn.a,D.a]),s._12(4608,qn.a,qn.a,[gn.a,D.a]),s._12(4608,Kn.a,Kn.a,[]),s._12(4608,Q.a,Q.a,[]),s._12(4608,Wn.a,Wn.a,[an.a]),s._12(4608,sn.a,sn.a,[D.a,an.a,s.x,dn.a]),s._12(4608,Bn.a,Bn.a,[gn.a,D.a]),s._12(5120,_n.h,Gn.c,[_n.t,[2,_n.a],D.a]),s._12(4608,_n.g,_n.g,[_n.h]),s._12(5120,Yn.b,Yn.d,[gn.a,Yn.a]),s._12(5120,kn.a,kn.b,[gn.a,Yn.b,_n.g,Xn.b,s.k]),s._12(4608,Jn.a,Jn.a,[gn.a,D.a,kn.a]),s._12(4608,zn.a,zn.a,[gn.a,D.a]),s._12(4608,Vn.a,Vn.a,[gn.a,D.a,kn.a]),s._12(4608,Qn.a,Qn.a,[D.a,an.a,dn.a,gn.a,cn.l]),s._12(4608,Zn.a,Zn.a,[gn.a,D.a]),s._12(4608,wn.a,wn.a,[an.a,D.a]),s._12(5120,Nn.a,Nn.c,[Nn.b]),s._12(4608,On.a,On.a,[c.c]),s._12(4608,Sn.a,Sn.a,[Nn.a]),s._12(4608,nt.a,nt.a,[]),s._12(4608,k.a,k.a,[qn.a,Zn.a]),s._12(4608,d.a,d.a,[]),s._12(4608,g.a,g.a,[]),s._12(4608,f.a,f.a,[]),s._12(4608,m.a,m.a,[]),s._12(4608,b.a,b.a,[]),s._12(4608,y.a,y.a,[]),s._12(4608,v.a,v.a,[]),s._12(4608,on.a,on.a,[an.a,v.a]),s._12(5120,Fn.a,o,[Nn.a]),s._12(512,_n.c,_n.c,[]),s._12(512,s.m,tt.a,[]),s._12(256,D.b,{},[]),s._12(1024,et.a,et.b,[]),s._12(1024,an.a,an.b,[u.b,et.a,s.x]),s._12(1024,D.a,D.c,[D.b,an.a]),s._12(512,dn.a,dn.a,[an.a]),s._12(512,K.a,K.a,[]),s._12(512,gn.a,gn.a,[D.a,an.a,[2,K.a]]),s._12(512,cn.l,cn.l,[gn.a]),s._12(256,Yn.a,{links:[{loadChildren:"../pages/about/about.module.ngfactory#AboutPageModuleNgFactory",name:"AboutPage",segment:"about",priority:"low",defaultHistory:[]},{loadChildren:"../pages/cards/cards.module.ngfactory#CardsPageModuleNgFactory",name:"CardsPage",segment:"cards",priority:"low",defaultHistory:[]},{loadChildren:"../pages/content/content.module.ngfactory#ContentPageModuleNgFactory",name:"ContentPage",segment:"content",priority:"low",defaultHistory:[]},{loadChildren:"../pages/donate/donate.module.ngfactory#DonatePageModuleNgFactory",name:"DonatePage",segment:"donate",priority:"low",defaultHistory:[]},{loadChildren:"../pages/feed/feed.module.ngfactory#FeedPageModuleNgFactory",name:"FeedPage",segment:"feed",priority:"low",defaultHistory:[]},{loadChildren:"../pages/guide/guide.module.ngfactory#GuidePageModuleNgFactory",name:"GuidePage",segment:"guide",priority:"low",defaultHistory:[]},{loadChildren:"../pages/how-to-help/how-to-help.module.ngfactory#HowToHelpPageModuleNgFactory",name:"HowToHelpPage",segment:"how-to-help",priority:"low",defaultHistory:[]},{loadChildren:"../pages/login/login.module.ngfactory#LoginPageModuleNgFactory",name:"LoginPage",segment:"login",priority:"low",defaultHistory:[]},{loadChildren:"../pages/menu/menu.module.ngfactory#MenuPageModuleNgFactory",name:"MenuPage",segment:"menu",priority:"low",defaultHistory:[]},{loadChildren:"../pages/plant-form/plant-form.module.ngfactory#PlantFormPageModuleNgFactory",name:"PlantFormPage",segment:"plant-form",priority:"low",defaultHistory:[]},{loadChildren:"../pages/plant/plant.module.ngfactory#PlantPageModuleNgFactory",name:"PlantPage",segment:"plant/:id",priority:"low",defaultHistory:[]},{loadChildren:"../pages/plants/plants.module.ngfactory#PlantsPageModuleNgFactory",name:"PlantsPage",segment:"plants",priority:"low",defaultHistory:[]},{loadChildren:"../pages/post-form/post-form.module.ngfactory#PostFormPageModuleNgFactory",name:"PostFormPage",segment:"post-form",priority:"low",defaultHistory:[]},{loadChildren:"../pages/post/post.module.ngfactory#PostPageModuleNgFactory",name:"PostPage",segment:"post/:id",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profile-edit/profile-edit.module.ngfactory#ProfileEditPageModuleNgFactory",name:"ProfileEditPage",segment:"profile-edit",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profile/profile.module.ngfactory#ProfilePageModuleNgFactory",name:"ProfilePage",segment:"profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/share/share.module.ngfactory#SharePageModuleNgFactory",name:"SharePage",segment:"share",priority:"low",defaultHistory:[]},{loadChildren:"../pages/signup/signup.module.ngfactory#SignupPageModuleNgFactory",name:"SignupPage",segment:"signup",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsPageModuleNgFactory",name:"TabsPage",segment:"tabs",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tutorial/tutorial.module.ngfactory#TutorialPageModuleNgFactory",name:"TutorialPage",segment:"tutorial",priority:"low",defaultHistory:[]},{loadChildren:"../pages/welcome/welcome.module.ngfactory#WelcomePageModuleNgFactory",name:"WelcomePage",segment:"welcome",priority:"low",defaultHistory:[]}]},[]),s._12(512,s.i,s.i,[]),s._12(512,ot.a,ot.a,[s.i]),s._12(1024,Xn.b,Xn.c,[ot.a,s.q]),s._12(1024,s.c,function(n,t,e,o,l,a,r,i,s,c,d,g,f){return[u.s(n),lt.a(t),Kn.b(e,o),Qn.b(l,a,r,i,s),Xn.d(c,d,g,f)]},[[2,s.w],D.a,an.a,dn.a,D.a,an.a,dn.a,gn.a,cn.l,D.a,Yn.a,Xn.b,s.x]),s._12(512,s.d,s.d,[[2,s.c]]),s._12(131584,s.f,s.f,[s.x,s.X,s.q,s.m,s.k,s.d]),s._12(512,s.e,s.e,[s.f]),s._12(512,u.a,u.a,[[3,u.a]]),s._12(512,C.a,C.a,[]),s._12(512,c.e,c.e,[]),s._12(512,c.d,c.d,[]),s._12(512,_.a,_.a,[]),s._12(512,Hn.w,Hn.w,[]),s._12(512,Hn.l,Hn.l,[]),s._12(512,Hn.u,Hn.u,[]),s._12(512,Gn.a,Gn.a,[]),s._12(512,p.a,p.a,[]),s._12(512,P.a,P.a,[]),s._12(512,O,O,[]),s._12(256,c.n,"XSRF-TOKEN",[]),s._12(256,c.o,"X-XSRF-TOKEN",[]),s._12(256,Tn.c,void 0,[]),s._12(256,Tn.b,void 0,[]),s._12(256,N.a,F,[]),s._12(256,_n.a,"/",[]),s._12(256,Nn.b,null,[])])});Object(s.Q)(),Object(u.j)().bootstrapModuleFactory(at)},59:function(n,t,e){"use strict";e.d(t,"a",function(){return s});e(1),e(115),e(57);var o=e(339),l=e.n(o),a=e(171),r=(e.n(a),e(293)),i=(e.n(r),e(428)),u=(e.n(i),e(275)),s=function(){function n(n,t){this.platform=n,this.file=t,this.initNotifier$=new a.ReplaySubject,l.a.options.debug=!0}return Object.defineProperty(n.prototype,"notifier$",{get:function(){return this.initNotifier$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.initImgCache=function(){var n=this;return Object(i.bindCallback)(l.a.init)().pipe(Object(r.take)(1),Object(r.tap)(function(){return n.initNotifier$.next("init")}))},n.prototype.cache=function(n){var t=this;return this.notifier$.pipe(Object(r.switchMapTo)(this.isCached(n).pipe(Object(r.flatMap)(function(n){var e=n[0];return n[1]?t.getCachedFileURL(e):t.cacheFile(e)}),Object(r.map)(function(n){return t.platform.is("ios")?t.normalizeURlWKWview(n):n}))))},n.prototype.normalizeURlWKWview=function(n){return(Object(u.a)(this.file.applicationStorageDirectory)+"Library/files/"+Object(u.a)(n)).replace("/localhost/persistent","")},n.prototype.getCachedFileURL=function(n){return Object(i.bindCallback)(l.a.getCachedFileURL)(n).pipe(Object(r.map)(function(n){return n[1]}))},n.prototype.cacheFile=function(n){return Object(i.bindCallback)(l.a.cacheFile)(n)},n.prototype.isCached=function(n){return Object(i.bindCallback)(l.a.isCached)(n)},n}()}},[297]);