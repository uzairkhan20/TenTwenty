import React from 'react'
import ArticleItem from './articleItem';
import '../App.scss';

import articleimage1 from '../assets/images/article-17.jpg';

function FullwidthArticle() {
    return (
        <section className='fullwidth-articles-wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='section-header'>
                            <h2>1 full width article</h2>
                        </div>
                    </div>
                </div>
                <div className='fullwidth-articles p-b-4 p-t-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='Long Read' 
                                articleTitle='Louvre Abu Dhabi marks 4th anniversary with world class exhibition Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all' 
                                articleCaption='Meals on wheels: best in the UAE'
                                articleAuthor='A. R. Oliver' 
                                articleType='fullwidth' 
                                articleStyle='mediafirst' 
                                articleAlignment='center' 
                                articleImage={articleimage1}
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

export default FullwidthArticle
