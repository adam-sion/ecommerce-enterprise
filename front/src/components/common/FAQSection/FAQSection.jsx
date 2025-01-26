import { useEffect, useRef, useState } from "react";
import Heading from "../../utils/Heading/heading";
import {
  AccordionContainer,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  Circle,
  FAQSectionContainer,
  FAQTextContainer,
  Highlight,
  Question,
  Separator,
  TopicList,
  TopicItem,
  AnimatedCircle1,
  AnimatedCircle2,
} from "./FAQSection.styles";
import Row from "../../utils/Row/Row";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  const handleAccordionChange = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleTopicChange = (index) => {
    setIsAnimating(true);
    setExpandedIndex(null); // Reset expandedIndex when topic changes
    setTimeout(() => {
      setSelectedTopic(index);
      setIsAnimating(false);
    }, 300); // Duration should match the CSS animation
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("faq-section-visible");
            entry.target.classList.remove("faq-section-hidden");

            observer.unobserve(entry.target);
          } else {
            entry.target.classList.add("faq-section-hidden");
            entry.target.classList.remove("faq-section-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <FAQSectionContainer ref={sectionRef}>
      <div>
        <FAQTextContainer>
          <Highlight as="h2">Got Questions?</Highlight>
          <Heading as="h5" $colorText="var(--primary-color-dark-6)">
            We've got answers for you.
          </Heading>
          <TopicList>
            {topics.map((topic, index) => (
              <TopicItem
                key={index}
                onClick={() => handleTopicChange(index)}
                $isSelected={selectedTopic === index}
              >
                <Row
                  type="vertical"
                  $justifyContent="flex-start"
                  $alignItems="flex-start"
                  $flexGap=".5rem"
                >
                  <Circle $isExpanded={selectedTopic === index} />
                  <p>{topic}</p>
                </Row>
              </TopicItem>
            ))}
          </TopicList>
        </FAQTextContainer>
        <AccordionContainer className={isAnimating ? "animating" : ""}>
          {faqItems[selectedTopic].map((item, index) => (
            <div key={index}>
              <AccordionItem>
                <AccordionItemButton
                  onClick={() => handleAccordionChange(index)}
                  $isExpanded={expandedIndex === index}
                >
                  <Circle $isExpanded={expandedIndex === index} />
                  <Question>{item.question}</Question>
                </AccordionItemButton>
                <AccordionItemPanel $isExpanded={expandedIndex === index}>
                  <p>{item.answer}</p>
                </AccordionItemPanel>
              </AccordionItem>
              {index < faqItems[selectedTopic].length - 1 && <Separator />}
            </div>
          ))}
        </AccordionContainer>
      </div>
      <AnimatedCircle1 />
      <AnimatedCircle2 />
    </FAQSectionContainer>
  );
};

const topics = [
  "General Benefits",
  "Sensitive Skin",
  "Product Ingredients",
  "Effectiveness",
];

