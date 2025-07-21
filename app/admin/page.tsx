"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, FileText, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const stats = {
    totalBooks: 10247,
    availableBooks: 8932,
    borrowedBooks: 1315,
    totalStudents: 5432,
    activeStudents: 3876,
    pendingFines: 125,
    totalFines: 15750,
    notesUploaded: 1234,
    pendingNotes: 23
  }

  const recentActivity = [
    { action: 'Book Added', details: 'Artificial Intelligence: A Modern Approach', time: '2 hours ago' },
    { action: 'Student Registered', details: 'Fatima Rahman (2204089)', time: '3 hours ago' },
    { action: 'Fine Paid', details: '৳50 by Mohammad Hasan', time: '5 hours ago' },
    { action: 'Book Returned', details: 'Database Management Systems', time: '6 hours ago' },
  ]

  const overdueBooks = [
    { student: 'Mohammad Hasan', book: 'Computer Networks', daysOverdue: 5, fine: 25 },
    { student: 'Zubayer Muntasir', book: 'Operating Systems', daysOverdue: 3, fine: 15 },
    { student: 'Sazid Hossan', book: 'Software Engineering', daysOverdue: 8, fine: 40 },
  ]

  const pendingNotes = [
    { title: 'Machine Learning Algorithms', author: 'Ahmed Hassan', uploadDate: '2025-01-18' },
    { title: 'Circuit Analysis Notes', author: 'Fatima Rahman', uploadDate: '2025-01-17' },
    { title: 'Structural Design Principles', author: 'Karim Abdullah', uploadDate: '2025-01-16' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">CUET Library Admin</span>
            </div>
            <nav className="flex space-x-4">
              <Link href="/admin/books">
                <Button variant="ghost">Books</Button>
              </Link>
              <Link href="/admin/students">
                <Button variant="ghost">Students</Button>
              </Link>
              <Link href="/admin/reports">
                <Button variant="ghost">Reports</Button>
              </Link>
              <Link href="/admin/notes">
                <Button variant="ghost">Notes</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, Sharmistha Chandra Tista</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Books</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalBooks.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {stats.availableBooks.toLocaleString()} available
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeStudents.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                of {stats.totalStudents.toLocaleString()} registered
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Fines</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">৳{stats.totalFines.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {stats.pendingFines} students
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Notes</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.notesUploaded.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {stats.pendingNotes} pending review
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Link href="/admin/books/add">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-\
