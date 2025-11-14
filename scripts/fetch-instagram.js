// Build zamanında Instagram verilerini çekip static JSON dosyası olarak kaydeder
const fs = require('fs');
const path = require('path');

async function fetchInstagramData() {
  try {
    const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
    const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

    if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_BUSINESS_ACCOUNT_ID) {
      console.log('Instagram credentials not found, creating empty data file');
      const emptyData = { data: [] };
      const outputPath = path.join(process.cwd(), 'public', 'instagram-data.json');
      fs.writeFileSync(outputPath, JSON.stringify(emptyData, null, 2));
      return;
    }

    const response = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}&limit=12`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram data');
    }

    const data = await response.json();

    const mediaWithDetails = await Promise.all(
      data.data.map(async (media) => {
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

    const outputPath = path.join(process.cwd(), 'public', 'instagram-data.json');
    fs.writeFileSync(outputPath, JSON.stringify({ data: mediaWithDetails }, null, 2));
    console.log(`Instagram data saved to ${outputPath}`);
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    // Hata durumunda boş data dosyası oluştur
    const emptyData = { data: [] };
    const outputPath = path.join(process.cwd(), 'public', 'instagram-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(emptyData, null, 2));
  }
}

fetchInstagramData();

