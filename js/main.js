$(document).ready(() => {

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
        // console.log(post);
    });
})