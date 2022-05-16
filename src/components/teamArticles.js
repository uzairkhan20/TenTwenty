import React from 'react'
import ArticleItem from './articleItem';
import '../App.scss';
import articleimage1 from '../assets/images/article-13.jpg';
import articleimage2 from '../assets/images/article-14.jpg';
import articleimage3 from '../assets/images/article-15.jpg';
import articleimage4 from '../assets/images/article-16.jpg';

function TeamArticles() {
    return (
        <section className='team-articles-wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='section-header'>
                            <h2>1 row: 4 with bg</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='team-articles p-b-4 p-t-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='Omar Mukhtar' 
                                articleTitle='Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in' 
                                articleAuthor='U. R. Oliver' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='center' 
                                articleImage={articleimage1}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='Lil Larry' 
                                articleTitle='Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in' 
                                articleAuthor='U. R. Oliver' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='center' 
                                articleImage={articleimage2}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='Lubna Hamdan' 
                                articleTitle='Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in' 
                                articleAuthor='U. R. Oliver' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='center' 
                                articleImage={articleimage3}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='Shawn Jhon' 
                                articleTitle='Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels: best in' 
                                articleAuthor='U. R. Oliver' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='center' 
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

export default TeamArticles
