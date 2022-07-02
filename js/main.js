// Start Loading
$(document).ready(function () {
  $("#loading .spinner").fadeOut(1000, function () {
    $("#loading").fadeOut(1000, function () {
      $("#loading").remove();
      $("body").css("overflow", "auto");
    });
  });
});
// End Loading



// Start Navbar
let isTrue = !0;
$(".menu-btn").click(function () {
  let divWidth = 0;
  if (isTrue) {
    $(".nav-menu").addClass("open-menu").removeClass("close-menu"),
      (divWidth = $(".nav-menu").width() - 10),
      $(".header-nav").css("left", divWidth),
      $(".fa-bars").toggleClass("fa-xmark"),
      $(".nav-menu .item1").animate({ opacity: "1", paddingTop: "20px" }, 1100),
      $(".nav-menu .item2").animate({ opacity: "1", paddingTop: "20px" }, 1200),
      $(".nav-menu .item3").animate({ opacity: "1", paddingTop: "20px" }, 1300),
      $(".nav-menu .item4").animate({ opacity: "1", paddingTop: "20px" }, 1400),
      $(".nav-menu .item5").animate({ opacity: "1", paddingTop: "20px" }, 1500),
      $(".nav-menu .item6").animate({ opacity: "1", paddingTop: "20px" }, 1600),
      (isTrue = !isTrue);
  } 
  else {
    $(".nav-menu").addClass("close-menu").removeClass("open-menu"),
      $(".fa-bars").toggleClass("fa-xmark"),
      $(".header-nav").css("left", 0),
      $(".nav-menu li").animate({ opacity: "0", paddingTop: "500px" }, 500),
      (isTrue = !isTrue);
  }
});
// End Navbar




// Start Api
let allData, allMovies;
let row = document.getElementById("rowData"),
  categorylinks = document.getElementsByClassName("nav-category"),
  result = document.getElementById("res"),
  allMoviesByWord = document.getElementById("allMovies"),
  trendingURL = "https://api.themoviedb.org/3/trending/all/day?api_key=01080d9fdf2c432d932059229a9af8ce",
  popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=01080d9fdf2c432d932059229a9af8ce&language=en-US&page=1",
  topratedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=01080d9fdf2c432d932059229a9af8ce&language=en-US&page=1",
  upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=01080d9fdf2c432d932059229a9af8ce&language=en-US&page=1",
  NowURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=01080d9fdf2c432d932059229a9af8ce",
  URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=01080d9fdf2c432d932059229a9af8ce",
  category = "";
getMovies();
for (let i = 0; i < categorylinks.length; i++)
  categorylinks[i].addEventListener("click", function (e) {
    "Now playing" == (category = e.target.innerHTML) &&
      ((URL = NowURL), getMovies()),
      "Popular" == category
        ? ((URL = popularURL), getMovies())
        : "Top Rated" == category
        ? ((URL = topratedURL), getMovies())
        : "Trending" == category
        ? ((URL = trendingURL), getMovies())
        : "Upcoming" == category && ((URL = upcomingURL), getMovies());
  });
