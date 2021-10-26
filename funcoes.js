const LinksSocialMedia = {
    github: 'marceloAugustoSG',
    youtube: 'UCAgsqKx_kPmnlSG7vqhfkAg',
    facebook: 'Marcelinhonfsu2/',
    instagram: 'marcelo7_/',
    twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userBio.textContent = data.bio
            userName.textContent = data.name
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })
}
getGitHubProfileInfos()