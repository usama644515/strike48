import VideoCard from './VideoCard';
import styles from './VideoTutorialsSection.module.css';

const VideoTutorialsSection = () => {
  const videos = [
    {
      title: "Strike48 Platform Overview: From Data to Insights",
      description: "Get a comprehensive walkthrough of the Strike48 platform and see how it transforms raw log data...",
      date: "Dec 18, 2024",
      category: "Platform Overview"
    },
    {
      title: "Setting Up Your First Security Dashboard",
      description: "Learn how to configure and customize security dashboards to monitor threats and anomalies in...",
      date: "Dec 16, 2024",
      category: null
    },
    {
      title: "Advanced Analytics: Machine Learning in Action",
      description: "Discover how Strike48's AI algorithms automatically detect patterns and predict potential...",
      date: "Dec 14, 2024",
      category: "AI-Machine Learning"
    }
  ];

  return (
    <section className={styles.videos}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Video Tutorials</h2>
        <p className={styles.sectionDescription}>
          Watch our expert-led tutorials to get the most out of Strike48's powerful analytics platform
        </p>
        <div className={styles.videosGrid}>
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              date={video.date}
              category={video.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTutorialsSection;