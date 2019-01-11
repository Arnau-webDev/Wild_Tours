
    
    var animationEnd = "webkitAnimationEnd mozAnimationEnd oAnimationEnd animationend";
    var entryAnimation = "animated bounceInRight";
    var exitAnimation = "animated bounceOutLeft";
    var exitAnimation2 = "animated bounceOutRight"

    function header_anim() {

        $("#header_headings-container").css({
            top: "25%",
            left: "0",
            right: "0",
            display: "block"
        });

        $("#header_headings-container").addClass(entryAnimation).one(animationEnd, function(){
            $(this).removeClass(entryAnimation);
        })
    };

$(function(){

    //SIDEBAR FUNCTIONALITY

    $(".toggle-btn").click(function(){
        $(this).fadeOut();
        $("#sidebar").css({
            right: "0",
            display: "block"
        })

    $("#sidebar").addClass(entryAnimation).one(animationEnd, function(){
            $(this).removeClass(entryAnimation);
        })

    $(".closeSidebar").click(function(){
        $("#sidebar").addClass(exitAnimation2).one(animationEnd, function(){
            $(this).removeClass(exitAnimation2);
            $(this).css("display","none");
            $(".toggle-btn").fadeIn();     
        })
    })
    })

    // MODAL FUNCTIONALITY

    var scr_width = screen.width;
    var scr_height = screen.height;
    var minimum = 1800;

        function openClose_modal(id,closer){

            $("#overlay").css("display","block");
            if(scr_width <= minimum){
                $(id).css({
                    top: "4%",
                    left: "25%",
                    display: "block"
                });
            }
            else{
                $(id).css({
                    top: "15%",
                    left: "25%",
                    display: "block"
                });
            }

            $(id).addClass(entryAnimation).one(animationEnd ,function(){
                $(this).removeClass(entryAnimation); 
            });

            $(closer).click(function(){
                $("#overlay").css("display","none");
                $(id).addClass(exitAnimation).one(animationEnd,function(){
                    $(this).removeClass(exitAnimation);
                    $(this).css("display","none");
                });
            });

        };

        $(".opener1").click(function(){
            openClose_modal("#modal1","#close1"); 
        });

        $(".opener2").click(function(){
            openClose_modal("#modal2","#close2");
        });

        $(".opener3").click(function(){
            openClose_modal("#modal3","#close3");
        });

        $(".opener4").click(function(){
            openClose_modal("#modal4","#close4");
        });

      // ABOUT BOXES FUNCTIONALITY

      var i = 0;
      var e = 0;
      var j = 0;
      text1 = "Enjoy nature in a peaceful and respectful way with our tours."
      text2 = "All security measures are taken very seriously to ensure our clients safety.";
      text3 = "We provide very different and exotic tours at a very competitive price.";
      var box1 = document.getElementById("about1");
      var box2 = document.getElementById("about2");
      var box3 = document.getElementById("about3");


        function typing1() {
            if(i<text1.length){
                box1.innerHTML += text1.charAt(i);
                i++;
                setTimeout(typing1,50);
            }
        }

        function typing2() {
            if(e<text2.length){
                box2.innerHTML += text2.charAt(e);
                e++;
                setTimeout(typing2,50);
            }
        }

        function typing3() {
            if(j<text3.length){
                box3.innerHTML += text3.charAt(j);
                j++;
                setTimeout(typing3,50);
            }
        }

      $(".aboutBox1").hover(function(){
          console.log(this);
          typing1();
      })

      $(".aboutBox2").hover(function(){
          typing2();
      })

      $(".aboutBox3").hover(function(){
          typing3();
      })


    // FORM FUNCTIONALITY

    var CV = document.getElementById("CV");
    var msg = document.getElementById("msg");

    $('.work').click(function() {
        if($(this).is(':checked')) {
            if(msg.style.display == "block"){
                $(".msg").slideToggle();
            }
            else if(CV.style.display == "block"){
                return false
            }
            $(".CV").slideToggle();
        }
    });

    $('.book').click(function() {
        if($(this).is(':checked')) {
            if(CV.style.display == "block"){
                $(".CV").slideToggle();
            }
            else if(msg.style.display == "block"){
                return false
            }
            $(".msg").slideToggle();
        }
    });

    // DRAG AND DROP FUNCTIONALITY

    const fills = document.querySelectorAll(".fill");
    const empties = document.querySelectorAll(".empty");
    const location = document.getElementById("locationUl");
    const people = document.getElementById("peopleUl");
    const difficulty = document.getElementById("difficultyUl");
    const guidance = document.getElementById("guidanceUl");
    const transport = document.getElementById("transportUl");

    const locationLi = document.getElementById("locationDropDestination");
    const peopleLi = document.getElementById("peopleDropDestination");
    const difficultyLi = document.getElementById("difficultyDropDestination");
    const guidanceLi = document.getElementById("guidanceDropDestination");
    const transportLi = document.getElementById("transportDropDestination");

    const bookDiv = document.getElementById("persoBookDiv");




    // Loop through fills to add event listeners

    for(const fill of fills){
        fill.addEventListener("dragstart", dragStart);
        fill.addEventListener("dragend", dragEnd);
    }

    // Loop through empties to call drag events


    for(const empty of empties) {
        empty.addEventListener("dragover", dragOver);
        empty.addEventListener("dragenter", dragEnter);
        empty.addEventListener("dragleave", dragLeave);
        empty.addEventListener("drop", dragDrop);
    }

    // Drag functions

    function dragStart(){

        if(this.parentNode == location) {
            this.className += " location";
            var locationText = this.textContent;
            window.locationText = locationText;
        }
        else if(this.parentNode == people){
            this.className += " people";
            var peopleText = this.textContent;
            window.peopleText = peopleText;
        }
        else if(this.parentNode == difficulty){
            this.className += " difficulty";
            var difficultyText = this.textContent;
            window.difficultyText = difficultyText;
        }
        else if(this.parentNode == guidance){
            this.className += " guidance";
            var guidanceText = this.textContent;
            window.guidanceText = guidanceText;
        }
        else if(this.parentNode == transport){
            this.className += " transport";
            var transportText = this.textContent;
            window.transportText = transportText;
        }
        this.className += " hold";
        // setTimeout(() => this.className = "invisible",0);
    }

    function dragEnd(){
        this.className = "fill";
    }

    function dragOver(e){
        e.preventDefault();
        // this.className += " grabbing";
    }

    function dragEnter(e){
        e.preventDefault();

        if($("#locationUl li").hasClass("location")){
            if(this.id == "locationDropDestination") {
                this.className += " hoveredTrue"
            }
            else{
                this.className += " hoveredFalse";
            }
        }
        else if($("#peopleUl li").hasClass("people")){
            
            if(this.id == "peopleDropDestination") {
                this.className += " hoveredTrue"
            }
            else{
                this.className += " hoveredFalse";
            }
        }
        else if($("#difficultyUl li").hasClass("difficulty")){
            
            if(this.id == "difficultyDropDestination") {
                this.className += " hoveredTrue"
            }
            else{
                this.className += " hoveredFalse";
            }
        }
        else if($("#guidanceUl li").hasClass("guidance")){
            
            if(this.id == "guidanceDropDestination") {
                this.className += " hoveredTrue"
            }
            else{
                this.className += " hoveredFalse";
            }
        }
        else if($("#transportUl li").hasClass("transport")){
            
            if(this.id == "transportDropDestination") {
                this.className += " hoveredTrue"
            }
            else{
                this.className += " hoveredFalse";
            }
        }
        // this.className += " hovered";  // Agregar
    }

    function dragLeave(){
        this.className = "empty";  // Reemplazar
    }

    function dragDrop(){

        var left = document.getElementById("leftImg");
        var right = document.getElementById("rightImg");

        if(this.id == "locationDropDestination"){

            this.className = "empty";
            this.innerHTML = window.locationText;

            function expandableDivClass() {
                if(locationLi.textContent == "Iceland"){
                    $("#persoBookDiv").css("backgroundImage","linear-gradient(to top left,#2998ff, #5643fa)");
                }
                else if(locationLi.textContent == "Kenya"){
                    $("#persoBookDiv").css("backgroundImage","linear-gradient(to top left,#ffb900, #ff7730)");
                }
                else if(locationLi.textContent == "Slovenia"){
                    $("#persoBookDiv").css("backgroundImage","linear-gradient(to top left,#7ed56f, #28b485)");
                }
                else if(locationLi.textContent == "Greece"){
                    $("#persoBookDiv").css("backgroundImage","linear-gradient(to top left,#b70070, #f8307e)");;
                }
            }

            function changeImg(img1,img2,img3,finalImg) {
                left.classList.remove(img1);
                left.classList.remove(img2);
                left.classList.remove(img3);
                left.className += finalImg;

                right.classList.remove(img1);
                right.classList.remove(img2);
                right.classList.remove(img3);
                right.className += finalImg;

                locationLi.className += " prepared";
                expandableDivClass();
            }

                if(this.innerHTML == "undefined"){
                    this.innerHTML = "Location";
                }
                else if(window.locationText == "Iceland"){
                    changeImg("persoCardImg--2","persoCardImg--3","persoCardImg--4"," persoCardImg--1");
                }
                else if(window.locationText == "Slovenia"){
                    changeImg("persoCardImg--1","persoCardImg--3","persoCardImg--4"," persoCardImg--2");
                }
                else if(window.locationText == "Kenya"){
                    changeImg("persoCardImg--1","persoCardImg--3","persoCardImg--4"," persoCardImg--3");
                }
                else if(window.locationText == "Greece"){
                    changeImg("persoCardImg--1","persoCardImg--2","persoCardImg--3"," persoCardImg--4");
                }
        }
        else if(this.id == "peopleDropDestination"){

            this.className = "empty";
            this.innerHTML = window.peopleText;
            this.className += " prepared";

                if(this.innerHTML == "undefined"){
                    this.innerHTML = "People";
                }
        }
        else if(this.id == "difficultyDropDestination"){

            this.className = "empty";
            this.innerHTML = window.difficultyText;
            this.className += " prepared";

                if(this.innerHTML == "undefined"){
                    this.innerHTML = "Difficulty";
                }     
        }
        else if(this.id == "guidanceDropDestination"){

            this.className = "empty";
            this.innerHTML = window.guidanceText;
            this.className += " prepared";
            
                if(this.innerHTML == "undefined"){
                    this.innerHTML = "Guidance";
                }
        }
        else if(this.id == "transportDropDestination"){

            this.className = "empty";
            this.innerHTML = window.transportText;
            this.className += " prepared";
            
                if(this.innerHTML == "undefined"){
                    this.innerHTML = "Transport";
                }
        }

        console.log(empties);  // Array de Li's
        console.log("fuera del bucle "+empties[0].classList); // Esto funciona

        function prueba(){

            if(locationLi.classList == "empty prepared"){
                $("#persoBookDiv").slideDown();
            }

            // $(locationLi).one("click", function(){
            //     console.log(locationLi)
            //     $("#persoBookDiv").slideToggle();
            // })

            // var j= 0;
            // var executed = false;
            // console.log(executed);
            // var contadorLoc = 0;
            // var contadorPeopl = 1;
            // var contadorDiff = 2;
            // var contadorGuid = 3;
            // var contadorTran = 4;

            // for(z=0; z<empties.length; z++){
            //     console.log("dentro del bucle "+empties[z].classList); // Esto tambien

            //     if(empties[z].classList == "empty prepared"){
            //         j ++;
            //         console.log("contador z= "+z);
            //         console.log("contador j= "+j);

            //         if(z==4 && (j>=1 && j<=5)){
            //             if(executed == false){
            //                 executed = true;
            //                 console.log(executed);
            //                 $("#persoBookDiv").slideDown();
            //             }
            //         }
            //     }
            // }

                // else if(z==4 && j<5){
                //     $("#persoBookDiv").slideToggle();
                // }

                // else if(empties[z].classList != "empty prepared"){  si se pudiera sumar 1 
                //     j++;
                // }

                // else if(empties[z].className == "empty prepared"){
                //     console.log("contador j= "+j);
                //     // j--;
                // }

                // if(j == 5){
                //     console.log("hecho!");
                //     $("#persoBookDiv").slideToggle();
                // }
            //}
        }
        prueba();

        // function expandDiv() {
        //     // if(locationLi.classList.contains("prepared") && peopleLi.classList.contains("prepared") && difficultyLi.classList.contains("prepared") && guidanceLi.classList.contains("prepared") && transportLi.classList.contains("prepared")){
        //     //         $("#persoBookDiv").slideToggle();
        //     // }

        //     // var x= 0;

        //     // for(z=0; z<=5; z++){

        //     //     if(locationLi.classList.contains("prepared")){
        //     //         x++;
        //     //     }
        //     //     if(peopleLi.classList.contains("prepared")){
        //     //         x++;
        //     //     }
        //     //     if(x==2) {
        //     //         prueba();
        //     //     }
        //     }
        

        // expandDiv();
        
    }

    // MENU SMOOTH SCROLL FUNCTIONALITY

    var scrollLink = $(".scroll");
    var scrollLink2 = $(".scroll2");

    // function closeModal(id,closer){
    //     $(id).addClass(exitAnimation).one(animationEnd ,function(){
    //         $(this).removeClass(exitAnimation); 
    //     });

    //     $(closer).click(function(){
    //         $("#overlay").css("display","none");
    //         $(id).addClass(exitAnimation).one(animationEnd,function(){
    //             $(this).removeClass(exitAnimation);
    //             $(this).css("display","none");
    //         });
    //     });
    // }

    scrollLink.click(function(e) {
        e.preventDefault();
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top-40
        }, 1000)
    })

    scrollLink2.click(function(e) {
        e.preventDefault();
        // openClose_modal("#modal1","#see1");
        // closeModal("#modal1","#perso1"); 
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top-125
        }, 1000)
    })



    // Hola 

});




