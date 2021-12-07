$.getJSON('data.json', data => {
    data.map(post => {

        let title = post
            .title
            .substr(0, 20)
        let descr = post
            .body
            .substr(0, 50)

        $('#items').append(
            `
            <div class="item">
                <div class="item-img">
                    <img src="./img/${post.image}" alt="img">
                </div>
                <div class="item-info">
                    <h3>${title} ...</h3>
                    <p>${descr} ...</p>
                    <a href="post.html#${post.id}">Read more</a>
                </div>
            </div>
        `
        )
    })
})

$('input').on('click', () => {
    $('#searchBox').toggleClass('show')
})

$('input').on('input', () => {
    let val = $('input').val()
    $('#searchBox').html('')

    $.getJSON('data.json', data => {
        data.map(post => {
            if (post.title.includes(val)) {

                let title = post
                    .title
                    .substr(0, 15)

                $('#searchBox').append(
                    `
                    <div class="search-item">
                        <img src="./img/${post.image}">
                        <h5><a href="post.html#${post.id}">${title} ...</a></h5>
                    </div>
                `
                )
            }
        })
    })
})

let index = 0

$.getJSON('data.json', data => {

    let index = 0
    $("#slaider").html(`
   <img src="./img/${data[index].image}">
   `)

    setInterval(function () {

        if (index === data.length) {
            index = 0
        }

        $("#slaider").html(`
    <img src="./img/${data[index].image}">
    `)

        index++

    }, 2000)
})



    function back() {
        $.getJSON('data.json', data => {
        index--
        if (index < 0) {

            index = data.length - 1
        }

        $("#slaider").html(`
        <img src="./img/${data[index].image}">
        `)

    })
    }


function next() {
    $.getJSON('data.json', data => {
    index++
    if (index >= data.length) {
        index = 0
    }

    $("#slaider").html(`
        <img src="./img/${data[index].image}">
        `)

    })
}
