function post(){
    var el = document.getElementById('posts-list');
    elChild = document.createElement('li');
    elChild.setAttribute("id", "gen");
    el.appendChild(elChild);

    var el = document.getElementById('gen');
    el.removeAttribute('id');
    elChild = document.createElement('div');
    elChild.setAttribute("id", "gen");
    elChild.setAttribute("class", "post");
    el.appendChild(elChild);

    var el = document.getElementById('gen');
    elChild = document.createElement('div');
    elChild.setAttribute("id", "gen0");
    elChild.setAttribute("class", "post-vote");
    el.appendChild(elChild);

    var el = document.getElementById('gen');
    el.removeAttribute('id');
    elChild = document.createElement('div');
    elChild.setAttribute("id", "gen1");
    elChild.setAttribute("class", "post-content-body");
    el.appendChild(elChild);

    var el = document.getElementById('gen0');
    el.removeAttribute('id');
    elChild = document.createElement('div');
    elChild.setAttribute("id", "gen0");
    elChild.setAttribute("class", "voting");
    el.appendChild(elChild);

    var el = document.getElementById('gen0');
    el.removeAttribute('id');
    elChild = document.createElement('span');
    elChild.setAttribute("class", "upvote");
    elChild.innerHTML = "▲";
    el.appendChild(elChild);
    elChild = document.createElement('br');
    el.appendChild(elChild);
    elChild = document.createElement('span');
    elChild.setAttribute("class", "downvote");
    elChild.innerHTML = "▼";
    el.appendChild(elChild);

    var el = document.getElementById('gen1');
    elChild = document.createElement('div');
    elChild.setAttribute("id", "gen0");
    elChild.setAttribute("class", "context");
    el.appendChild(elChild);

    var el = document.getElementById('gen1');
    el.removeAttribute('id');
    elChild = document.createElement('div');
    elChild.setAttribute("id", "gen1");
    elChild.setAttribute("class", "content");
    el.appendChild(elChild);

    var el = document.getElementById('gen0');
    elChild = document.createElement('span');
    elChild.setAttribute("class", "dname");
    elChild.innerHTML = "Rodger Castle";
    el.appendChild(elChild);

    var el = document.getElementById('gen0');
    elChild = document.createElement('span');
    elChild.setAttribute("class", "seperator");
    elChild.innerHTML = "|";
    el.appendChild(elChild);

    var el = document.getElementById('gen0');
    el.removeAttribute('id');
    elChild = document.createElement('span');
    elChild.setAttribute("class", "uname");
    elChild.innerHTML = "@rodgercciii";
    el.appendChild(elChild);

    var el = document.getElementById('gen1');
    el.removeAttribute('id');
    elChild = document.createElement('span');
    elChild.setAttribute("class", "postbody");
    elChild.innerHTML = document.getElementById('posting-entry-box').value;
    el.appendChild(elChild);

    document.getElementById('posting-entry-box').value = "";
}