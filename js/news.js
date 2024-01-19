var btn_men = document.getElementById("news")
var mentor = document.getElementById("mentores")
var twitter_tweet = document.getElementById("twitter_tweet")
var empre = document.getElementById("empresas")

btn_men.addEventListener("click", (e) => {
    e.preventDefault()
    twitter_tweet.style.display="none"
})