/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from '../NewsArticlesBox.module.css'
import FeatureCard from '../FeatureCard/FeatureCard'
const ContentSection = ({ heading, paragraph, contents }) => (
  <div className={styles.box}>
    <h1 className={styles.heading}>{heading}</h1>
    <p className={styles.paragraph}>{paragraph}</p>
    <div className={styles.circleContainer}>
      {contents.map((content, index) => (
        <FeatureCard
          key={index}
          title={content.title}
          imageSrc={content.imageSrc}
          buttonText='مشاهده مطلب'
        />
      ))}
    </div>
  </div>
)

export default ContentSection
