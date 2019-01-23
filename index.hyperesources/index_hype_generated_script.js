//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/index_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),false==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"0":{n:"jquery-3.2.1.min.js"},"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,[],d,[{n:"Table of Contents",o:"113",X:[0]}],[{o:"115",p:"600px",cA:false,a:100,Z:2500,Y:1920,c:"#FFFFFF",L:[],bY:1,d:1920,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["126"],n:"Desktop","_":0,v:{"126":{G:"#000000",aU:8,c:1840,bS:71,aV:8,d:5666,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"<h1 style=\"text-align: center; \"><font color=\"#050505\" size=\"7\">The Internet Peering Playbook</font></h1><div style=\"text-align: right;\"><font color=\"#0433ff\" size=\"5\">(2019 Edition)</font></div>\n<h2 style=\"text-align: right; \"><font color=\"#053505\">William B. Norton</font></h2>\n<h1 style=\"text-align: center; \"><font color=\"#0433ff\">Section I - Connecting to the Edge of the Internet</font></h1>\n<p>Almost all attachments to the Internet are made at the edge. We will begin our exploration here.</p><p>\nIn section I, we introduce the \u201cInternet Transit\u201d service, how it is offered, priced, and metered. We exercise these definitions with a set of \u201cInternet Transit Playbook\u201d tactics that some of the smartest peering coordinators in the world have used to derive the maximum value from the Internet Transit service for the minimum cost. While many of these tactics are not recommended, they have been used in the field, they demonstrate the Internet Transit service, and they exercise the lexicon. In my peering workshops and consulting engagements, the Internet Transit Playbook chapter has proven to be very educational.</p><p>\nBy the end of this section you will understand the Internet Transit service.\nSection I includes the following chapters:</p>\n<h2>Chapter 1 - Introduction</h2>\n<h2>Chapter 2 - Internet Transit</h2>\n<h2>Chapter 3 - Internet Transit Playbook</h2>\n<h1 style=\"text-align: center;\"><font color=\"#0433ff\">Section II - Connecting to the Core of the Internet</font></h1>\n<p>Now that you understand how to connect to the edge of the Internet (the way 90% of connections are made) it\u2019s time to learn how to do it better. The rest of this book is about Internet Peering, connecting your network at the core of the Internet. This section provides the necessary foundation for understanding the Internet Peering Ecosystem and Internet Peering Playbooks. \nWe will explore the</p>\n<p>\n</p><ul>\n<li>Internet Peering Model</li>\n<li>Business Case for Internet Peering</li>\n<li>Top Ten Internet Exchange Point Selection Criteria</li>\n<li>Public vs. Private Peering Tradeoffs</li>\n</ul>\n<p></p><p>By the end of this section you will understand the concept of Internet Peering. You will understand the Internet Peering model enough to prove \u2013 not convince \u2013 but prove when it makes sense to pursue peering and when it doesn\u2019t, from a purely objective financial perspective. You will learn the processes of Internet Peering, the financial value derived from peering, and the processes proven most effective to find, contact, and negotiate with peers. We will walk through the ten criteria that ISPs have claimed were the most important to them when selecting among Internet Exchange Points. We will finish with a discussion of the benefits and drawbacks of Public Peering and Private Peering.\n</p>\n<p>Section II includes the following chapters:\n</p>\n<h2>Chapter 4 - Internet Peering</h2>\n<h2>Chapter 5 - The Business Case for Peering</h2>\n<h2>Chapter 6 - Selecting an ISP</h2>\n<h2>Chapter 7 - Public vs. Private Peering</h2>\n<h1 style=\"text-align: center;\"><font color=\"#0433ff\">Section III - The Global Internet Peering Ecosystem</font></h1>\n<p>\nIn this section we will explore the Internet operations context \u2013 the environment, the participants, and the dynamics at the core of the Internet.</p>\n<p>We will start by quickly examining how we got here. We will learn about the first peering and how the government-funded NSFNET backbone evolved into the commercial model of today. </p>\n<p>The Global Internet Peering Ecosystem model is introduced as a collection of Internet Regions, each with its own Internet Peering Ecosystem. We spotlight the categories of participants, their positions, and corresponding motivations. You will learn why their behavior is predictable in the ecosystem.</p>\n<p>\nThe section then brings us to the present day by walking through the addition of several key players in the ecosystem. These players embrace peering on a massive scale, creating a \u201cfat middle\u201d in the ecosystem. We finish with the emerging access power peering dynamic. This section contains the following chapters:\n</p>\n\n<h2>Chapter 8 - The 20th Century Internet Peering Ecosystem</h2>\n<h2>Chapter 9 - The Global Peering Ecosystem</h2>\n<h2>Chapter 10 - The 21st Century Internet Peering Ecosystem</h2>\n<h1 style=\"text-align: center;\"><font color=\"#0433ff\">Section IV - The Tricks of the Trade: The Playbooks</font></h1>\n<p>\nIn this last section we present the tactics used by some of the smartest peering coordinators in the world. They shared some tactics that they have used to obtain peering where they otherwise would not have been able to. We briefly present the foundation of the IXP, the colocation facility, and then finish by sharing some of the tricks of the trade that the most successful IXPs in the world have used to build, grow, maintain, and defend their \u201ccritical mass.\u201d\n</p><p>This section contains the following chapters:\n</p>\n<h2>Chapter 11 - The ISP Peering Playbook</h2>\n<h2>Chapter 12 - Taxonomy of Internet Data Centers</h2>\n<h2>Chapter 13 - The IXP Playbook Playbook</h2>\n<h1 style=\"text-align: center;\"><font color=\"#0433ff\">Section V - Advanced Peering Topics</font></h1>\n<h2>Chapter 14 - Remote Peering</h2>\n<h2>Chapter 15 - International Peering</h2>\n<h2>Chapter 16 - The Future</h2>",j:"absolute",x:"scroll",k:"div",y:"preserve",z:1,aS:8,aT:8,a:32,b:0}}}],{},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
