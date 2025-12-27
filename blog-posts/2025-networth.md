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
Individual Investments	$34,198	$33,264	$30,789	$30,877	$5,944	$6,207	$6,455	$6,581	$6,836	$8,657	$11,210	$12,902
Roth IRA	$30,787	$30,542	$28,604	$28,457	$30,212	$31,603	$37,008	$39,398	$41,597	$43,161	$42,434	$42,970
401K	$31,123	$36,664	$37,194	$37,735	$41,054	$43,428	$45,562	$47,215	$49,193	$51,807	$52,228	$54,231
Liquid												
Checking Accounts	$2,643	$2,519	$2,281	$1,414	$1,763	$2,179	$3,721	$6,409	$7,039	$3,269	$3,060	$2,462
Savings Accounts	$37,653	$44,478	$48,477	$54,724	$81,138	$35,317	$30,580	$15,287	$7,678	$8,856	$8,292	$8,988
Cash	$230	$230	$230	$230	$230	$330	$4,000	$4,000	$3,790	$3,220	$3,220	$3,220
Assets												
Car	$21,000	$21,400	$21,400	$22,400	$21,600	$22,000	$21,000	$21,000	$21,400	$20,357	$21,302	$20,926
House	$0	$0	$0	$0	$0	$397,000	$397,000	$397,000	$397,000	$412,973	$412,973	$412,973
Gold/Silver	$0	$0	$0	$0	$0	$0	$0	$1,963	$6,990	$7,159	$8,500	$11,938
Debt												
Car Loan	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0	$0
Mortgage	$0	$0	$0	$0	$0	-$357,300	-$356,999	-$347,399	-$346,042	-$344,678	-$343,305	-$341,925
Net Worth	$157,634	$169,097	$168,975	$175,837	$181,941	$180,764	$188,327	$191,454	$195,481	$214,781	$219,914	$228,685
Credit Score	808	803	804	804	799	800	800	768	770	777	779	776`

const prev = ref({
    path: '/blog-posts/2024-networth',
    title: '2024 Annual Net Worth Review'
})
</script>

<h1>2025 Annual Net Worth Review</h1>

<br>
<Table :raw-spreadsheet-values="rawSpreadsheetValues" />

<h2>December 28, 2025</h2>

<p>
    2025 was an eventful year. Last year, I laid all the groundwork to make this year possible. I bought my first house just like I said I would, and I reached another significant milestone as well.
    <br>
    This year, my stocks portfolio broke through $100k. Charlie Munger famously said that the first $100k is the most difficult but most important milestone in building wealth. That's because compound interest starts to really become noticeable after this mark. I'm thrilled to see how my investments grow from here on.
    <br><br>
    You might've noticed I added a new row to the "Assets" category for precious metals. When seeing how uncontrollable the national debt has gotten, it's hard to have faith in the future of our economy. I decided to convert half of my emergency fund into silver. I figured in the rare case that I ever needed to dip into my emergency fund, I'd use the cash portion first, which is in a high-yield savings account, and I'd have time to sell the silver portion at a local coin shop.
    <br>
    So far, my speculations have paid off. I bought 150oz of silver when spot price was around $40/oz, and we ended the year with it around $80. I don't think I'll buy any more for the foreseeable future. I plan on just holding what I've got. It's a bit comforting to have a chunk of wealth in physical form.
    <br><br>
    Okay, getting back to the house purchase - I DID IT! I worked with a real estate agent to find houses that fit my criteria. After looking through dozens of listings on the MLS, and a handful of in-person tours, I eventually found a 2-bedroom house that was perfect for me.
  </p>
  <div id="houseImgWindow">
    <img src="./pics/House.jpg" alt="A photo of the house exterior."/>
  </div>
  <p>
    I received the keys to my house in June, just a couple of weeks before my 27th birthday. I started designing a tattoo to commemorate this day. I eventually came up with an ornate key with the number "25" to represent the year I bought my first house.
    <br>
    I've been working towards this goal for so long that when I finally achieved it, I wanted to take it in for a little bit. However, I couldn't stay comfortable for too long; I had to find another goal to set. I signed a 30-year fixed rate mortgage, but I plan on paying it off way sooner than that. My next goal is to pay it off early. According to my projections, I should be able to pay off the loan in 12 years pretty easily. That's while still contributing to stock investments.
  </p>
  <div id="keyTattooImgWindow">
    <img src="./pics/KeyTattoo.jpg" alt="A photo of a forearm tattoo of an ornate key."/>
  </div>
  <p>
    A 12-year goal seems like a really long goal to set though. I need to find smaller milestones to strive for. Otherwise, I'll start to feel stagnant if there are no meaningful achievements within a long span of time. So with that, here are some shorter term goals I have.
    <br>
    I want to reach coast FIRE within the next 4-6 years. This is when contributing to my stock portfolio is no longer efficient because majority of the growth will come from the compounding of my existing investments. At this point, I'll be able to ease off on monthly contributions and begin to put that money towards other things, such as upgrading the car or splurging on things I want.
    <br>
    Another goal I have is to become a millionaire before I pay off the house. I'm not even a quarter way there yet, but I feel like it should be possible to reach a net worth of $1 million within the decade.
    <br><br>
    I'm excited to see what the future holds. I feel like I'm finally starting to see things set in motion.
    <br><br><br>
    - Tommy
</p>

<span class="tags">
    <span class="tagPills">finance</span>
</span>

<PrevNextButtons :prev="prev" />

<style scoped>
@import ".vitepress/theme/blog-posts.scss";
</style>
