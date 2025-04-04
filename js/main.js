document.getElementById('check').addEventListener('click', checkString)

function checkString(){

    const string = document.getElementById('string').value

    fetch(`/api?string=${string}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        document.getElementById('msg').textContent = data.msg
    })
}

