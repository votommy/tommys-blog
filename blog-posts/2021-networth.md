---
aside: false
---

<script setup lang="ts">
import { ref } from "vue";

import Table from '/Components/Table.vue'
import PrevNextButtons from '/Components/PrevNextButtons.vue'

// Copy and paste from Excel. Don't change anything about the spacing
const rawSpreadsheetValues = `Categories	January	February	March	April	May	June	July	August	September	October	November	December
Investments												
Individual Investments	$0	$1,113	$1,112	$1,436	$0	$0	$0	$0	$0	$0	$0	$0
Roth IRA	$2,091	$3,499	$5,029	$7,004	$7,694	$6,144	$5,826	$5,802	$4,414	$4,596	$3,064	$2,949
401K	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0
Liquid												
Checking Accounts	$2,873	$1,133	$3,395	$3,942	$593	$2,256	$1,663	$1,162	$1,648	$1,216	$1,551	$1,028
Savings Accounts	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0
Cash	$392	$472	$472	$440	$635	$830	$1,130	$1,190	$1,174	$1,176	$1,176	$1,176
Assets												
Car	$0	$0	$0	$0	$24,000	$24,000	$24,000	$24,000	$24,000	$24,000	$24,000	$24,000
Debt												
Car Loan	$0	$0	$0	$0	-$20,540	-$20,203	-$19,863	-$19,530	-$19,195	-$18,856	-$18,181	-$17,845
Student Loans	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0
Net Worth	$5,356	$5,104	$8,896	$11,386	$12,383	$13,027	$12,756	$12,624	$12,041	$12,132	$11,610	$11,308
												
Credit Score	715	725	730	740	746	737	738	742	749	745	745	749`

const prev = ref({
    path: '/blog-posts/2020-networth',
    title: '2020 Annual Net Worth Review'
})
const next = ref({
    path: '/blog-posts/2022-networth',
    title: '2022 Annual Net Worth Review'
})
</script>

<h1>2021 Annual Net Worth Review</h1>

<br>
<Table :raw-spreadsheet-values="rawSpreadsheetValues" />

<h2>December 28, 2021</h2>

<p>
    Man, what a year this was.
    <br>
    A few points of interest worth talking about — I quit my job without a plan-B, I dabbled in meme-coins, and I bought a brand new car during the chip shortage.
    <br><br>
    That job that I landed in September of last year didn't turn out so great. After only 7 months, I decided that my mental health was worth more than the stable income I was making there. I also had a sense that the company isn't going to last much longer. I see signs of a failing business, and it was definitely not good for morale. So I quit.
    <br><br>
    During the short 7 months that I had an income, I fell into the crypto-hype. Dogecoin was the talk of the town, and so of course I bought some. I never planned to keep it for long; it was my desperate attempt at some quick profits. As you can see in the "Individual Investments" category, I put $1000 on $DOGE, and made a few hundred bucks. But an emergency came up, and I cashed out before the peak. It was probably for the best, because I wouldn't have known that early May was the peak, and I probably would've held it into the crash which came immediately after.
    <br><br>
    The emergency, as it turned out, was my car breaking down right in the middle of the silicon shortage. Because supply wasn't meeting demand, used car prices skyrocketed to the same price as brand new cars. Since my local dealership had an agreement with the manufacturer to cap new car prices at MSRP, it made the most sense to buy the new car rather than a used one that would've costed the same amount. So I had no choice but to do it; I cashed out on all my Dogecoin and used it towards the down-payment on a 2021 Corolla Hatchback. It's a pretty nice car, but I wish I could've bought a used car for half that price - during normal circumstances, I would have.
</p>
<div id="carImgWindow">
    <img src="./pics/Car.jpg" alt="A photo of a white 2021 Toyota Corolla Hatchback."/>
</div>
<p>
    I ended the year with no job, and I'm slowly withdrawing the principle from my Roth IRA to make the car payments. Luckily, that's tax-free as long as I don't touch the profits.
    <br>
    Hopefully, I can find a better job in 2022 before I deplete my funds completely.
    <br><br><br>
    - Tommy
</p>

<span class="tags">
    <span class="tagPills">finance</span>
</span>

<PrevNextButtons :prev="prev" :next="next" />

<style scoped>
@import ".vitepress/theme/blog-posts.scss";

#carImgWindow {
    width: 70%;
    margin: 0 auto;
}
</style>
