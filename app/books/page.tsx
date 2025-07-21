"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Search, Star, User } from "lucide-react"
import Link from "next/link"

export default function BooksPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const books = [
    {
      id: 1,
      title: "Database Management Systems",
      author: "Raghu Ramakrishnan",
      isbn: "978-0072465631",
      department: "CSE",
      category: "Textbook",
      available: 3,
      total: 5,
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 2,
      title: "Software Engineering",
      author: "Ian Sommerville",
      isbn: "978-0133943030",
      department: "CSE",
      category: "Textbook",
      available: 0,
      total: 4,
      rating: 4.3,
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 3,
      title: "Computer Networks",
      author: "Andrew S. Tanenbaum",
      isbn: "978-0132126953",
      department: "CSE",
      category: "Textbook",
      available: 2,
      total: 3,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 4,
      title: "Digital Signal Processing",
      author: "John G. Proakis",
      isbn: "978-0131873742",
      department: "EEE",
      category: "Reference",
      available: 1,
      total: 2,
      rating: 4.2,
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 5,
      title: "Thermodynamics",
      author: "Yunus A. Cengel",
      isbn: "978-0073398174",
      department: "ME",
      category: "Textbook",
      available: 4,
      total: 6,
      rating: 4.4,
      image: "/placeholder.svg?height=200&width=150",
    },
    {
      id: 6,
      title: "Structural Analysis",
      author: "Russell C. Hibbeler",
      isbn: "978-0134610672",
      department: "CE",
      category: "Textbook",
      available: 2,
      total: 4,
      rating: 4.1,
      image: "/placeholder.svg?height=200&width=150",
    },
  ]

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDepartment = selectedDepartment === "all" || book.department === selectedDepartment
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory

    return matchesSearch && matchesDepartment && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">CUET Library</span>
            </Link>
            <nav className="flex space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link href="/my-books">
                <Button variant="ghost">My Books</Button>
              </Link>
              <Link href="/notes">
                <Button variant="ghost">Notes</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Library Catalog</h1>
          <p className="text-gray-600">Search and discover books from our extensive collection</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search Books</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Search by title, author, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger>
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="CSE">Computer Science & Engineering</SelectItem>
                  <SelectItem value="EEE">Electrical & Electronic Engineering</SelectItem>
                  <SelectItem value="ME">Mechanical Engineering</SelectItem>
                  <SelectItem value="CE">Civil Engineering</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Textbook">Textbook</SelectItem>
                  <SelectItem value="Reference">Reference</SelectItem>
                  <SelectItem value="Research">Research</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredBooks.length} of {books.length} books
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <Card key={book.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex space-x-4">
                  <img
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    className="w-16 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
                    <CardDescription className="flex items-center space-x-1 mt-1">
                      <User className="h-3 w-3" />
                      <span>{book.author}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{book.department}</Badge>
                    <Badge variant="secondary">{book.category}</Badge>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{book.rating}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span>
                      Available: {book.available}/{book.total}
                    </span>
                    <span className="text-gray-500">ISBN: {book.isbn}</span>
                  </div>

                  <div className="flex space-x-2">
                    <Link href={`/books/${book.id}`} className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent">
                        View Details
                      </Button>
                    </Link>
                    {book.available > 0 ? (
                      <Button className="flex-1">Pre-book</Button>
                    ) : (
                      <Button disabled className="flex-1">
                        Not Available
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No books found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
