<template>
    <div class="section-title">
        <h2>From The Blog</h2>
        <p class="lorem">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabo</p>
        <div class="grid">
            <div class="single-item"  v-for="(image,index) in images" :key="index">
                <img :src="image.url" alt="">
                <br>
                <a href="#" class="title">{{image.title}}</a>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        images: [
            {
                id:1,
                url:"https://preview.uideck.com/items/learn/assets/images/blog/blog-1.jpg",
                title:"Modern website design tools",
            },
            {
                id:2,
                url:"https://preview.uideck.com/items/learn/assets/images/blog/blog-2.jpg",
                title:"How To install SSL"
            },
            {
                id:3,
                url:"https://preview.uideck.com/items/learn/assets/images/blog/blog-3.jpg",
                title:"Getting started with Figma"
            }
        ]
    }
}
}
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: auto auto auto;
    text-align: center;
    justify-content: center;
}
.section-title {
    margin-top: 55%;
    justify-content: center;
    display: grid;
}
.section-title h2 {
    font-size: 35px;
    line-height: 55px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #283747;
 
}
.section-title p {
width: 550px;
line-height: 25px;
color: #747e88;

}
.single-item img {
    width: 80%;
    border-radius: 9px;
}
.single-item {
    margin-top: 30px;
    width: 500px;
    margin-left: -70px;
}
.single-item a {
    text-decoration: none;
    font-size: 25px;
    line-height: 55px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #283747;
}
@media only screen and (max-width:1400px) {
        .section-title p {
            width: 500px;
        }
        .single-item  {
            width: 430px;
            transform: translateX(25px);
            margin-top: 50px;
        }
        .single-item img {
    width: 80%;
    border-radius: 9px;
}
.single-item .title {
    font-size: 25px;
}
}
@media only screen and (max-width:1200px) {
    .section-title p {
            width: 500px;
            
        }
        .single-item  {
            width: 400px;
            transform: translateX(25px);
            margin-top: 50px;
        }
        .single-item img {
    width: 75%;
    border-radius: 9px;
}
.single-item .title {
    font-size: 20px;
}
.section-title {
 transform: translateX(60px);

}
}
@media only screen and (max-width:990px) {
    .section-title {
        transform: translateX(50px);
    }
    .grid {
    display: grid;
    grid-template-columns: auto auto;
    text-align: center;
    justify-content: center;
}
.single-item p {
    width: 350px;
}
.single-item  {
            width: 450px;
            transform: translateX(25px);
            margin-top: 50px;
        }
        .single-item img {
    width: 80%;
    border-radius: 9px;
}
.section-title p {
    width: 600px;
}
}
@media only screen and (max-width:770px) {
    .grid {
    display: grid;
    grid-template-columns: auto;
    text-align: center;
    justify-content: center;
}
.section-title {
    margin-top: 100%;
    justify-content: center;
    display: grid;
    transform: translateX(35px);
}
.section-title .lorem ,h2 {
    transform: translateX(-13px);
}
.section-title .lorem {
    width:450px;
}
.single-item img {
    width: 90%;
    border-radius: 9px;

}
.single-item  {
            width: 600px;
            margin-top: 50px;
        }
}
</style>