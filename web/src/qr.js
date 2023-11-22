!function($,r,_){"function"==typeof define&&define.amd?define([],_):"object"==typeof module&&module.exports?module.exports=_():$[r]=_()}(this,"QRCode",function(){for(var $=[null,[[10,7,17,13],[1,1,1,1],[]],[[16,10,28,22],[1,1,1,1],[4,16]],[[26,15,22,18],[1,1,2,2],[4,20]],[[18,20,16,26],[2,1,4,2],[4,24]],[[24,26,22,18],[2,1,4,4],[4,28]],[[16,18,28,24],[4,2,4,4],[4,32]],[[18,20,26,18],[4,2,5,6],[4,20,36]],[[22,24,26,22],[4,2,6,6],[4,22,40]],[[22,30,24,20],[5,2,8,8],[4,24,44]],[[26,18,28,24],[5,4,8,8],[4,26,48]],[[30,20,24,28],[5,4,11,8],[4,28,52]],[[22,24,28,26],[8,4,11,10],[4,30,56]],[[22,26,22,24],[9,4,16,12],[4,32,60]],[[24,30,24,20],[9,4,16,16],[4,24,44,64]],[[24,22,24,30],[10,6,18,12],[4,24,46,68]],[[28,24,30,24],[10,6,16,17],[4,24,48,72]],[[28,28,28,28],[11,6,19,16],[4,28,52,76]],[[26,30,28,28],[13,6,21,18],[4,28,54,80]],[[26,28,26,26],[14,7,25,21],[4,28,56,84]],[[26,28,28,30],[16,8,25,20],[4,32,60,88]],[[26,28,30,28],[17,8,25,23],[4,26,48,70,92]],[[28,28,24,30],[17,9,34,23],[4,24,48,72,96]],[[28,30,30,30],[18,9,30,25],[4,28,52,76,100]],[[28,30,30,30],[20,10,32,27],[4,26,52,78,104]],[[28,26,30,30],[21,12,35,29],[4,30,56,82,108]],[[28,28,30,28],[23,12,37,34],[4,28,56,84,112]],[[28,30,30,30],[25,12,40,34],[4,32,60,88,116]],[[28,30,30,30],[26,13,42,35],[4,24,48,72,96,120]],[[28,30,30,30],[28,14,45,38],[4,28,52,76,100,124]],[[28,30,30,30],[29,15,48,40],[4,24,50,76,102,128]],[[28,30,30,30],[31,16,51,43],[4,28,54,80,106,132]],[[28,30,30,30],[33,17,54,45],[4,32,58,84,110,136]],[[28,30,30,30],[35,18,57,48],[4,28,56,84,112,140]],[[28,30,30,30],[37,19,60,51],[4,32,60,88,116,144]],[[28,30,30,30],[38,19,63,53],[4,28,52,76,100,124,148]],[[28,30,30,30],[40,20,66,56],[4,22,48,74,100,126,152]],[[28,30,30,30],[43,21,70,59],[4,26,52,78,104,130,156]],[[28,30,30,30],[45,22,74,62],[4,30,56,82,108,134,160]],[[28,30,30,30],[47,24,77,65],[4,24,52,80,108,136,164]],[[28,30,30,30],[49,25,81,68],[4,28,56,84,112,140,168]]],r=/^\d*$/,_=/^[A-Za-z0-9 $%*+\-./:]*$/,e=/^[A-Z0-9 $%*+\-./:]*$/,t=[],n=[-1],a=0,f=1;a<255;++a)t.push(f),n[f]=a,f=2*f^(f>=128?285:0);for(var o=[[]],a=0;a<30;++a){for(var u=o[a],i=[],s=0;s<=a;++s){var c=s<a?t[u[s]]:0,h=t[(a+(u[s-1]||0))%255];i.push(n[c^h])}o.push(i)}for(var l={},a=0;a<45;++a)l["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".charAt(a)]=a;var v=[function($,r){return($+r)%2==0},function($,r){return $%2==0},function($,r){return r%3==0},function($,r){return($+r)%3==0},function($,r){return(($/2|0)+(r/3|0))%2==0},function($,r){return $*r%2+$*r%3==0},function($,r){return($*r%2+$*r%3)%2==0},function($,r){return(($+r)%2+$*r%3)%2==0}],x=function($){return $>6},g=function(r){var _=$[r],e=16*r*r+128*r+64;return x(r)&&(e-=36),_[2].length&&(e-=25*_[2].length*_[2].length-10*_[2].length-55),e},p=function(r,_){var e=-8&g(r),t=$[r];return e-8*t[0][_]*t[1][_]},d=function($,r){switch(r){case 1:return $<10?10:$<27?12:14;case 2:return $<10?9:$<27?11:13;case 4:return $<10?8:16;case 8:return $<10?8:$<27?10:12}},m=function($,r,_){var e=p($,_)-4-d($,r);switch(r){case 1:return(e/10|0)*3+(e%10<4?0:e%10<7?1:2);case 2:return(e/11|0)*2+(e%11<6?0:1);case 4:return e/8|0;case 8:return e/13|0}},w=function($,e){switch($){case 1:if(!e.match(r))return null;return e;case 2:if(!e.match(_))return null;return e.toUpperCase();case 4:if("string"!=typeof e)return e;for(var t=[],n=0;n<e.length;++n){var a=e.charCodeAt(n);a<128?t.push(a):a<2048?t.push(192|a>>6,128|63&a):a<65536?t.push(224|a>>12,128|a>>6&63,128|63&a):t.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|63&a)}return t}},b=function($,r,_,e){var t=[],n=0,a=8,f=_.length,o=function($,r){if(r>=a){for(t.push(n|$>>(r-=a));r>=8;)t.push($>>(r-=8)&255);n=0,a=8}r>0&&(n|=($&(1<<r)-1)<<(a-=r))},u=d($,r);switch(o(r,4),o(f,u),r){case 1:for(var i=2;i<f;i+=3)o(parseInt(_.substring(i-2,i+1),10),10);o(parseInt(_.substring(i-2),10),[0,4,7][f%3]);break;case 2:for(var i=1;i<f;i+=2)o(45*l[_.charAt(i-1)]+l[_.charAt(i)],11);f%2==1&&o(l[_.charAt(i-1)],6);break;case 4:for(var i=0;i<f;++i)o(_[i],8)}for(o(0,4),a<8&&t.push(n);t.length+1<e;)t.push(236,17);return t.length<e&&t.push(236),t},y=function($,r){for(var _=$.slice(0),e=$.length,a=r.length,f=0;f<a;++f)_.push(0);for(var f=0;f<e;){var o=n[_[f++]];if(o>=0)for(var u=0;u<a;++u)_[f+u]^=t[(o+r[u])%255]}return _.slice(e)},A=function($,r,_){for(var e=[],t=$.length/r|0,n=0,a=r-$.length%r,f=0;f<a;++f)e.push(n),n+=t;for(var f=a;f<r;++f)e.push(n),n+=t+1;e.push(n);for(var o=[],f=0;f<r;++f)o.push(y($.slice(e[f],e[f+1]),_));for(var u=[],i=$.length/r|0,f=0;f<i;++f)for(var s=0;s<r;++s)u.push($[e[s]+f]);for(var s=a;s<r;++s)u.push($[e[s+1]-1]);for(var f=0;f<_.length;++f)for(var s=0;s<r;++s)u.push(o[s][f]);return u},C=function($,r,_,e){for(var t=$<<e,n=r-1;n>=0;--n)t>>e+n&1&&(t^=_<<n);return $<<e|t},L=function(r){for(var _,e=$[r],t=4*(_=r)+17,n=[],a=[],f=0;f<t;++f)n.push([]),a.push([]);var o=function($,r,_,e,t){for(var f=0;f<_;++f)for(var o=0;o<e;++o)n[$+f][r+o]=t[f]>>o&1,a[$+f][r+o]=1};o(0,0,9,9,[127,65,93,93,93,65,383,0,64]),o(t-8,0,8,9,[256,127,65,93,93,93,65,127]),o(0,t-8,9,8,[254,130,186,186,186,130,254,0,0]);for(var f=9;f<t-8;++f)n[6][f]=n[f][6]=1&~f,a[6][f]=a[f][6]=1;for(var u=e[2],i=u.length,f=0;f<i;++f)for(var s=0==f||f==i-1?1:0,c=0==f?i-1:i,h=s;h<c;++h)o(u[f],u[h],5,5,[31,17,21,17,31]);if(x(r))for(var l=C(r,6,7973,12),v=0,f=0;f<6;++f)for(var h=0;h<3;++h)n[f][t-11+h]=n[t-11+h][f]=l>>v++&1,a[f][t-11+h]=a[t-11+h][f]=1;return{matrix:n,reserved:a}},k=function($,r,_){for(var e=$.length,t=0,n=-1,a=e-1;a>=0;a-=2){6==a&&--a;for(var f=n<0?e-1:0,o=0;o<e;++o){for(var u=a;u>a-2;--u)!r[f][u]&&($[f][u]=_[t>>3]>>(7&~t)&1,++t);f+=n}n=-n}return $},E=function($,r,_){for(var e=v[_],t=$.length,n=0;n<t;++n)for(var a=0;a<t;++a)r[n][a]||($[n][a]^=e(n,a));return $},H=function($,r,_,e){for(var t=$.length,n=21522^C(_<<3|e,5,1335,10),a=0;a<15;++a){var f=[0,1,2,3,4,5,7,8,t-7,t-6,t-5,t-4,t-3,t-2,t-1][a],o=[t-1,t-2,t-3,t-4,t-5,t-6,t-7,t-8,7,5,4,3,2,1,0][a];$[f][8]=$[8][o]=n>>a&1}return $},M=function($){for(var r=function($){for(var r=0,_=0;_<$.length;++_)$[_]>=5&&(r+=3+($[_]-5));for(var _=5;_<$.length;_+=2){var e=$[_];$[_-1]==e&&$[_-2]==3*e&&$[_-3]==e&&$[_-4]==e&&($[_-5]>=4*e||$[_+1]>=4*e)&&(r+=40)}return r},_=$.length,e=0,t=0,n=0;n<_;++n){var a,f,o=$[n];a=[0];for(var u=0;u<_;){for(f=0;u<_&&o[u];++f)++u;for(a.push(f),f=0;u<_&&!o[u];++f)++u;a.push(f)}e+=r(a),a=[0];for(var u=0;u<_;){for(f=0;u<_&&$[u][n];++f)++u;for(a.push(f),f=0;u<_&&!$[u][n];++f)++u;a.push(f)}e+=r(a);var i=$[n+1]||[];t+=o[0];for(var u=1;u<_;++u){var s=o[u];t+=s,o[u-1]==s&&i[u]===s&&i[u-1]===s&&(e+=3)}}return e+10*(Math.abs(t/_/_-.5)/.05|0)},N=function(r,_,e,t,n){var a=$[_],f=b(_,e,r,p(_,t)>>3);f=A(f,a[1][t],o[a[0][t]]);var u=L(_),i=u.matrix,s=u.reserved;if(k(i,s,f),n<0){E(i,s,0),H(i,s,t,0);var c=0,h=M(i);for(E(i,s,0),n=1;n<8;++n){E(i,s,n),H(i,s,t,n);var l=M(i);h>l&&(h=l,c=n),E(i,s,n)}n=c}return E(i,s,n),H(i,s,t,n),i},R={generate:function($,_){var t=(_=_||{}).version||-1,n={L:1,M:0,Q:3,H:2}[(_.ecclevel||"L").toUpperCase()],a=_.mode?({numeric:1,alphanumeric:2,octet:4})[_.mode.toLowerCase()]:-1,f="mask"in _?_.mask:-1;if(a<0)a="string"==typeof $?$.match(r)?1:$.match(e)?2:4:4;else if(!(1==a||2==a||4==a))throw"invalid or unsupported mode";if(null===($=w(a,$)))throw"invalid data format";if(n<0||n>3)throw"invalid ECC level";if(t<0){for(t=1;t<=40&&!($.length<=m(t,a,n));++t);if(t>40)throw"too large data"}else if(t<1||t>40)throw"invalid version";if(-1!=f&&(f<0||f>8))throw"invalid mask";return N($,t,a,n,f)},generateHTML:function($,r){r=r||{};for(var _=R.generate($,r),e=Math.max(r.modulesize||5,.5),t=Math.max(null!==r.margin?r.margin:4,0),n=document.createElement("div"),a=_.length,f=['<table border="0" cellspacing="0" cellpadding="0" style="border:'+e*t+'px solid #fff;background:#fff">'],o=0;o<a;++o){f.push("<tr>");for(var u=0;u<a;++u)f.push('<td style="width:'+e+"px;height:"+e+"px"+(_[o][u]?";background:#000":"")+'"></td>');f.push("</tr>")}return n.className="qrcode",n.innerHTML=f.join("")+"</table>",n},generateSVG:function($,r){r=r||{};var _=R.generate($,r),e=_.length,t=Math.max(r.modulesize||5,.5),n=Math.max(r.margin?r.margin:4,0),a=t*(e+2*n),f=' class= "fg" width="'+t+'" height="'+t+'"/>',o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("viewBox","0 0 "+a+" "+a),o.setAttribute("style","shape-rendering:crispEdges");for(var u=["<style scoped>.bg{fill:#FFF}.fg{fill:#000}</style>",'<rect class="bg" x="0" y="0"','width="'+a+'" height="'+a+'"/>',],i=n*t,s=0;s<e;++s){for(var c=n*t,h=0;h<e;++h)_[s][h]&&u.push('<rect x="'+c+'" y="'+i+'"',f),c+=t;i+=t}return o.innerHTML=u.join(""),o},generatePNG:function($,r){r=r||{};var _,e=R.generate($,r),t=Math.max(r.modulesize||5,.5),n=Math.max(null!=r.margin?r.margin:4,0),a=e.length,f=t*(a+2*n),o=document.createElement("canvas");if(o.width=o.height=f,!(_=o.getContext("2d")))throw"canvas support is needed for PNG output";_.fillStyle="#fff",_.fillRect(0,0,f,f),_.fillStyle="#000";for(var u=0;u<a;++u)for(var i=0;i<a;++i)e[u][i]&&_.fillRect(t*(n+i),t*(n+u),t,t);return o.toDataURL()}};return R});