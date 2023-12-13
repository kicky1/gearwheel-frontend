import { useGetStaffUsers } from '@/actions/get-staff-users'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from '@/components/ui/table'
import { useQueryClient } from '@tanstack/react-query'
import { ArrowUpDown } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const mockData = [
  {
    id: 1,
    name: 'Krzysiek',
    email: 'krzysiem@gmail.com',
    role: 'Admin',
  },
  {
    id: 2,
    name: 'Szymon',
    email: 'szymon@gmail.com',
    role: 'Admin',
  },
  {
    id: 3,
    name: 'Karol',
    email: 'karolex@gmail.com',
    role: 'Admin',
  },
  {
    id: 4,
    name: 'Daniel',
    email: 'joy@gmail.com',
    role: 'User',
  },
]

const mockHeaders = [
  {
    name: 'Name',
  },
  {
    name: 'Email',
  },
  {
    name: 'Role',
  },
]

function Users() {
  const queryClient = useQueryClient()

  const [tableData, setTableData] = useState<any[]>(mockData)
  const [page, setPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<string>('10')
  const [totalPages, setTotalPages] = useState<number>(1)

  const {
    data: staffUsersData,
    isLoading: isLoadingStaffUsers,
    error: errorStaffUsers,
    refetch: refetchStaffUsers,
  } = useGetStaffUsers()

  const visibleData = useMemo(() => {
    const startIdx = (page - 1) * parseInt(perPage)
    const endIdx = startIdx + parseInt(perPage)
    return tableData.slice(startIdx, endIdx)
  }, [page, perPage, tableData])

  useEffect(() => {
    const totalPages = Math.ceil(tableData.length / parseInt(perPage))
    setPage(1)
    setTotalPages(totalPages)
  }, [tableData, perPage])

  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4"></div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="w-full">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="rounded-sm border border-gray-300 ">
              <Table className="table-fixed">
                <TableHeader>
                  <TableRow className="border-gray-300 bg-gray-900 hover:bg-gray-900">
                    {mockHeaders.map((header: any) => (
                      <TableHead key={header.name}>{header.name}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visibleData.length ? (
                    visibleData.map((row: any) => (
                      <TableRow key={row.id} className="border-gray-300 bg-gray-100">
                        {Object.keys(row)
                          .filter((key) => key !== 'id')
                          .map((key: string) => (
                            <TableCell key={key} className="break-words">
                              {row[key]}
                            </TableCell>
                          ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={mockHeaders.length} className="h-24 text-center">
                        {isLoadingStaffUsers ? 'Loading...' : 'No results.'}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
              <Select
                onValueChange={(value: string) => {
                  setPerPage(value)
                  setPage(1)
                }}
                defaultValue={perPage}
              >
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={'10'}>10</SelectItem>
                  <SelectItem value={'20'}>20</SelectItem>
                  <SelectItem value={'50'}>50</SelectItem>
                  <SelectItem value={'100'}>100</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-center space-x-2 py-4">
              <div className="space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1 || visibleData.length === 0}
                >
                  Previous
                </Button>
                {Array.from(Array(totalPages).keys()).map((item, index) => {
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setPage(index + 1)}
                      disabled={page === index + 1}
                    >
                      {index + 1}
                    </Button>
                  )
                })}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages || visibleData.length === 0}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
