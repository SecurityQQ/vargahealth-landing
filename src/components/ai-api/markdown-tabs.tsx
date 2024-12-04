'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import Markdown from '@/lib/markdown'

interface Example {
  title: string
  content: string
}

const examples: Example[] = [
  {
    title: "Magnesium Dosage",
    content: `
# What is the best dosage of magnesium?

The optimal dosage of magnesium varies depending on factors such as age, sex, and specific health conditions. Based on both **Claims** from various experts and **Internet Data**, the following recommendations can be summarized:

## General Recommendations:
- **Adult Men**: 410–420 mg/day[^1].
- **Adult Women**: 310–320 mg/day[^1].
- **Pregnant Women**: 350–400 mg/day[^1].
- **Breastfeeding Women**: 310–360 mg/day[^1].
- **Older Adults (65+ years)**: 420 mg/day for men and 320 mg/day for women[^1].
- **Athletes**: Higher intake of 450–550 mg/day for men and 350–450 mg/day for women, depending on activity level[^1].

## Supplementation Insights:
- According to Siim Land, optimal magnesium supplementation often falls within the range of **200-400 mg** daily, with specific studies indicating that doses above **400 mg** can effectively lower inflammation and blood pressure over extended periods[^2][^3].
- Magnesium glycinate is frequently recommended due to its superior absorption and effectiveness, often dosed at **300-400 mg** for improved sleep quality[^4].
- Siim Land also emphasizes achieving at least **420 mg** daily to combat deficiencies, which could lead to cardiovascular and neurological health issues[^5].

## Cautions and Considerations:
- Consultation with a healthcare provider is advised before starting magnesium supplementation, especially at higher doses, to avoid potential side effects such as digestive discomfort[^4].
- Monitoring dietary intake is crucial, as many individuals do not meet their magnesium needs through diet alone, with up to **50%** of the population potentially falling short[^5].

In summary, while the recommended dietary allowance for magnesium varies by demographic, a general guideline for supplementation ranges from **200-400 mg** daily, with higher amounts advised under certain conditions, such as pregnancy or intense physical activity. Always consider individual health needs when determining the appropriate dose.

[^1]: [Examine](https://examine.com/supplements/magnesium/)
[^2]: [Siim Land's Video](https://www.youtube.com/watch?v=X0mommt6nag&t=450)
[^3]: [Healthline](https://www.healthline.com/nutrition/magnesium-oxide)
[^4]: [Siim Land's Video](https://www.youtube.com/watch?v=ZaRg7V4W8EE&t=482)
[^5]: [Siim Land's Video](https://www.youtube.com/watch?v=X0mommt6nag&t=570)
    `
  },
  {
    title: "NMN Supplements",
    content: `# Is NMN Worth taking or not?
The decision to take NMN (Nicotinamide Mononucleotide) as a supplement involves weighing its potential benefits against its costs and the current evidence regarding its effectiveness. Here’s a concise analysis based on various claims and internet data:\n\n### Key Points on NMN\n\n- **Safety Profile**: NMN is generally considered safe, with no significant side effects reported in humans, although some users might experience mild effects such as dizziness or nausea[^1][2]. Dr. Adam Bataineh stated, \"There's no significant side effects,\" emphasizing its safety[^3].\n\n- **Efficacy Concerns**: Despite its safety, evidence supporting NMN's effectiveness for significant health benefits is limited. Dr. Nic Verhoeven noted that \"most NMN studies show minimal effects on blood metrics,\" and that NMN has failed in most studies to show substantial benefits[^4][5]. Moreover, Dr. Bataineh pointed out that NMN \"lacks evidence for increasing NAD levels,\" drawing parallels to \"unproven oxygenated drinks\"[^3].\n\n- **Cost Considerations**: NMN supplements can be quite expensive, ranging from $50 to $150 per month[^6]. Dr. Bataineh remarked, \"It's quite an expensive dietary supplement anyway,\" suggesting that the financial investment may not be justified given the lack of proven benefits[^3].\n\n- **Potential Benefits**: Some anecdotal evidence suggests NMN may enhance energy and physical performance, particularly among older adults[^6]. However, these effects are inconsistent and vary significantly between individuals[^7]. \n\n- **Alternative Supplements**: Experts recommend considering other supplements with more robust evidence for efficacy, such as NMN's precursor, NR (Nicotinamide Riboside), which some users have found to be more effective for energy management[^8]. Lifestyle changes and other dietary adjustments may also provide more substantial benefits than NMN[^9].\n\n### Conclusion\n\nWhile NMN is deemed safe and may offer some benefits, the lack of strong scientific backing for its effectiveness raises questions about its value. Individuals seeking anti-aging solutions or enhanced energy may find NMN appealing, but the high cost and limited evidence suggest that it might be more prudent to explore alternatives or focus on lifestyle modifications. Consulting a healthcare professional is essential before starting any supplement regimen to ensure it aligns with personal health goals and needs.\n\n### References\n[^1]: [Restless - NMN: What is it and what are the potential health benefits?](https://restless.co.uk/health/healthy-body/nmn-what-is-it-and-what-are-the-potential-health-benefits/)\n[^2]: [Bulk Nutrients - What are NMN supplements](https://www.bulknutrients.com.au/blog/feature-articles/what-are-nmn-supplements)\n[^3]: [Longevity Doctor Explains NMN Ban - Dr. Adam Bataineh](https://www.youtube.com/watch?v=yEXwRQM8am8&t=247)\n[^4]: [Dr. Ford Brewer's Show - NMN Shows Limited Clinical Benefits](https://www.youtube.com/watch?v=JhmD3II6AWY&t=4238)\n[^5]: [Physionic - Human NMN Studies Are Conflicted and Underpowered](https://www.youtube.com/watch?v=cjwVXJmjVC0&t=2280)\n[^6]: [Wellness Messiah - NMN May Boost Energy and Gym Performance](https://www.youtube.com/watch?v=cjwVXJmjVC0&t=2670)\n[^7]: [Huberman Lab - NR and NMN Sustain Energy Without Sleep Impact](https://www.youtube.com/watch?v=qJ3uV7coZbA&t=764)\n[^8]: [BioHackers Longevity Podcast - NR Supplementation Enhances Stress Management](https://www.youtube.com/watch?v=tTM2G3RSOtQ&t=571)\n[^9]: [Neurogan Health - TMG and NMN Guide: Dosage](https://neuroganhealth.com/blogs/news/tmg-and-nmn-guide-dosage)`
  },
  {
    title: "Perimenopausal Therapies",
    content: `# What are pre-menapause recommended therapies for 50.yo. women?
    For women around 50 experiencing perimenopause symptoms, a variety of therapies are recommended to manage their symptoms effectively. Here's a concise overview based on the **Claims** and **Internet Data**:\n\n### Recommended Therapies\n\n- **Hormone Therapy (HT)**:\n  - **Estrogen Therapy**: This therapy is effective for alleviating symptoms such as hot flashes, night sweats, and vaginal dryness by stabilizing hormone levels. It is crucial for overall symptom management[^1][^2].\n  - **Combined Estrogen and Progesterone Therapy**: For women with a uterus, adding progesterone is essential to counteract the risk of endometrial cancer associated with estrogen therapy alone[^1][^2].\n\n- **Alternative Treatments**:\n  - **Lifestyle Changes**: Engaging in regular exercise, maintaining a balanced diet, and employing stress management techniques can significantly alleviate perimenopausal symptoms[^1][^3].\n  - **Vaginal Lubricants and Moisturizers**: These are recommended for managing vaginal dryness and discomfort during intercourse[^1][^3].\n  - **Antidepressants**: Off-label use of SSRIs and SNRIs can help manage mood swings, anxiety, and hot flashes, providing a non-hormonal option for symptom relief[^4][^5].\n\n- **Personalized Treatment Plans**: It is vital to recognize that each woman's experience with perimenopause is unique; therefore, creating a tailored treatment plan that may include hormone therapy, lifestyle modifications, and alternative treatments is crucial[^1][^3].\n\n- **Monitoring and Adjustments**: Regular follow-up appointments with healthcare providers are essential to monitor symptoms and adjust treatment plans as necessary[^1][^3]. This ensures that therapies remain effective and safe.\n\n### Conclusion\nManaging perimenopause for 50-year-old women involves a combination of hormone therapy, lifestyle changes, and possibly antidepressants, tailored to individual needs. Regular monitoring and adjustments are key to optimizing health outcomes during this transitional phase.\n\n[^1]: [Genesis Lifestyle Medicine](https://www.genesislifestylemedicine.com/blog/everything-you-need-to-know-about-hormone-therapy-for-perimenopause/)\n[^2]: [Mayo Clinic](https://newsnetwork.mayoclinic.org/discussion/managing-menopause-symptoms/)\n[^3]: [Wake Forest Baptist Health](https://www.wakehealth.edu/stories/hormone-replacement-therapy-can-be-life-changing-for-women)\n[^4]: [Winona](https://bywinona.com/journal/antidepressants-for-menopause)\n[^5]: [Menopause Society](https://www.menopause.org.au/hp/gp-hp-resources/contraception-in-perimenopause-practice-points-for-gps)`
  },
  {
    title: "Resveratrol Benefits",
    content: `
# What are the proven benefits of resveratrol for longevity?

Resveratrol, a compound found in red wine and various plants, has been researched for its potential benefits related to longevity and overall health. However, recent claims and studies present a nuanced picture regarding its efficacy in extending lifespan. Here's a summary of the proven benefits of resveratrol, along with insights from various claims and internet data:

## Proven Benefits of Resveratrol for Longevity

- **Cardiovascular Health**: Resveratrol has demonstrated the ability to improve blood flow and reduce inflammation, which can lower the risk of cardiovascular diseases, such as hypertension and high cholesterol[^1]. According to Dr. Andrew Huberman, while resveratrol may benefit vascular function, its impact on lifespan extension is limited[^2].

- **Anti-inflammatory Effects**: It effectively suppresses elevated inflammatory pathways, such as NF-κB, which are linked to aging and environmental stressors[^1]. This protective effect may contribute to better cellular health and longevity.

- **Metabolic Health**: Resveratrol enhances insulin sensitivity and glucose metabolism by activating the SIRT1 protein, which is crucial for energy balance and preventing age-related metabolic conditions[^1]. This activation is also noted for its role in DNA repair and mitochondrial function[^3].

- **Neuroprotection**: The compound may protect brain cells from oxidative damage and improve glucose utilization, potentially slowing cognitive decline associated with aging[^3]. This effect is highlighted in studies showcasing resveratrol's ability to enhance brain function[^2].

- **Cellular Protection**: Resveratrol helps guard against free radical damage, which is associated with aging and various health conditions, promoting overall cellular vitality[^3]. 

## Limitations and Concerns

Despite these potential benefits, it is essential to acknowledge that recent evidence questions resveratrol's ability to extend lifespan directly. For instance:

- Recent studies indicate that while resveratrol may activate certain cellular pathways, there is "very little, if any, direct evidence" supporting its role in lifespan extension[^2][^4]. Dr. Brad Stanfield emphasized that findings from extensive research, including the Interventions Testing Program, showed no significant lifespan extension in mice, contradicting earlier claims by researchers like David Sinclair[^5].

- The lack of reproducibility in some of the initial studies claiming lifespan extension has led to skepticism about the overall efficacy of resveratrol for this purpose[^2][^5].

## Conclusion

While resveratrol offers several health benefits that may contribute to improved quality of life and longevity—such as cardiovascular health, anti-inflammatory effects, and neuroprotection—the evidence for its direct role in extending lifespan remains unsubstantiated. Individuals interested in its use should consider these benefits alongside the current scientific consensus and potential limitations.

[^1]: [Synergistic Effects of Resveratrol and NMN](https://www.phytoceutics.com/the-synergistic-effects-of-resveratrol-and-nmn-on-healthy-ageing/)
[^2]: [Dr. Andrew Huberman's AMA on Longevity](https://www.youtube.com/watch?v=qJ3uV7coZbA&t=121)
[^3]: [Health Benefits of Resveratrol](https://www.health.com/resveratrol-8662308)
[^4]: [Omre on Resveratrol Supplements](https://omre.co/blogs/news/best-resveratrol-supplement)
[^5]: [Life Extension on Resveratrol](https://www.lifeextension.com/vitamins-supplements/resveratrol)
    `
  }
]

export default function MarkdownTabs() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">AI Response Examples</h2>
      <Tabs defaultValue={examples[0].title} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-secondary rounded-lg p-1 h-auto">
          {examples.map((example) => (
            <TabsTrigger 
              key={example.title} 
              value={example.title}
              className="border-primary/10 m-1 border-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {example.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <Card className="mt-6">
          <CardContent className="pt-6">
            {examples.map((example) => (
              <TabsContent key={example.title} value={example.title}>
                <ScrollArea className="h-[600px] pr-4">
                  <div className="prose max-w-none dark:prose-invert">
                    <Markdown>{example.content}</Markdown>
                  </div>
                </ScrollArea>
              </TabsContent>
            ))}
          </CardContent>
        </Card>
      </Tabs>
       <p className="mt-4 text-center text-xs text-sm text-muted-foreground bg-muted p-4 rounded-lg border border-primary">
        <strong>Disclaimer:</strong> Brogevity AI Can Make Mistakes. This content is for informational purposes only and is not medical advice. Brogevity AI does not guarantee the accuracy or completeness of claims and is not liable for actions taken based on this content. Always consult a healthcare provider before making health decisions.
      </p>
    </div>
  )
}

