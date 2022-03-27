import React from 'react'
import { useState } from 'react/cjs/react.development';
import Navbar from "../App";
import articles from '../database/articles'
import '../Styles/articles.css'
import Singlearticle from '../Components/Single_article'

function Actualities() {

    
    const [articleNum, setArticleNum] = useState(null)

    function setArticle(id) {
        setArticleNum(id)
        window.scrollTo(0,0)
        console.log(articleNum)
    }

    function setBack(){
        setArticleNum(null)
        window.scrollTo(0,0)
        console.log(articleNum)
    }

    return(
        <div className='articles-holder'>
            { articles.map((x,key) =>{
                return(
                    articleNum === x.id ? (
                        
                        <div className='single-article-holder' onClick={setBack}>
                        <Singlearticle a={articleNum}></Singlearticle>
                        </div>
                    ) : (
                    <div onClick={()=>setArticle(x.id)} className={articleNum === null ? 'articles-visible' : 'articles-hidden'}>
                 
                    <div className='single-article-div-wrapper'>
                        <div className='single-article-div'>
                        <div className='image-div'><img className='image' alt={x.header +' image'} src={x.image_first}></img></div>
                        <div className='text-div'>
                            <h2 className='article-header'>{x.header}</h2>
                            <span className='article-text-unclicked'>{x.article_text_first}</span>
                           
                        </div>
                        </div>
                    </div>
                    </div>
                    )
                )
            })
            
        }
        </div>
        
    )
}
export default Actualities;