import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Clock, CreditCard, FileText, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/images/cuet-logo.png" alt="CUET Logo" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold text-gray-900">CUET Library</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">CUET Library Management System</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A smart, automated, and data-driven system that manages books, members, loans, and administrative tasks
            seamlessly. Save time, reduce crowding, and enhance your library experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/books">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Browse Books
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Search className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Book Pre-booking</CardTitle>
                <CardDescription>
                  Reserve books online before visiting the library, ensuring availability when you need them most.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Notes Sharing</CardTitle>
                <CardDescription>
                  Upload and download study notes in PDF format to help fellow students understand topics better.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Book Availability</CardTitle>
                <CardDescription>
                  Check real-time availability of books before visiting the library to save time and effort.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CreditCard className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Online Fine Payment</CardTitle>
                <CardDescription>
                  Pay library fines digitally through mobile banking without visiting the bank or standing in queues.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-orange-600 mb-2" />
                <CardTitle>Book Renewal</CardTitle>
                <CardDescription>
                  Renew your borrowed books online monthly without visiting the library counter.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-teal-600 mb-2" />
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Role-based access for students and librarians with secure and efficient information handling.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What's New?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the latest features that make your library experience smarter and more convenient
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <FileText className="h-10 w-10 text-yellow-300 mb-2" />
                <CardTitle className="text-white">Book-Related Notes</CardTitle>
                <CardDescription className="text-blue-100">
                  Upload and download study notes for any book. Share knowledge with fellow students.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CreditCard className="h-10 w-10 text-green-300 mb-2" />
                <CardTitle className="text-white">Online Fine Payment</CardTitle>
                <CardDescription className="text-blue-100">
                  Pay library fines instantly using bKash, Nagad, or Rocket. No more bank visits!
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Clock className="h-10 w-10 text-orange-300 mb-2" />
                <CardTitle className="text-white">Online Book Renewal</CardTitle>
                <CardDescription className="text-blue-100">
                  Renew your borrowed books online without visiting the library counter.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Search className="h-10 w-10 text-purple-300 mb-2" />
                <CardTitle className="text-white">Book Pre-booking</CardTitle>
                <CardDescription className="text-blue-100">
                  Reserve books online before visiting. Guaranteed availability when you need them.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">New Arrivals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check out the latest books added to our collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <img
                  src="/placeholder.svg?height=200&width=150"
                  alt="Artificial Intelligence: A Modern Approach"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-lg line-clamp-2">Artificial Intelligence: A Modern Approach</CardTitle>
                <CardDescription>Stuart Russell & Peter Norvig</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">CSE</Badge>
                  <Badge variant="secondary">4th Edition</Badge>
                  <p className="text-sm text-gray-600">Added: Jan 18, 2025</p>
                  <Button className="w-full" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <img
                  src="/placeholder.svg?height=200&width=150"
                  alt="Pattern Recognition and Machine Learning"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-lg line-clamp-2">Pattern Recognition and Machine Learning</CardTitle>
                <CardDescription>Christopher Bishop</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">CSE</Badge>
                  <Badge variant="secondary">New Edition</Badge>
                  <p className="text-sm text-gray-600">Added: Jan 16, 2025</p>
                  <Button className="w-full" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <img
                  src="/placeholder.svg?height=200&width=150"
                  alt="Renewable Energy Engineering"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-lg line-clamp-2">Renewable Energy Engineering</CardTitle>
                <CardDescription>Nicholas Jenkins</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">EEE</Badge>
                  <Badge variant="secondary">Latest</Badge>
                  <p className="text-sm text-gray-600">Added: Jan 15, 2025</p>
                  <Button className="w-full" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <img
                  src="/placeholder.svg?height=200&width=150"
                  alt="Advanced Materials and Manufacturing"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-lg line-clamp-2">Advanced Materials and Manufacturing</CardTitle>
                <CardDescription>Mikell P. Groover</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">ME</Badge>
                  <Badge variant="secondary">6th Edition</Badge>
                  <p className="text-sm text-gray-600">Added: Jan 14, 2025</p>
                  <Button className="w-full" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/books">
              <Button size="lg" variant="outline" className="bg-transparent">
                View All New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Books Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">1,000+</div>
              <div className="text-gray-600">Study Notes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Online Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6" />
                <span className="text-lg font-semibold">CUET Library</span>
              </div>
              <p className="text-gray-400">
                Chittagong University of Engineering and Technology
                <br />
                Chattogram-4349, Bangladesh
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/books" className="hover:text-white">
                    Browse Books
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-white">
                    Student Login
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="hover:text-white">
                    Admin Portal
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help & Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: library@cuet.ac.bd
                <br />
                Phone: +880-31-714946
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CUET Library Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
