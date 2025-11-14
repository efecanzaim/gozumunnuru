import { NextResponse } from 'next/server';

// Instagram Graph API ile medya çekmek için
// Bu endpoint'i kullanmak için Instagram Business Account ve Access Token gerekiyor
export async function GET() {
  try {
    // Environment variables'dan alınacak
    const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
    const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

    if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_BUSINESS_ACCOUNT_ID) {
      return NextResponse.json(
        { error: 'Instagram credentials not configured' },
        { status: 500 }
      );
    }

    // Instagram Graph API'den medya çek
    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=12`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram data');
    }

    const data = await response.json();

    // Her medya için detaylı bilgi çek (caption için)
    const mediaWithDetails = await Promise.all(
      data.data.map(async (media: any) => {
        if (media.media_type === 'VIDEO' && media.thumbnail_url) {
          return {
            id: media.id,
            caption: media.caption || '',
            mediaType: media.media_type,
            mediaUrl: media.thumbnail_url,
            permalink: media.permalink,
            timestamp: media.timestamp,
          };
        }
        return {
          id: media.id,
          caption: media.caption || '',
          mediaType: media.media_type,
          mediaUrl: media.media_url,
          permalink: media.permalink,
          timestamp: media.timestamp,
        };
      })
    );

    return NextResponse.json({ data: mediaWithDetails });
  } catch (error) {
    console.error('Instagram API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Instagram posts' },
      { status: 500 }
    );
  }
}

