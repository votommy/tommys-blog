---
aside: false
---

<script setup lang="ts">
import Table from '/Components/Table.vue'

// Copy and paste from Excel. Don't change anything about the spacing
const rawSpreadsheetValues = `Categories	January	February	March	April	May	June	July	August	September	October	November	December
Investments												
Individual Investments	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0
Roth IRA	$2,625	$2,576	$2,472	$2,157	$2,054	$1,942	$2,032	$1,898	$1,741	$1,746	$1,745	$7,417
401K	$0	$0	$0	$0	$0	$0	$0	$0	$0	$689	$1,451	$2,191
Liquid												
Checking Accounts	$3,451	$4,157	$3,698	$3,612	$2,829	$2,034	$2,013	$1,427	$783	$6,546	$7,871	$4,416
Savings Accounts	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0
Cash	$176	$384	$264	$260	$260	$260	$260	$260	$310	$310	$133	$133
Assets												
Car	$24,000	$24,000	$24,000	$24,000	$24,000	$24,000	$24,000	$24,000	$24,000	$24,000	$24,000	$24,000
Debt												
Car Loan	-$17,845	-$17,509	-$17,172	-$16,834	-$16,498	-$16,159	-$15,821	-$15,483	-$15,148	-$14,810	-$14,810	-$14,134
Net Worth	$12,407	$13,608	$13,262	$13,195	$12,645	$12,077	$12,484	$12,102	$11,686	$18,481	$20,390	$24,023
												
Credit Score	753	753	754	755	755	755	756	756	756	764	769	768`
</script>

<h1>2022 Annual Net Worth Review</h1>

<br>
<Table :raw-spreadsheet-values="rawSpreadsheetValues" />

<h2>December 28, 2022</h2>

<p>
    This year started out very uneventful, but quickly got exciting towards the last quarter.
    <br>
    A little recap since my last update: I quit my job on April 2021 with no back-up plan. I spent well over a year unemployed, searching for the perfect job.
    <br><br>
    I'm happy to say I found that job. After 1 year & 5 months living off my savings, I finally landed a job at a company that I'm confident I want to stay at. It's a remote job, which means I can work from anywhere in the world; so I thought, "Why not the most exciting city in the country?".
    <br>
    I packed all of my belongings into my car and drove to Las Vegas where I plan to spend the rest of my life. So, let's talk about it.
</p>
<div id="vegasImgWindow">
    <img src="./pics/Vegas.jpg" alt="A photo of a street sign for Las Vegas Boulevard."/>
</div>
<p>
    Moving to Vegas was the best decision I've ever made, and it was entirely made possible by the new job I got. Not only is the job remote, but the company is based out of California, which means I get paid a California salary without the California cost-of-living.
    <br>
    Unfortunately, I have to reside in an apartment for the next few years until I've built a long enough work history to apply for a mortgage. Since I was unemployed for the past year, I essentially have no work history, so this new job will be the beginning of it. In order to even be considered for a mortgage, one needs at least 2 years of tax returns as proof of a steady income. The earliest I can start shopping for a house is 2 years from now. This gives me time to build my savings so I can have a substantial down-payment on the house I end up buying.
    <br><br>
    I think I ended this year much more positively than the last. I have no wishes for the next year other than to continue working at this dream job of mine while I experience Las Vegas for what it is. Who knows, maybe by the end of next year, the excitement of the city will subside, and I can consider moving to a calmer area within Nevada.
    <br><br><br>
    - Tommy
</p>

<span class="tags">
    <span class="tagPills">finance</span>
</span>

<style scoped>
@import ".vitepress/theme/blogposts.scss";

#vegasImgWindow {
    width: 70%;
    margin: 0 auto;
}
</style>
