export const PAGE_SWAP_MS = 320
export const PAGE_ENTER_MS = 760

export const workItems = [
  {
    year: '2022',
    title: 'Platform Foundations',
    summary:
      'Reusable components, cleaner UI systems, and maintainable frontend architecture.',
  },
  {
    year: '2023',
    title: 'Workflow Tools',
    summary:
      'Internal software that reduced repetitive tasks and improved team visibility.',
  },
  {
    year: '2024',
    title: 'Quality and Delivery',
    summary:
      'Better pipelines, stronger review habits, and more dependable releases.',
  },
]

export const aboutSections = [
  {
    kicker: '',
    title: 'Amira Lina Benbouali',
    text:
      'I am a software engineer and full-stack developer who enjoys building digital experiences that feel thoughtful, intuitive, and well made. I care about the details people notice and the technical quality they do not see.',
    detail: 'The kind of work I am drawn to combines clarity, creativity, and strong execution.',
    panels: [
      {
        label: 'Contact',
        items: ['London, United Kingdom', 'amiralinabenbouali@gmail.com', 'github.com/amirabenbouali'],
      },
      {
        label: 'Education',
        items: ['BSc Computer Science', 'Foundation Year in Engineering', 'Continuous self-learning'],
      },
      {
        label: 'Software Skills',
        items: ['JavaScript / TypeScript', 'React', 'Node.js', 'APIs'],
      },
      {
        label: 'Focus',
        items: ['Full-stack web products', 'Interactive experiences', 'Design-aware engineering'],
      },
    ],
  },
  {
    kicker: 'My Story',
    title: 'I grew into tech through curiosity and making.',
    text:
      'What keeps me in tech is the mix of problem solving and creativity. I like taking an idea, shaping it carefully, and turning it into something people can actually use, trust, and enjoy.',
    detail: 'I do my best work when a project needs both technical clarity and good design judgment.',
    panels: [
      {
        label: 'Beginning',
        items: ['Started with curiosity', 'Learned by building', 'Stayed for the problem solving'],
      },
      {
        label: 'Why It Stuck',
        items: ['Code + creativity', 'Structure + experimentation', 'Real-world usefulness'],
      },
      {
        label: 'What Matters',
        items: ['Clarity', 'Meaning', 'Momentum'],
      },
    ],
  },
  {
    kicker: 'What I Create',
    title: 'Design-aware full-stack products.',
    text:
      'I enjoy working where interface design, frontend engineering, and backend systems meet. I want products to feel polished and expressive, but also stable, fast, and maintainable.',
    detail: 'For me, good work usually means reusable systems, clear interactions, and dependable implementation details.',
    panels: [
      {
        label: 'Frontend',
        items: ['React interfaces', 'Interaction design', 'Reusable systems'],
      },
      {
        label: 'Backend',
        items: ['APIs', 'Node.js services', 'Data flow thinking'],
      },
      {
        label: 'Experience',
        items: ['Motion', 'Polish', 'Consistency'],
      },
    ],
  },
  {
    kicker: 'How I Think',
    title: 'Structured, curious, and persistent.',
    text:
      'I like understanding a problem properly before rushing into code. My instinct is to simplify first, then add complexity only where it genuinely improves the result.',
    detail: 'The strongest solutions usually feel simple in the end, even when the path there was not.',
    panels: [
      {
        label: 'Approach',
        items: ['Simplify first', 'Iterate with intent', 'Refine what matters'],
      },
      {
        label: 'Traits',
        items: ['Curious', 'Patient', 'Persistent'],
      },
      {
        label: 'Standards',
        items: ['Readable code', 'Thoughtful UX', 'Reliable output'],
      },
    ],
  },
  {
    kicker: 'Beyond The Screen',
    title: 'I care about atmosphere, meaning, and craft.',
    text:
      'Beyond implementation, I care about visual storytelling, motion, tone, and the feeling a product leaves with someone. That sensitivity shapes how I approach both design and engineering decisions.',
    detail: 'I do not see design and engineering as separate worlds. The best products need both.',
    panels: [
      {
        label: 'Inspiration',
        items: ['Visual storytelling', 'Motion language', 'Editorial layouts'],
      },
      {
        label: 'Values',
        items: ['Taste', 'Care', 'Intentional detail'],
      },
      {
        label: 'Beyond Coding',
        items: ['Creativity', 'Observation', 'Aesthetic sensitivity'],
      },
    ],
  },
  {
    kicker: 'Where I’m Going',
    title: 'Toward more ambitious interactive work.',
    text:
      'I want to keep building software that feels alive, especially work that blends strong frontend craft, interactivity, and thoughtful systems underneath. I am interested in projects that challenge both my technical skills and creative instincts.',
    detail: '',
    panels: [
      {
        label: 'Direction',
        items: ['Interactive products', 'Stronger frontend craft', 'Expressive systems'],
      },
      {
        label: 'Ambition',
        items: ['More originality', 'Higher polish', 'Deeper execution'],
      },
      {
        label: 'Looking For',
        items: ['Creative teams', 'Product-minded work', 'Technical growth'],
      },
    ],
  },
]

export const getPageFromHash = () => {
  if (window.location.hash === '#about') {
    return 'about'
  }
  if (window.location.hash === '#work') {
    return 'work'
  }
  return 'home'
}
