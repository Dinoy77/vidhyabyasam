import newsJson from './NewsData.json';

// Safe extraction with a fallback array to prevent UI mapping crashes
export const newsItems = Array.isArray(newsJson) ? newsJson : [];

export const getNewsById = (id) => {
  return newsItems.find((item) => item.id === Number(id));
};

export const getLatestNewsFeed = () => {
  return [...newsItems].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};

export const generateSlug = (title) => {
  if (!title) return '';
  return title
    .toLowerCase()
    .substring(0, 32) // Preserves your exact 32-character truncation rule
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

export const getNewsBySlug = (slug) => {
  return newsItems.find((item) => generateSlug(item.title) === slug);
};

// Helper functions for state and tag filtering across your UI
export const getAllStates = () => {
  const states = newsItems.map((item) => item.state).filter(Boolean);
  return ["All", ...new Set(states)];
};

export const getAllTags = () => {
  const tags = newsItems.map((item) => item.tag).filter(Boolean);
  return ["All", ...new Set(tags)];
};

export default newsItems;