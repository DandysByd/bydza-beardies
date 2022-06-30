import React from 'react'
import articles from '../database/articles'

function Single_article(props) {
  return (
    <div className='article-background'>
        {
            articles.map(x =>{
                return(
                  props.a === x.id ? 
                  <div className='text-div-outer'>
                    <div className='text-div-inner'>
                        <div className='first-article-div'>
                          <h1 className='header-text'>{x.header}</h1>             
                          <span className='article-text'>{x.article_text_first}</span>     
                          <img className='article-image first-article-image' src={x.image_first} alt='article-image'></img>
                          </div>
                          <div className='second-artile-div'>
                          <span className='article-text article-text-second'>{x.article_text_second}</span>
                          <img className='article-image second-article-image' src={x.image_second} alt='article-image'></img>
                            </div>     
                            <div className='third-article-div'>
                            <span className='article-text article-text-third'>{x.article_text_third}</span>
                              </div>
                          <img className='article-image first-article-image' src={x.image_third} alt='article-image'></img>

                    </div>
                  </div>
                  :
                  <>
                  </>
                )       
            })
        }
    </div>
  )
}

export default Single_article