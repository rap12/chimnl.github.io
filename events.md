---
layout: default
title: "CHI MNL Events"
---
<style>
    .past-event{
        position:relative;
        width:auto;
        overflow: hidden;
        padding: 1.5rem;
        transition: ease all 0.3s;
    }
    .past-event img{
        /* border-radius: 15px; */
        /* max-height: 30rem; */
        max-width: 30rem;
        /* min-height: 30rem; */
        min-width: 30rem;
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
                    <img class = "bg-secondary mx-auto shadow rounded" src = " {{ past.image }} "/>
                    <h5 class = "mt-4 font-weight-bold text-primary"> {{ past.name }} </h5>
                    <p>{{ past.date }}</p>
                </div>
            {% endfor %}
        </div>
    </div>
</section>