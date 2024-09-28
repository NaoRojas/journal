import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { DatePicker } from '@/components/ui/datepicker'
import { Button } from '@/components/ui/button'
import { JournalLayout } from '../layout/JournalLayout'
import { useForm } from '@/hooks/use-form'
import { Emotion } from '@/models/noteType'
import { EmotionButton } from '../components/EmotionButton'

export const NoteView = () => {
  const { date, title, body, emotion, onInputChange } = useForm({
    date: '',
    title: '',
    body: '',
    emotion: '',
  })

  const emotions: Emotion[] = Object.values(Emotion)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({
      date,
      title,
      body,
      emotion,
    })
  }
  return (
    <>
      <JournalLayout>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex">
            <div className="basis-3/4 items-center justify-center">
              <h2 className="text-2xl font-bold tracking-tight">New Note</h2>
              <p className="text-medium text-muted-foreground">
                This is a new note. You can start typing here.
              </p>
              <div className="pt-10 grid gap-6">
                <div className="grid gap-2">
                  <label className="text-medium font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Pick a date
                  </label>
                  <DatePicker
                    onSelect={(date) =>
                      onInputChange({ target: { name: 'date', value: date } })
                    }
                  ></DatePicker>
                </div>
                <div className="grid gap-2">
                  <label className="text-medium font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Subject
                  </label>
                  <Input
                    value={title}
                    name="title"
                    onChange={onInputChange}
                  ></Input>
                </div>
                <div className="grid gap-2">
                  <label className="text-medium font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Description
                  </label>
                  <Textarea
                    value={body}
                    name="body"
                    onChange={onInputChange}
                  ></Textarea>
                </div>
                <h2 className="text-xl font-bold tracking-tight">
                  Choose your Emotion
                </h2>
                <div className="flex gap-6">
                  {emotions.map((emotion) => (
                    <EmotionButton
                      key={emotion}
                      emotion={emotion}
                      onInputChange={onInputChange}
                    />
                  ))}
                </div>
                <div className="flex flex-col-2 justify-end">
                  <Button type="submit">Create Note</Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </JournalLayout>
    </>
  )
}
