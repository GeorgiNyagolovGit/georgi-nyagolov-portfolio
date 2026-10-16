import type { SkillGroup } from '../types/Skill'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: '</>',
    skills: [
      { name: 'JavaScript', description: 'Modern, maintainable code for dynamic web experiences.' },
      { name: 'React', description: 'Reusable components and interactive user interfaces.' },
      { name: 'HTML', description: 'Semantic and accessible page structure.' },
      { name: 'CSS', description: 'Responsive layouts, styling and animations.' },
    ],
  },
  {
    title: 'Backend',
    icon: '{ }',
    skills: [
      { name: 'Laravel', description: 'MVC applications, REST APIs and authentication.' },
      { name: 'Spring Boot', description: 'Java services and structured backend applications.' },
    ],
  },
]
