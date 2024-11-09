let li_drop = document.querySelectorAll('.li')
let drop = document.querySelectorAll('.drop');

li_drop.forEach((elem, index) => {


    elem.addEventListener('mouseenter', function () {
        // alert('hhhhhh')
        drop[index].classList.add('show')
    })
    elem.addEventListener('mouseleave', function () {
        drop[index].classList.remove('show')
    })


})

// ______________________.searcbox-show.
let searchbar = document.querySelector('.searchbar')
let seachdiv = document.querySelector('.seachdiv')
let fixed_black = document.querySelector('.fixed_black')

let xbox = document.querySelector(".xbox")


searchbar.addEventListener("click", () => {
    console.log('clicked');

    seachdiv.classList.add('searcbox-show')
    fixed_black.classList.add('fixed_black-show')
    xbox.classList.remove('xbox')

})

xbox.addEventListener("click", () => {
    seachdiv.classList.remove('searcbox-show')
    fixed_black.classList.remove('fixed_black-show')
})

// ________________________________


// ___________________sliderRight-show
let gifft = document.querySelector(".gifft")
let slideright = document.querySelector(".slideright")
let angle = document.querySelector(".R-angle")

gifft.addEventListener('click', function () {

    slideright.classList.add("sliderRight-show")
})

angle.addEventListener('click', function () {

    slideright.classList.remove("sliderRight-show")
})


// _____________________________

//  header sliders

let right_icon = document.querySelector('.right-icon')
let left_icon = document.querySelector('.left-icon')
let header_child1 = document.querySelector('.header-child1')
let header_child2 = document.querySelector('.headeerr2')

let show_header = true;

right_icon.addEventListener('click', show_slide)
left_icon.addEventListener('click', show_slide)

function show_slide() {

    if (show_header) {
        header_child1.classList.remove("slider-show")
        header_child2.classList.add('slider-show')
        show_header = !show_header
        // show_header = false;
    }
    else {
        header_child1.classList.add("slider-show")
        header_child2.classList.remove('slider-show')
        show_header = true;

    }
}


// _________________ Secction One Slider

let imges = document.querySelectorAll('.imges')
let imgee = document.querySelectorAll('img')
let img_border = document.querySelectorAll('.img-border')

imges.forEach((ele, indx) => {
    ele.addEventListener("mouseenter", function () {
        imgee[indx].classList.add('scale')
        img_border[indx].classList.add('animation1')
    })

    ele.addEventListener("mouseleave", function () {
        imgee[indx].classList.remove('scale')
        img_border[indx].classList.remove('animation1')
    })




})

// __________________ Section Two

let sec2_img = document.querySelectorAll('.sec2-img')
let img2 = document.querySelectorAll('.img2')

sec2_img.forEach((ele, indx) => {
    ele.addEventListener("mouseenter", function () {

        img2[indx].classList.add('scale1')
    })

    ele.addEventListener("mouseleave", function () {

        img2[indx].classList.remove('scale1')
    })

})

let boxx = [
    {
        img: "./img/1 (1).jpeg",
        para: "Joust Duffle Bag",
        price: "$20.19"
    },
    {
        img: "./img/2.jpeg",
        para: "Joust Duffle Bag",
        price: "$11.19"

    }
    ,
    {
        img: "./img/3 (1).webp",
        para: "Joust Duffle Bag",
        price: "$11.19"

    },
    {
        img: "./img/4.jpeg",
        para: "Joust Duffle Bag",
        price: "$11.19"

    },
    {
        img: "./img/5.jpeg",
        para: "Joust Duffle Bag",
        price: "$11.19"

    },
    {
        img: "./img/6.webp",
        para: "Joust Duffle Bag",
        price: "$11.19"

    },
    {
        img: "./img/7.jpeg",
        para: "Joust Duffle Bag",
        price: "$11.19"

    },
    {
        img: "./img/8.jpeg",
        para: "Joust Duffle Bag",
        price: "$11.19"

    },
]

let sec4 = document.querySelector(".sec-4")
let textbox_para = document.querySelectorAll('.new')


