"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search, Filter, ShoppingBag, Truck, CreditCard, Award, ChevronDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard, type Product } from "@/components/shop/product-card"
import { useLanguage } from "@/lib/language-context"
import { AipanBorder, MountainDivider, TempleArch } from "@/components/decorative-elements"

// Mock product data
const products: Product[] = [
  {
    id: "1",
    name: "Handwoven Garhwali Shawl",
    nameHi: "हस्तनिर्मित गढ़वाली शॉल",
    price: 2499,
    originalPrice: 2999,
    image:
      "https://images.unsplash.com/photo-1606913419164-a8097587e1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 4.8,
    reviews: 124,
    category: "Clothing",
    categoryHi: "वस्त्र",
    seller: "Himalayan Handlooms",
    sellerHi: "हिमालयन हैंडलूम्स",
    location: "Chamoli",
    locationHi: "चमोली",
    isHandmade: true,
    isFeatured: true,
    isSale: true,
    salePercentage: 17,
  },
  {
    id: "2",
    name: "Aipan Art Wall Hanging",
    nameHi: "ऐपण कला दीवार सजावट",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 4.7,
    reviews: 89,
    category: "Home Decor",
    categoryHi: "घर सजावट",
    seller: "Kumaon Crafts",
    sellerHi: "कुमाऊँ क्राफ्ट्स",
    location: "Almora",
    locationHi: "अल्मोड़ा",
    isHandmade: true,
    isNew: true,
  },
  {
    id: "3",
    name: "Ringal Bamboo Basket Set",
    nameHi: "रिंगाल बांस टोकरी सेट",
    price: 899,
    originalPrice: 1199,
    image:
      "https://images.unsplash.com/photo-1595408076683-6b5b77a3cf58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 4.5,
    reviews: 67,
    category: "Handicrafts",
    categoryHi: "हस्तशिल्प",
    seller: "Uttarakhand Artisans",
    sellerHi: "उत्तराखंड आर्टिसन्स",
    location: "Pithoragarh",
    locationHi: "पिथौरागढ़",
    isHandmade: true,
    isSale: true,
    salePercentage: 25,
  },
  {
    id: "4",
    name: "Copper Water Bottle with Pahadi Engravings",
    nameHi: "पहाड़ी नक्काशी वाली तांबे की पानी की बोतल",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    rating: 4.9,
    reviews: 156,
    category: "Kitchenware",
    categoryHi: "रसोई के बर्तन",
    seller: "Devbhoomi Metals",
    sellerHi: "देवभूमि मेटल्स",
    location: "Dehradun",
    locationHi: "देहरादून",
    isFeatured: true,
  },
  {
    id: "5",
    name: "Organic Kumaoni Rajma (Kidney Beans)",
    nameHi: "जैविक कुमाऊँनी राजमा",
    price: 399,
    originalPrice: 499,
    image:
      "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 4.6,
    reviews: 203,
    category: "Food",
    categoryHi: "खाद्य पदार्थ",
    seller: "Himalayan Organics",
    sellerHi: "हिमालयन ऑर्गेनिक्स",
    location: "Munsyari",
    locationHi: "मुनस्यारी",
    isSale: true,
    salePercentage: 20,
  },
  {
    id: "6",
    name: "Handcrafted Wooden Mask",
    nameHi: "हस्तनिर्मित लकड़ी का मुखौटा",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 4.7,
    reviews: 42,
    category: "Art",
    categoryHi: "कला",
    seller: "Garhwal Woodcraft",
    sellerHi: "गढ़वाल वुडक्राफ्ट",
    location: "Tehri",
    locationHi: "टिहरी",
    isHandmade: true,
    isNew: true,
  },
  {
    id: "7",
    name: "Pahadi Honey Gift Box",
    nameHi: "पहाड़ी शहद गिफ्ट बॉक्स",
    price: 999,
    originalPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 4.9,
    reviews: 178,
    category: "Food",
    categoryHi: "खाद्य पदार्थ",
    seller: "Uttarakhand Apiaries",
    sellerHi: "उत्तराखंड एपिअरीज",
    location: "Nainital",
    locationHi: "नैनीताल",
    isFeatured: true,
    isSale: true,
    salePercentage: 23,
  },
  {
    id: "8",
    name: "Traditional Kumaoni Silver Jewelry Set",
    nameHi: "पारंपरिक कुमाऊँनी चांदी के गहने का सेट",
    price: 5999,
    originalPrice: 7499,
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 4.8,
    reviews: 64,
    category: "Jewelry",
    categoryHi: "आभूषण",
    seller: "Pahari Jewels",
    sellerHi: "पहाड़ी ज्वेल्स",
    location: "Bageshwar",
    locationHi: "बागेश्वर",
    isHandmade: true,
    isSale: true,
    salePercentage: 20,
  },
  {
    id: "9",
    name: "Uttarakhand Spice Collection",
    nameHi: "उत्तराखंड मसाला संग्रह",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 4.6,
    reviews: 112,
    category: "Food",
    categoryHi: "खाद्य पदार्थ",
    seller: "Mountain Flavors",
    sellerHi: "माउंटेन फ्लेवर्स",
    location: "Uttarkashi",
    locationHi: "उत्तरकाशी",
    isNew: true,
  },
  {
    id: "10",
    name: "Handmade Woolen Socks (Pack of 3)",
    nameHi: "हस्तनिर्मित ऊनी मोजे (3 का पैक)",
    price: 699,
    originalPrice: 899,
    image:
      "https://images.unsplash.com/photo-1576359877473-d92bc837facc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 4.5,
    reviews: 87,
    category: "Clothing",
    categoryHi: "वस्त्र",
    seller: "Himalayan Woolens",
    sellerHi: "हिमालयन वूलेन्स",
    location: "Chamoli",
    locationHi: "चमोली",
    isHandmade: true,
    isSale: true,
    salePercentage: 22,
  },
  {
    id: "11",
    name: "Pahadi Music Instruments Set",
    nameHi: "पहाड़ी संगीत वाद्ययंत्र सेट",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    rating: 4.7,
    reviews: 34,
    category: "Music",
    categoryHi: "संगीत",
    seller: "Devbhoomi Instruments",
    sellerHi: "देवभूमि इंस्ट्रूमेंट्स",
    location: "Pauri",
    locationHi: "पौड़ी",
    isHandmade: true,
    isFeatured: true,
  },
  {
    id: "12",
    name: "Uttarakhand Coffee Gift Set",
    nameHi: "उत्तराखंड कॉफी गिफ्ट सेट",
    price: 1199,
    originalPrice: 1499,
    image:
      "https://images.unsplash.com/photo-1559589689-577aabd1db4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    rating: 4.8,
    reviews: 56,
    category: "Food",
    categoryHi: "खाद्य पदार्थ",
    seller: "Himalayan Brews",
    sellerHi: "हिमालयन ब्रूज़",
    location: "Ranikhet",
    locationHi: "रानीखेत",
    isSale: true,
    salePercentage: 20,
  },
]

