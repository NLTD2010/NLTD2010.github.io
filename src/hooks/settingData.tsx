const useOnline = process.env.USE_ONLINE === 'true'; 

const localConfig = {
  devices: '/devices.json',
  blogs: '/blog.json',
};

const onlineConfig = {
  devices: process.env.DEVICES_URL || '',
  blogs: process.env.BLOGS_URL || '',
};

export const fetchData = async (type: 'devices' | 'blogs') => {
  const source = useOnline ? onlineConfig[type] : localConfig[type];

  try {
    const response = await fetch(source);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${type} from ${source}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
    throw error;
  }
};
