import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { DatePicker } from '@/components/ui/datepicker'
import { Button } from '@/components/ui/button'
import { useForm } from '@/hooks/use-form'
import { Emotion } from '@/models/noteType'
import { EmotionButton } from '../components/EmotionButton'
import { useDispatch } from 'react-redux'
import { addNewEntry } from '@/store/journal/thunks'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getEntryById } from '@/store/journal/thunks'
import { formatDate } from '@/journal/helpers/convertDate'
import { format } from 'date-fns'

export const NoteView = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading, activeEntry } = useSelector((state) => state.journal)
  const [isEditMode, setIsEditMode] = useState(!!activeEntry)
  const { id } = useParams()
  const formData = activeEntry || {
    date: '',
    title: '',
    body: '',
    emotion: '',
  }
  const { date, title, body, emotion, onInputChange } = useForm(formData)

  const emotions: Emotion[] = Object.values(Emotion)

  useEffect(() => {
    dispatch(getEntryById(id))
    setIsEditMode(true)
  }, [dispatch, id])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isEditMode) {
      setIsEditMode(false)
      // dispatch(updateEntry({ date, title, body, emotion }))
    } else {
      dispatch(addNewEntry({ date, title, body, emotion }))
      navigate(-1)
    }
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="basis-3/4 items-center justify-center">
            <h2 className="text-2xl font-bold tracking-tight">
              {isEditMode ? `Subject: ${activeEntry.title}` : 'New Note'}
            </h2>
            {isEditMode && (
              <p className="text-medium text-muted-foreground">
                This is a new note. You can start typing here.
              </p>
            )}
            <div className="pt-10 grid gap-6">
              <div className="grid gap-2">
                <label className="text-medium font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {isEditMode ? 'Date' : 'Pick a Date'}
                </label>
                {isEditMode ? (
                  <p>{formatDate(activeEntry.date)}</p>
                ) : (
                  <DatePicker
                    onSelect={(date) =>
                      onInputChange({
                        target: {
                          name: 'date',
                          value: format(date, 'yyyy-MM-dd'),
                        },
                      })
                    }
                  ></DatePicker>
                )}
              </div>
              <div className="grid gap-2">
                <label className="text-medium font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Subject
                </label>
                {isEditMode ? (
                  <h2>{activeEntry.title}</h2>
                ) : (
                  <Input
                    value={isEditMode ? activeEntry.title : title}
                    name="title"
                    onChange={onInputChange}
                  ></Input>
                )}
              </div>
              <div className="grid gap-2">
                <label className="text-medium font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Description
                </label>
                {isEditMode ? (
                  <p>{activeEntry.body}</p>
                ) : (
                  <Textarea
                    value={isEditMode ? activeEntry.body : body}
                    name="body"
                    className="h-40"
                    onChange={onInputChange}
                  ></Textarea>
                )}
              </div>
              <h2 className="text-xl font-bold tracking-tight">
                {isEditMode ? `Your emotion` : 'How do you feel today?'}
              </h2>
              <div className="flex gap-6">
                {emotions.map((em) => (
                  <EmotionButton
                    className={
                      (isEditMode ? activeEntry.emotion : emotion) === em
                        ? 'bg-accent'
                        : ''
                    }
                    key={em}
                    emotion={em}
                    disabled={!!isEditMode}
                    onInputChange={onInputChange}
                  />
                ))}
              </div>
              <div className="flex flex-col-2 justify-end">
                <Button
                  variant={'secondary'}
                  disabled={isLoading}
                  className="mr-2"
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isEditMode ? 'Update Note' : 'Create Note'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
