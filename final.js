const emailInput = document.querySelector(".input");
emailInput.addEventListener("input", function (e) {
  // khi input gõ vào thì sẽ in ra value
  const value = e.target.value;
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // có thể viết regexEmail đc nhưng dùng cái có sẵn trên mạng cho nhanh

  // tạo test kiểm tra true or false của email nhập vào có valid ko
  // trim bỏ khoảng trắng
  if (regexEmail.test(value.trim())) {
    // muốn target đến class input
    // nếu đúng thì nó sẽ là class="input valid" còn ko thì class="input invalid"
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    // nếu gõ sai thì phải thêm ntn
    e.target.classList.add("invalid");
    e.target.classList.remove("valid");
  }

  if (!value) {
    e.target.classList.remove("invalid");
  }
});
