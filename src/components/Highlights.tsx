import React from 'react';
import { useLanguage } from './LanguageContext';
import { 
  Road, 
  Map, 
  Trees, 
  Droplet, 
  Zap, 
  FlameKindling, // using as tap/water
  Shield, 
  LayoutGrid, 
  Store, 
  TrendingUp 
} from 'lucide-react';

export const Highlights: React.FC = () => {
  const { t } = useLanguage();

  const highlightItems = [
    {
      icon: <Road className="text-gold" size={24} />,
      title: t("30 FT WIDE ROADS", "३० फीट चौड़ी सड़कें"),
      description: t("Wide asphalt internal roads structured for smooth two-way vehicular flow.", "सुगम वाहनों के आवागमन के लिए डिज़ाइन की गई ३० फीट चौड़ी आंतरिक डामर सड़कें।")
    },
    {
      icon: <Map className="text-gold" size={24} />,
      title: t("PLANNED ROAD NETWORK", "नियोजित सड़क नेटवर्क"),
      description: t("Structured layout plan providing direct connectivity to every plotted sector.", "सभी प्लॉट क्षेत्रों तक सीधी पहुँच प्रदान करने वाला व्यवस्थित और नियोजित लेआउट योजना।")
    },
    {
      icon: <Trees className="text-gold" size={24} />,
      title: t("GREEN & LANDSCAPED AREAS", "हरित और सुंदर पार्क"),
      description: t("Dedicated open parks and tree linings to maintain fresh air and aesthetics.", "ताज़ी हवा और हरियाली बनाए रखने के लिए समर्पित उद्यान और पौधों की कतारें।")
    },
    {
      icon: <Droplet className="text-gold" size={24} />,
      title: t("DRAINAGE SYSTEM", "जल निकासी प्रणाली"),
      description: t("Rainwater drain structures built to prevent water logging in rainy seasons.", "बारिश के मौसम में जलभराव को रोकने के लिए बनाई जा रही मजबूत जल निकासी प्रणाली।")
    },
    {
      icon: <Zap className="text-gold" size={24} />,
      title: t("ELECTRICITY INFRASTRUCTURE", "विद्युत बुनियादी ढांचा"),
      description: t("Provision for utility poles, load management, and internal electrification.", "बिजली खंभों, लोड प्रबंधन और आंतरिक विद्युतीकरण के लिए पूर्व-नियोजित प्रावधान।")
    },
    {
      icon: <FlameKindling className="text-gold" size={24} />, // using as Water connection
      title: t("WATER SUPPLY PLANNING", "जलापूर्ति योजना"),
      description: t("Designed supply lines connecting each plot boundaries to municipal sources.", "प्रत्येक प्लॉट की सीमा को मुख्य जलापूर्ति स्रोतों से जोड़ने के लिए डिज़ाइन की गई पाइपलाइन।")
    },
    {
      icon: <Shield className="text-gold" size={24} />,
      title: t("GATED DEVELOPMENT", "सुरक्षित गेटेड कॉलोनी"),
      description: t("Fully secured boundary walls and structural checkpoint gate at the entrance.", "पूरी तरह से सुरक्षित बाहरी सीमा दीवारें और मुख्य प्रवेश द्वार पर चेकपॉइंट केबिन।")
    },
    {
      icon: <LayoutGrid className="text-gold" size={24} />,
      title: t("RESIDENTIAL PLOTS", "आवासीय भूखंड"),
      description: t("Optimally sized standard plots suitable for custom building layouts.", "घर के निर्माण के लिए उपयुक्त अनुकूल आकारों के मानक आवासीय भूखंड।")
    },
    {
      icon: <Store className="text-gold" size={24} />,
      title: t("NEARBY AMENITIES", "नजदीकी आवश्यक सुविधाएं"),
      description: t("Proximity to schools, local Bhagwanpur markets, and primary healthcare centers.", "स्थानीय स्कूलों, भगवानपुर बाजारों और प्राथमिक स्वास्थ्य केंद्रों से सुगम दूरी पर स्थित।")
    },
    {
      icon: <TrendingUp className="text-gold" size={24} />,
      title: t("GROWTH POTENTIAL", "विकास की संभावनाएं"),
      description: t("Located in Haridwar district, an active growth zone in Uttarakhand region.", "हरिद्वार जिले में स्थित, जो उत्तराखंड का एक सक्रिय व्यावसायिक और औद्योगिक विकास क्षेत्र है।")
    }
  ];

  return (
    <section className="section-bg-cream" id="highlights">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title-container">
          <h2 className="section-title">{t("PROJECT HIGHLIGHTS", "परियोजना की मुख्य विशेषताएं")}</h2>
          <p className="section-subtitle">
            {t(
              "Factual physical planning details confirming standard civil infrastructure and layouts planned for Greater Doon Residency.",
              "ग्रेटर दून रेसीडेंसी के लिए नियोजित मानक सिविल बुनियादी ढांचे और लेआउट की वास्तविक भौतिक योजना विवरण।"
            )}
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {highlightItems.map((item, index) => (
            <div key={index} className="gdr-card" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              alignItems: 'flex-start',
              padding: '1.5rem',
              backgroundColor: 'white'
            }}>
              <div style={{
                backgroundColor: 'var(--warm-white)',
                padding: '0.65rem',
                borderRadius: '4px',
                border: '1px solid rgba(181, 138, 42, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: 'var(--navy-blue)',
                fontFamily: 'var(--font-serif)',
                letterSpacing: '0.5px'
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--gray-dark)',
                lineHeight: '1.5'
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