// Categories
const categories = [
  { id: "all", name: "All Products", nameHi: "सभी उत्पाद" },
  { id: "clothing", name: "Clothing", nameHi: "वस्त्र" },
  { id: "handicrafts", name: "Handicrafts", nameHi: "हस्तशिल्प" },
  { id: "food", name: "Food & Spices", nameHi: "खाद्य और मसाले" },
  { id: "home", name: "Home Decor", nameHi: "घर सजावट" },
  { id: "jewelry", name: "Jewelry", nameHi: "आभूषण" },
  { id: "music", name: "Music", nameHi: "संगीत" },
  { id: "art", name: "Art", nameHi: "कला" },
]

// Featured brands/shops
const featuredShops = [
  {
    id: "1",
    name: "Himalayan Handlooms",
    nameHi: "हिमालयन हैंडलूम्स",
    logo: "https://images.unsplash.com/photo-1490127252417-7c393f993ee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    location: "Chamoli",
    locationHi: "चमोली",
    rating: 4.8,
    productCount: 45,
  },
  {
    id: "2",
    name: "Kumaon Crafts",
    nameHi: "कुमाऊँ क्राफ्ट्स",
    logo: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    location: "Almora",
    locationHi: "अल्मोड़ा",
    rating: 4.7,
    productCount: 38,
  },
  {
    id: "3",
    name: "Pahari Jewels",
    nameHi: "पहाड़ी ज्वेल्स",
    logo: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    location: "Bageshwar",
    locationHi: "बागेश्वर",
    rating: 4.9,
    productCount: 27,
  },
  {
    id: "4",
    name: "Himalayan Organics",
    nameHi: "हिमालयन ऑर्गेनिक्स",
    logo: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    location: "Munsyari",
    locationHi: "मुनस्यारी",
    rating: 4.6,
    productCount: 52,
  },
]

