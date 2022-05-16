import React from 'react';
import ArticleItem from './articleItem';
import '../App.scss';
import articleimage1 from '../assets/images/article-1.jpg';
import articleimage2 from '../assets/images/article-2.jpg';
import articleimage3 from '../assets/images/article-3.jpg';


function FeaturedArticle() {
    return (
        
    <section className='featured-articles p-b-4 p-t-4'>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='article-wrapper sticky-post'>
                        <ArticleItem 
                        articleTag='Travel' 
                        articleTitle='Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all' 
                        articleCaption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel risus dignissim interdum. ' 
                        articleAuthor='U. R. Oliver' 
                        articleType='default' 
                        articleStyle='contentfirst' 
                        articleAlignment='center' 
                        articleImage={articleimage1}
                        articlePath='/article'
                        />
                    </div>
                </div>
                <div className='col-3'>
                    <div className='article-wrapper'>
                        <ArticleItem 
                        articleTag='Dine' 
                        articleTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.' 
                        articleAuthor='U. R. Oliver' 
                        articleType='default' 
                        articleStyle='nomedia'
                        articlePath='/article'
                        />
                    </div>
                    <div className='article-wrapper'>
                        <ArticleItem 
                        articleTag='Dine' 
                        articleTitle='Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium lobortis.' 
                        articleAuthor='U. R. Oliver' 
                        articleType='default' 
                        articleStyle='nomedia' 
                        articlePath='/article'
                        />
                    </div>
                    <div className='article-wrapper'>
                        <ArticleItem 
                        articleTag='OPEN HOUSE' 
                        articleTitle='Meals on wheels best food trucks in the UAE' 
                        articleAuthor='U. R. Oliver' 
                        articleType='default' 
                        articleStyle='mediafirst' 
                        articleImage={articleimage2}
                        articlePath='/article'
                        />
                    </div>
                </div>
                <div className='col-3'>
                    <div className='article-wrapper'>
                        <ArticleItem 
                        articleTag='OPEN HOUSE' 
                        articleTitle='UAE: CBSE Term 1 exams begin tomorrow; important guidelines announced' 
                        articleAuthor='U. R. Oliver' 
                        articleType='default' 
                        articleStyle='mediafirst' 
                        articleImage={articleimage3}
                        articlePath='/article'
                        />
                    </div>
                    <div className='article-wrapper'>
                        <ArticleItem 
                        articleTag='Dine' 
                        articleTitle='World Expo in Dubai: MP delegation holds discussion over film city and institute' 
                        articleAuthor='U. R. Oliver' 
                        articleType='default' 
                        articleStyle='nomedia'
                        articlePath='/article'
                        />
                    </div>
                    <div className='article-wrapper'>
                        <ArticleItem 
                        articleTag='Dine' 
                        articleTitle='Meals on wheels best food trucks in the UAE' 
                        articleAuthor='U. R. Oliver' 
                        articleType='default' 
                        articleStyle='nomedia' 
                        articlePath='/article'
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default FeaturedArticle
