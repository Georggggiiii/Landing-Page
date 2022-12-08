<template>
        <div class="grid">
               <div class="right-image">
            <img src="https://preview.uideck.com/items/learn/assets/images/video-bg.jpg" alt="">
        </div>
        <div class="area-info">
            <h2>What Makes Us Different?</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos accusam.</p>
          <div class="flex">
            <div class="icon">
                <i class="fa-solid fa-globe"></i>
            </div>
            <div class="content">
                <h2>200+ Online Course</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadips cinelitr, sed diam nonumy eirmod tempor</p>
            </div>
          </div>
          <div class="flex">
            <div class="icon">
                <i class="fa-solid fa-users"></i>
            </div>
            <div class="content">
                <h2>Expert Instructors</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadips cinelitr, sed diam nonumy eirmod tempor</p>
            </div>
          </div>
          <div class="flex">
            <div class="icon">
                <i class="fa-solid fa-credit-card"></i>
            </div>
            <div class="content">
                <h2>Lifetime Access & Support</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadips cinelitr, sed diam nonumy eirmod tempor</p>
            </div>
          </div>
        </div>
    
    </div>
</template>

<style scoped>

.grid {
    transform: translateY(350px);
  display: flex;
 
}
.right-image img{
    width: 90%;
}
.area-info {
    width: 850px;
 margin-top: 70px;

}
.area-info h2 {
    font-size: 45px;
    line-height: 55px;
    margin-bottom: 20px;
    color: #283747;
}
.area-info p {
    width: 550px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: #747e88;
}
i {
    color: #283747;
    font-size: 25px;
}
h2 {
    color: #283747;
}
.icon {
    width: 87px;
    height: 87px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 14px 33px rgba(229,229,229,.8);
}
.flex {
    display: flex;
    margin-top: 30px;
}
.content h2 {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 5px;
}
.content {
    margin-left: 30px;
}
.content p {
    width: 450px;
}
@media only screen and (max-width:1400px) {
    .area-info h2 {
       width: 500px;
    }
    .area-info p {
        width: 500px;
    }
    .right-image {
        margin-top: 130px;
    }
    .content {
    margin-left: 20px;
}
.content p {
    width: 350px;
}
}
@media only screen and (max-width:1200px) {
    .area-info {
        margin-top: -20px;
    }
    .area-info h2 {
       width: 400px;
    }
    .area-info p {
        width: 380px;
    }
    .right-image {
        margin-top: 130px;
    }
    .content {
    margin-left: 20px;
}
.content p {
    width: 280px;
}
}
@media only screen and (max-width:990px) {
    .grid {
        display: grid;
    }
    .area-info {
      display: grid;
      position: absolute;
       top: 120%;
       left: 15%;
       width: 600px;
    }
    .right-image {
 
     width: 106%;
    }
    .right-image img {
        width:100%;
    }
    .area-info h2 {
       width: 600px;
    }
    .area-info p {
        width: 580px;
    }
    .content p {
    width: 500px;
}
}
@media only screen and (max-width:770px) {

    .area-info {
        margin-top: -20px;
        width: 400px;
    }
    .area-info h2 {
       width: 400px;
    }
    .area-info p {
        width: 380px;
    }
}
@media only screen and (max-width:650px) {
    .area-info {
        width: 330px;
    transform: translateX(50px);
    }
    .area-info h2 {
       width: 350px;
    }
    .area-info p {
        width: 300px;
    }
    .flex {
        width: 400px;
        transform: translateX(-30px);
    }
    .content {
        width: 300px;
    }
}
@media only screen and (max-width:520px) {
    .area-info {
        margin-left: -80px;
    }
    .area-info h2 {
     font-size: 25px;
    }
    .area-info p {
        font-size: 15px;
    }
}
</style>