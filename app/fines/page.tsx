"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, AlertTriangle, CheckCircle, Clock, ArrowLeft, Smartphone } from "lucide-react"
import Link from "next/link"

export default function FinesPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedFine, setSelectedFine] = useState<number | null>(null)

  const outstandingFines = [
    {
      id: 1,
      bookTitle: "Computer Networks",
      author: "Andrew S. Tanenbaum",
      dueDate: "2025-01-20",
      returnDate: null,
      daysOverdue: 1,
      fineAmount: 50,
      status: "Outstanding",
    },
    {
      id: 2,
      bookTitle: "Operating Systems",
      author: "William Stallings",
      dueDate: "2025-01-10",
      returnDate: "2025-01-15",
      daysOverdue: 5,
      fineAmount: 25,
      status: "Outstanding",
    },
  ]

  const paidFines = [
    {
      id: 3,
      bookTitle: "Data Structures and Algorithms",
      author: "Thomas H. Cormen",
      dueDate: "2024-12-15",
      returnDate: "2024-12-20",
      daysOverdue: 5,
      fineAmount: 25,
      paidDate: "2024-12-21",
      paymentMethod: "bKash",
      transactionId: "BKS123456789",
      status: "Paid",
    },
    {
      id: 4,
      bookTitle: "Computer Graphics",
      author: "Donald Hearn",
      dueDate: "2024-11-20",
      returnDate: "2024-11-25",
      daysOverdue: 5,
      fineAmount: 25,
      paidDate: "2024-11-26",
      paymentMethod: "Nagad",
      transactionId: "NGD987654321",
      status: "Paid",
    },
  ]

  const totalOutstanding = outstandingFines.reduce((sum, fine) => sum + fine.fineAmount, 0)

  const handlePayFine = (fineId: number) => {
    setSelectedFine(fineId)
    setShowPaymentModal(true)
  }

  const handlePaymentSubmit = () => {
    // Handle payment logic
    console.log("Processing payment for fine:", selectedFine)
    setShowPaymentModal(false)
    setSelectedFine(null)
    setSelectedPaymentMethod("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <CreditCard className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Fines & Payments</span>
            </Link>
            <nav className="flex space-x-4">
              <Link href="/my-books">
                <Button variant="ghost">My Books</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Fines & Payments</h1>
          <p className="text-gray-600">Manage your library fines and payment history</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Outstanding</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">৳{totalOutstanding}</div>
              <p className="text-xs text-muted-foreground">
                {outstandingFines.length} unpaid fine{outstandingFines.length !== 1 ? "s" : ""}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <CreditCard className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">৳75</div>
              <p className="text-xs text-muted-foreground">3 fines incurred</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Paid</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">৳50</div>
              <p className="text-xs text-muted-foreground">2 payments made</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Pay All */}
        {totalOutstanding > 0 && (
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-1">Outstanding Fines</h3>
                  <p className="text-red-700">
                    You have ৳{totalOutstanding} in unpaid fines. Pay now to avoid additional charges.
                  </p>
                </div>
                <Button
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => handlePayFine(0)} // 0 for pay all
                >
                  Pay All (৳{totalOutstanding})
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="outstanding" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="outstanding">Outstanding Fines ({outstandingFines.length})</TabsTrigger>
            <TabsTrigger value="history">Payment History ({paidFines.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="outstanding" className="space-y-6">
            {outstandingFines.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No outstanding fines</h3>
                  <p className="text-gray-500">You're all caught up with your payments!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {outstandingFines.map((fine) => (
                  <Card key={fine.id} className="border-red-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{fine.bookTitle}</h3>
                          <p className="text-gray-600 mb-3">by {fine.author}</p>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Due Date:</span>
                              <p className="text-gray-600">{fine.dueDate}</p>
                            </div>
                            <div>
                              <span className="font-medium">Days Overdue:</span>
                              <p className="text-red-600 font-medium">{fine.daysOverdue} days</p>
                            </div>
                            <div>
                              <span className="font-medium">Fine Amount:</span>
                              <p className="text-red-600 font-bold">৳{fine.fineAmount}</p>
                            </div>
                            <div>
                              <span className="font-medium">Status:</span>
                              <Badge variant="destructive">{fine.status}</Badge>
                            </div>
                          </div>

                          <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <p className="text-sm text-yellow-800">
                              <strong>Fine Calculation:</strong> ৳5 per day × {fine.daysOverdue} days = ৳
                              {fine.fineAmount}
                            </p>
                          </div>
                        </div>

                        <div className="ml-6">
                          <Button onClick={() => handlePayFine(fine.id)} className="bg-red-600 hover:bg-red-700">
                            Pay ৳{fine.fineAmount}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            {paidFines.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No payment history</h3>
                  <p className="text-gray-500">Your payment history will appear here</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {paidFines.map((fine) => (
                  <Card key={fine.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{fine.bookTitle}</h3>
                          <p className="text-gray-600 mb-3">by {fine.author}</p>

                          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Due Date:</span>
                              <p className="text-gray-600">{fine.dueDate}</p>
                            </div>
                            <div>
                              <span className="font-medium">Paid Date:</span>
                              <p className="text-gray-600">{fine.paidDate}</p>
                            </div>
                            <div>
                              <span className="font-medium">Amount:</span>
                              <p className="text-green-600 font-medium">৳{fine.fineAmount}</p>
                            </div>
                            <div>
                              <span className="font-medium">Method:</span>
                              <p className="text-gray-600">{fine.paymentMethod}</p>
                            </div>
                            <div>
                              <span className="font-medium">Transaction ID:</span>
                              <p className="text-gray-600 font-mono text-xs">{fine.transactionId}</p>
                            </div>
                          </div>
                        </div>

                        <div className="ml-6">
                          <Badge variant="secondary">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Paid
                          </Badge>
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

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Pay Fine</CardTitle>
              <CardDescription>
                {selectedFine === 0 ? `Pay all outstanding fines (৳${totalOutstanding})` : `Pay fine for selected book`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Payment Method</label>
                  <Select value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bkash">
                        <div className="flex items-center space-x-2">
                          <Smartphone className="h-4 w-4" />
                          <span>bKash</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="nagad">
                        <div className="flex items-center space-x-2">
                          <Smartphone className="h-4 w-4" />
                          <span>Nagad</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="rocket">
                        <div className="flex items-center space-x-2">
                          <Smartphone className="h-4 w-4" />
                          <span>Rocket</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Payment Instructions:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• You will be redirected to the payment gateway</li>
                    <li>• Complete the payment using your mobile banking app</li>
                    <li>• Keep the transaction ID for your records</li>
                    <li>• Payment confirmation may take a few minutes</li>
                  </ul>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1" onClick={handlePaymentSubmit} disabled={!selectedPaymentMethod}>
                    Proceed to Payment
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => {
                      setShowPaymentModal(false)
                      setSelectedFine(null)
                      setSelectedPaymentMethod("")
                    }}
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
