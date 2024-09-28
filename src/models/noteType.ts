export enum Emotion {
  HAPPY = 'HAPPY',
  SAD = 'SAD',
  ANGRY = 'ANGRY',
  NEUTRAL = 'NEUTRAL',
  FEAR = 'FEAR',
  SURPRISE = 'SURPRISE',
  DISGUST = 'DISGUST'
}

export type Note = {
  id: string
  body: string
  date: string
  title: string
  emotion: Emotion
}