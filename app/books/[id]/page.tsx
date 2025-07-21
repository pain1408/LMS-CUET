"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Star, Download, Upload, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BookDetailsPage({ params }: { params: { id: string } }) {
  const [showPreBookModal, setShowPreBookModal] = useState(false)

  // Mock book data - in real app, fetch based on params.id
  const book = {
    id: 1,
    title: "Database Management Systems",
    author: "Raghu Ramakrishnan",
    isbn: "978-0072465631",
    publisher: "McGraw-Hill Education",
    edition: "3rd Edition",
    year: 2003,
    pages: 1065,
    department: "CSE",
    category: "Textbook",
    available: 3,
    total: 5,
    rating: 4.5,
    description:
      "Database Management Systems provides comprehensive and up-to-date coverage of the fundamentals of database systems. Coherent explanations and practical examples have made this one of the leading texts in the field.",
    image: "/placeholder.svg?height=400&width=300",
    location: "Section A, Shelf 15",
    tags: ["Database", "SQL", "DBMS", "Computer Science"],
  }

  const notes = [
    {
      id: 1,
      title: "Chapter 1-3 Summary Notes",
      author: "Md. Zubayer Muntasir",
      uploadDate: "2025-01-10",
      downloads: 45,
      rating: 4.8,
    },
    {
      id: 2,
      title: "SQL Query Examples",
      author: "Md. Sazid Hossan",
      uploadDate: "2025-01-08",
      downloads: 32,
      rating: 4.6,
    },
    {
      id: 3,
      title: "ER Diagram Practice Problems",
      author: "Md. Fakhrul Hasan",
      uploadDate: "2025-01-05",
      downloads: 28,
      rating: 4.4,
    },
  ]

  const reviews = [
    {
      id: 1,
      author: "Mohammad Hasan",
      rating: 5,
      date: "2025-01-12",
      comment: "Excellent book for understanding database concepts. Very comprehensive coverage.",
    },
    {
      id: 2,
      author: "Zubayer Muntasir",
      rating: 4,
      date: "2025-01-10",
      comment: "Good theoretical foundation, but could use more practical examples.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/books" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Back to Catalog</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Book Image and Quick Actions */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <img
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Availability:</span>
                    <Badge variant={book.available > 0 ? "default" : "destructive"}>
                      {book.available}/{book.total} Available
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Location:</span>
                    <span className="text-sm text-gray-600">{book.location}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{book.rating}</span>
                    <span className="text-sm text-gray-500">(24 reviews)</span>
                  </div>

                  <div className="space-y-2">
                    {book.available > 0 ? (
                      <>
                        <Button className="w-full" onClick={() => setShowPreBookModal(true)}>
                          Pre-book This Book
                        </Button>
                        <Button variant="outline" className="w-full bg-transparent">
                          Add to Wishlist
                        </Button>
                      </>
                    ) : (
                      <Button disabled className="w-full">
                        Currently Unavailable
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Book Details and Tabs */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-4">by {book.author}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">{book.department}</Badge>
                <Badge variant="secondary">{book.category}</Badge>
                {book.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="notes">Notes ({notes.length})</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="similar">Similar Books</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Book Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-medium">ISBN:</span>
                        <p className="text-gray-600">{book.isbn}</p>
                      </div>
                      <div>
                        <span className="font-medium">Publisher:</span>
                        <p className="text-gray-600">{book.publisher}</p>
                      </div>
                      <div>
                        <span className="font-medium">Edition:</span>
                        <p className="text-gray-600">{book.edition}</p>
                      </div>
                      <div>
                        <span className="font-medium">Year:</span>
                        <p className="text-gray-600">{book.year}</p>
                      </div>
                      <div>
                        <span className="font-medium">Pages:</span>
                        <p className="text-gray-600">{book.pages}</p>
                      </div>
                      <div>
                        <span className="font-medium">Department:</span>
                        <p className="text-gray-600">{book.department}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{book.description}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Study Notes</h3>
                  <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Notes
                  </Button>
                </div>

                {notes.map((note) => (
                  <Card key={note.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{note.title}</h4>
                          <p className="text-sm text-gray-600">
                            by {note.author} • {note.uploadDate}
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center space-x-1">
                              <Download className="h-3 w-3" />
                              <span className="text-xs">{note.downloads} downloads</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs">{note.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Student Reviews</h3>
                  <Button variant="outline">Write Review</Button>
                </div>

                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{review.author}</h4>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="similar">
                <Card>
                  <CardHeader>
                    <CardTitle>Similar Books</CardTitle>
                    <CardDescription>Other books you might be interested in</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">
                      Similar books will be displayed here based on category, author, and tags.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Pre-book Modal */}
      {showPreBookModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Pre-book Confirmation</CardTitle>
              <CardDescription>You are about to pre-book "{book.title}"</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Pre-booking Terms:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Book will be reserved for 24 hours</li>
                    <li>• Pick up from library counter within this time</li>
                    <li>• Bring your student ID for verification</li>
                  </ul>
                </div>

                <div className="flex space-x-2">
                  <Button
                    className="flex-1"
                    onClick={() => {
                      setShowPreBookModal(false)
                      // Handle pre-booking logic
                    }}
                  >
                    Confirm Pre-booking
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => setShowPreBookModal(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
