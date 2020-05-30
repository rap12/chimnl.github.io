---
layout: default
title: About CHI MNL
---
<style>
    .about{
        font-size: 20px !important;
    }
    .heading{
        background-image: url(assets/img/zigzag.png);
        background-position: center; 
        background-size: cover;
        /* background: rgb(46,171,204);
        background: linear-gradient(219deg, rgba(46,171,204,1) 7%, rgba(69,132,217,1) 92%) */
    }

</style>
<div class = "heading pb-5 pt-5" style = "height:400px auto; ">
    <div class = "container text-white">
        <h3 class = "font-weight-bolder text-white" >About CHI MNL</h3>
        <p class = "about mt-5"> {{ site.data.info.about.description }} </p>
    </div>
</div>

<section class = "pt-5 mb-5">
    <div class = "container">
        <h3 class = "font-weight-bolder" >History and Charter</h3>
        <p class = "about mt-5"> {{ site.data.info.history.description }} </p>
    </div>
</section>