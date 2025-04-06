export interface AITool {
  id: number;
  name: string;
  category: string;
  useCase: string;
  implementation: string;
  pricing: string;
  beginnerFriendly: number; // 1-5 stars
}

export const aiTools: AITool[] = [
  {
    id: 1,
    name: "ChatGPT",
    category: "Content Creation & Repurposing",
    useCase: "Create client materials, brainstorm content ideas, generate marketing copy, develop coaching frameworks",
    implementation: "Start with the free version to learn prompt engineering basics. Use specific prompts like \"Create 5 social media posts about [your coaching niche]\" rather than vague requests.",
    pricing: "Free version available; ChatGPT Plus ($20/month)",
    beginnerFriendly: 5
  },
  {
    id: 2,
    name: "Jasper",
    category: "Content Creation & Repurposing",
    useCase: "Create personalized client content, marketing materials, blog posts, and email sequences",
    implementation: "Begin with their templates for specific content types (blog posts, emails, etc.). Create a brand voice guide in the platform for consistent outputs.",
    pricing: "Paid only (starts at $39/month)",
    beginnerFriendly: 4
  },
  {
    id: 3,
    name: "Copy.ai",
    category: "Content Creation & Repurposing",
    useCase: "Generate marketing copy, email sequences, and social media content tailored to coaching businesses",
    implementation: "Use their specialized templates for different content types. Start with their \"Blog Wizard\" or \"Email Wizard\" for guided content creation.",
    pricing: "Free plan available; Pro plan ($36/month)",
    beginnerFriendly: 5
  },
  {
    id: 4,
    name: "Merlin",
    category: "Content Creation & Repurposing",
    useCase: "Browser-based AI writing assistant that works everywhere you browse",
    implementation: "Install the browser extension and activate it when writing emails, social posts, or any web-based content. Use the \"Improve Writing\" feature to enhance existing text.",
    pricing: "Free version available; Premium ($9.99/month)",
    beginnerFriendly: 4
  },
  {
    id: 5,
    name: "Content Raptor",
    category: "Content Creation & Repurposing",
    useCase: "Content marketing platform with industry-specific templates and SEO tools",
    implementation: "Start by creating a content calendar, then use their AI to generate drafts based on your coaching niche keywords.",
    pricing: "Paid only (starts at $49/month)",
    beginnerFriendly: 3
  },
  {
    id: 6,
    name: "Notion AI",
    category: "Content Creation & Repurposing",
    useCase: "Extract key moments from coaching sessions and organize them into structured content",
    implementation: "Create a template for session notes, then use the AI to summarize, extract action items, and identify themes across multiple sessions.",
    pricing: "Notion is free; AI features ($10/month add-on)",
    beginnerFriendly: 3
  },
  {
    id: 7,
    name: "Descript",
    category: "Content Creation & Repurposing",
    useCase: "Audio/video editing platform that makes editing as easy as editing a document",
    implementation: "Upload your coaching session recordings, use the automatic transcription, then edit the text to automatically edit the audio/video.",
    pricing: "Free plan available; Creator ($12/month)",
    beginnerFriendly: 4
  },
  {
    id: 8,
    name: "Rytr",
    category: "Content Creation & Repurposing",
    useCase: "AI writing assistant specifically good for short-form content",
    implementation: "Use their use-case templates for coaching-specific content like testimonial responses, email outreach, and program descriptions.",
    pricing: "Free plan available; Premium ($29/month)",
    beginnerFriendly: 5
  },
  {
    id: 9,
    name: "Invideo",
    category: "Video & Audio Creation",
    useCase: "Create professional coaching videos with extensive template library",
    implementation: "Start with their coaching-specific templates, upload your brand assets, then customize with your content. Use their AI to suggest improvements.",
    pricing: "Free plan available; Business ($30/month)",
    beginnerFriendly: 4
  },
  {
    id: 10,
    name: "Wisecut",
    category: "Video & Audio Creation",
    useCase: "Automated video editor that removes filler words and generates captions",
    implementation: "Upload your raw coaching videos, let the AI identify and remove \"ums\" and pauses, then export with automatically generated captions.",
    pricing: "Paid only (starts at $47/month)",
    beginnerFriendly: 4
  },
  {
    id: 11,
    name: "Synthesia",
    category: "Video & Audio Creation",
    useCase: "Create AI-generated videos with virtual presenters",
    implementation: "Choose an avatar, input your script, add your branding, and generate professional-looking videos without appearing on camera.",
    pricing: "Paid only (starts at $30/month)",
    beginnerFriendly: 4
  },
  {
    id: 12,
    name: "Otter.ai",
    category: "Video & Audio Creation",
    useCase: "Transcribe coaching sessions to analyze patterns and improvement areas",
    implementation: "Connect to your Zoom account for automatic recording and transcription, then use the summary feature to extract key points.",
    pricing: "Free plan available; Pro ($16.99/month)",
    beginnerFriendly: 5
  },
  {
    id: 13,
    name: "Lumen5",
    category: "Video & Audio Creation",
    useCase: "Transform blog posts into engaging social media videos",
    implementation: "Paste your blog URL or text, select a template, and the AI will suggest visuals and create a storyboard you can customize.",
    pricing: "Free plan available; Basic ($19/month)",
    beginnerFriendly: 5
  },
  {
    id: 14,
    name: "Pictory",
    category: "Video & Audio Creation",
    useCase: "Create videos from long-form content automatically",
    implementation: "Input your blog post or script, and the AI will create a video with relevant stock footage, text overlays, and music.",
    pricing: "Paid only (starts at $19/month)",
    beginnerFriendly: 4
  },
  {
    id: 15,
    name: "Murf AI",
    category: "Video & Audio Creation",
    useCase: "Create natural-sounding voiceovers for coaching content",
    implementation: "Type or paste your script, select a voice that matches your brand, adjust tone and pace, then download or integrate with your videos.",
    pricing: "Free plan available; Pro ($29/month)",
    beginnerFriendly: 4
  },
  {
    id: 16,
    name: "CX Genie",
    category: "Client Experience & Automation",
    useCase: "24/7 client support chatbot that handles routine queries",
    implementation: "Train the AI with your FAQs and coaching materials, embed on your website, and set up notification rules for when human intervention is needed.",
    pricing: "Paid only (starts at $29/month)",
    beginnerFriendly: 3
  },
  {
    id: 17,
    name: "VanChat",
    category: "Client Experience & Automation",
    useCase: "Client communication command center with multi-channel support",
    implementation: "Connect your email, messaging apps, and social media, then create response templates the AI can customize for individual clients.",
    pricing: "Paid only (starts at $39/month)",
    beginnerFriendly: 3
  },
  {
    id: 18,
    name: "Motion",
    category: "Client Experience & Automation",
    useCase: "AI-powered scheduling that eliminates back-and-forth with clients",
    implementation: "Connect your calendar, set your availability preferences, and share your booking link with clients. The AI will optimize your schedule based on your productivity patterns.",
    pricing: "Paid only (starts at $19/month)",
    beginnerFriendly: 4
  },
  {
    id: 19,
    name: "Reclaim.ai",
    category: "Client Experience & Automation",
    useCase: "Intelligent calendar management that automatically schedules tasks and meetings",
    implementation: "Connect your calendar, add your tasks with estimated durations, and let the AI find the best times based on your energy levels and focus needs.",
    pricing: "Free plan available; Premium ($8/month)",
    beginnerFriendly: 3
  },
  {
    id: 20,
    name: "Kalendar AI",
    category: "Client Experience & Automation",
    useCase: "AI sales assistant that books meetings with prospects",
    implementation: "Connect your calendar, create meeting types, and the AI will reach out to prospects, handle the conversation, and book meetings on your behalf.",
    pricing: "Paid only (starts at $49/month)",
    beginnerFriendly: 3
  },
  {
    id: 21,
    name: "Drift",
    category: "Client Experience & Automation",
    useCase: "Conversational AI for website visitors and lead qualification",
    implementation: "Install on your website, train with your coaching offerings, and let it engage visitors, answer questions, and book consultations.",
    pricing: "Free plan available; Premium (starts at $50/month)",
    beginnerFriendly: 3
  },
  {
    id: 22,
    name: "Sana",
    category: "Client Experience & Automation",
    useCase: "AI tool that engages with clients and answers frequently asked questions",
    implementation: "Upload your coaching materials, program details, and FAQs to create a knowledge base the AI can draw from when interacting with clients.",
    pricing: "Paid only (starts at $49/month)",
    beginnerFriendly: 3
  },
  {
    id: 23,
    name: "Learniverse",
    category: "Course Creation & Learning",
    useCase: "AI-powered course creation with engagement tracking",
    implementation: "Input your expertise areas, and the AI will suggest course structures. Use the content generator to create lessons based on your knowledge.",
    pricing: "Paid only (starts at $39/month)",
    beginnerFriendly: 3
  },
  {
    id: 24,
    name: "Eduaide.ai",
    category: "Course Creation & Learning",
    useCase: "AI course content generator and learning path creator",
    implementation: "Define your learning objectives, input your expertise areas, and the AI will generate module outlines, assessments, and interactive elements.",
    pricing: "Free plan available; Pro ($29/month)",
    beginnerFriendly: 4
  },
  {
    id: 25,
    name: "Coursebox.ai",
    category: "Course Creation & Learning",
    useCase: "Turn expertise into structured online courses quickly",
    implementation: "Answer the AI's questions about your coaching methodology, and it will generate a complete course structure with lessons, exercises, and assessments.",
    pricing: "Paid only (starts at $59/month)",
    beginnerFriendly: 4
  },
  {
    id: 26,
    name: "Teacherbot",
    category: "Course Creation & Learning",
    useCase: "AI teaching assistant for course creators",
    implementation: "Connect to your course platform, and the AI will generate supplementary materials, answer student questions, and provide personalized feedback.",
    pricing: "Free plan available; Premium ($19/month)",
    beginnerFriendly: 4
  },
  {
    id: 27,
    name: "Knowji",
    category: "Course Creation & Learning",
    useCase: "AI-powered learning reinforcement and retention",
    implementation: "Input your course content, and the AI will create spaced repetition exercises and quizzes to help students retain information.",
    pricing: "Paid only (starts at $29/month)",
    beginnerFriendly: 3
  },
  {
    id: 28,
    name: "IdeaBuddy",
    category: "Business Intelligence & Planning",
    useCase: "AI business planning with visual tools and validation processes",
    implementation: "Follow their guided process to develop your coaching business model, validate your ideas, and create financial projections.",
    pricing: "Free plan available; Premium ($15/month)",
    beginnerFriendly: 4
  },
  {
    id: 29,
    name: "Viable",
    category: "Business Intelligence & Planning",
    useCase: "AI-powered customer feedback analysis",
    implementation: "Import client feedback from surveys, testimonials, or session notes, and the AI will identify patterns, sentiment, and actionable insights.",
    pricing: "Paid only (starts at $99/month)",
    beginnerFriendly: 3
  },
  {
    id: 30,
    name: "Akkio",
    category: "Business Intelligence & Planning",
    useCase: "No-code AI predictions for business decisions",
    implementation: "Upload your client data, select what you want to predict (e.g., client retention), and the AI will build a model to help you make data-driven decisions.",
    pricing: "Free plan available; Pro ($50/month)",
    beginnerFriendly: 2
  },
  {
    id: 31,
    name: "Obviously AI",
    category: "Business Intelligence & Planning",
    useCase: "Predictive analytics without coding",
    implementation: "Connect your client database, ask questions in plain English (e.g., \"Which clients are likely to renew?\"), and get AI-powered predictions.",
    pricing: "Free plan available; Business ($195/month)",
    beginnerFriendly: 3
  },
  {
    id: 32,
    name: "Fathom",
    category: "Business Intelligence & Planning",
    useCase: "AI meeting assistant that records, transcribes, and summarizes",
    implementation: "Add to your Zoom meetings, and it will automatically create summaries, action items, and key moments from your client sessions.",
    pricing: "Free plan available; Pro ($29/month)",
    beginnerFriendly: 5
  },
  {
    id: 33,
    name: "Frase",
    category: "Marketing & Growth",
    useCase: "SEO content optimization for coaching websites",
    implementation: "Enter your target keywords, and the AI will analyze top-ranking content to suggest optimizations for your coaching website and blog posts.",
    pricing: "Paid only (starts at $44.99/month)",
    beginnerFriendly: 3
  },
  {
    id: 34,
    name: "Lately",
    category: "Marketing & Growth",
    useCase: "AI social media management specifically for thought leaders",
    implementation: "Connect your content sources, and the AI will generate dozens of social posts from each piece, schedule them, and analyze performance.",
    pricing: "Paid only (starts at $49/month)",
    beginnerFriendly: 4
  },
  {
    id: 35,
    name: "Zapier",
    category: "Marketing & Growth",
    useCase: "Automate workflows between your coaching tools without coding",
    implementation: "Create \"Zaps\" that connect your tools (e.g., when a client books a session, automatically add them to your email list and create a follow-up task).",
    pricing: "Free plan available; Starter ($19.99/month)",
    beginnerFriendly: 3
  },
  {
    id: 36,
    name: "Surfer SEO",
    category: "Marketing & Growth",
    useCase: "Content optimization for coaches looking to attract organic traffic",
    implementation: "Enter your coaching niche keywords, and the AI will guide you in creating content that ranks well in search engines.",
    pricing: "Paid only (starts at $59/month)",
    beginnerFriendly: 3
  },
  {
    id: 37,
    name: "Typeform",
    category: "Marketing & Growth",
    useCase: "Create engaging intake forms and surveys with AI assistance",
    implementation: "Use their templates for coaching intake forms, then customize with your branding and specific questions. The AI will help optimize for completion rates.",
    pricing: "Free plan available; Plus ($25/month)",
    beginnerFriendly: 4
  },
  {
    id: 38,
    name: "Semrush",
    category: "Marketing & Growth",
    useCase: "Comprehensive SEO and content marketing platform with AI features",
    implementation: "Use their AI writing assistant to create coaching-specific content optimized for your target keywords and audience.",
    pricing: "Paid only (starts at $119.95/month)",
    beginnerFriendly: 2
  },
  {
    id: 39,
    name: "Grammarly",
    category: "Content Creation & Repurposing",
    useCase: "AI writing assistant that ensures professional communication",
    implementation: "Install the browser extension to check all your client communications, marketing materials, and course content for grammar, clarity, and tone.",
    pricing: "Free plan available; Premium ($12/month)",
    beginnerFriendly: 5
  },
  {
    id: 40,
    name: "Midjourney",
    category: "Content Creation & Repurposing",
    useCase: "Create custom imagery for coaching programs and marketing",
    implementation: "Use text prompts to generate unique visuals that represent your coaching concepts, methodologies, and client transformation stories.",
    pricing: "Paid only (starts at $10/month)",
    beginnerFriendly: 3
  },
  {
    id: 41,
    name: "Canva",
    category: "Content Creation & Repurposing",
    useCase: "Design platform with AI features for creating coaching materials",
    implementation: "Use their AI-powered Magic Write, Background Remover, and Design Suggestions to create professional coaching materials without design skills.",
    pricing: "Free plan available; Pro ($12.99/month)",
    beginnerFriendly: 5
  },
  {
    id: 42,
    name: "Calendly",
    category: "Client Experience & Automation",
    useCase: "Scheduling automation with AI enhancements",
    implementation: "Set up different meeting types for discovery calls, coaching sessions, and follow-ups. The AI will optimize scheduling based on your preferences.",
    pricing: "Free plan available; Essentials ($8/month)",
    beginnerFriendly: 5
  },
  {
    id: 43,
    name: "Krisp",
    category: "Video & Audio Creation",
    useCase: "AI noise cancellation for professional coaching calls",
    implementation: "Install the app and enable during client calls to automatically remove background noise, ensuring professional-quality audio.",
    pricing: "Free plan available; Pro ($8/month)",
    beginnerFriendly: 5
  },
  {
    id: 44,
    name: "Riverside",
    category: "Video & Audio Creation",
    useCase: "High-quality recording platform with AI post-production",
    implementation: "Record coaching sessions or content, then use their AI to enhance audio quality, remove filler words, and generate transcripts.",
    pricing: "Free plan available; Standard ($15/month)",
    beginnerFriendly: 4
  },
  {
    id: 45,
    name: "Kajabi",
    category: "Course Creation & Learning",
    useCase: "All-in-one platform for coaches with AI-enhanced features",
    implementation: "Use their AI-powered email marketing, landing page builder, and course creation tools to build your entire coaching business.",
    pricing: "Paid only (starts at $149/month)",
    beginnerFriendly: 3
  },
  {
    id: 46,
    name: "Thinkific",
    category: "Course Creation & Learning",
    useCase: "Course platform with AI-enhanced content creation",
    implementation: "Use their AI Course Generator to quickly create course outlines, lesson plans, and assessments based on your coaching expertise.",
    pricing: "Free plan available; Basic ($39/month)",
    beginnerFriendly: 4
  },
  {
    id: 47,
    name: "Podia",
    category: "Course Creation & Learning",
    useCase: "All-in-one platform for selling courses and coaching services",
    implementation: "Use their AI writing assistant to create sales pages, email sequences, and course content for your coaching programs.",
    pricing: "Paid only (starts at $39/month)",
    beginnerFriendly: 4
  },
  {
    id: 48,
    name: "Memberspace",
    category: "Client Experience & Automation",
    useCase: "Create membership sites and client portals with AI enhancements",
    implementation: "Set up a client portal on your existing website, then use their AI to personalize the experience based on client behavior and preferences.",
    pricing: "Paid only (starts at $25/month)",
    beginnerFriendly: 3
  },
  {
    id: 49,
    name: "Dubsado",
    category: "Client Experience & Automation",
    useCase: "Client management system with AI-powered automation",
    implementation: "Set up workflows for client onboarding, session preparation, and follow-up. The AI will personalize communications based on client information.",
    pricing: "Paid only (starts at $35/month)",
    beginnerFriendly: 3
  },
  {
    id: 50,
    name: "Paperbell",
    category: "Client Experience & Automation",
    useCase: "All-in-one coaching client management platform",
    implementation: "Set up your coaching packages, and the AI will handle scheduling, payments, contracts, and client communications in one streamlined system.",
    pricing: "Paid only (starts at $50/month)",
    beginnerFriendly: 4
  }
];

