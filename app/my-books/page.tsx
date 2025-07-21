"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Clock, AlertTriangle, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MyBooksPage() {
  const [selectedBook, setSelectedBook] = useState<number | null>(null)

  const borrowedBooks = [
    {
      id: 1,
      title: "Database Management Systems",
      author: "Raghu Ramakrishnan",
      borrowDate: "2025-01-15",
      dueDate: "2025-02-15",
      daysLeft: 25,
      renewable: true,
      renewCount: 0,
      maxRenewals: 2,
    },
    {
      id: 2,
      title: "Software Engineering",
      author: "Ian Sommerville",
      borrowDate: "2025-01-10",
      dueDate: "2025-02-10",
      daysLeft: 20,
      renewable: true,
      renewCount: 1,
      maxRenewals: 2,
    },
    {
      id: 3,
      title: "Computer Networks",
      author: "Andrew S. Tanenbaum",
      borrowDate: "2024-12-20",
      dueDate: "2025-01-20",
      daysLeft: -1,
      renewable: false,
      renewCount: 2,
      maxRenewals: 2,
      overdue: true,
    },
  ]

  const preBookedBooks = [
    {
      id: 4,
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell",
      requestDate: "2025-01-18",
      status: "Ready for pickup",
      expiresIn: "18 hours",
      location: "Section B, Counter 2",
    },
    {
      id: 5,
      title: "Operating System Concepts",
      author: "Abraham Silberschatz",
      requestDate: "2025-01-17",
      status: "In queue",
      position: 2,
      estimatedAvailable: "2025-01-25",
    },
  ]

  const bookHistory = [
    {
      id: 6,
      title: "Data Structures and Algorithms",
      author: "Thomas H. Cormen",
      borrowDate: "2024-11-15",
      returnDate: "2024-12-15",
      status: "Returned on time",
    },
    {
      id: 7,
      title: "Computer Graphics",
      author: "Donald Hearn",
      borrowDate: "2024-10-20",
      returnDate: "2024-11-25",
      status: "Returned late",
      fine: 25,
    },
  ]

  const handleRenewBook = (bookId: number) => {
    // Handle book renewal logic
    console.log("Renewing book:", bookId)
  }

  const getDaysLeftColor = (daysLeft: number) => {
    if (daysLeft < 0) return "destructive"
    if (daysLeft <= 3) return "destructive"
    if (daysLeft <= 7) return "default"
    return "secondary"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">My Books</span>
            </Link>
            <nav className="flex space-x-4">
              <Link href="/books">
                <Button variant="ghost">Browse Books</Button>
              </Link>
              <Link href="/fines">
                <Button variant="ghost">Fines</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Books</h1>
          <p className="text-gray-600">Manage your borrowed books, pre-bookings, and reading history</p>
        </div>

        <Tabs defaultValue="borrowed" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="borrowed">Borrowed Books ({borrowedBooks.length})</TabsTrigger>
            <TabsTrigger value="prebooked">Pre-booked ({preBookedBooks.length})</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="borrowed" className="space-y-6">
            {borrowedBooks.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No borrowed books</h3>
                  <p className="text-gray-500 mb-4">You haven't borrowed any books yet</p>
                  <Link href="/books">
                    <Button>Browse Books</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {borrowedBooks.map((book) => (
                  <Card key={book.id} className={book.overdue ? "border-red-200 bg-red-50" : ""}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{book.title}</h3>
                          <p className="text-gray-600 mb-3">by {book.author}</p>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Borrowed:</span>
                              <p className="text-gray-600">{book.borrowDate}</p>
                            </div>
                            <div>
                              <span className="font-medium">Due Date:</span>
                              <p className="text-gray-600">{book.dueDate}</p>
                            </div>
                            <div>
                              <span className="font-medium">Status:</span>
                              <Badge variant={getDaysLeftColor(book.daysLeft)}>
                                {book.overdue ? "Overdue" : `${book.daysLeft} days left`}
                              </Badge>
                            </div>
                            <div>
                              <span className="font-medium">Renewals:</span>
                              <p className="text-gray-600">
                                {book.renewCount}/{book.maxRenewals}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="ml-6 flex flex-col space-y-2">
                          {book.renewable && !book.overdue ? (
                            <Button size="sm" onClick={() => handleRenewBook(book.id)}>
                              Renew Book
                            </Button>
                          ) : (
                            <Button size="sm" disabled>
                              {book.overdue ? "Overdue" : "Max Renewals"}
                            </Button>
                          )}

                          {book.overdue && (
                            <Link href="/fines">
                              <Button size="sm" variant="destructive">
                                Pay Fine
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>

                      {book.overdue && (
                        <div className="mt-4 p-3 bg-red-100 border border-red-200 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <AlertTriangle className="h-4 w-4 text-red-600" />
                            <span className="text-sm font-medium text-red-800">
                              This book is overdue. Please return it immediately to avoid additional fines.
                            </span>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="prebooked" className="space-y-6">
            {preBookedBooks.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No pre-booked books</h3>
                  <p className="text-gray-500 mb-4">You haven't pre-booked any books yet</p>
                  <Link href="/books">
                    <Button>Browse Books</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {preBookedBooks.map((book) => (
                  <Card key={book.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{book.title}</h3>
                          <p className="text-gray-600 mb-3">by {book.author}</p>

                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Requested:</span>
                              <p className="text-gray-600">{book.requestDate}</p>
                            </div>
                            <div>
                              <span className="font-medium">Status:</span>
                              <Badge variant={book.status === "Ready for pickup" ? "default" : "secondary"}>
                                {book.status}
                              </Badge>
                            </div>
                            {book.status === "Ready for pickup" ? (
                              <div>
                                <span className="font-medium">Expires in:</span>
                                <p className="text-red-600 font-medium">{book.expiresIn}</p>
                              </div>
                            ) : (
                              <div>
                                <span className="font-medium">Position:</span>
                                <p className="text-gray-600">#{book.position} in queue</p>
                              </div>
                            )}
                          </div>

                          {book.status === "Ready for pickup" && (
                            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span className="text-sm text-green-800">Ready for pickup at {book.location}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="ml-6">
                          {book.status === "Ready for pickup" ? (
                            <Button size="sm">Confirm Pickup</Button>
                          ) : (
                            <Button size="sm" variant="outline">
                              Cancel Request
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            {bookHistory.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No reading history</h3>
                  <p className="text-gray-500">Your reading history will appear here</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {bookHistory.map((book) => (
                  <Card key={book.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{book.title}</h3>
                          <p className="text-gray-600 mb-3">by {book.author}</p>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Borrowed:</span>
                              <p className="text-gray-600">{book.borrowDate}</p>
                            </div>
                            <div>
                              <span className="font-medium">Returned:</span>
                              <p className="text-gray-600">{book.returnDate}</p>
                            </div>
                            <div>
                              <span className="font-medium">Status:</span>
                              <Badge variant={book.status === "Returned on time" ? "secondary" : "destructive"}>
                                {book.status}
                              </Badge>
                            </div>
                            {book.fine && (
                              <div>
                                <span className="font-medium">Fine Paid:</span>
                                <p className="text-red-600">৳{book.fine}</p>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="ml-6">
                          <Link href={`/books/${book.id}`}>
                            <Button size="sm" variant="outline">
                              View Book
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
