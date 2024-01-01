import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { JsxElement } from 'typescript'

type Props = {
  title: string
  image: JSX.Element
  text: string
  description: string
}

export default function DashboardCard({ title, image, text, description }: Props) {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {image}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{text}</div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </>
  )
}
