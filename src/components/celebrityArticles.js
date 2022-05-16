import React from 'react'
import ArticleItem from './articleItem';
import '../App.scss';

import articleimage1 from '../assets/images/article-4.png';
import articleimage2 from '../assets/images/article-5.png';
import articleimage3 from '../assets/images/article-6.png';
import articleimage4 from '../assets/images/article-7.png';
import articleimage5 from '../assets/images/article-8.png';

function CelebrityArticles() {
    return (
        
        <section className='celebrity-articles-wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='section-header'>
                            <h2>1 row: 5 circles with bg</h2>
                        </div>
                    </div>
                </div>
                <div className='celebrity-articles p-b-4 p-t-4'>
                    <div className='row'>
                        <div className='col-2'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='Vladimir Putin' 
                                articleTitle='Meals on wheels best in the UAE' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='center' 
                                articleImage={articleimage1}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='Vladimir Putin' 
                                articleTitle='Meals on wheels best in the UAE' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='center' 
                                articleImage={articleimage2}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='Vladimir Putin' 
                                articleTitle='Meals on wheels best in the UAE' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='center' 
                                articleImage={articleimage3}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='Vladimir Putin' 
                                articleTitle='Meals on wheels best in the UAE' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='center' 
                                articleImage={articleimage4}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='Vladimir Putin' 
                                articleTitle='Meals on wheels best in the UAE' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='center' 
                                articleImage={articleimage5}
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

export default CelebrityArticles
