import React from 'react'
import ArticleItem from './articleItem';
import '../App.scss';
import articleimage1 from '../assets/images/article-26.jpg';
import articleimage2 from '../assets/images/article-27.jpg';
import articleimage3 from '../assets/images/article-28.jpg';
import articleimage4 from '../assets/images/article-29.jpg';
import articleimage5 from '../assets/images/article-30.jpg';
import articleimage6 from '../assets/images/article-31.jpg';

function FoodArticles() {
    return (
        <section className='food-articles-wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='section-header'>
                            <h2>2 rows: 3 x 3</h2>
                        </div>
                    </div>
                </div>
                <div className='food-articles p-b-4 p-t-4'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='article-wrapper side-by-side'>
                                <ArticleItem 
                                articleTag='keto kebabs' 
                                articleTitle='Meals on wheels best food trucks in the UAE' 
                                articleAuthor='U. R. Oliver' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='left' 
                                articleImage={articleimage1}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='article-wrapper side-by-side'>
                                <ArticleItem 
                                articleTag='italian deserts' 
                                articleTitle='Meals on wheels best food trucks in the UAE' 
                                articleAuthor='U. R. Oliver' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='left' 
                                articleImage={articleimage2}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='article-wrapper side-by-side'>
                                <ArticleItem 
                                articleTag='japanese flavors' 
                                articleTitle='Meals on wheels best food trucks in the UAE' 
                                articleAuthor='U. R. Oliver' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='left' 
                                articleImage={articleimage3}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row m-t-4'>
                        <div className='col-4'>
                            <div className='article-wrapper side-by-side'>
                                <ArticleItem 
                                articleTag='vegan meals' 
                                articleTitle='Meals on wheels best food trucks in the UAE' 
                                articleAuthor='U. R. Oliver' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='left' 
                                articleImage={articleimage4}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='article-wrapper side-by-side'>
                                <ArticleItem 
                                articleTag='french pasta' 
                                articleTitle='Meals on wheels best food trucks in the UAE' 
                                articleAuthor='U. R. Oliver' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='left' 
                                articleImage={articleimage5}
                                articlePath='/article'
                                />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='article-wrapper side-by-side'>
                                <ArticleItem 
                                articleTag='korean bbq' 
                                articleTitle='Meals on wheels best food trucks in the UAE' 
                                articleAuthor='U. R. Oliver' 
                                articleType='default' 
                                articleStyle='mediafirst' 
                                articleAlignment='left' 
                                articleImage={articleimage6}
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

export default FoodArticles
