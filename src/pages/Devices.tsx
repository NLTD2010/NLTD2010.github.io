import React, { useEffect, useState } from 'react';
import { Laptop, Smartphone, Watch, Headphones } from 'lucide-react';
import { fetchData } from '../hooks/settingData';

const iconMapping: { [key: string]: React.ElementType } = {
  Laptop,
  Smartphone,
  Watch,
  Headphones,
};

type DeviceItem = {
  name: string;
  specs: string;
  description: string;
};

type DeviceCategory = {
  category: string;
  icon: string;
  items: DeviceItem[];
};

const Devices: React.FC = () => {
  const [devices, setDevices] = useState<DeviceCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetchData('devices');
        setDevices(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-gray-500 dark:text-gray-400">Loading blog posts...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">My Devices</h1>
      <div className="space-y-8">
        {devices.map((category) => {
          const Icon = iconMapping[category.icon] || Laptop;
          return (
            <div
              key={category.category}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 
                transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 
                  transform transition-transform duration-300 group-hover:scale-110" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h2>
              </div>
              <div className="space-y-6">
                {category.items.map((device) => (
                  <div
                    key={device.name}
                    className="border-l-4 border-blue-600 dark:border-blue-500 pl-4 
                      hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-all duration-300 
                      ease-in-out rounded-r-lg p-4 transform hover:scale-[1.02] hover:translate-x-2"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {device.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {device.specs}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {device.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Devices;
