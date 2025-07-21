"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Upload, Download, Search, Star, ArrowLeft, Eye } from "lucide-react"
import Link from "next/link"

export default function NotesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [showUploadModal, setShowUploadModal] = useState(false)

  const allNotes = [
    {
      id: 1,
      title: "Database Management Systems - Chapter 1-3 Summary",
      description: "Comprehensive notes covering introduction to DBMS, ER modeling, and relational model",
      author: "Md. Zubayer Muntasir",
      authorId: "2204058",
      department: "CSE",
      subject: "Database Management Systems",
      uploadDate: "2025-01-15",
      downloads: 45,
      rating: 4.8,
      fileSize: "2.3 MB",
      pages: 15,
      bookTitle: "Database Management Systems",
      bookAuthor: "Raghu Ramakrishnan",
    },
    {
      id: 2,
      title: "SQL Query Examples and Practice Problems",
      description: "Collection of SQL queries with explanations and practice exercises",
      author: "Md. Sazid Hossan",
      authorId: "2204065",
      department: "CSE",
      subject: "Database Management Systems",
      uploadDate: "2025-01-12",
      downloads: 32,
      rating: 4.6,
      fileSize: "1.8 MB",
      pages: 12,
      bookTitle: "Database Management Systems",
      bookAuthor: "Raghu Ramakrishnan",
    },
    {
      id: 3,
      title: "Software Engineering - SDLC Models",
      description: "Detailed notes on different software development life cycle models",
      author: "Mohammad Hasan",
      authorId: "2204054",
      department: "CSE",
      subject: "Software Engineering",
      uploadDate: "2025-01-10",
      downloads: 28,
      rating: 4.4,
      fileSize: "3.1 MB",
      pages: 20,
      bookTitle: "Software Engineering",
      bookAuthor: "Ian Sommerville",
    },
    {
      id: 4,
      title: "Digital Signal Processing - Fourier Transform",
      description: "Mathematical concepts and applications of Fourier Transform in DSP",
      author: "Fatima Rahman",
      authorId: "2204089",
      department: "EEE",
      subject: "Digital Signal Processing",
      uploadDate: "2025-01-08",
      downloads: 22,
      rating: 4.7,
      fileSize: "2.7 MB",
      pages: 18,
      bookTitle: "Digital Signal Processing",
      bookAuthor: "John G. Proakis",
    },
    {
      id: 5,
      title: "Thermodynamics - First and Second Law",
      description: "Comprehensive study notes on the fundamental laws of thermodynamics",
      author: "Ahmed Hassan",
      authorId: "2204123",
      department: "ME",
      subject: "Thermodynamics",
      uploadDate: "2025-01-05",
      downloads: 35,
      rating: 4.5,
      fileSize: "4.2 MB",
      pages: 25,
      bookTitle: "Thermodynamics",
      bookAuthor: "Yunus A. Cengel",
    },
  ]

  const myNotes = [
    {
      id: 1,
      title: "Software Engineering - SDLC Models",
      description: "Detailed notes on different software development life cycle models",
      uploadDate: "2025-01-10",
      downloads: 28,
      rating: 4.4,
      status: "Published",
    },
    {
      id: 6,
      title: "Computer Networks - OSI Model",
      description: "Layer-by-layer explanation of the OSI reference model",
      uploadDate: "2025-01-03",
      downloads: 15,
      rating: 4.2,
      status: "Under Review",
    },
  ]

  const filteredNotes = allNotes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.subject.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDepartment = selectedDepartment === "all" || note.department === selectedDepartment
    const matchesSubject = selectedSubject === "all" || note.subject === selectedSubject

    return matchesSearch && matchesDepartment && matchesSubject
  })

  const handleDownload = (noteId: number) => {
    // Handle note download logic
    console.log("Downloading note:", noteId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Study Notes</span>
            </Link>
            <nav className="flex space-x-4">
              <Button onClick={() => setShowUploadModal(true)}>
                <Upload className="h-4 w-4 mr-2" />
                Upload Notes
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Notes</h1>
          <p className="text-gray-600">Share and discover study materials from fellow students</p>
        </div>

        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="browse">Browse Notes ({allNotes.length})</TabsTrigger>
            <TabsTrigger value="my-notes">My Notes ({myNotes.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Search Notes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    placeholder="Search by title, subject, or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
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
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger>
                      <SelectValue placeholder="Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Subjects</SelectItem>
                      <SelectItem value="Database Management Systems">Database Management Systems</SelectItem>
                      <SelectItem value="Software Engineering">Software Engineering</SelectItem>
                      <SelectItem value="Digital Signal Processing">Digital Signal Processing</SelectItem>
                      <SelectItem value="Thermodynamics">Thermodynamics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Results Summary */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredNotes.length} of {allNotes.length} notes
              </p>
            </div>

            {/* Notes Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredNotes.map((note) => (
                <Card key={note.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-2 mb-2">{note.title}</CardTitle>
                        <CardDescription className="line-clamp-2 mb-3">{note.description}</CardDescription>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{note.department}</Badge>
                      <Badge variant="secondary">{note.subject}</Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-sm text-gray-600">
                        <p>
                          <strong>Book:</strong> {note.bookTitle} by {note.bookAuthor}
                        </p>
                        <p>
                          <strong>Author:</strong> {note.author} ({note.authorId})
                        </p>
                        <p>
                          <strong>Uploaded:</strong> {note.uploadDate}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Download className="h-3 w-3" />
                            <span>{note.downloads}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{note.rating}</span>
                          </div>
                          <span>{note.fileSize}</span>
                          <span>{note.pages} pages</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1" onClick={() => handleDownload(note.id)}>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredNotes.length === 0 && (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No notes found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="my-notes" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">My Uploaded Notes</h3>
              <Button onClick={() => setShowUploadModal(true)}>
                <Upload className="h-4 w-4 mr-2" />
                Upload New Notes
              </Button>
            </div>

            {myNotes.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No notes uploaded</h3>
                  <p className="text-gray-500 mb-4">Share your study materials with fellow students</p>
                  <Button onClick={() => setShowUploadModal(true)}>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Your First Notes
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {myNotes.map((note) => (
                  <Card key={note.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{note.title}</h3>
                          <p className="text-gray-600 mb-3">{note.description}</p>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Uploaded:</span>
                              <p className="text-gray-600">{note.uploadDate}</p>
                            </div>
                            <div>
                              <span className="font-medium">Downloads:</span>
                              <p className="text-gray-600">{note.downloads}</p>
                            </div>
                            <div>
                              <span className="font-medium">Rating:</span>
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-gray-600">{note.rating}</span>
                              </div>
                            </div>
                            <div>
                              <span className="font-medium">Status:</span>
                              <Badge variant={note.status === "Published" ? "default" : "secondary"}>
                                {note.status}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="ml-6 flex space-x-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            Delete
                          </Button>
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

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Upload Study Notes</CardTitle>
              <CardDescription>Share your study materials with fellow students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Title</label>
                    <Input placeholder="Enter note title" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Subject</label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dbms">Database Management Systems</SelectItem>
                        <SelectItem value="se">Software Engineering</SelectItem>
                        <SelectItem value="dsp">Digital Signal Processing</SelectItem>
                        <SelectItem value="thermo">Thermodynamics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Description</label>
                  <textarea
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    rows={3}
                    placeholder="Describe what your notes cover..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Related Book</label>
                    <Input placeholder="Book title (optional)" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Book Author</label>
                    <Input placeholder="Author name (optional)" className="mt-1" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Upload File</label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Drag and drop your PDF file here, or click to browse</p>
                    <p className="text-xs text-gray-500 mt-1">Maximum file size: 10MB</p>
                    <Button variant="outline" className="mt-2 bg-transparent">
                      Choose File
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Upload Guidelines:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Only PDF files are accepted</li>
                    <li>• Ensure content is original or properly attributed</li>
                    <li>• Notes will be reviewed before publication</li>
                    <li>• Inappropriate content will be removed</li>
                  </ul>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1">Upload Notes</Button>
                  <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowUploadModal(false)}>
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
