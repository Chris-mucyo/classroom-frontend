import { useMemo, useState } from 'react'
import { Breadcrumb } from '@/components/refine-ui/layout/breadcrumb'
import { ListView } from '@/components/refine-ui/views/list-view'
import { Search } from 'lucide-react'
import {  } from '@radix-ui/react-select'
import { DEPARTMENT_OPTIONS } from '@/constants'
import { CreateButton } from '@/components/refine-ui/buttons/create'
import { Input } from '@/components/ui/input'
import { Select,SelectContent, SelectItem, SelectTrigger, SelectValue  } from '@/components/ui/select'
import { DataTable } from '@/components/refine-ui/data-table/data-table'
import { useTable } from '@refinedev/react-table'
import { Subject } from '@/types'
import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'

function SubjectsList() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedDepartment, setSelectedDepartment] = useState('')

    const departmentFilters = selectedDepartment === 'all' ? [] : [
        { field: 'department', operator: 'eq' as const, value: selectedDepartment }
    ]

    const searchFilters = searchQuery ? [
       { field: 'code', operator: 'contains' as const, value: searchQuery },
    ] : [];

    const subjectTable = useTable<Subject>({
        columns: useMemo<ColumnDef<Subject>[]>(() => [
            {
                id: 'code',
                accessorKey: 'code',
                size: 100,
                header: () => <p className='column-title ml-2'>Code</p>,
                cell: ({ getValue }) => <Badge>{getValue<string>()}</Badge>
            },
            {
                id: 'name',
                accessorKey: 'name',
                size: 200,
                header: () => <p className='column-title'>Name</p>,
                cell: ({ getValue }) => <span className='text-foreground'>{getValue<string>()}</span>
            },
            {
                id: 'department',
                accessorKey: 'department',
                size: 150,
                header: () => <p className='column-title'>Department</p>,
                cell: ({ getValue }) => <Badge variant='secondary'>{getValue<string>()}</Badge>
            },
            {
                id: 'description',
                accessorKey: 'description',
                size: 300,
                header: () => <p className='column-title'>Description</p>,
                cell: ({ getValue }) => <span className='truncateline-cramp-2'>{getValue<string>()}</span>
            },
        ], []),
        refineCoreProps:{
           resource: 'subjects',
           pagination: { pageSize: 10, mode: 'server' },
           filters: {
             permanent: [...departmentFilters, ...searchFilters],
           },
           sorters: {
             initial: [
                { field: 'id', order: 'desc'}
             ]
           }
        }
    });


    return (
        <ListView>
            <Breadcrumb></Breadcrumb>
            <h1 className='page-title'>Subjects</h1>

            <div className='intro-row'>
                <p>Quick access to essential metric and  management tools</p>

                <div className='action-row'>
                    <div className='search-field'>
                        <Search className='search-icon' />
                        <Input
                            type="text"
                            placeholder='Search'
                            className='pl-10 w-full'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />

                    </div>
                </div>
                <div className=' flex gap-2 w-full sm:w-auto'>
                    <Select
                        value={selectedDepartment}
                        onValueChange={setSelectedDepartment}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Filter by Department" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="all">All Departments</SelectItem>

                            {DEPARTMENT_OPTIONS.map((department) => (
                                <SelectItem key={department.value} value={department.value}>
                                    {department.label}
                                </SelectItem>
                            ))}
                        </SelectContent> 

                    </Select>
                    <CreateButton />
                </div>

            </div>

            <DataTable table={subjectTable} />
        </ListView>
    )
}

export default SubjectsList