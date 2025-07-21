"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, CreditCard, FileText, Search, Bell, User } from "lucide-react"
import Link from "next/link"

export default function StudentDashboard() {
  const recentActivity = [
    { action: "Borrowed", book: "Database Management Systems", date: "2025-01-15" },
    { action: "Renewed", book: "Software Engineering", date: "2025-01-14" },
    { action: "Returned", book: "Computer Networks", date: "2025-01-12" },
  ]

  const upcomingDueDates = [
    { book: "Database Management Systems", dueDate: "2025-02-15", daysLeft: 25 },
    { book: "Software Engineering", dueDate: "2025-02-20", daysLeft: 30 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">CUET Library</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Mohammad Hasan!</h1>
          <p className="text-gray-600">Student ID: 2204054 | Department: Computer Science & Engineering</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Books Borrowed</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 due soon</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Outstanding Fines</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">৳50</div>
              <p className="text-xs text-muted-foreground">1 overdue book</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Notes Uploaded</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pre-bookings</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">Ready for pickup</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Search Books</span>
              </CardTitle>
              <CardDescription>Find and pre-book your next read</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/books">
                <Button className="w-full">Browse Library</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>My Books</span>
              </CardTitle>
              <CardDescription>Manage your borrowed books</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/my-books">
                <Button className="w-full bg-transparent" variant="outline">
                  View Books
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Pay Fines</span>
              </CardTitle>
              <CardDescription>Clear your outstanding dues</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/fines">
                <Button className="w-full bg-transparent" variant="outline">
                  Pay Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest library transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{activity.book}</p>
                      <p className="text-sm text-gray-500">
                        {activity.action} on {activity.date}
                      </p>
                    </div>
                    <Badge variant={activity.action === "Borrowed" ? "default" : "secondary"}>{activity.action}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Due Dates */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Due Dates</CardTitle>
              <CardDescription>Books that need to be returned soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingDueDates.map((book, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{book.book}</p>
                      <p className="text-sm text-gray-500">Due: {book.dueDate}</p>
                    </div>
                    <Badge variant={book.daysLeft <= 7 ? "destructive" : "default"}>{book.daysLeft} days left</Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/my-books">
                  <Button variant="outline" className="w-full bg-transparent">
                    Renew Books
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
