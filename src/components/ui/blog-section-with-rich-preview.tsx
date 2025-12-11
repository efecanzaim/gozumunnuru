"use client"

import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BlogPost } from "@/types/blog"
import { getBasePath } from "@/utils/basePath"

interface BlogSectionProps {
  posts: BlogPost[]
}

function BlogSection({ posts }: BlogSectionProps) {
  const basePath = getBasePath()
  const featuredPost = posts.find(post => post.featured) || posts[0]
  const regularPosts = posts.filter(post => post.slug !== featuredPost?.slug).slice(0, 2)

  return (
    <div className="w-full py-10 lg:py-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-14 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="max-w-xl" style={{ 
            fontSize: 'clamp(32px, 4vw, 42px)',
            lineHeight: '1.1',
            fontWeight: 700,
            color: '#1b0f0f'
          }}>
            Son Yazılar
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Post */}
          <Link 
            href={`/blog/${featuredPost.slug}`}
            className="flex flex-col gap-4 hover:opacity-75 cursor-pointer md:col-span-2 transition-opacity"
          >
            <div className="relative bg-muted rounded-md aspect-video overflow-hidden">
              <Image
                src={`${basePath}${featuredPost.image}`}
                alt={featuredPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="flex flex-row gap-4 items-center">
              <Badge variant="secondary">{featuredPost.category}</Badge>
              <p className="flex flex-row gap-2 text-sm items-center">
                <span className="text-muted-foreground">Yazar</span>{" "}
                <Avatar className="h-6 w-6">
                  <AvatarImage src={featuredPost.author.avatar ? `${basePath}${featuredPost.author.avatar}` : undefined} />
                  <AvatarFallback>
                    {featuredPost.author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span>{featuredPost.author.name}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="max-w-3xl text-4xl tracking-tight">
                {featuredPost.title}
              </h3>
              <p className="max-w-3xl text-muted-foreground text-base">
                {featuredPost.excerpt}
              </p>
            </div>
          </Link>

          {/* Regular Posts */}
          {regularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-4 hover:opacity-75 cursor-pointer transition-opacity"
            >
              <div className="relative bg-muted rounded-md aspect-video overflow-hidden">
                <Image
                  src={`${basePath}${post.image}`}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-row gap-4 items-center">
                <Badge variant="secondary">{post.category}</Badge>
                <p className="flex flex-row gap-2 text-sm items-center">
                  <span className="text-muted-foreground">Yazar</span>{" "}
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={post.author.avatar ? `${basePath}${post.author.avatar}` : undefined} />
                    <AvatarFallback>
                      {post.author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span>{post.author.name}</span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="max-w-3xl text-2xl tracking-tight">
                  {post.title}
                </h3>
                <p className="max-w-3xl text-muted-foreground text-base">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export { BlogSection }

