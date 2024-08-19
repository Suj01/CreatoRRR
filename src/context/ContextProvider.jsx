import { createContext,  useState } from 'react';
import PropTypes from "prop-types";

export const CreatorsContext = createContext();

export const CreatorsProvider = ({ children }) => {
    const [creators] = useState([
        {
            "id": 1,
            "bannerImage": "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d",
            "name": "Rohit Sharma",
            "email": "rohit@example.com",
            "description": "Professional gamer and streaming enthusiast.",
            "languages": ["Hindi", "English"],
            "education": "Bachelor of Science in Computer Science",
            "specialization": "Gamer",
            "socialMediaLinks": {
                "instagram": "https://instagram.com/rohit_sharma",
                "youtube": "https://youtube.com/rohit_sharma"
            }
        },
        {
            "id": 2,
            "bannerImage": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
            "name": "Priya Singh",
            "email": "priya@example.com",
            "description": "Fashion influencer with a passion for styling and trends.",
            "languages": ["Hindi", "English"],
            "education": "Bachelor of Fashion Design",
            "specialization": "Fashion Influencer",
            "socialMediaLinks": {
                "instagram": "https://instagram.com/priya_singh",
                "twitter": "https://twitter.com/priya_singh"
            }
        },
        {
            "id": 3,
            "bannerImage": "https://images.unsplash.com/photo-1544717305-2782549b5136",
            "name": "Amit Kumar",
            "email": "amit@example.com",
            "description": "Makeup artist specializing in bridal and theatrical makeup.",
            "languages": ["Hindi"],
            "education": "Diploma in Makeup Artistry",
            "specialization": "Makeup Artist",
            "socialMediaLinks": {
                "instagram": "https://instagram.com/amit_kumar",
                "youtube": "https://youtube.com/amit_kumar"
            }
        },
        {
            "id": 4,
            "bannerImage": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            "name": "Sneha Patel",
            "email": "sneha@example.com",
            "description": "Food blogger with a focus on traditional and fusion recipes.",
            "languages": ["Hindi", "Gujarati"],
            "education": "Bachelor of Culinary Arts",
            "specialization": "Food Blogger",
            "socialMediaLinks": {
                "instagram": "https://instagram.com/sneha_patel",
                "blog": "https://snehafoodblog.com"
            }
        },
        {
            "id": 5,
            "bannerImage": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
            "name": "Arjun Mehta",
            "email": "arjun@example.com",
            "description": "Tech reviewer with a focus on gadgets and software.",
            "languages": ["Hindi", "English"],
            "education": "Bachelor of Engineering in Electronics",
            "specialization": "Tech Reviewer",
            "socialMediaLinks": {
                "youtube": "https://youtube.com/arjun_mehta",
                "twitter": "https://twitter.com/arjun_mehta"
            }
        },
        {
            "id": 6,
            "bannerImage": "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd",
            "name": "Anjali Rao",
            "email": "anjali@example.com",
            "description": "Travel vlogger exploring cultures and destinations.",
            "languages": ["Hindi", "Kannada"],
            "education": "Bachelor of Arts in Tourism",
            "specialization": "Travel Vlogger",
            "socialMediaLinks": {
                "instagram": "https://instagram.com/anjali_rao",
                "youtube": "https://youtube.com/anjali_rao"
            }
        },
        {
            "id": 7,
            "bannerImage": "https://images.unsplash.com/photo-1544717305-2782549b5136",
            "name": "Vikram Verma",
            "email": "vikram@example.com",
            "description": "Fitness trainer and wellness coach.",
            "languages": ["Hindi", "Punjabi"],
            "education": "Certified Personal Trainer",
            "specialization": "Fitness Trainer",
            "socialMediaLinks": {
                "instagram": "https://instagram.com/vikram_verma",
                "youtube": "https://youtube.com/vikram_verma"
            }
        },
        {
            "id": 8,
            "bannerImage": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            "name": "Neha Kapoor",
            "email": "neha@example.com",
            "description": "Beauty influencer and skincare expert.",
            "languages": ["Kannada", "English"],
            "education": "Diploma in Cosmetology",
            "specialization": "Beauty Influencer",
            "socialMediaLinks": {
                "instagram": "https://instagram.com/neha_kapoor",
                "youtube": "https://youtube.com/neha_kapoor"
            }
        },
        {
            "id": 9,
            "bannerImage": "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            "name": "Karan Thakur",
            "email": "karan@example.com",
            "description": "Photographer with a passion for portrait and landscape photography.",
            "languages": ["Bengali", "Marathi"],
            "education": "Bachelor of Fine Arts in Photography",
            "specialization": "Photographer",
            "socialMediaLinks": {
                "instagram": "https://instagram.com/karan_thakur",
                "portfolio": "https://karanthakur.com"
            }
        },
        {
            "id": 10,
            "bannerImage": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
            "name": "Shreya Iyer",
            "email": "shreya@example.com",
            "description": "Lifestyle blogger sharing tips on fashion, travel, and wellness.",
            "languages": ["English", "Tamil"],
            "education": "Bachelor of Arts in Media Studies",
            "specialization": "Lifestyle Blogger",
            "socialMediaLinks": {
                "instagram": "https://instagram.com/shreya_iyer",
                "blog": "https://shreya-iyer-blog.com"
            }
        },
        {
            "id": 11,
            "bannerImage": "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd",
            "name": "Ravi Shastri",
            "email": "ravi@example.com",
            "description": "Gamer focusing on strategy and action games.",
            "languages": ["Urdu", "Telugu"],
            "education": "Bachelor of Science in Game Design",
            "specialization": "Gamer",
            "socialMediaLinks": {
                "instagram": "https://instagram.com/ravi_shastri",
                "youtube": "https://youtube.com/ravi_shastri"
            }
        },
        {
            "id": 12,
            "bannerImage": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            "name": "Sakshi Gupta",
            "email": "sakshi@example.com",
            "description": "Health coach specializing in nutrition and wellness.",
            "languages": ["Malayalam", "English"],
            "education": "Diploma in Nutrition",
            "specialization": "Health Coach",
            "socialMediaLinks": {
                "instagram": "https://instagram.com/sakshi_gupta",
                "twitter": "https://twitter.com/sakshi_gupta"
            }
        }
    ]);

    return (
        <CreatorsContext.Provider value={{ creators }}>
            {children}
        </CreatorsContext.Provider>
    );
};


CreatorsProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };