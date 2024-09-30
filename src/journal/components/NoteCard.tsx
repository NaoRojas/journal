import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { formatDate } from '@/journal/helpers/convertDate'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuLabel,
} from '@/components/ui/context-menu'
import { useNavigate } from 'react-router'
export const NoteCard = ({ note }) => {
  const navigate = useNavigate()
  const navigateToNote = () => {
    navigate(`/${note.id}`)
  }
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Card className=" hover:scale-102 hover:shadow-lg h-fit">
          <CardContent>
            <div
              className="flex-col py-6 "
              onClick={() => {
                navigateToNote()
              }}
            >
              <h3 className="font-semibold leading-none tracking-tight mb-2">
                {note.title}
              </h3>
              <p className="text-sm text-gray-500">{note.body}</p>
            </div>
          </CardContent>
          <CardFooter>
            <p>{note.date}</p>
          </CardFooter>
        </Card>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem
          inset
          onClick={() => {
            navigateToNote()
          }}
        >
          Edit
          <ContextMenuShortcut>⌘E</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Delete
          <ContextMenuShortcut>⌘D</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
