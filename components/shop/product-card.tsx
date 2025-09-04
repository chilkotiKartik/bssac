"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"

export interface Product {
  id: string
  name: string
  nameHi: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  category: string
  categoryHi: string
  seller: string
  sellerHi: string
  location: string
  locationHi: string
  isNew?: boolean
  isFeatured?: boolean
  isHandmade?: boolean
  isSale?: boolean
  salePercentage?: number
}

interface ProductCardProps {
  product: Product
  variant?: "default" | "compact" | "featured"
}

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  const { language } = useLanguage()
  const [isWishlisted, setIsWishlisted] = useState(false)

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  if (variant === "compact") {
    return (
      <Link href={`/shop/product/${product.id}`}>
        <div className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={language === "hi" ? product.nameHi : product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {product.isNew && (
              <Badge className="absolute top-2 left-2 bg-uttarakhand-flower text-white">
                {language === "hi" ? "नया" : "New"}
              </Badge>
            )}
            {product.isSale && (
              <Badge className="absolute top-2 right-2 bg-uttarakhand-sunset text-white">
                {language === "hi" ? `${product.salePercentage}% छूट` : `${product.salePercentage}% OFF`}
              </Badge>
            )}
          </div>
          <div className="p-3">
            <h3 className="text-sm font-medium line-clamp-1 font-pahadi">
              {language === "hi" ? product.nameHi : product.name}
            </h3>
            <div className="flex justify-between items-center mt-1">
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                {product.rating}
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === "featured") {
    return (
      <Link href={`/shop/product/${product.id}`}>
        <div className="group relative bg-gradient-to-r from-uttarakhand-mountain/5 to-uttarakhand-sunset/5 rounded-lg overflow-hidden border border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={language === "hi" ? product.nameHi : product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-bold text-white font-pahadi mb-1">
                {language === "hi" ? product.nameHi : product.name}
              </h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-white/70 line-through text-sm">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="flex items-center text-white/90 text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  {product.rating} ({product.reviews})
                </div>
              </div>
            </div>
            {product.isNew && (
              <Badge className="absolute top-3 left-3 bg-uttarakhand-flower text-white">
                {language === "hi" ? "नया" : "New"}
              </Badge>
            )}
            {product.isSale && (
              <Badge className="absolute top-3 right-3 bg-uttarakhand-sunset text-white">
                {language === "hi" ? `${product.salePercentage}% छूट` : `${product.salePercentage}% OFF`}
              </Badge>
            )}
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-1 text-sm text-muted-foreground font-pahadi">
                <span>{language === "hi" ? product.categoryHi : product.category}</span>
                <span>•</span>
                <span>{language === "hi" ? product.locationHi : product.location}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground font-pahadi">
                <span>
                  {language === "hi" ? "विक्रेता: " : "Seller: "}
                  {language === "hi" ? product.sellerHi : product.seller}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Button className="bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi">
                <ShoppingCart className="h-4 w-4 mr-2" />
                {language === "hi" ? "कार्ट में जोड़ें" : "Add to Cart"}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full ${isWishlisted ? "text-red-500" : "text-muted-foreground"}`}
                onClick={toggleWishlist}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500" : ""}`} />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  // Default variant
  return (
    <Link href={`/shop/product/${product.id}`}>
      <div className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={language === "hi" ? product.nameHi : product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-2 right-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm ${
              isWishlisted ? "text-red-500" : "text-gray-600 dark:text-gray-300"
            }`}
            onClick={toggleWishlist}
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500" : ""}`} />
          </Button>
          {product.isNew && (
            <Badge className="absolute top-2 left-2 bg-uttarakhand-flower text-white">
              {language === "hi" ? "नया" : "New"}
            </Badge>
          )}
          {product.isSale && (
            <Badge className="absolute bottom-2 left-2 bg-uttarakhand-sunset text-white">
              {language === "hi" ? `${discount}% छूट` : `${discount}% OFF`}
            </Badge>
          )}
          {product.isHandmade && (
            <Badge className="absolute bottom-2 right-2 bg-uttarakhand-wood text-white">
              {language === "hi" ? "हस्तनिर्मित" : "Handmade"}
            </Badge>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-muted-foreground font-pahadi">
              {language === "hi" ? product.categoryHi : product.category}
            </span>
            <div className="flex items-center">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-xs text-muted-foreground">
                {product.rating} ({product.reviews})
              </span>
            </div>
          </div>
          <h3 className="text-base font-medium mb-1 line-clamp-2 font-pahadi">
            {language === "hi" ? product.nameHi : product.name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="text-xs text-muted-foreground font-pahadi">
              {language === "hi" ? product.locationHi : product.location}
            </span>
          </div>
          <div className="mt-3">
            <Button className="w-full bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi">
              <ShoppingCart className="h-4 w-4 mr-2" />
              {language === "hi" ? "कार्ट में जोड़ें" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
