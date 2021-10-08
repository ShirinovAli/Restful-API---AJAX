document.querySelector('#getOne').addEventListener('click', getOne);

document.querySelector('#getAll').addEventListener('click', getAll);

document.querySelector('#btn_post').addEventListener('click', postData);

var spinner = document.querySelector('#spinner-border');

function getOne() {
    spinner.style.display = 'block';
    var id = document.getElementById('postId').value;
    var url = "https://jsonplaceholder.typicode.com/posts/" + id;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    setTimeout(() => {
        xhr.onload = function () {

            if (this.status == 200) {

                spinner.style.display = 'none';

                var post = JSON.parse(this.responseText);

                var html = "";

                html += `<div class="card border-success mb-3" style="max-width: 18rem;">
                                <div class="card-header bg-transparent border-success">${post.id}-${post.title}</div>
                                <div class="card-body text-success">
                                    <p class="card-text">${post.body}</p>
                                </div>
                            </div>`;



                document.querySelector("#results").innerHTML = html;
            }
        }
        xhr.send();
    }, 1500);


}


function getAll() {
    spinner.style.display = 'block';
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    setTimeout(() => {
        xhr.onload = function () {
            if (this.status == 200) {

                spinner.style.display = 'none';

                var posts = JSON.parse(this.responseText);

                var html = "";

                posts.forEach(post => {
                    html += `<div class="card border-success mb-3" style="max-width: 18rem;">
                                <div class="card-header bg-transparent border-success">${post.title}</div>
                                <div class="card-body text-success">
                                    <p class="card-text">${post.body}</p>
                                </div>
                            </div>`;
                });


                document.querySelector("#results").innerHTML = html;
            }
        }
        xhr.send();
    }, 1500);


}


function postData() {
    const data = {
        userId: 1,
        title: 'new title',
        body: 'new body'
    };

    var json = JSON.stringify(data);
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        if (xhr.status === 201 && xhr.readyState === 4) {
            var post = xhr.responseText;
            console.log(post);
        }
    }
    xhr.send(json);
}
