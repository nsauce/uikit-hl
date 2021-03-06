// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.nav');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.nav._STAR_uk_nav_STAR_ = "";
uikit_hl.nav._STAR_default_STAR_ = null;
uikit_hl.nav._STAR_title_STAR_ = null;
uikit_hl.nav._STAR_href_STAR_ = null;
uikit_hl.nav._STAR_parent_STAR_ = null;
uikit_hl.nav._STAR_active_STAR_ = null;
uikit_hl.nav._STAR_parent_icon_STAR_ = null;
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"uk-nav","uk-nav",-2072227397),(function (elem,_,v){
return UIkit.nav(elem,cljs.core.clj__GT_js.call(null,v));
}));
/**
 * @param {...*} var_args
 */
uikit_hl.nav.nav = (function() { 
var uikit_hl$nav$nav__delegate = function (args__9094__auto__){
var vec__9736 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9736,(0),null);
var kids = cljs.core.nth.call(null,vec__9736,(1),null);
var nav = new cljs.core.Keyword(null,"uk-nav","uk-nav",-2072227397).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.nav._STAR_uk_nav_STAR_);
var default$ = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.nav._STAR_default_STAR_);
var parent_icon = new cljs.core.Keyword(null,"parent-icon","parent-icon",-666927147).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.nav._STAR_parent_icon_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-nav","uk-nav",-2072227397),nav),new cljs.core.Keyword(null,"default","default",-1987822328));
return hoplon.core.ul.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uk-nav","uk-nav",-2072227397),true,new cljs.core.Keyword(null,"uk-nav-default","uk-nav-default",-777418420),default$,new cljs.core.Keyword(null,"uk-nav-parent-icon","uk-nav-parent-icon",2097620836),parent_icon], null)),kids);
};
var uikit_hl$nav$nav = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9739__i = 0, G__9739__a = new Array(arguments.length -  0);
while (G__9739__i < G__9739__a.length) {G__9739__a[G__9739__i] = arguments[G__9739__i + 0]; ++G__9739__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9739__a,0,null);
} 
return uikit_hl$nav$nav__delegate.call(this,args__9094__auto__);};
uikit_hl$nav$nav.cljs$lang$maxFixedArity = 0;
uikit_hl$nav$nav.cljs$lang$applyTo = (function (arglist__9740){
var args__9094__auto__ = cljs.core.seq(arglist__9740);
return uikit_hl$nav$nav__delegate(args__9094__auto__);
});
uikit_hl$nav$nav.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$nav$nav__delegate;
return uikit_hl$nav$nav;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.nav.header = (function() { 
var uikit_hl$nav$header__delegate = function (args__9094__auto__){
var vec__9744 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9744,(0),null);
var kids = cljs.core.nth.call(null,vec__9744,(1),null);
return hoplon.core.li.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-nav-header","uk-nav-header",-1823353208),true], null)),kids);
};
var uikit_hl$nav$header = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9747__i = 0, G__9747__a = new Array(arguments.length -  0);
while (G__9747__i < G__9747__a.length) {G__9747__a[G__9747__i] = arguments[G__9747__i + 0]; ++G__9747__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9747__a,0,null);
} 
return uikit_hl$nav$header__delegate.call(this,args__9094__auto__);};
uikit_hl$nav$header.cljs$lang$maxFixedArity = 0;
uikit_hl$nav$header.cljs$lang$applyTo = (function (arglist__9748){
var args__9094__auto__ = cljs.core.seq(arglist__9748);
return uikit_hl$nav$header__delegate(args__9094__auto__);
});
uikit_hl$nav$header.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$nav$header__delegate;
return uikit_hl$nav$header;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.nav.item = (function() { 
var uikit_hl$nav$item__delegate = function (args__9094__auto__){
var vec__9752 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9752,(0),null);
var kids = cljs.core.nth.call(null,vec__9752,(1),null);
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.nav._STAR_parent_STAR_);
var active = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.nav._STAR_active_STAR_);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.nav._STAR_title_STAR_);
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.nav._STAR_href_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"href","href",-793805698));
return hoplon.core.li.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk-parent","uk-parent",-2114518338),parent,new cljs.core.Keyword(null,"uk-active","uk-active",1648067307),active], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),href,title),kids], null));
};
var uikit_hl$nav$item = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9755__i = 0, G__9755__a = new Array(arguments.length -  0);
while (G__9755__i < G__9755__a.length) {G__9755__a[G__9755__i] = arguments[G__9755__i + 0]; ++G__9755__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9755__a,0,null);
} 
return uikit_hl$nav$item__delegate.call(this,args__9094__auto__);};
uikit_hl$nav$item.cljs$lang$maxFixedArity = 0;
uikit_hl$nav$item.cljs$lang$applyTo = (function (arglist__9756){
var args__9094__auto__ = cljs.core.seq(arglist__9756);
return uikit_hl$nav$item__delegate(args__9094__auto__);
});
uikit_hl$nav$item.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$nav$item__delegate;
return uikit_hl$nav$item;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.nav.subnav = (function() { 
var uikit_hl$nav$subnav__delegate = function (args__9094__auto__){
var vec__9760 = hoplon.core.parse_args.call(null,args__9094__auto__);
var attr = cljs.core.nth.call(null,vec__9760,(0),null);
var kids = cljs.core.nth.call(null,vec__9760,(1),null);
return hoplon.core.ul.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-nav-sub","uk-nav-sub",1674558158),true], null)),kids);
};
var uikit_hl$nav$subnav = function (var_args){
var args__9094__auto__ = null;
if (arguments.length > 0) {
var G__9763__i = 0, G__9763__a = new Array(arguments.length -  0);
while (G__9763__i < G__9763__a.length) {G__9763__a[G__9763__i] = arguments[G__9763__i + 0]; ++G__9763__i;}
  args__9094__auto__ = new cljs.core.IndexedSeq(G__9763__a,0,null);
} 
return uikit_hl$nav$subnav__delegate.call(this,args__9094__auto__);};
uikit_hl$nav$subnav.cljs$lang$maxFixedArity = 0;
uikit_hl$nav$subnav.cljs$lang$applyTo = (function (arglist__9764){
var args__9094__auto__ = cljs.core.seq(arglist__9764);
return uikit_hl$nav$subnav__delegate(args__9094__auto__);
});
uikit_hl$nav$subnav.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$nav$subnav__delegate;
return uikit_hl$nav$subnav;
})()
;

//# sourceMappingURL=nav.js.map