<template>
    <nav>
        <div class="top">
            <div class="links">
                <a href="<?= $twitter ?>" target="_blank"><i class='bx bxl-twitter'></i></a>
                <a href="<?= $youtube ?>" target="_blank"><i class='bx bxl-youtube'></i></a>
                <a href="<?= $instagram ?>" target="_blank"><i class='bx bxl-instagram'></i></a>
                <a href="<?= $tiktok ?>" target="_blank"><i class='bx bxl-tiktok'></i></a>
                <a href="/feed" target="_blank"><i class='bx bx-rss'></i></a>
            </div>
            <div class="head">
                <img onclick="home()" src="https://journal.elliotmoreau.fr/static/img/logo.png">
            </div>
            <div class="weather">
                <i class='bx bx-cloud' id="weather-button"></i>
                <div id="weather-icon" class="weather-icons"><img src="https://openweathermap.org/img/wn/04d.png"
                        alt="Weather Icon" id="weather-img"></div>
                <p id="location" class="location"></p>
                <p id="temperature" class="temperature">Chargement...</p>
                <p id="description" class="description"></p>
            </div>
            <div class="search">
                <i onclick="search()" class='bx bx-search'></i>
                <i class="bx fa-bars bx-menu hamburger on"></i>
            </div>
        </div>
        <div class="alert">
            <ul class="navigation1">
                <i class='bx bxs-x-circle close' style="transform: none;" onmouseover="this.style.transform = 'none';"></i>
                <li><a href="/" class="out"><i class='bx bx-home'></i>
                        <p>Accueil</p>
                    </a></li>
                <li><a href="/videos" class="out"><i class='bx bxs-videos'></i>
                        <p>Vidéos</p>
                    </a></li>
                <li><a href="/podcast" class="out"><i class='bx bx-podcast'></i>
                        <p>Podcast</p>
                    </a></li>
                <li><a href="/sport" class="out"><i class='bx bx-run'></i>
                        <p>Sport</p>
                    </a></li>
                <li><a href="/#account" class="out"><i class='bx bxs-user-account'></i>
                        <p>Mon compte</p>
                    </a></li>
            </ul>
        </div>
        <!--NAVBAR-->
        <div class="header">
            <ul class="navigation">
                <li><a href="/"><i class='bx bx-home'></i>
                        <p>Accueil</p>
                    </a></li>
                <li><a href="/videos"><i class='bx bxs-videos'></i>
                        <p>Vidéos</p>
                    </a></li>
                <li><a href="/podcast"><i class='bx bx-podcast'></i>
                        <p>Podcast</p>
                    </a></li>
                <li><a href="/sport"><i class='bx bx-run'></i>
                        <p>Sport</p>
                    </a></li>
                <li><a href="/#account"><i class='bx bxs-user-account'></i>
                        <p>Mon compte</p>
                    </a></li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    padding: 0 50px;
    font-size: 1.5em;
}

.top .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
}

.top .links a {
    text-decoration: none;
    color: var(--primary);
    transition: .5s;
}

.top .links a:hover {
    color: var(--secondary);
}

.top .head {
    font-weight: 600;
}

.top .head span {
    color: var(--secondary);
}

.top .head {
    display: flex;
    position: fixed;
    top: 38px;
    left: 50%;
    transform: translate(-50%, -50%);
}

.top .head img {
    width: 75px;
    cursor: pointer;
}

.top .head img:hover {
    transform: scale(1.05);
}

.top .search i {
    transition: .5s;
    padding-right: 10px;
}

.top .search i:hover {
    color: var(--secondary);
    cursor: pointer;
}

.top .search .hamburger {
    display: none;
}

.top .weather {
    display: flex;
    flex-direction: row;
    margin-left: 30%;
    justify-content: center;
    align-items: center;
    background: linear-gradient(315deg, #578ee5, #a2beef);
    color: #fff;
    border-radius: 10px;
    padding: 5px;
    font-size: 13px;
    gap: 8px;
}

.bx-cloud {
    display: none !important;
    font-size: 25px;
}

#location {
    margin-left: -10px;
}

#weather-img {
    width: 80%;
}
</style>