import React from 'react'
import ArticleItem from './articleItem';
import '../App.scss';
import articleimage1 from '../assets/images/article-21.png';
 

function StoryArticle() {
    return (
        <section className='story-articles-wrapper'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='section-header'>
                            <h2>1 row: 2 stories with bg</h2>
                        </div>
                    </div>
                </div>
                <div className='story-articles p-b-5 p-t-5 m-t-4 m-b-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='article-wrapper'>
                                <ArticleItem 
                                articleTag='Half full' 
                                articleTitle='Louvre Abu Dhabi marks 4th anniversary with world class exhibition Louvre Abu Dhabi marks 4th' 
                                articleCaption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.'
                                articleType='story'
                                storyHeading='one story, two perspectives'
                                storyTag='Half empty' 
                                storyTitle='Louvre Abu Dhabi marks 4th anniversary with world class exhibition Louvre Abu Dhabi marks 4th' 
                                storyCaption='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.' 
                                articleAlignment='left' 
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

export default StoryArticle
