---
layout: default
title: "CHI MNL Events"
---
<style>
     @media only screen and (max-width: 991px) {
        .past-event .past-img{
            max-width: 100% !important;
            min-width: 100% !important;
            min-height: 340px !important;
            background-position: center !important;
        }
     }
    .past-event{
        position:relative;
        width:auto;
        overflow: hidden;
        padding: 1.5rem;
        transition: ease all 0.3s;
    }
    .past-event .past-img{
        /* border-radius: 15px; */
        max-height: 25rem;
        max-width: 35rem;
        min-height: 25rem;
        min-width: 35rem;
        /* height:auto; */
    }

    .past-event .past-img{
        /* background-image: url('/assets/img/events/ubiquitous.jpeg'); */
        /* width:100px; */
    }
</style>
<section  class = "pt-5 pb-5">
    <div class = "container">
        <h3 class = "font-weight-bolder" >Upcoming Events</h3>
        {% include upcoming-events.html %}
    </div>
</section>

<section  class = "pt-5 pb-5 bg-light">
    <div class = "container">
        <h3 class = "font-weight-bolder" >Past Events</h3>
        <div class = "d-flex flex-wrap  justify-content-center">
        {% assign past_events = site.data.events | where: "status", "ended" %}
            {% for past in past_events %}
                <div class = "past-event m-3 text-center">
                    <div class = "past-img bg-secondary mx-auto shadow rounded" style = "background-image: url('{{ past.image }}'); background-position: center; background-size: cover;"></div>
                    <!-- <img class = "bg-secondary mx-auto shadow rounded" src = " {{ past.image }} "/> -->
                    <h5 class = "mt-4 font-weight-bold text-primary"> {{ past.name }} </h5>
                    <p>{{ past.date }}</p>
                </div>
            {% endfor %}
        </div>
    </div>
</section>