let box = document.querySelector(".sec-4")
let filter_Value
textbox_para.forEach((ele) => {
    ele.addEventListener("click", function () {
        if (ele.innerHTML == "all") {
            filter_Value = boxx.filter((ele, index) => {
                return (index >= 0)
            })
        }

        if (ele.innerHTML == "all") {
            filter_Value = boxx.filter((ele, index) => {
                return (index < 9)
            })
        }

        // _________
        else if (ele.innerHTML === "new") {
            filter_Value = boxx.filter((ele, indx) => indx > 3)
        }
        else if (ele.innerHTML === "best sellers") {
            filter_Value = boxx.filter((ele, indx) =>  indx => 4 )
        }
        else if (ele.innerHTML === "featured") {
            filter_Value = boxx.filter((ele, indx) => indx >3)
        }
        else if (ele.innerHTML === "onsall") {
            filter_Value = boxx.filter((ele, indx) => indx =>4)
        }
        box.innerHTML = ""
        GetData(filter_Value)
    })
})








GetData()
function GetData() {
    if (filter_Value) {

        filter_Value.forEach((ele, idx) => {


            sec4.innerHTML += `
    <div class="sec4-boxes ">
    <img src="${ele.img}" alt="">
    <div class="icon">
    <i class="fa-regular dill fa-heart"></i>
    <i class="fa-solid fa-gift Gifft"></i>
    <i class="fa-regular fa-eye Eyee"></i>
    
    </div>
    <div class="sec4_text">
    <p>${ele.para}</p>
    <p>${ele.price}</p>
    </div>
    
    </div>
    `
        })
    }
    else {
        boxx.forEach((ele, idx) => {


            sec4.innerHTML += `
            <div class="sec4-boxes ">
            <img src="${ele.img}" alt="">
            <div class="icon">
            <i class="fa-regular dill fa-heart"></i>
            <i class="fa-solid fa-gift Gifft"></i>
            <i class="fa-regular fa-eye Eyee"></i>
            
            </div>
            <div class="sec4_text">
            <p>${ele.para}</p>
            <p>${ele.price}</p>
            </div>
            
            </div>
            `
        })
    }
}

// ________________________ Dill
let fix = document.querySelector(".fixx")

let dil = document.querySelectorAll(".dill")

dil.forEach((ele, indx) => {
    ele.addEventListener("click", () => {
        console.log(indx);
        fix.classList.remove("none")
        fix.innerHTML = `
        <main class="main">
                <div class="cross">x</div>
                <div class="imgd">
                    <img src="${boxx[indx].img}" alt="">
                </div>
            </main>
        `

        let cross = document.querySelectorAll(".cross")
        cross.forEach((ele) => {
            ele.addEventListener("click", () => {
                fix.classList.add("none")
            })
        })

    })
})

// ____________________ gift____

let Gift = document.querySelectorAll(".Gifft");
Gift.forEach((ele, indxx) => {
    ele.addEventListener("click", () => {

        fix.classList.remove("none")
        fix.innerHTML = `
    <main class="main">
                <div class="cross">x</div>
                <div class="imgd">
                    <img src="${boxx[indxx].img}" alt="">
                </div>
            </main>
    `

        let cross = document.querySelectorAll(".cross")
        cross.forEach((ele) => {
            ele.addEventListener("click", () => {
                fix.classList.add("none")
            })
        })

    })

})

// ____________________________Eye 

let Eye = document.querySelectorAll(".Eyee")

Eye.forEach((ele, indx) => {
    ele.addEventListener("click", () => {
        console.log(indx);
        fix.classList.remove("none")
        fix.innerHTML = `
     <div class="main2">
            <div class="imgdiv">

                <img src="${boxx[indx].img}" alt="">

                <div class="imgcros"> X </div>

            </div>
            <div class="textdiv">

                <p>Joust Duffle Bag</p>
                <p>$20.19</p>
                <div class="linnn"></div>
                <span>Lorem ipsum dolor sit amet, consectetur adipis elit, sed do eiusmod tempor incidid ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nol exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</span>
                <div class="btn3-boxess">
                    <div class="num01">01</div>
                    <div class="btnnn"> Add to card </div>
                    <div class="iconss">

                        <i class="fa-regular fa-heart"></i>
                    </div>

                </div>
            </div>

        </div>
        <!-- ____main2 end -->
        `

        let cross = document.querySelectorAll(".imgcros")
        cross.forEach((ele) => {
            ele.addEventListener("click", () => {
                fix.classList.add("none")
            })
        })

    })
})

// _____________ section three and four


textbox_para.forEach((ele, indx) => {

    ele.addEventListener('click', () => {
        textbox_para.forEach((ele) => {
            ele.classList.remove('border')
        })
        ele.classList.add('border')
    })
})

// _____________ section four applement function with filter map
