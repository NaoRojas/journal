export enum Emotion {
  Calm = 'calm',
  Excited = 'excited',
  Anxious = 'anxious',
  Surprised = 'surprised',
  Relaxed = 'relaxed',
  Frustrated = 'frustrated',
}

export type Note = {
  id: string
  body: string
  date: string
  title: string
  emotion: Emotion
}