export const categories = [
  "Content Creation & Repurposing",
  "Video & Audio Creation",
  "Client Experience & Automation",
  "Course Creation & Learning",
  "Business Intelligence & Planning",
  "Marketing & Growth"
];

export const aiQuestions = [
  "How can I use ChatGPT specifically for my coaching business without sounding generic?",
  "Which AI tools are worth paying for vs. which free ones are good enough for a small coaching practice?",
  "How do I create personalized client experiences with AI without losing the human touch?",
  "Is it possible to completely automate my client onboarding with AI, and if so, how?",
  "What's the fastest way to create and repurpose my content across multiple platforms using AI?",
  "How can I use AI to transcribe and analyze coaching sessions to improve my skills?",
  "Which AI course creation tools actually deliver professional results that don't feel 'AI-generated'?",
  "How can I integrate multiple AI tools into a cohesive workflow that actually saves time?"
];

export const painPoints = [
  {
    title: "Cost Anxiety",
    description: "Will I waste money on AI tools that don't deliver ROI?"
  },
  {
    title: "Time Paradox",
    description: "I don't have time to learn new tools that promise to save time later."
  },
  {
    title: "Tech Intimidation",
    description: "I'm not tech-savvy—won't I need a developer to make this work?"
  },
  {
    title: "Integration Nightmare",
    description: "How do I make all these different tools work together without creating more problems?"
  },
  {
    title: "Ethical Concerns & Authenticity",
    description: "Will AI-generated content feel generic and rob me of my unique voice?"
  },
  {
    title: "Trust & Dependency",
    description: "Can I really rely on AI without compromising the quality of my service or losing my core coaching skills?"
  }
];

export const fears = [
  "Will clients choose AI coaching over my services to save money?",
  "Am I falling behind competitors who are already using AI extensively?",
  "Will I waste money on AI tools that don't deliver ROI?",
  "How can I maintain authenticity when using AI-generated content?",
  "What about privacy concerns when using AI with sensitive client information?"
];

export const frustrations = [
  "I've tried 5 different AI tools and they all feel overwhelming to learn.",
  "The constant stream of new AI tools makes it impossible to know which ones to invest time in.",
  "I'm spending more time figuring out AI than actually coaching clients.",
  "Most AI tools feel generic and not specifically designed for coaching businesses.",
  "It's hard to integrate different AI tools into my existing systems."
];

export const goals = [
  "I want to eliminate 80% of my administrative tasks through AI automation.",
  "I need to create content consistently without it consuming all my time.",
  "I want to scale my coaching business without hiring a team.",
  "I need to provide 24/7 support to clients without being available 24/7.",
  "I want to focus on high-value coaching work instead of repetitive tasks."
];