export default function ShopPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [isVisible, setIsVisible] = useState({
    featured: false,
    categories: false,
    products: false,
    shops: false,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = ["featured", "categories", "products", "shops"]
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  useEffect(() => {
    let result = [...products]

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.nameHi.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.categoryHi.toLowerCase().includes(query) ||
          product.seller.toLowerCase().includes(query) ||
          product.sellerHi.toLowerCase().includes(query),
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1))
        break
      default: // featured
        result.sort((a, b) => (a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1))
    }

    setFilteredProducts(result)
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-uttarakhand-wood to-uttarakhand-mountain">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1606913419164-a8097587e1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Uttarakhand Handicrafts"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AipanBorder className="inline-block mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-pahadi">
                {language === "hi" ? "उत्तराखंड मार्केटप्लेस" : "Uttarakhand Marketplace"}
              </h1>
            </AipanBorder>
            <p className="text-lg md:text-xl mb-8 text-white/90 font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के हस्तशिल्प, पारंपरिक उत्पाद और स्थानीय व्यंजन खरीदें"
                : "Shop Uttarakhand's handicrafts, traditional products, and local delicacies"}
            </p>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder={
                    language === "hi" ? "उत्पाद, श्रेणी या विक्रेता खोजें..." : "Search products, categories, or sellers..."
                  }
                  className="pl-10 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-white/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Featured Products */}
      <section id="featured" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-wood dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "विशेष उत्पाद" : "Featured Products"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के सर्वश्रेष्ठ हस्तनिर्मित और पारंपरिक उत्पादों का अनुभव करें"
                : "Experience the best handcrafted and traditional products from Uttarakhand"}
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible.featured ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products
                .filter((product) => product.isFeatured)
                .slice(0, 3)
                .map((product) => (
                  <ProductCard key={product.id} product={product} variant="featured" />
                ))}
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Shop Benefits */}
      <section className="py-12 bg-gradient-to-r from-uttarakhand-mountain/10 to-uttarakhand-sunset/10 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 text-center">
              <div className="h-12 w-12 bg-uttarakhand-mountain/10 dark:bg-uttarakhand-meadow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-6 w-6 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
              </div>
              <h3 className="text-lg font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mb-2">
                {language === "hi" ? "प्रामाणिक उत्पाद" : "Authentic Products"}
              </h3>
              <p className="text-sm text-muted-foreground font-pahadi">
                {language === "hi"
                  ? "सभी उत्पाद प्रमाणित विक्रेताओं से हैं और गुणवत्ता के लिए जांचे गए हैं"
                  : "All products are from verified sellers and checked for quality"}
              </p>
            </div>
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 text-center">
              <div className="h-12 w-12 bg-uttarakhand-pine/10 dark:bg-uttarakhand-meadow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
              </div>
              <h3 className="text-lg font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi mb-2">
                {language === "hi" ? "सुरक्षित डिलीवरी" : "Secure Delivery"}
              </h3>
              <p className="text-sm text-muted-foreground font-pahadi">
                {language === "hi" ? "पूरे भारत में सुरक्षित और तेज़ शिपिंग" : "Safe and fast shipping across India"}
              </p>
            </div>
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-uttarakhand-sunset/20 dark:border-uttarakhand-meadow/20 text-center">
              <div className="h-12 w-12 bg-uttarakhand-sunset/10 dark:bg-uttarakhand-meadow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-6 w-6 text-uttarakhand-sunset dark:text-uttarakhand-meadow" />
              </div>
              <h3 className="text-lg font-bold text-uttarakhand-sunset dark:text-uttarakhand-meadow font-pahadi mb-2">
                {language === "hi" ? "सुरक्षित भुगतान" : "Secure Payments"}
              </h3>
              <p className="text-sm text-muted-foreground font-pahadi">
                {language === "hi"
                  ? "कई भुगतान विकल्प और सुरक्षित लेनदेन"
                  : "Multiple payment options and secure transactions"}
              </p>
            </div>
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-uttarakhand-flower/20 dark:border-uttarakhand-meadow/20 text-center">
              <div className="h-12 w-12 bg-uttarakhand-flower/10 dark:bg-uttarakhand-meadow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-uttarakhand-flower dark:text-uttarakhand-meadow" />
              </div>
              <h3 className="text-lg font-bold text-uttarakhand-flower dark:text-uttarakhand-meadow font-pahadi mb-2">
                {language === "hi" ? "आसान वापसी" : "Easy Returns"}
              </h3>
              <p className="text-sm text-muted-foreground font-pahadi">
                {language === "hi" ? "7 दिनों की आसान वापसी और धनवापसी नीति" : "7-day easy return and refund policy"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="categories" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mb-4">
              {language === "hi" ? "उत्पाद श्रेणियाँ" : "Product Categories"}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "अपनी पसंद के अनुसार उत्पादों को ब्राउज़ करें"
                : "Browse products according to your preference"}
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible.categories ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  name: "Clothing",
                  nameHi: "वस्त्र",
                  image:
                    "https://images.unsplash.com/photo-1606913419164-a8097587e1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                  count: 45,
                },
                {
                  name: "Handicrafts",
                  nameHi: "हस्तशिल्प",
                  image:
                    "https://images.unsplash.com/photo-1595408076683-6b5b77a3cf58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                  count: 78,
                },
                {
                  name: "Food & Spices",
                  nameHi: "खाद्य और मसाले",
                  image:
                    "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                  count: 56,
                },
                {
                  name: "Home Decor",
                  nameHi: "घर सजावट",
                  image:
                    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                  count: 34,
                },
                {
                  name: "Jewelry",
                  nameHi: "आभूषण",
                  image:
                    "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                  count: 29,
                },
                {
                  name: "Music",
                  nameHi: "संगीत",
                  image:
                    "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
                  count: 18,
                },
                {
                  name: "Art",
                  nameHi: "कला",
                  image:
                    "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                  count: 23,
                },
                {
                  name: "Wellness",
                  nameHi: "स्वास्थ्य",
                  image:
                    "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                  count: 41,
                },
              ].map((category, index) => (
                <Link
                  href={`/shop/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                  key={index}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3]"
                >
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={language === "hi" ? category.nameHi : category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white font-pahadi mb-1">
                      {language === "hi" ? category.nameHi : category.name}
                    </h3>
                    <p className="text-white/80 text-sm font-pahadi">
                      {category.count} {language === "hi" ? "उत्पाद" : "products"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* All Products */}
      <section
        id="products"
        className="py-16 bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-wood dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "सभी उत्पाद" : "All Products"}
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के विशेष उत्पादों की हमारी विस्तृत श्रृंखला का अन्वेषण करें"
                : "Explore our extensive range of special products from Uttarakhand"}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/4 lg:w-1/5">
              <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sticky top-20">
                <h3 className="text-lg font-bold mb-4 font-pahadi text-uttarakhand-mountain dark:text-uttarakhand-meadow flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  {language === "hi" ? "फ़िल्टर" : "Filters"}
                </h3>

                <div className="space-y-6">
                  {/* Categories */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 font-pahadi">
                      {language === "hi" ? "श्रेणियाँ" : "Categories"}
                    </h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center">
                          <button
                            className={`text-sm font-pahadi ${
                              selectedCategory === category.id
                                ? "text-uttarakhand-mountain dark:text-uttarakhand-meadow font-medium"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                            onClick={() => setSelectedCategory(category.id)}
                          >
                            {language === "hi" ? category.nameHi : category.name}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 font-pahadi">
                      {language === "hi" ? "मूल्य सीमा" : "Price Range"}
                    </h4>
                    <div className="space-y-2">
                      {["0-500", "500-1000", "1000-2500", "2500-5000", "5000+"].map((range) => (
                        <div key={range} className="flex items-center">
                          <button className="text-sm font-pahadi text-muted-foreground hover:text-foreground">
                            ₹{range}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 font-pahadi">
                      {language === "hi" ? "उपलब्धता" : "Availability"}
                    </h4>
                    <div className="space-y-2">
                      {["In Stock", "Out of Stock"].map((status) => (
                        <div key={status} className="flex items-center">
                          <button className="text-sm font-pahadi text-muted-foreground hover:text-foreground">
                            {language === "hi" ? (status === "In Stock" ? "स्टॉक में" : "स्टॉक में नहीं") : status}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Special Features */}
                  <div>
                    <h4 className="text-sm font-medium mb-3 font-pahadi">
                      {language === "hi" ? "विशेष सुविधाएँ" : "Special Features"}
                    </h4>
                    <div className="space-y-2">
                      {[
                        { id: "handmade", name: "Handmade", nameHi: "हस्तनिर्मित" },
                        { id: "organic", name: "Organic", nameHi: "जैविक" },
                        { id: "eco-friendly", name: "Eco-Friendly", nameHi: "पर्यावरण अनुकूल" },
                        { id: "traditional", name: "Traditional", nameHi: "पारंपरिक" },
                      ].map((feature) => (
                        <div key={feature.id} className="flex items-center">
                          <button className="text-sm font-pahadi text-muted-foreground hover:text-foreground">
                            {language === "hi" ? feature.nameHi : feature.name}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-3/4 lg:w-4/5">
              <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="text-sm text-muted-foreground font-pahadi">
                    {language === "hi"
                      ? `${filteredProducts.length} उत्पाद मिले`
                      : `${filteredProducts.length} products found`}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-pahadi text-muted-foreground">
                    {language === "hi" ? "इसके अनुसार क्रमबद्ध करें:" : "Sort by:"}
                  </span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={language === "hi" ? "क्रमबद्ध करें" : "Sort by"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">{language === "hi" ? "विशेष" : "Featured"}</SelectItem>
                      <SelectItem value="price-low">
                        {language === "hi" ? "कम से अधिक मूल्य" : "Price: Low to High"}
                      </SelectItem>
                      <SelectItem value="price-high">
                        {language === "hi" ? "अधिक से कम मूल्य" : "Price: High to Low"}
                      </SelectItem>
                      <SelectItem value="rating">{language === "hi" ? "रेटिंग" : "Rating"}</SelectItem>
                      <SelectItem value="newest">{language === "hi" ? "नवीनतम" : "Newest"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div
                className={`transition-all duration-1000 ${isVisible.products ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-bold mb-2 font-pahadi">
                      {language === "hi" ? "कोई उत्पाद नहीं मिला" : "No Products Found"}
                    </h3>
                    <p className="text-muted-foreground font-pahadi">
                      {language === "hi"
                        ? "कृपया अपने फ़िल्टर या खोज मानदंड बदलें"
                        : "Please try changing your filters or search criteria"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Featured Shops */}
      <section id="shops" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "विशेष दुकानें" : "Featured Shops"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के प्रतिष्ठित विक्रेताओं और कारीगरों से खरीदें"
                : "Shop from reputed sellers and artisans of Uttarakhand"}
            </p>
          </div>

          <div
            className={`transition-all duration-1000 ${isVisible.shops ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredShops.map((shop) => (
                <Link href={`/shop/seller/${shop.id}`} key={shop.id}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={shop.logo || "/placeholder.svg"}
                        alt={language === "hi" ? shop.nameHi : shop.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-white font-pahadi mb-1">
                          {language === "hi" ? shop.nameHi : shop.name}
                        </h3>
                        <div className="flex justify-between items-center">
                          <span className="text-white/90 text-sm font-pahadi">
                            {language === "hi" ? shop.locationHi : shop.location}
                          </span>
                          <div className="flex items-center text-white/90 text-sm">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            {shop.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground font-pahadi">
                          {shop.productCount} {language === "hi" ? "उत्पाद" : "products"}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi"
                        >
                          {language === "hi" ? "दुकान देखें" : "View Shop"}
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button
                variant="outline"
                className="border-uttarakhand-mountain text-uttarakhand-mountain hover:bg-uttarakhand-mountain/10 dark:border-uttarakhand-meadow dark:text-uttarakhand-meadow dark:hover:bg-uttarakhand-meadow/10 font-pahadi"
              >
                {language === "hi" ? "सभी दुकानें देखें" : "View All Shops"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Become a Seller */}
      <section className="py-16 bg-gradient-to-r from-uttarakhand-sunset/20 to-uttarakhand-wood/20 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-8 rounded-lg border border-uttarakhand-wood/20 dark:border-uttarakhand-meadow/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-uttarakhand-wood dark:text-uttarakhand-meadow font-pahadi mb-4">
                  {language === "hi" ? "विक्रेता बनें" : "Become a Seller"}
                </h2>
                <p className="text-muted-foreground mb-6 font-pahadi">
                  {language === "hi"
                    ? "अपने हस्तशिल्प, पारंपरिक उत्पाद या स्थानीय व्यंजन को हमारे मार्केटप्लेस पर बेचें और अपने व्यवसाय को बढ़ाएँ।"
                    : "Sell your handicrafts, traditional products, or local delicacies on our marketplace and grow your business."}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-uttarakhand-wood/20 flex items-center justify-center text-uttarakhand-wood dark:text-uttarakhand-meadow">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground font-pahadi">
                      {language === "hi" ? "आसान पंजीकरण प्रक्रिया" : "Easy registration process"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-uttarakhand-wood/20 flex items-center justify-center text-uttarakhand-wood dark:text-uttarakhand-meadow">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground font-pahadi">
                      {language === "hi" ? "कम कमीशन दरें" : "Low commission rates"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-uttarakhand-wood/20 flex items-center justify-center text-uttarakhand-wood dark:text-uttarakhand-meadow">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground font-pahadi">
                      {language === "hi" ? "समय पर भुगतान" : "Timely payments"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-uttarakhand-wood/20 flex items-center justify-center text-uttarakhand-wood dark:text-uttarakhand-meadow">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground font-pahadi">
                      {language === "hi" ? "विपणन सहायता" : "Marketing support"}
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <a href="https://forms.gle/QsgATnNtYchCKJB48" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-uttarakhand-wood hover:bg-uttarakhand-wood/90 text-white font-pahadi">
                      {language === "hi" ? "अभी रजिस्टर करें" : "Register Now"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-uttarakhand-sunset/20 rounded-full animate-pulse-slow"></div>
                <div
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-uttarakhand-wood/20 rounded-full animate-pulse-slow"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="relative z-10">
                  <Image
                    src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Artisan crafting"
                    width={500}
                    height={350}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
