// FAQ functions-Methods ===============

function toggle1(e) {
    console.log("triger")
    var product = e.target.parentElement;
    let iconShow = product.getElementsByClassName("plusicon-hide")[0];
    let iconHide = product.getElementsByClassName("minusicon-hide")[0];
    let toggleDiv = product.getElementsByClassName("toggle-1")[0];
    if (toggleDiv.classList.contains("display-none")) {
      toggleDiv.classList.remove("display-none");
      iconShow.style.display = "none";
      iconHide.style.display = "flex";
    }
    else {
      toggleDiv.classList.add("display-none");
      iconShow.style.display = "flex";
      iconHide.style.display = "none";
    }
  }