const faqItems = [
  [
    {
      question: "What are the benefits of using natural beauty products?",
      answer:
        "Natural beauty products are free from harmful chemicals and are better for your skin and the environment.",
    },
    {
      question: "Are natural beauty products more expensive?",
      answer:
        "They can be, but many people find the investment worth it due to the quality and safety of the ingredients.",
    },
    {
      question: "Do natural beauty products work as well as synthetic ones?",
      answer:
        "Yes, many natural products are highly effective and provide lasting results without harmful side effects.",
    },
    {
      question: "Are natural beauty products cruelty-free?",
      answer:
        "Many natural beauty products are cruelty-free, as they often avoid animal testing and use ethical sourcing.",
    },
    {
      question: "Do natural beauty products have a fragrance?",
      answer:
        "Natural products often contain essential oils for fragrance, which can also have therapeutic benefits.",
    },
    {
      question: "Can natural beauty products help with anti-aging?",
      answer:
        "Yes, many natural products contain antioxidants and other ingredients that can help reduce signs of aging.",
    },
    {
      question: "Are natural beauty products eco-friendly?",
      answer:
        "Yes, they often use sustainable ingredients and environmentally friendly packaging.",
    },
    {
      question: "How do natural beauty products benefit overall health?",
      answer:
        "Using natural products reduces your exposure to harmful chemicals, benefiting your overall health in the long term.",
    },
  ],
  [
    {
      question: "Are natural beauty products suitable for sensitive skin?",
      answer:
        "Yes, natural beauty products are generally gentler and more suitable for sensitive skin.",
    },
    {
      question: "Can natural products cause allergies?",
      answer:
        "Although rare, some natural ingredients can cause allergies. Always check the ingredient list.",
    },
    {
      question: "Which natural ingredients are best for sensitive skin?",
      answer:
        "Ingredients like aloe vera, chamomile, and oatmeal are gentle and beneficial for sensitive skin.",
    },
    {
      question: "How do I test if a natural product is safe for my skin?",
      answer:
        "Perform a patch test on a small area of your skin to ensure no adverse reactions occur.",
    },
    {
      question:
        "Are there any natural ingredients to avoid for sensitive skin?",
      answer:
        "Avoid strong essential oils or ingredients like citrus, which may irritate sensitive skin.",
    },
    {
      question: "Can natural products soothe irritated skin?",
      answer:
        "Yes, ingredients like calendula and honey can help calm and soothe irritated skin.",
    },
    {
      question: "Do natural products help with conditions like eczema?",
      answer:
        "Many natural products can help manage eczema, but it's important to choose those specifically formulated for sensitive skin.",
    },
    {
      question: "How often should I use natural products on sensitive skin?",
      answer:
        "Use them as directed, and listen to your skin's needs; overuse, even of natural products, can lead to irritation.",
    },
  ],
  [
    {
      question: "How can I know if a product is truly natural?",
      answer:
        "Look for certifications and check the ingredient list for natural and organic components.",
    },
    {
      question: "What certifications should I look for?",
      answer:
        "Look for USDA Organic, Ecocert, or similar certifications to ensure the product's authenticity.",
    },
    {
      question: "Are all organic products natural?",
      answer:
        "Not necessarily. Organic refers to how ingredients are grown, while natural means minimal processing.",
    },
    {
      question: "How can I read and understand product labels?",
      answer:
        "Familiarize yourself with common natural ingredients and avoid products with synthetic additives or fillers.",
    },
    {
      question: "What does '100% natural' mean on a label?",
      answer:
        "'100% natural' indicates that all ingredients in the product are derived from natural sources.",
    },
    {
      question: "Can I trust 'natural' claims without certification?",
      answer:
        "It's best to look for certification; 'natural' can be misleading without regulatory oversight.",
    },
    {
      question: "How do I identify harmful ingredients in a product?",
      answer:
        "Research common harmful chemicals and always check the ingredient list before purchasing.",
    },
    {
      question: "What should I do if a product's claims seem unclear?",
      answer:
        "If in doubt, contact the manufacturer for more information or opt for a product with clear labeling and certifications.",
    },
  ],
  [
    {
      question: "Can natural products be as effective as synthetic ones?",
      answer:
        "Absolutely! Many natural products are just as effective and can provide excellent results without the side effects of synthetic ingredients.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results can vary, but many users report improvements within a few weeks of consistent use.",
    },
    {
      question: "What natural ingredients are most effective?",
      answer:
        "Ingredients like hyaluronic acid, vitamin C, and tea tree oil are known for their effectiveness in skincare.",
    },
    {
      question: "Do natural products work for all skin types?",
      answer:
        "Natural products can be tailored to different skin types; it's important to choose the right product for your skin.",
    },
    {
      question: "Can I mix natural and synthetic products in my routine?",
      answer:
        "Yes, but ensure that the ingredients in both products complement each other to avoid reactions.",
    },
    {
      question:
        "How do natural products compare in terms of long-term results?",
      answer:
        "Natural products often focus on overall skin health, leading to sustainable long-term results.",
    },
    {
      question: "Are there any downsides to using natural products?",
      answer:
        "Some natural products may take longer to show results compared to synthetic ones, but they are generally safer for long-term use.",
    },
    {
      question: "Can natural products address specific skin concerns?",
      answer:
        "Yes, many natural products are formulated to target specific issues like acne, dryness, or aging.",
    },
  ],
];

export default FAQSection;
