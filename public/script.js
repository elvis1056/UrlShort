document.querySelector('.btn__create').addEventListener('click', (e)=>{
    const inputurl = document.querySelector('.input').value
    if(inputurl !== ''){
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE){
                document.querySelector('.original_url').innerText = inputurl;
                document.querySelector('.shorten_url').innerText = `http://localhost:3000/s/${xhr.responseText}`;
                
            }
        }
        xhr.open('POST', '/')
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8')
        xhr.send(`originalurl=${inputurl}`);
    }
})