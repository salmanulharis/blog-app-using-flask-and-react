import React, { useEffect, useState } from 'react'
import APIService from './APIService'

function Form(props) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        setTitle(props.article.title)
        setBody(props.article.body)
    }, [props.article])

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, body})
        .then(resp => props.updatedData(resp))
        .catch(error => console.log(error))
    }

    const insertArticle = () => {
        APIService.InsertArticle({title, body})
        .then(resp => props.insertedArticle(resp))
        .catch(error => console.log(error))
    }
  return (
    <div>
        {props.article ? (
            <div className="mb-3">
                <label htmlFor="title" className='form-label'>Title</label>
                <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} className='form-control' placeholder='Please enter title'/>

                <label htmlFor="body" className='form-label'>Description</label>
                <textarea rows="5" onChange={(e) => setBody(e.target.value)} value={body} className='form-control' placeholder='Please enter the description' />

                { props.article.id ? 
                    <button onClick={updateArticle} className='btn btn-success mt-3'>Update</button> :
                    <button onClick={insertArticle} className='btn btn-success mt-3'>Insert</button>
                }
                
            </div>
        ): null}
    </div>
  )
}

export default Form