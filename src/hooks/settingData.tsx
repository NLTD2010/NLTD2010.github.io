const useOnline = import.meta.env.VITE_USE_ONLINE === 'true';

const localConfig = {
  devices: '/devices.json',
  blogs: '/blog.json',
};

const onlineConfig = {
  devices: import.meta.env.VITE_DEVICES_URL || '',
  blogs: import.meta.env.VITE_BLOGS_URL || '',
};

export const fetchData = async (type: 'devices' | 'blogs') => {
  const source = useOnline ? onlineConfig[type] : localConfig[type];

  try {
    const response = await fetch(source);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${type}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
    throw error;
  }
};
