import React from 'react';

import { Link } from 'react-router-dom';
import '../App.scss';
import star from '../assets/images/star.png';

const TYPE = ['default','fullwidth', 'story', 'reviews', 'video'];
const STYLE = ['mediafirst', 'contentfirst', 'nomedia'];
const ALIGNMENT = ['left','center'];



export const ArticleItem = ({
    articleTag,
    articleTitle,
    articleCaption,
    articleAuthor,
    articleType, 
    articleStyle, 
    articleImage, 
    articleVideo,
    articleAlignment,
    articlePath,
    articleReview,
    storyTag,
    storyTitle,
    storyCaption,
    storyHeading
}) => {
    const checkType = TYPE.includes(articleType) ? articleType : TYPE[0];
    const checkStyle = STYLE.includes(articleStyle) ? articleStyle : STYLE[0];
    
    const checkAlignment = ALIGNMENT.includes(articleAlignment) ? articleAlignment : ALIGNMENT[0];

    

    if (checkType == 'default')
    {
        if (checkStyle == 'contentfirst')
            {
                return (
                    <Link to={articlePath} className={checkAlignment}>
                        <div className='article-content'>
                            <span className='tag'>{articleTag}</span>
                            <h4 className='title'>{articleTitle}</h4>
                            <p>{articleCaption}</p>
                            <span className='author'>{articleAuthor}</span>
                        </div>
                        <figure>
                            <img src={articleImage} alt='travel' />
                        </figure>
                    </Link>
                );
            }
        else if(checkStyle == 'mediafirst')
            {
                return (
                    <Link to={articlePath} className={checkAlignment}>
                        <figure>
                            <img src={articleImage} alt='travel' />
                        </figure>
                        <div className='article-content'>
                            <span className='tag'>{articleTag}</span>
                            <h4 className='title'>{articleTitle}</h4>
                            <p>{articleCaption}</p>
                            <span className='author'>{articleAuthor}</span>
                        </div>
                    </Link>
                );
            }
        else
            {
                return (
                    <Link to={articlePath} className={`${checkAlignment} ${checkStyle}`}>
                        <div className='article-content'>
                            <span className='tag'>{articleTag}</span>
                            <h4 className='title'>{articleTitle}</h4>
                            <p>{articleCaption}</p>
                            <span className='author'>{articleAuthor}</span>
                        </div>
                    </Link>
                );
            }     
    }
    else if(checkType == 'fullwidth')
    {
        return (
            <Link to={articlePath} className={checkAlignment}>
                <figure>
                    <img src={articleImage} alt='travel' />
                </figure>
                <span className='tag'>{articleTag}</span>
                <div className='article-content'>
                    <p>{articleCaption}</p>
                    <h4 className='title'>{articleTitle}</h4>
                    <span className='author'>{articleAuthor}</span>
                </div>
            </Link>
        );
    }
    else if(checkType == 'story')
    {
        return (
            <Link to={articlePath} className={checkAlignment}>
                <div className='story-heading'>
                    <span>{storyHeading}</span>
                </div>
                <div className='story-wrapper'>
                    <div className='story-content-dark'>
                        <div className='article-content'>
                            <span className='tag'>{articleTag}</span>
                            <h4 className='title'>{articleTitle}</h4>
                            <p>{articleCaption}</p>
                        </div>
                    </div>
                    <div className='story-image'>
                        <figure>
                            <img src={articleImage} alt='travel' />
                        </figure>
                    </div>
                    <div className='story-content-light'>
                        <div className='article-content'>
                            <span className='tag'>{storyTag}</span>
                            <h4 className='title'>{storyTitle}</h4>
                            <p>{storyCaption}</p>
                        </div>
                    </div>
                </div>
                
            </Link>
        );
    }
    else if(checkType == 'reviews')
    {
        return (
            <Link to={articlePath} className={checkAlignment}>
                <figure>
                    <img src={articleImage} alt='travel' />
                    <span className='rating'><img src={star} />{articleReview}</span>
                </figure>
                <div className='article-content'>
                    <span className='tag'>{articleTag}</span>
                    <h4 className='title'>{articleTitle}</h4>
                    <p>{articleCaption}</p>
                    <span className='author'>{articleAuthor}</span>
                </div>
            </Link>
        );
    }
    else if(checkType == 'video')
    {
        return (
            <div className='video-wrapper' onClick={
                e => e.target.play()
                }>
                <div className='video-player'>
                <video width="320" height="240" src={articleVideo} poster={articleImage} controls></video>
                </div>
                <Link to={articlePath} className={checkAlignment}>
                    <div className='article-content'>
                        <span className='tag'>{articleTag}</span>
                        <h4 className='title'>{articleTitle}</h4>
                        <p>{articleCaption}</p>
                        <span className='author'>{articleAuthor}</span>
                    </div>
                </Link>
            </div>
        );
    }
    
};

export default ArticleItem;