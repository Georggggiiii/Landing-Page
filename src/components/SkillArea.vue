<template>
    <div class="new-skils">
        <h2>Learn New Skills</h2>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utlabo</p>
    </div>

    <div class="row">
        <div class="width">
            <i class="fa-regular fa-pen-to-square"></i>
            <h4>Learn Anything</h4>
            <p>Lorem ipsum dolor sit amet, consetetu sadi ps cinelitr, sed diam nonumy eirtem Lorem ipsum dolor sit amet, consetetur.</p>
        </div>
      
        <div class="width two">
            <i class="fa-regular fa-pen-to-square"></i>
            <h4>Large Collection</h4>
            <p>Lorem ipsum dolor sit amet, consetetu sadi ps cinelitr, sed diam nonumy eirtem Lorem ipsum dolor sit amet, consetetur.</p>
        </div>
      
        <div class="width third">
            <i class="fa-regular fa-pen-to-square"></i>
            <h4>Certified Instructors</h4>
            <p>Lorem ipsum dolor sit amet, consetetu sadi ps cinelitr, sed diam nonumy eirtem Lorem ipsum dolor sit amet, consetetur.</p>
        </div>
      


    </div>
</template>

<style scoped>

.new-skils {
   text-align: center;
   display: grid;
   align-items: center;
   justify-content: center;
   margin-top: 5%;
}
.new-skils h2 {
    font-size: 40px;
    color: #283747;
    margin-top: 10%;
}
.new-skils p {
    width: 550px;
    margin-top: 30px;
    color: #747e88;
}
.width  i {
    font-size: 40px;
}
.width {
    background: white;
    margin: auto;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    color: #283747;
    margin-right: 50px;
}
.width h4 {
    color: #283747;
    font-size: 25px;
    padding-top: 30px;
}
.row {
    display: grid;
    grid-template-columns: auto auto auto;
   text-align: center;
  justify-content: center;
  margin-top: 70px;
 
}
.width p {
    width: 320px;
    padding-top: 30px;
    color: #747e88;
}
.test {
  background-color: green;
}
@media only screen and (max-width:1400px) {
    .width p {
    width: 250px;
    color: #747e88;
}
.new-skils p {
    width: 500px;
}
}
@media only screen and (max-width:1200px) {

    .row {
        transform: translateX(-20px);
    }
    .third h4{
        width: 200px;
    }
    .width p {
        width: 200px;
    }
}
@media only screen and (max-width:1000px) {

    .row {
        display: grid;
    grid-template-columns: auto auto;
   text-align: center;
  justify-content: center;
    }
    .width p {
        width: 250px;
        line-height: 25px;
    }
    .third h4{
        width: 250px;
    }
    .width:nth-child(2) {
        transform: translateX(50px);
    }
    .width:nth-child(3) {
        margin-top: 100px;
    }
}
@media only screen and (max-width:770px) {
    .row {
        display: grid;
    grid-template-columns: auto;
   text-align: center;
  justify-content: center;
    }
    
    .width:nth-child(2) {
        margin-top: 100px;
    }
    .width:nth-child(3) {
        margin-top: 100px;
    }
    .width h4 {
        margin-bottom: 10px;
    }
    .third h4{
        width: 250px;
    }
    .width p {
        width: 400px;
        line-height: 25px;
    }
    .new-skils p {
    width: 450px;
}
.width {
    text-align: center;
    justify-content: center;
    align-items: center;
}
.new-skils {
    margin-right: 80px;
}
.width:nth-child(2) {
        transform: translateX(5px);
    }
    .third h4{
       margin-left: 95px;
    }
}
@media only screen and (max-width:500px) {
    .new-skils p {
        width: 280px;
    }
    .new-skils {
        transform: translateX(50px);
    }
    .two {
       margin-left: 100px;
    }
}
@media only screen and (max-width:450px) {
    .new-skils h2{
        font-size: 35px;
    }
    .new-skils p {
        width: 250px;
    }
    .width p {
        width: 300px;
    }
 
 
    .third {
        width: 300px;
    }
    .third h4 {
        margin-left: 40px;
    }
}
</style>