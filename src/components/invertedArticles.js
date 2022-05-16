import React from 'react'
import ArticleItem from './articleItem';
import '../App.scss';
import articleimage1 from '../assets/images/article-18.jpg';
import articleimage2 from '../assets/images/article-19.jpg';
import articleimage3 from '../assets/images/article-20.jpg';

function InvertedArticles() {
    return (
        <section className='inverted-articles-wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='section-header'>
                            <h2>1 row: 2 x 1 inverted</h2>
                        </div>
                    </div>
                </div>
                <div className='inverted-articles p-b-4 p-t-4'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='OPEN HOUSE' 
                                articleTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.'
                                articleAuthor='U. R. Oliver' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='center' 
                                articleImage={articleimage1}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='OPEN HOUSE' 
                                articleTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.'
                                articleAuthor='U. R. Oliver' 
                                articleType='default' 
                                articleStyle='contentfirst' 
                                articleAlignment='center' 
                                articleImage={articleimage2}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='OPEN HOUSE' 
                                articleTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.'
                                articleAuthor='U. R. Oliver' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='center' 
                                articleImage={articleimage3}
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

export default InvertedArticles
