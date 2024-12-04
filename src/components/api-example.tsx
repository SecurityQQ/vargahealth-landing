'use client'

import { Folder } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const codeExamples = {
  javascript: `fetch('https://api.brogevity.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'brogevity-mini',
    messages: [
      {
        role: 'system',
        content: 'Be precise and concise. Reference to healthline, examine, or Siim Land'
      },
      { role: 'user', content: 'What is the best dosage of magnesium?' }
    ],
    temperature: 0.7,
    stream: false,
  }),
})`,
  curl: `curl -X POST \\
  'https://api.brogevity.com/v1/chat/completions' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "model": "brogevity-mini",
    "messages": [
      {
        "role": "system",
        "content": "Be precise and concise. Reference to healthline, examine, or Siim Land"
      },
      {"role": "user", "content": "What is the best dosage of magnesium?"}
    ],
    "temperature": 0.7,
    "stream": false
  }'`,
  response: `{
  "id": "broeadb85260f434b79a3ece6ec",
  "object": "chat.completion",
  "created": 1733304269,
  "model": "brogevity-mini",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "The optimal dosage of magnesium varies depending on factors such as age, sex, and specific health conditions. Based on both **Claims** from various experts and **Internet Data**, the following recommendations can be summarized:\\n\\n- **General Recommendations**:\\n  - **Adult Men**: 410–420 mg/day[^1].\\n  - **Adult Women**: 310–320 mg/day[^1].\\n  - **Pregnant Women**: 350–400 mg/day[^1].\\n  - **Breastfeeding Women**: 310–360 mg/day[^1].\\n  - **Older Adults (65+ years)**: 420 mg/day for men and 320 mg/day for women[^1].\\n  - **Athletes**: Higher intake of 450–550 mg/day for men and 350–450 mg/day for women, depending on activity level[^1].\\n\\n- **Supplementation Insights**:\\n  - According to Siim Land, optimal magnesium supplementation often falls within the range of **200-400 mg** daily, with specific studies indicating that doses above **400 mg** can effectively lower inflammation and blood pressure over extended periods[^2][^3]. \\n  - Magnesium glycinate is frequently recommended due to its superior absorption and effectiveness, often dosed at **300-400 mg** for improved sleep quality[^4].\\n  - Siim Land also emphasizes achieving at least **420 mg** daily to combat deficiencies, which could lead to cardiovascular and neurological health issues[^5].\\n\\n- **Cautions and Considerations**:\\n  - Consultation with a healthcare provider is advised before starting magnesium supplementation, especially at higher doses, to avoid potential side effects such as digestive discomfort[^4].\\n  - Monitoring dietary intake is crucial, as many individuals do not meet their magnesium needs through diet alone, with up to **50%** of the population potentially falling short[^5].\\n\\nIn summary, while the recommended dietary allowance for magnesium varies by demographic, a general guideline for supplementation ranges from **200-400 mg** daily, with higher amounts advised under certain conditions, such as pregnancy or intense physical activity. Always consider individual health needs when determining the appropriate dose.\\n\\n[^1]: [Examine](https://examine.com/supplements/magnesium/)\\n[^2]: [Siim Land's Video](https://www.youtube.com/watch?v=X0mommt6nag&t=450)\\n[^3]: [Healthline](https://www.healthline.com/nutrition/magnesium-oxide)\\n[^4]: [Siim Land's Video](https://www.youtube.com/watch?v=ZaRg7V4W8EE&t=482)\\n[^5]: [Siim Land's Video](https://www.youtube.com/watch?v=X0mommt6nag&t=570)"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 5509,
    "completion_tokens": 558,
    "total_tokens": 6067
  }
}`
};


function ApiExampleView() {
  return (
    <Card className="border-primary bg-background shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center text-primary">
          <Folder className="mr-2 text-secondary" />
          Example Request
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="javascript" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/10 border border-secondary/30">
            <TabsTrigger value="javascript" className="data-[state=active]:bg-secondary/20">
              JavaScript
            </TabsTrigger>
            <TabsTrigger value="curl" className="data-[state=active]:bg-secondary/20">
              cURL
            </TabsTrigger>
            <TabsTrigger value="response" className="data-[state=active]:bg-secondary/20">
              Response
            </TabsTrigger>
          </TabsList>
          {Object.entries(codeExamples).map(([key, code]) => (
            <TabsContent key={key} value={key} className="mt-4">
              <div className="rounded-md overflow-hidden border border-secondary/30 bg-secondary/10">
                <div className="h-[300px] overflow-auto">
                  <SyntaxHighlighter
                    language={key === 'response' ? 'json' : key === 'curl' ? 'bash' : key}
                    style={prism}
                    customStyle={{
                      margin: 0,
                      padding: '1rem',
                      background: 'var(--bg-color)', // Use CSS variable for theming
                      fontSize: '0.875rem',
                      lineHeight: '1.5',
                      minHeight: '400px',
                    }}
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default ApiExampleView;

