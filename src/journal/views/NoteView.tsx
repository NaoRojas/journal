import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { DatePicker } from '@/components/ui/datepicker'
import { Button } from '@/components/ui/button'
import { JournalLayout } from '../layout/JournalLayout'
import { useForm } from '@/hooks/use-form'
import { Emotion } from '@/models/noteType'
import { EmotionButton } from '../components/EmotionButton'
import { useDispatch } from 'react-redux'
import { addNewEntry } from '@/store/journal/thunks'
import { useSelector } from 'react-redux'
import { Note } from '@/models/noteType'
import { useNavigate } from 'react-router-dom'

interface NoteViewProps {
  note?: Note
}

export const NoteView = ({ note }: NoteViewProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading } = useSelector((state) => state.journal)
  const isEditMode = !!note
  const formData = note || {
    date: '',
    title: '',
    body: '',
    emotion: '',
  }
  const { date, title, body, emotion, onInputChange } = useForm(formData)

  const emotions: Emotion[] = Object.values(Emotion)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isEditMode) {
      // dispatch(updateEntry({ date, title, body, emotion }))
    } else {
      dispatch(addNewEntry({ date, title, body, emotion }))
    }
    navigate(-1)
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="basis-3/4 items-center justify-center">
            <h2 className="text-2xl font-bold tracking-tight">
              {note ? `Subject: ${note.title}` : 'New Note'}
            </h2>
            {!note && (
              <p className="text-medium text-muted-foreground">
                This is a new note. You can start typing here.
              </p>
            )}
            <div className="pt-10 grid gap-6">
              <div className="grid gap-2">
                <label className="text-medium font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {note ? 'Date' : 'Pick a Date'}
                </label>
                {note ? (
                  <p>{formatDate(note.date.toString())}</p>
                ) : (
                  <DatePicker
                    onSelect={(date) =>
                      onInputChange({ target: { name: 'date', value: date } })
                    }
                  ></DatePicker>
                )}
              </div>
              {!note && (
                <div className="grid gap-2">
                  <label className="text-medium font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Subject
                  </label>
                  {note ? (
                    <h2>{note.title}</h2>
                  ) : (
                    <Input
                      value={title}
                      name="title"
                      onChange={onInputChange}
                    ></Input>
                  )}
                </div>
              )}
              <div className="grid gap-2">
                <label className="text-medium font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Description
                </label>
                {note ? (
                  <p>{note.body}</p>
                ) : (
                  <Textarea
                    value={body}
                    name="body"
                    onChange={onInputChange}
                  ></Textarea>
                )}
              </div>
              <h2 className="text-xl font-bold tracking-tight">
                {note ? `Your emotion` : 'How do you feel today?'}
              </h2>
              <div className="flex gap-6">
                {emotions.map((em) => (
                  <EmotionButton
                    className={emotion === em ? 'bg-accent' : ''}
                    key={em}
                    emotion={em}
                    disabled={!!note}
                    onInputChange={onInputChange}
                  />
                ))}
              </div>
              <div className="flex flex-col-2 justify-end">
                {!note && (
                  <Button type="submit" disabled={isLoading}>
                    Create Note
                  </Button>
                )}
                <Button type="submit" disabled={isLoading}>
                  {note ? 'Update Note' : 'Create Note'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
