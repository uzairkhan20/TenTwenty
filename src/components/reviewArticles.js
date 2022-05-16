import React from 'react'
import ArticleItem from './articleItem';
import '../App.scss';
import articleimage1 from '../assets/images/article-22.jpg';
import articleimage2 from '../assets/images/article-23.jpg';
import articleimage3 from '../assets/images/article-24.jpg';
import articleimage4 from '../assets/images/article-25.jpg';

function ReviewArticles() {
    return (
        <section className='review-articles-wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='section-header'>
                            <h2>1 row: 4 reviews</h2>
                        </div>
                    </div>
                </div>
                <div className='review-articles m-t-4 m-b-4'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='eat' 
                                articleTitle='Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in' 
                                articleAuthor='U. R. Oliver' 
                                articleType='reviews' 
                                articleReview='4.4'
                                articleAlignment='left' 
                                articleImage={articleimage1}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='eat' 
                                articleTitle='Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in' 
                                articleAuthor='U. R. Oliver' 
                                articleType='reviews' 
                                articleReview='4.4'
                                articleAlignment='left' 
                                articleImage={articleimage2}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='eat' 
                                articleTitle='Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in' 
                                articleAuthor='U. R. Oliver' 
                                articleType='reviews' 
                                articleReview='4.4'
                                articleAlignment='left' 
                                articleImage={articleimage3}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='eat' 
                                articleTitle='Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in' 
                                articleAuthor='U. R. Oliver' 
                                articleType='reviews' 
                                articleReview='4.4'
                                articleAlignment='left' 
                                articleImage={articleimage4}
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

export default ReviewArticles
