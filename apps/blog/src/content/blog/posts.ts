export interface Post {
  title: string
  excerpt: string
  date: string
  tag: string
  slug: string
  content: string
  readingTime: number
}

export const posts: Post[] = [
  {
    title: "Sustainable Digitalization: Shaping the Future",
    excerpt: "Exploring the challenges and opportunities of digital transformation in the context of sustainability.",
    date: "2024-03-05",
    tag: "Digitalization",
    slug: "sustainable-digitalization",
    readingTime: 5,
    content: `
      Digital transformation is a central part of our modern society.
      But how can we ensure that this development is sustainable?
      
      In this article, we examine various aspects of sustainable digitalization:
      
      1. Energy efficiency in IT
      2. E-waste management
      3. Digital inclusion
      4. Data protection and ethics
      
      We show how companies and individuals can contribute
      to shaping a sustainable digital future.
    `
  },
  {
    title: "The Future of Work: Remote and Hybrid",
    excerpt: "How digital technologies are changing the workplace and what this means for companies.",
    date: "2024-02-20",
    tag: "Workplace",
    slug: "future-of-work",
    readingTime: 4,
    content: `
      The way we work has fundamentally changed in recent years.
      
      Remote work and hybrid work models are no longer the exception but the rule.
      In this article, we explore:
      
      - Benefits of flexible work models
      - Challenges for companies
      - Tools and technologies for effective collaboration
      - Best practices for remote teams
      
      Learn how to prepare your company for the future of work.
    `
  },
  {
    title: "Artificial Intelligence: Opportunities and Risks",
    excerpt: "A critical look at current developments in AI and their implications.",
    date: "2024-01-15",
    tag: "AI",
    slug: "ai-opportunities-risks",
    readingTime: 6,
    content: `
      Artificial intelligence is an integral part of our daily lives.
      
      But what does this mean for our society? In this article, we discuss:
      
      - Current AI applications
      - Ethical questions
      - Data protection aspects
      - Future developments
      
      We examine both the positive and negative aspects of AI development
      and show how we can use this technology responsibly.
    `
  }
] 