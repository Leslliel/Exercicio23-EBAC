$(document).ready(function() {
    const nameProfile =  $('#name')[0];
    const userNameProfile = $('#username')[0];
    const avatarProfile = $('#avatar')[0];
    const followersProfile = $('#followers')[0];
    const followingProfile = $('#following')[0];
    const reposProfile = $('#repos')[0];
    const linkProfile = $('#link')[0];
    const apiGitHubProfile = 'https://api.github.com/users/Leslliel';

    fetch(apiGitHubProfile)
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nameProfile.innerText = json.name;
        userNameProfile.innerText = json.login;
        avatarProfile.src = json.avatar_url;
        followersProfile.innerText = json.followers;
        followingProfile.innerText = json.following;
        reposProfile.innerText = json.public_repos;
        linkProfile.href = json.html_url;
    })
})