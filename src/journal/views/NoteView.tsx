import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { DatePicker } from '@/components/ui/datepicker'
import { Button } from '@/components/ui/button'

export const NoteView = () => {
  return (
    <>
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
              <DatePicker></DatePicker>
            </div>
            <div className="grid gap-2">
              <label className="text-medium font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Subject
              </label>
              <Input></Input>
            </div>
            <div className="grid gap-2">
              <label className="text-medium font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Description
              </label>
              <Textarea></Textarea>
            </div>
            <h2 className="text-xl font-bold tracking-tight">
              Choose your Emotion
            </h2>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2 items-center">
                <span className="p-6 rounded-full bg-calm"></span>
                <span className="text-black font-medium">Calm</span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="p-6 rounded-full bg-excited"></span>
                <span className="text-muted-foreground">Excited</span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="p-6 rounded-full bg-anxious"></span>
                <span className="text-muted-foreground">Anxious</span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="p-6 rounded-full bg-surprised"></span>
                <span className="text-muted-foreground">Surprised</span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="p-6 rounded-full bg-relaxed"></span>
                <span className="text-muted-foreground">Confident</span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="p-6 rounded-full bg-frustrated"></span>
                <span className="text-muted-foreground">Frustrated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
