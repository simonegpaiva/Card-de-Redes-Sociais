const LinksSocialMedia = {
  github: "simonegpaiva",
  youtube: "UCLPE8vp9-81p7zZ8XqvJJTA",
  facebook: "simone.paiva2",
  instagram: "siiii.paiva",
  twitter: "SiPaiva_"
}



function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
  })
}

getGitHubProfileInfos()

