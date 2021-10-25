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

        alert(li.children[0].href)
    }
}

changeSocialMediaLinks()