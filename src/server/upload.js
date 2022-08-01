import React from 'react'

function upload() {
  return (
    <div>
        <form action='/upload' method='post' encType='multipart/form-data'>
            <input type='file' name='file'></input>
            <input type='submit' value='Upload' />
        </form>
    </div>
  )
}

export default upload