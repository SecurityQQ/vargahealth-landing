import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Component() {
  const faqs = [
    {
      question: "What is Brogevity AI?",
      answer: "Brogevity AI is an agent that helps to summarize enormous amounts of content like YouTube videos, podcasts, or scientific literature."
    },
    {
      question: "What is Longevity Essentials?",
      answer: "Longevity Essentials is a newsletter about life optimization, longevity, and biohacking curated by Brogevity AI."
    },
    {
      question: "Can I trust AI-generated information?",
      answer: "Do your own research first, and you should always consult with your medical provider before incorporating any suggestions into your routine. Brogevity AI helps you to check claims: for most claims, we provide reference links with time codes to every single claim."
    },
    {
      question: "How accurate is Brogevity AI?",
      answer: "We use the latest available models to keep Brogevity AI accurate. Brogevity AI has a multi-step process of extracting factual information. Our aim is to extract actionable insights, with nuances, and details, but also pay attention to risks that are claimed by the author. In some cases, authors do not mention risks, and an algorithm tries to add missing information. However, it can make mistakes."
    },
    {
      question: "I found a mistake on your service, how can I submit it?",
      answer: "Report any mistake (including misinformation, technical error, copyright issue) in case you find it. We will immediately review that content and do our best to resolve the issue."
    },
    {
      question: "Why is Longevity Essentials a better newsletter?",
      answer: "It is powered by Brogevity AI Assistant that watches hundreds of hours of content — far more than any human could in such a short period. This means you save significant time while staying updated. Additionally, our platform allows you to delve deeply into topics of interest and bookmark them for discussions with your doctor or for further research."
    },
    {
      question: "Is it legal and ethically acceptable what you are doing?",
      answer: "Yes, it is completely legal; we do not use content that is not allowed for remixing. For major influencers, it offers free distribution of their content initially, and for niche influencers, it provides an opportunity to find their audience. If you are an influencer in longevity, health, nutrition, fitness, or a related topic and would like to add your content to our platform, please contact us through hello@brogevity.com."
    },
    {
      question: "I found claims that should be deleted from the platform, what should I do?",
      answer: "Submit such claims and the reason why they need to be reviewed for deletion to review@brogevity.com."
    }
  ]

  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p>{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}