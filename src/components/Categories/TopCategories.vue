<template>
    <div class="categories-title">
        <h2>Top Categories</h2>
       <center> <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos accusam.</p></center>
    </div>
    <div class="grid">
        <div class="single-category">
            <i class="fa-solid fa-palette"></i>
            <h3>Design</h3>
        </div>  
        <div class="single-category ">
            <i class="fa-solid fa-code center"></i>
            <h3>Development</h3>
        </div>  
        <div class="single-category right">
            <i class="fa-solid fa-bullseye"></i>
            <h3>Marketing</h3>
        </div> 
        <div class="single-category seo">
            <i class="fa-solid fa-desktop"></i>
            <h3>SEO</h3>
        </div> 
        <div class="single-category bottom">
            <i class="fa-solid fa-camera center"></i>
            <h3>Photograpy</h3>
        </div> 
        <div class="single-category bottom right">
            <i class="fa-solid fa-chart-bar"></i>
            <h3>Business</h3>
        </div> 
        <div class="single-category bottom">
            <i class="fa-solid fa-magnifying-glass"></i>
            <h3>Analysis</h3>
        </div> 
        <div class="single-category bottom">
            <i class="fa-brands fa-android center"></i>
            <h3 class="width">IT & Software</h3>
        </div>
    </div>
    <div class="view-all-course">
       <a href="#"><span>View All Course</span></a>
    </div> 
</template>

<style scoped>
.categories-title {
    text-align: center;
    margin-top: 250px;
}
.categories-title h2 {
    font-size: 45px;
    line-height: 55px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #283747;
}
.categories-title p {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 60px;
    color: #747e88;
    width: 750px;
}
i {
    color: #283747;
    font-size: 30px;
}
.single-category {
    margin-left: 120px;
}
.single-category i {
   justify-content: center;
}
.single-category h3 {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin-top: 20px;
    color: #283747;
}
.grid {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    text-align: center;
}
.bottom {
    margin-top: 100px;
}
.view-all-course span {
    font-size: 16px;
    font-weight: 500;
    padding: 16px 36px;
    border: 2px solid #f2a92c;
    color: #283747;
    border-radius: 50px;
}
.view-all-course {
   transform: translateY(150px);
    text-align: center;
}
a {
    text-decoration: none;
}
.view-all-course span:hover {
    color: #fd7e14;
    transition: 0.2s all;
}
@media only screen and (max-width:1400px) {
    .single-category {
        width: 150px;
        margin-left: 100px;
    }
    .single-category h3 {
        font-size: 25px;
    }
    .categories-title p {
        width: 630px;
    }
    .single-category .width {
        width: 200px;
    }
}
@media only screen and (max-width:1200px) {
    .categories-title {
    text-align: center;
    margin-top: 250px;
}
    .single-category {
        width: 100px;
        margin-left: 100px;
    }
    .single-category h3 {
        font-size: 20px;
    }
    .categories-title p {
        width: 650px;
    }
    .single-category .width {
        width: 200px;
    }
}
@media only screen and (max-width:1000px) {
    .categories-title p {
        width: 600px;
    }
    .grid {
margin-top: 100px;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    text-align: center;
    }
    .seo {
        margin-top: 100px;
    }
    .single-category h3 {
        font-size: 30px;
    }
    .single-category {
        margin-left: 100px;
    }
    .right {
      margin-left: 150px;
    }
    .single-category .width {
        width: 200px;
    }
    .single-category .center {
        transform: translateX(35px);
    }
}
@media only screen and (max-width:770px) {
    .grid {
    display: grid;
    grid-template-columns: auto auto;
        justify-content: center;
        text-align: center;
    }
    .single-category h3 {
   font-size: 25px;

    }
    .categories-title p {
        width: 430px;
    }
    .right {
        margin-top: 100px;
    }
    .single-category {
        width: 200px;
    }
}
@media only screen and (max-width:585px) {
    .grid {
    display: grid;
    grid-template-columns: auto;
        justify-content: center;
        text-align: center;
    }
    .categories-title p {
        width: 500px;
    }
}
</style>