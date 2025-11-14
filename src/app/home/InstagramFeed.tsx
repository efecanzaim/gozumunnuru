"use client";

import { useEffect, useState } from "react";
import styles from "./InstagramFeed.module.css";

interface InstagramPost {
  id: string;
  caption: string;
  mediaType: string;
  mediaUrl: string;
  permalink: string;
  timestamp: string;
}

interface InstagramModalProps {
  post: InstagramPost | null;
  isOpen: boolean;
  onClose: () => void;
}

function InstagramModal({ post, isOpen, onClose }: InstagramModalProps) {
  if (!isOpen || !post) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>
          ×
        </button>
        <div className={styles.modalImageWrapper}>
          <img
            src={post.mediaUrl}
            alt={post.caption || "Instagram post"}
            className={styles.modalImage}
          />
        </div>
        {post.caption && (
          <div className={styles.modalCaption}>
            <p>{post.caption}</p>
          </div>
        )}
        <a
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.modalLink}
        >
          Instagram'da Görüntüle
        </a>
      </div>
    </div>
  );
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        const response = await fetch("/api/instagram");
        if (response.ok) {
          const data = await response.json();
          setPosts(data.data || []);
        }
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchInstagramPosts();
  }, []);

  const handleImageClick = (post: InstagramPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  if (loading) {
    return (
      <section className={styles.instagramSection}>
        <div className={styles.instagramContainer}>
          <p>Yükleniyor...</p>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <>
      <section className={styles.instagramSection} aria-label="Instagram gönderileri">
        <div className={styles.instagramContainer}>
          <h2 className={styles.instagramTitle}>Instagram'da Biz</h2>
          <div className={styles.instagramGrid}>
            {posts.map((post) => (
              <div
                key={post.id}
                className={styles.instagramItem}
                onClick={() => handleImageClick(post)}
              >
                <img
                  src={post.mediaUrl}
                  alt={post.caption || "Instagram post"}
                  className={styles.instagramImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <InstagramModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

