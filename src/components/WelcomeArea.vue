<template>
    <div class="grid">
        <div class="area-info">
            <h2>Welcome To Online Learning</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabo remagn ane aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <a href="#">Read More <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div class="right-image">
            <img src="https://preview.uideck.com/items/learn/assets/images/welcome-img.png" alt="">
        </div>
    </div>
</template>

<style scoped>

.grid {
    transform: translateY(150px);
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;

}
.area-info h2 {
    font-size: 45px;
    line-height: 55px;
    margin-bottom: 20px;
    color: #283747;
    width: 450px;
}
.area-info p {
    width: 550px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: #747e88;
}
.area-info a {
    text-decoration: none;
    font-size: 18px;
    color: #f2a92c;
    line-height: 5;
    border-bottom: 1.5px solid #f2a92c;
}
.area-info i {
    padding-left: 5px;
}
@media only screen and (max-width:1400px) {
    .grid {
        margin-left: 100px;
    }
    .right-image img{
        width: 80%;
    }
    .area-info p {
        width: 480px;
    }
}
@media only screen and (max-width:1200px) {
    .right-image img{
        width: 80%;
    }
    .area-info p {
        width: 400px;
    }
}
@media only screen and (max-width:1000px) {
    .grid {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
}
    .area-info h2 {
        width: 100%;
    }
    .area-info p {
        width: 70%;
    }
    .area-info {
        transform: translateX(50px);
    }
    .right-image {
        transform: translateX(50px);
    }
}
@media only screen and (max-width:550px) {
    .grid {
        transform: translate(-80px,100px);
    }
}
@media only screen and (max-width:350px) {
    .grid {
        transform: translate(-110px,100px);
    }
}

</style>