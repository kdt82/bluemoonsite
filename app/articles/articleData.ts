export interface ArticleData {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured: boolean;
}

export const articlesData: ArticleData[] = [
  {
    id: '24-ghz-vs-5-ghz-wifi-which-network-should-you-use',
    title: "2.4 GHz vs 5 GHz Wi-Fi: Which Network Should You Use at Home or Work?",
    excerpt: "Reliable Wi-Fi is essential for both homes and businesses. Learn when to use 2.4 GHz or 5 GHz, how guest networks improve security, and how to build a scalable wireless environment.",
    date: "2025-11-28",
    category: "Technology Guide",
    readTime: "12 min read",
    image: "/assets/wifinetworks.jpg",
    featured: true
  },
  {
    id: 'iinet-cyber-attack-what-happened-how-to-protect-yourself',
    title: "iiNet Cyber-Attack: What Happened and How to Protect Yourself",
    excerpt: "On 16 August 2025, Australia's second-largest internet provider iiNet identified a cyber-attack affecting 280,000 customers. Learn what information was stolen and how to protect yourself from similar attacks.",
    date: "2025-08-20",
    category: "Cybersecurity",
    readTime: "12 min read",
    image: "/assets/iinetdatabreach.png",
    featured: true
  },
  {
    id: 'following-worlds-largest-data-breach-small-business-cybersecurity-ransomware',
    title: "Following the World's Largest Data Breach: What Small Businesses Must Know About Cyber Security and Ransomware Vulnerability",
    excerpt: "The recent announcement of the world's largest data breach has sent shockwaves through the global business community—and Australian small businesses are no exception. Learn essential cybersecurity strategies to protect against ransomware and cyber threats.",
    date: "2025-06-26",
    category: "Cybersecurity",
    readTime: "10 min read",
    image: "/assets/ransom.png",
    featured: true
  },
  {
    id: 'ultimate-guide-home-wifi-australian-homes',
    title: "The Ultimate Guide to Home WiFi for Australian Homes",
    excerpt: "A reliable, high-speed WiFi connection is now as essential as electricity or running water in the modern Australian home. Master your home network with this comprehensive guide covering WiFi standards, frequency bands, interference solutions, and optimization tips.",
    date: "2025-06-24",
    category: "Technology Guide",
    readTime: "15 min read",
    image: "/assets/wifi.png",
    featured: true
  },
  {
    id: 'essential-cryptocurrency-security-practices',
    title: "Essential Cryptocurrency Security Practices",
    excerpt: "Cryptocurrency offers exciting opportunities, but it also attracts sophisticated cybercriminals. Learn essential security measures and common threats to navigate the crypto world with confidence and protect your digital assets.",
    date: "2025-06-23",
    category: "Cybersecurity",
    readTime: "12 min read",
    image: "/assets/crypto-security.png",
    featured: true
  },
  {
    id: 'worlds-largest-data-breach-16-billion-credentials',
    title: "The World's Largest Data Breach: 16 Billion Credentials Exposed",
    excerpt: "A record-shattering data breach has rocked the digital world, with researchers revealing that more than 16 billion login credentials have been leaked in what is believed to be the largest collection of exposed passwords and usernames ever discovered.",
    date: "2025-06-20",
    category: "Cybersecurity",
    readTime: "8 min read",
    image: "/assets/databreach.jpg",
    featured: true
  }
];

// Helper function to get article data by ID
export const getArticleData = (id: string): ArticleData | undefined => {
  return articlesData.find(article => article.id === id);
}; 