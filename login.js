function login() {
  var username = document.querySelector('#txt_username');
  var password = document.querySelector('#txt_password');
  var remember = document.querySelector('#txt_remember');
  var form = document.querySelector('.form-control');

  form.classList.remove('is-invalid');
  password.classList.remove('is-invalid');

  if (username.value.length <= 0) {
    alert('ลืมเขียนนะ');
    username.classList.add('is-invalid');
  } else if (password.value.length <= 0) {
    alert('ลืมเขียนนะ');
    password.classList.add('is-invalid');
  } else {
    // Send request to server
    // Simulate
    if ((username.value === 'test1' && password.value === '4554') || (username.value === 'bearbug' && password.value === '1234')) {
      var Session = {
        remember: remember.checked
      };

      // ลบ kein_token หากมีอยู่ใน localStorage
      localStorage.removeItem('kein_token');

      // เพิ่ม ss_token ลงใน localStorage เมื่อล็อกอินสำเร็จ
      localStorage.setItem('ss_token', JSON.stringify(Session));

      window.location.href = 'welcome.html';
    } else {
      alert('ผิดครับ');
    }
  }
}
