import DashboardCard from '@/components/dashboard-card'
import { CalendarDateRangePicker } from '@/components/date-range-picker'
import { Overview } from '@/components/overview'
import { RecentSales } from '@/components/recent-sales'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent } from '@radix-ui/react-tabs'
import { CreditCard, DollarSign, User } from 'lucide-react'

const cardsArray = [
  {
    title: 'Total Revenue',
    image: (
      <DollarSign
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      />
    ),
    text: '$45,231.89',
    description: '+20.1% from last month',
  },
  {
    title: 'Sales',
    image: (
      <CreditCard
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      />
    ),
    text: '+12,234',
    description: '+19% from last month',
  },
  {
    title: 'Daily Sales',
    image: (
      <CreditCard
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      />
    ),
    text: '+123',
    description: '+2% from yesterday',
  },
  {
    title: 'Users',
    image: (
      <User
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      />
    ),
    text: '+123',
    description: '+29% from last month',
  },
  {
    title: 'Daily Users',
    image: (
      <User
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      />
    ),
    text: '+13',
    description: '+9% from yesterday',
  },
]

export default function Dashboard() {
  return (
    <>
      <div className="hidden flex-col  bg-white h-full rounded-md md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
              <Button>Show stat</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {cardsArray.map((card) => {
                  return (
                    <>
                      <DashboardCard
                        title={card.title}
                        image={card.image}
                        text={card.text}
                        description={card.description}
                        key={card.title}
                      />
                    </>
                  )
                })}
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle>Overview</CardTitle>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Time</SelectLabel>
                              <SelectItem value="day">Day</SelectItem>
                              <SelectItem value="month">Month</SelectItem>
                              <SelectItem value="year">Year</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>You made 265 sales this month.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
