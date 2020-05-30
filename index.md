---
layout: default
title: "CHI MNL"
---
<style>
    @media only screen and (max-width:540px){
        .heading{
            height: 350px !important;
            
        }
    }
    .about{
        font-size: 20px !important;
    }
    .heading h1{
        margin-top:90px;
    }
    .heading{
        height:240px;
        background-image: url(assets/img/zigzag.png);
        background-position: center; 
        background-size: cover;
        /* background: rgb(46,171,204);
        background: linear-gradient(219deg, rgba(46,171,204,1) 7%, rgba(69,132,217,1) 92%) */
    }

</style>

<div class = " pt-1 heading" >
    <h1 class = "text-white text-center font-weight-bolder" style ="letter-spacing: 5px; font-family: barabara;"> Manila ACM SIGCHI Chapter </h1>
</div>

<section class = "pt-5 mb-5">
    <div class = "container">
        <h3 class = "font-weight-bolder" >About CHI MNL</h3>
        <p class = "about mt-5"> {{ site.data.info.about.description }} </p>
    </div>
</section>

<section  class = "pt-5 pb-5 bg-light">
    <div class = "container">
        <h3 class = "font-weight-bolder" >Upcoming Events</h3>
        {% include upcoming-events.html %}
    </div>
</section>