---
aside: false
---

<script setup lang="ts">
import Table from '/Components/Table.vue'

// Copy and paste from Excel. Don't change anything about the spacing
const rawSpreadsheetValues = `Categories	January	February	March	April	May	June	July	August	September	October	November	December
Investments												
Individual Investments	$0	$0	$0	$0	$2,066	$6,281	$6,592	$8,297	$11,933	$11,472	$15,128	$18,004
Roth IRA	$7,845	$11,493	$13,328	$14,740	$14,841	$15,616	$16,414	$15,817	$15,586	$14,924	$16,570	$17,485
401K	$2,649	$3,701	$4,336	$5,283	$6,025	$7,005	$7,953	$8,418	$8,983	$9,313	$10,980	$12,625
Liquid												
Checking Accounts	$4,881	$9,702	$9,610	$7,048	$7,748	$5,585	$8,383	$8,625	$7,647	$8,616	$8,448	$2,764
Savings Accounts	$0	$0	$0	$0	$0	$0	$0	$0	$0	$821	$1,645	$7,478
Cash	$133	$133	$133	$133	$132	$127	$127	$129	$129	$120	$90	$290
Assets												
Car	$24,000	$24,000	$24,000	$24,000	$24,000	$24,000	$22,400	$24,400	$23,400	$23,400	$21,000	$19,000
Debt												
Car Loan	-$13,794	-$13,454	-$13,113	-$12,773	-$12,432	-$12,091	-$11,750	-$11,408	-$11,067	-$10,717	-$10,383	-$5,836
Net Worth	$25,714	$35,575	$38,294	$38,431	$42,380	$46,523	$50,119	$54,278	$56,611	$57,949	$63,478	$71,810
												
Credit Score	778	781	781	782	786	767	783	790	791	796	797	798`
</script>

<h1>2023 Annual Net Worth Review</h1>

<br>
<Table :raw-spreadsheet-values="rawSpreadsheetValues" />

<h2>December 28, 2023</h2>

<p>
    This year is what I'd call "smooth sailing".
    <br>
    To summarize my last update, I landed my dream job and moved to Las Vegas.
    <br><br>
    2023 represents the first time I've held a job for the entirety of the calendar year.
    <br>
    This is what I've always wanted, since starting college. I have a steady job, with my own place, and no drama or setbacks. This update will be very boring as nothing really happened, but that's not necessarily bad. In fact, it's the first time I've felt at ease in a long time.
    <br>
    So, let's talk about what went well, along with some things that are of concern.
    <br><br>
    I started the year with a net worth of ~$25k and grew it to ~$70k; that's a growth of over $46k. I was able to do this by investing half of my paychecks immediately as they come in.
    <br>
    Currently, my goal is to build up enough money for a house here in Nevada. I've actually been eyeing the real estate market just to stay in touch with the state of the market. It does not look good. With record high interest rates, even with a perfect credit score, it's ridiculously high. Even with that in mind, I still want to buy a house as soon as possible. I could always refinance when the market is better, so I'd rather prioritize locking in the price of the house itself.
    <br><br>
    Unfortunately, it'll be at least 2 years before I have enough for a down-payment. My goal is to put at least 20% down. Until then, my plan is to simply continue doing what I've been doing.
    <br><br><br>
    - Tommy
</p>

<span class="tags">
    <span class="tagPills">finance</span>
</span>

<style scoped>
@import ".vitepress/theme/blogposts.scss";
</style>