function getMovies() {
  let e = new XMLHttpRequest();
  e.open("get", URL),
    e.send(),
    (e.onreadystatechange = function () {
      4 == e.readyState && 200 == e.status
        ? ((allMovies = (allMovies = JSON.parse(e.response)).results),
          displayMovies())
        : console.log("error");
    });
}
function getMoviesByWord(e) {
  let a = new XMLHttpRequest(),
    t =
      "https://api.themoviedb.org/3/search/movie?query=" +
      e +
      "&api_key=01080d9fdf2c432d932059229a9af8ce&language=en-US&include_adult=false";
  a.open("get", t),
    a.send(),
    (a.onreadystatechange = function () {
      4 == a.readyState && 200 == a.status
        ? ((allMovies = (allMovies = JSON.parse(a.response)).results),
          displayMovies())
        : console.log("error");
    });
}
allMoviesByWord.onkeyup = function () {
  getMoviesByWord(allMoviesByWord.value);
};
let imgPath = "https://image.tmdb.org/t/p/w500";
function displayMovies() {
  for (var e = "", a = 0; a < allMovies.length; a++)
    e +=
      ` <div class="col-md-6 col-lg-4 my-3 shadow">
        <div class="movie shadow rounded position-relative">
            <div class="post">
                <img src=` +
      imgPath +
      allMovies[a].poster_path +
      ` class="img-fluid rounded" />
                <div class="layer d-flex align-items-center ">
                    <div class="info p-0">
                        <h2>` +
      allMovies[a].original_title +
      `</h2>
                        <p>` +
      allMovies[a].overview +
      `</p>
                        <p>rate: ` +
      allMovies[a].vote_average +
      `</p>
                        <p>` +
      allMovies[a].release_date +
      `</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
  row.innerHTML = e;
}
// End Api




// Start validation
let userName = document.getElementById("name"),
  userEmail = document.getElementById("email"),
  userPhone = document.getElementById("phone"),
  userAge = document.getElementById("age"),
  userPassword = document.getElementById("password"),
  userRePassword = document.getElementById("rePassword"),
  userNameAlert = document.getElementById("nameAlert"),
  userEmailAlert = document.getElementById("emailAlert"),
  userPhoneAlert = document.getElementById("phoneAlert"),
  userAgeAlert = document.getElementById("ageAlert"),
  userpasswordAlert = document.getElementById("passwordAlert"),
  userRepasswordAlert = document.getElementById("rePasswordAlert");
function userNameValid() {
  let regx = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
  if (regx.test(userName.value) == true) {
    userNameAlert.style.display = "none";
    return true;
  } else {
    userNameAlert.style.display = "block";
    return false;
  }
}
function userEmailValid() {
  let regx = /^.{5,25}(@gmail.com|@yahoo.com)$/;
  if (regx.test(userEmail.value) == true) {
    userEmailAlert.style.display = "none";
    return true;
  } else {
    userEmailAlert.style.display = "block";
    return false;
  }
}
function userPhoneValid() {
  let regx = /^(002)?01[0125][0-9]{8}$/;
  if (regx.test(userPhone.value) == true) {
    userPhoneAlert.style.display = "none";
    return true;
  } else {
    userPhoneAlert.style.display = "block";
    return false;
  }
}
function userAgeValid() {
  let regx = /^[1-9][0-9]?$|^100$/;
  if (regx.test(userAge.value) == true) {
    userAgeAlert.style.display = "none";
    return true;
  } else {
    userAgeAlert.style.display = "block";
    return false;
  }
}
function userPasswordValid() {
  let regx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regx.test(userPassword.value) == true) {
    userpasswordAlert.style.display = "none";
    return true;
  } else {
    userpasswordAlert.style.display = "block";
    return false;
  }
}
function userRePasswordValid() {
  if (userPassword.value == userRePassword.value) {
    userRepasswordAlert.style.display = "none";
    return true;
  } else {
    userRepasswordAlert.style.display = "block";
    return false;
  }
}
// End validation




// Start Events
userName.addEventListener("keyup", userNameValid),
  userEmail.addEventListener("keyup", userEmailValid),
  userPhone.addEventListener("keyup", userPhoneValid),
  userAge.addEventListener("keyup", userAgeValid),
  userPassword.addEventListener("keyup", userPasswordValid),
  userRePassword.addEventListener("keyup", userRePasswordValid);
// End Events




// Start Contact
let contact = document.getElementById("contact");
let submitBtn = document.getElementById("submitBtn");
submitBtn.classList.add("disabled");
contact.addEventListener("keyup", function () {
  if (
    userNameValid() == true &&
    userEmailValid() == true &&
    userPhoneValid() == true &&
    userAgeValid() == true &&
    userPasswordValid() == true &&
    userRePasswordValid() == true
  ) {
    submitBtn.classList.remove("disabled");
  } else {
    submitBtn.classList.add("disabled");
  }
});
// End Contact