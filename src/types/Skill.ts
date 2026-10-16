export interface Skill {
  name: string
  description: string
}

export interface SkillGroup {
  title: string
  icon: string
  skills: Skill[]
}
