$(document).ready(() => {

    if (window.location.href.indexOf('index') > -1) {
        
        //Slider
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
          });   
   
        //Posts
        var posts = [
            {
                title: 'Assignees and mentions',
                date: 'publicado el dia ' + moment().format("dddd Do MMMM YYYY"),
                content: 'Assign up to ten teammates to an issue or pull request to make sure work has an owner. Mentioning other people or teams in the issue will notify them if something changes. They can also stay in the loop by opting to receive notifications whenever someone posts a comment.'
            },
            {
                title: 'Labels',
                date: 'publicado el dia ' + moment().format("dddd Do MMMM YYYY"),
                content: 'Tagging issues and pull requests with labels allows you to quickly search for them later. Filter your issues by label to find and reference all issues that are part of your project.'
            },
            {
                title: 'Link issues and pull requests',
                date: 'publicado el dia ' + moment().format("dddd Do MMMM YYYY"),
                content: 'Track updates to your project without complicating your workflow by crosslinking between issues and pull requests anywhere in your GitHub organization. If you associate an issue with a pull request, it will automatically close when the pull request is merged.'
            },
            {
                title: 'Assignees and mentions',
                date: 'publicado el dia ' + moment().format("dddd Do MMMM YYYY"),
                content: 'Assign up to ten teammates to an issue or pull request to make sure work has an owner. Mentioning other people or teams in the issue will notify them if something changes. They can also stay in the loop by opting to receive notifications whenever someone posts a comment.'
            },
            {
                title: 'Labels',
                date: 'publicado el dia ' + moment().format("dddd Do MMMM YYYY"),
                content: 'Tagging issues and pull requests with labels allows you to quickly search for them later. Filter your issues by label to find and reference all issues that are part of your project.'
            },
        ];
    
        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;
    
            $("#posts").append(post);
        });
    }



    //Selector de tema
    var theme =  $("#theme");

    $("#to-green").click(() => {
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(() => {
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(() => {
        theme.attr("href", "css/blue.css");
    });


    //Scroll de abajo a arriba
    $('.up').click((e) => {
         e.preventDefault();

         $('html, body').animate({
            scrollTop:0
         }, 5000);

         return false;

    });

     //login falso

    $("#login form").submit(() => {
            var username = $("#form_name").val();
            localStorage.setItem("Name", username);
    });

    var formname = localStorage.getItem("Name");

    if (formname != null && formname != undefined) {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + formname + "</strong>. ");
        about_parrafo.append("<a href'#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(() => {
            localStorage.clear();
            location.reload();
        });
    }

    //accordeon
    if (window.location.href.indexOf('aboutme') > -1) {
        $("#acordeon").accordion();
    }

    //reloj
    if (window.location.href.indexOf('reloj') > -1) {
        
        setInterval(() => {
            var reloj = moment().format("hh:mm:ss"); 
            $("#reloj").html(reloj);
        }, 1000);
    }

})