import React from 'react';
import ArticleItem from './articleItem';
import '../App.scss';
import articleimage1 from '../assets/images/article-9.jpg';
import articleimage2 from '../assets/images/article-10.jpg';
import articleimage3 from '../assets/images/article-11.jpg';
import articleimage4 from '../assets/images/article-12.jpg';


function LifestyleArticles() {
    return (
        
    <section className='lifestyle-articles-wrapper'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='section-header'>
                        <h2>2 rows: 1 x 3</h2>
                    </div>
                </div>
            </div>
            <div className='lifestyle-articles p-b-4 p-t-4'>
            <div className='row'>
                <div className='col-12'>
                    <div className='article-wrapper side-by-side sticky-post'>
                        <ArticleItem 
                        articleTag='Travel' 
                        articleTitle='Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all' 
                        articleCaption='Exhin imlave asfear asfasas afsfeaarsa asfasfasf asfasfa ten cultable doice inverum' 
                        articleAuthor='Cvita Doleschall' 
                        articleType='default' 
                        articleStyle='mediafirst' 
                        articleAlignment='left' 
                        articleImage={articleimage1}
                        articlePath='/article'
                        />
                    </div>
                </div>                 
            </div>
            <div className='row m-t-5'>
                <div className='col-4'>
                    <div className='article-wrapper side-by-side'>
                        <ArticleItem 
                        articleTag='Culture' 
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
                        articleTag='Culture' 
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
                <div className='col-4'>
                    <div className='article-wrapper side-by-side'>
                        <ArticleItem 
                        articleTag='Culture' 
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
            </div>
            </div>
        </div>
    </section>
    );
}

export default LifestyleArticles
