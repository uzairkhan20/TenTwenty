import React from 'react';
import CelebrityArticles from '../celebrityArticles';
import FeaturedArticle from '../featuredArticle';
import FoodArticles from '../foodArticles';
import Footer from '../footer';
import FullwidthArticle from '../fullwidthArticle';
import InvertedArticles from '../invertedArticles';
import LifestyleArticles from '../lifestyleArticles';
import ReviewArticles from '../reviewArticles';
import StoryArticle from '../storyArticle';
import TeamArticles from '../teamArticles';
import VideoArticles from '../videoArticles';

function Home() {
    return (
        <>
            <FeaturedArticle />
            <CelebrityArticles />
            <LifestyleArticles />
            <TeamArticles />
            <FullwidthArticle />
            <InvertedArticles />
            <StoryArticle />
            <ReviewArticles />
            <FoodArticles />
            <VideoArticles />
            <Footer />
        </>
    );
}

export default Home
