import React from 'react'
import ArticleItem from './articleItem';
import '../App.scss';
import articleimage1 from '../assets/images/article-32.png';
import articleimage2 from '../assets/images/article-33.png';
import articleimage3 from '../assets/images/article-34.png';
import articleVideo from '../assets/images/video.mp4';



function VideoArticles() {

    return (
        <section className='video-articles-wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='section-header'>
                            <h2>1 row: 3 video</h2>
                        </div>
                    </div>
                </div>
                <div className='video-articles p-b-4 p-t-4'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='eat' 
                                articleTitle='Meals on wheels: Meals on wheels: best in the UAE best'
                                articleAuthor='U. R. Oliver' 
                                articleType='video' 
                                articleAlignment='center' 
                                articleImage={articleimage1}
                                articleVideo={articleVideo}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='eat' 
                                articleTitle='Meals on wheels: Meals on wheels: best in the UAE best'
                                articleAuthor='U. R. Oliver' 
                                articleType='video' 
                                articleAlignment='center' 
                                articleImage={articleimage2}
                                articleVideo={articleVideo}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='eat' 
                                articleTitle='Meals on wheels: Meals on wheels: best in the UAE best'
                                articleAuthor='U. R. Oliver' 
                                articleType='video' 
                                articleAlignment='center' 
                                articleImage={articleimage3}
                                articleVideo={articleVideo}
                                articlePath='/article'
                                />
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoArticles
