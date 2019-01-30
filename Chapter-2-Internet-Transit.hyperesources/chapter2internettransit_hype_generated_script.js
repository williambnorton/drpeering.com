//	HYPE.documents["Chapter-2-Internet-Transit"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="Chapter-2-Internet-Transit.hyperesources",c="Chapter-2-Internet-Transit",e="chapter2internettransit_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/chapter2internettransit_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_596","HYPE_dtl_596",!0==(null!=a&&10>a||false==!0)?"HYPE-596.full.min.js":"HYPE-596.thin.min.js"),false==!0&&(a=a||l("HYPE_w_596","HYPE_wdtl_596","HYPE-596.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_596(c,e,{"0":{n:"jquery-3.2.1.min.js"},"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,[],d,[{n:"Chapter-2-Internet-Transit",o:"113",X:[0]}],[{o:"137",p:"600px",cA:false,a:100,Z:5100,Y:375,c:"#F9FFFA",L:[],bY:1,d:375,U:{"138":{V:{"Main Timeline":"149"},W:"149",n:"Symbol"}},T:{"149":{b:[],c:"138",z:0,i:"149",a:[],n:"Main Timeline",s:"138",f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,G:{a:[{j:"http://drpeering.com",p:5,k:false}]},O:["148","138","146","145","147","144"],n:"iPhone","_":0,v:{"138":{c:375,bS:39,d:42,cA:false,aP:"pointer",cS:true,cK:{a:[{b:"149",p:3,z:false}]},j:"absolute",x:"visible",cL:"138",k:"div",dB:"button",z:5,cM:true,bX:false,cV:[],bY:1,a:0,bZ:180,b:0},"147":{G:"#000000",aU:8,c:37,bS:33,d:35,aV:8,r:"inline",e:1,s:"Helvetica,Arial,Sans-Serif",t:36,Z:"break-word",aP:"pointer",w:"\u27a1\ufe0f",j:"absolute",x:"visible",k:"div",y:"preserve",dB:"button",z:4,aS:8,aT:8,a:326,b:36},"144":{G:"#000000",aU:8,c:331,bS:71,aV:8,d:4984,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"<h1>Chapter 2 - Internet Transit</h1>\n<p>In this chapter you will learn about Internet Transit, a service that provides access to the global Internet. We introduce the definitions and the service model, and then describe how Internet Transit service is offered, priced, and metered</p>\n\n<h2>Introduction to Internet Transit</h2>\n<p>The Internet is a network of networks.</p>\n<p>To get connected to the Internet, an entity must attach itself to an entity that is already connected to the Internet. It usually accomplishes this connection by purchasing a service called \u201cInternet Transit.\u201d</p>\n<p>Definition: Internet Transit is the business relationship whereby an Internet Service Provider provides (usually sells) access to the global Internet.</p>\n<p>From a high-level perspective, Internet Transit can be thought of as a pipe in the wall that says \u201cInternet this way.\u201d Customers connect their networks to their Transit Provider, and the Transit Provider does the rest.</p>\n<p>Definition: An Internet Service Provider (ISP), also called a \u201cTransit Provider,\u201d is an entity that provides (usually sells) access to the Internet.</p>\n<p>The primary business of an Internet Service Provider is to market, sell, and operate the Internet Transit service described next.</p>\n\n<h2>The Internet Transit Service Model</h2>\n<p>The Internet Transit service has two primary functions:</p>\n<ol>\n<li>to announce Internet routes to the customer, and</li>\n<li>to announce the customer routes to the rest of the Internet.</li>\n</ol>\n<p>To illustrate, consider a customer (ISP A) purchasing the Internet Transit service from Transit Provider B as shown in Figure 2-1.</p>\n\n<p>Figure 2-1: The Internet Transit Service Model (Click for animated view)</p>\n<p>We will use graphical notations throughout this book.</p>\n<p>The different colored clouds represent networks attached to the Internet. The \u2018T\u2019 next to a line represents an Internet Transit relationship. The routing advertisements box describes which routes are \u201cannounced\u201d between the Internet Transit customer (ISP A) and the upstream Transit Provider B. The arrows signify the direction of the routing announcement.</p>\n<p>These routing announcements are propagated across the Internet. Transit Provider B announces to the ISP A the routes to reach the entire Internet (shown as many colored networks to the right of the Transit Providers). The ISPs across the Internet propagate this ISP A route so that all networks know how to reach the ISP A.</p>\n<p>In summary, through the Internet Transit service, all Internet attachments know how to reach ISP A, and ISP A knows how to reach the rest of the Internet.</p>\nFor convenience, we will also use the following equivalent notations (Figure 2-2) to indicate a transit relationship between a customer and the upstream transit provider.<p></p>\n<p>Internet Transit equivalent notation</p>\n<p>Figure 2-2. Equivalent Internet Transit service notations.</p>\n<p>The black circle is shorthand for a default route to reach the rest of the Internet. This typical and default arrangement can be inferred by identifying the two parties in the relationship with the \u201cT\u201d and the \u201c$\u201d symbol describing which party is being paid for the Internet Transit service.\u0016</p>\n<h2>The Internet Transit Pricing Model</h2>\n<p>The Internet Transit service is typically a metered service outside of the residential market. The unit price for Internet Transit services varies widely, but the service itself is typically priced on a per-megabit-per-second (Mbps) basis, metered using the 95th percentile traffic sampling technique.</p>\n<p>Definition: The 95th Percentile Measurement Method (also called 95/5) identifies a single measurement (the 95th percentile 5-minute sample for the month) to determine the transit service volume for monthly transit fee calculation.</p>\n<li>The 95th Percentile Measurement Method is typically a three-step process, as follows (diagrammed in Figure 2-3):</li>\n<ul>\n<li>Every 5 minutes the meter on the service is sampled.<div>The delta is calculated between the two adjacent samples and the result is stored. (It is in this step that corrections are made for wrapped counters, counter resets from reboots, anomalies in the measurement on the metering device, etc.)</div></li>\n<li>At the end of the month, the 5-minute deltas are converted into Mbps and stacked lowest to highest. It is the 95th percentile value that is used to calculate the traffic volume for the month.</li>\n</ul>\n<p>Figure 2-3. Calculating the monthly cost of Internet Transit using the 95th percentile measurement methodology.</p>\n<p>The basic Internet Transit billing model is simple:</p>\n<p>Monthly Bill = Internet Transit Volume * Internet Transit Unit Price</p>\n<p>Example:</p>\n<p>If you signed an Internet Transit contract with a negotiated price of $5/Mbps (measured at the 95th percentile), and at the end of the month you sent 500Mbps (measured at the 95th percentile), what would be your transit cost that month?</p>\n<p>Answer: 500Mbps * $5/Mbps = $2500 per month</p>\n<h2>The Origin of the 95th Percentile Measurement</h2>How did the 95th percentile come into existence?<p></p>\n<p>The Internet Transit pricing model went through three pricing phases:</p>\n<ul>\n<li>1990: Internet Transit was sold by access capacity. In the early Internet days, Internet Transit was billed on a circuit-capacity basis. You would purchase a T1 circuit (1.544 Mbps) to the Internet and pay as if you used the entire circuit capacity 24 hours a day. But if you didn\u2019t use very much of this capacity, you were still paying as if you did. At the time, this reality made Internet Transit tough to sell to some low-volume prospects.</li>\n<li>1992: Internet Transit sold by average usage. One of the early ISP pioneers started charging based on average use, but this measure ended up being skewed by the burst nature of Internet traffic. Customers who used only a little transit were paying as if they used much more because the average was skewed upwards by these occasional peaks.</li>\n<li>1994-today: Internet Transit sold by 95/5 model. To address this situation, one ISP adopted the 95th percentile measure to prevent overly punishing a customer for the occasional spike in traffic volume, while still allowing the ISP to bill based on the load placed on its network. This approach seemed palatable to the market and sold well. The rest of the industry adopted this pricing model, and within a year or so 95/5 became the pricing paradigm for the Internet Transit service.</li>\n</ul>\n<h2><span style=\"font-size: 1.5em; font-weight: bold;\">Measurement Direction</span><br></h2>\n\n<div>One question always comes up at this point in the peering workshops:<p></p>\n<p>\u201cIs 95/5 measuring traffic coming into the network or out of the network?\u201d</p>\n<p>The 95th percentile measurement uses the greater of in versus out, as shown in the following equation:</p>\n<p>Monthly Bill = max(inAt95th,outAt95th) * Internet Transit Unit Price</p>\n<p>But for the sake of simplicity, when we introduce equations from here forward, we will not clutter the equations with this in-vs.-out nuance. When we say 95th percentile, we know that what we really mean is the 95th percentile of the larger of in vs. out.</p>\n<p>The Internet Transit pricing model gets only slightly more complicated when adding \"commits\".</p>\n<h2>Internet Transit Pricing with Commits</h2>\n<p>To encourage the use of the Internet Transit service, and to compete more aggressively in the market, most ISPs provide pricing discounts for pre-committing to certain volumes of traffic (Table 2-1).</p>\n<p>Table 2-1. Sample Internet Transit with Commits Pricing Table</p>\n\n<p>tiered pricing table for Internet Transit</p>\n\n<p>Here we see an ISP that offers a price of $12 per Mbps for a monthly commit of 10Mbps, and a price of $5 per Mbps with a monthly commit of 100Mbps. These price points guarantee that the monthly transit fee will be at least $120 and $500 per month, respectively.</p>\n\n<p>What happens if customers commit to 100Mbps but don\u2019t use all of the 100Mbps in a particular month?</p>\n\n<p>They are still required to pay as if they had used the full 100Mbps.</p>\n\n<p>What happens if they use more than the 100Mbps in a particular month?</p>\n\n<p>They generally will have to pay the metered rate on the volume of traffic they actually used. This rate is sometimes referred to as the \"burst rate\", but it is generally the same price as the commit rate.</p>\n\n<p>We can describe this model formulaically as:</p>\n\n<p>Monthly Bill = max(TransitVolumeAt95th*Price, Commit Volume*Price)</p>\n\n<p>The Internet Transit with commits model typically involves contracts that state the price point for the agreed-upon commit level and the duration of the agreement. So, for example, a 1Gbps commit at $3.50 per Mbps might have a 1-year term. This is how the Internet Transit service is sold today.</p>\n\n<p>I have been tracking the price of Internet Transit since 1998, and as you can see from Table 2-2 and Figure 2-4, the prices for Internet Transit have dropped every year.</p>\n\n<p>Table 2-2. U.S. Internet Transit Prices (1998\u20132014) Historical and Projected</p>\n\n<p>Transit PriceTable</p>\n\n<p>It is worth pointing out that these data have always generated heated debate in the peering coordinator community.</p>\n\n<h2>Internet Transit May Have SLAs</h2>\n<p>Service-Level Agreements (SLAs) are contracts with financial penalties for failure to meet specified service levels. They are intended to punish an ISP for failure to meet the explicit customer expectations. Many Internet Transit customers I have spoken with have said that they felt comforted by these financial penalties, these \u201cteeth.\u201d</p>\n\n<p>Internet Transit SLAs, however, are widely dismissed by the network operators as merely insurance policies. The ISPs I spoke with said that it is common practice to simply price the Internet Transit service higher when it includes SLAs, and with the increased pricing proportional to the likelihood of their failure to meet the SLA requirements. Further, the customer has to notice the SLA failure, file for the SLA credits, and check to see that credits are indeed applied. Some ISPs see SLAs as a way to simply increase margins without needing to improve the service.</p>\n\n<div class=\"NotesFromTheField\">\n<h3>Notes from the field.</h3>\n<h4>Internet Transit Pricing Data and Controversy</h4>\n<p>The controversy over these numbers is related to the variability in service offerings and pricing. Further, the pricing schedules are often protected under a nondisclosure agreement (NDA), and generally not publicly available to systematically analyze. Some ISPs consider many variables when determining pricing. They might, for example, account for the number and size of the ports requested, type of the customer traffic (inbound vs. outbound), how that traffic would impact the ISP, the region(s) and market conditions at the location of the interconnection, etc. For these reasons, many would argue that there is no single market price for Internet Transit. The data are inherently flawed.</p>\n<p>And they have a valid point.</p>\n<p>My data are anecdotal and based on a variable and small sample size, polling maybe 30\u201350 people three to five times a year. The transit price points are collected on an ad-hoc basis at operations conferences that I attend every year.  I ask ISPs and transit customers, \"What is the going price for transit these days?\u201d From the dataset I throw out the outliers and select the middle from the mass of numbers that fall within a narrow range.</p>\n<p>However flawed this manual measurement system is, it remains one of the very few longitudinal measures of the market price for transit. Some of these measurements were based on or validated by contributed ISP pricing sheets. One can say \"according to the conversations Bill has had with ISPs over the years, the transit prices have dropped roughly like this line.\" I would not recommend taking these numbers as anything but very rough indications\u2014and a better mechanism is on its way as we start measuring in $/Gbps.</p>\n<p>Besides, to focus on the individual data points is to miss the point.</p>\n<p>The point is that the trend is unmistakable, and no one would disagree\u2014because transit prices have dropped every year.</p>\n<p>The other interesting thing I noticed is that every year the ISPs say to me things like, \u201cTransit prices can\u2019t get any lower,\u201d and \u201cNo one is making any money at these prices.\u201d And every year, the prices drop again.</p>\n<p>The other interesting thing I noticed is that every year the ISPs say to me things like, \u201cTransit prices can\u2019t get any lower,\u201d and \u201cNo one is making any money at these prices.\u201d And every year, the prices drop again.</p>\n</div>\n\n\n<p>Figure 2-4. Internet Transit prices historically decline every year.</p>\n\n<p>The good news for ISPs is that Internet traffic volumes have always grown as well, and all indications are that this trend will continue for some time. Even though the price of transit has declined by around 30% per year, Internet traffic typically increases by more than 50% per year.</p>\n\n<h2>Variability in Internet Transit Service</h2>\n<p>There is also some debate within the community on the qualitative differences between transit from a lower-priced provider and the Internet transit service delivered from a higher-priced provider. Higher-priced providers would argue that they have better-quality equipment (routers vs. switches, etc.), and better and more sustainable operations procedures that simply cost more to operate. They would argue that \u201cyou get what you pay for in the transit market\u201d. They could be right, but I would also point out that I have not met very many paying customers complaining about the quality of service of lower-priced providers.</p>\n\n<h2>Internet Transit is a Customer-Supplier Relationship</h2>\n<p>Some content providers prefer a transit service (paying customer) relationship with ISPs for business reasons. They argue that they will get better service with a paid relationship than with any free or \u201cspecial deal\u201d, bartered, or \u201cpeering\u201d relationship.\n</p>\n<h1>Implementation Model for the Internet Transit Service</h1>\n<p>While a complete exploration of the ISP business models is beyond the scope of this book, a few commonalities across ISPs are worth highlighting. Every year the underlying technologies get better, cheaper, and faster. These advancements tend to come in waves.  As a result, most larger ISPs have an Architecture-Engineering-Operations workflow, with responsibilities being transitioned between these disciplines as shown in Figure 2-5. </p>\n\n \n\n<h1>Observations about Internet Transit</h1>\n<p>To finish this chapter, let\u2019s highlight a few important characteristics about Internet Transit:</p>\n\n<ol>\n<li>Internet Transit is a simple service from the customer perspective. All you need to do is pay for the Internet Transit service, and all traffic sent to the upstream ISP is delivered to the Internet.</li>\n<li>Internet Transit is typically a metered service. The more you send or receive, the more you pay.</li>\n<li>Internet Transit has commits and discounts. Upstream ISPs often provide volume discounts based on negotiated commit levels. Thus, if you commit to 10Gbps of transit per month, you will likely get a better unit price than if you commit to only 1Gbps of transit per month. However, you must pay for (at least) the commit level worth of transit regardless of how much traffic you send.</li>\n<li>Internet Transit contracts have a term, a duration.</li>\n<li>Internet Transit prices drop every year.</li>\n</ol>\n<p>That is what you need to know about Internet Transit. In the next chapter we will discuss the \"tricks of the trade\" that some have used in an attempt to improve the efficiency of their transit service purchase.</p>\n\n \n<p>Figure 2-5 The Architecture-Engineering-Operations new technology waves and responsibilities.</p>\n\n<p>When new technologies are considered for a network, the ISP Architecture team evaluates the applicability and designs a solution. Once accepted, the solution moves through a joint Architecture/Engineering development phase, during which the Engineering team increasingly takes over responsibility for the deployment of the technology. The Operations group takes over responsibility from the engineering team as the technology hardens and the logistical transition challenges are worked through. The Engineering team eventually is removed from the day-to-day operations activities of the technology, and the Operations team runs the technology in the production network.</p>\n\n<p>This cycle continues as the next wave of technology becomes available and the Architecture team looks at its applicability. These technology waves apply to backbone infrastructure (routers, transmission gear) as well as edge devices (routers, switches, auxiliary services) and support systems.</p>\n\n<p>These waves of technology are important because they enable the ISPs to compete more effectively in the Internet Transit market. Those with old equipment simply can't compete with the economies of scale realized by the large players.</p>\n\n<p>Peering Workshop Discussions</p>\n<p>Here are a few discussion questions from the Internet Peering Workshop.</p>\n\n<p>1.  I am purchasing Internet Transit from ISP A for $5 per Mbps with no commits. At the end of the month I send 500Mbps and receive 800Mbps at the 95th percentile.  What is my monthly bill?</p>\n\n<p>A) $5/month         B) $2500/month    C) $4000/month    D) $6500/month</p>\n\n<p>2.  I am purchasing Internet Transit from ISP B for $5 per Mbps but I am considering buying its 1Gbps commit transit product at a price of $3/Mbps. I still expect to send 500Mbps and receive 800Mbps at the 95th percentile. Should I commit to 1Gbps?</p>\n\n<p>Answers to these questions along with related FAQs and supplemental materials are here:\nhttp://DrPeering.net/books/The-Internet-Peering-Playbook/transit.php</p>\n</div>",j:"absolute",x:"scroll",k:"div",y:"preserve",z:1,aS:8,aT:8,a:14,b:74},"148":{c:375,bS:39,d:42,I:"None",e:1,J:"None",K:"None",t:18,g:"#E6661F",L:"None",aP:"pointer",M:0,v:"bold",w:"The Internet Peering Playbook: Connecting to the Core of the Internet<br><div style=\"text-align: right;\"><br></div>",N:0,A:"#D8DDE4",aA:{a:[{d:1.1000000000000001,p:1,g:2,e:"139"}]},O:0,x:"visible",j:"absolute",k:"div",dB:"button",z:12,C:"#D8DDE4",D:"#D8DDE4",B:"#D8DDE4",bF:"138",P:0,a:0,F:"center",b:0},"145":{b:43,z:2,K:"None",c:280,L:"None",d:40,M:0,e:1,N:0,bS:39,O:0,g:"#FFFFFF",dB:"button",P:0,j:"absolute",aI:8,k:"div",aJ:8,aK:8,aL:8,A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",t:18,F:"center",v:"bold",aP:"pointer",w:"<div style=\"text-align: center;\">Chapter 2 - Internet Transit</div>",x:"visible",I:"None",a:48,J:"None"},"146":{G:"#000000",aU:8,c:37,d:35,aV:8,r:"inline",e:1,s:"Helvetica,Arial,Sans-Serif",t:36,Z:"break-word",aP:"pointer",w:"\u2b05\ufe0f",j:"absolute",x:"visible",k:"div",y:"preserve",dB:"button",z:3,aS:8,aT:8,a:-3,b:36}}}],{"138":["148"]},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
