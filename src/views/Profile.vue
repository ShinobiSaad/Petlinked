<template>
<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-6 mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="col-md-4 gradient-custom text-center text-white"
              style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
              <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
                alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
              <h5>Marie Horwitz</h5>
              <p>Web Designer</p>
              <i class="far fa-edit mb-5"></i>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4">
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6 class="fw-bold">Email</h6>
                    <p class="text-muted">oni@gmail.com</p>
                  </div>
                  <div class="col-6 mb-3">
                    <h6 class="fw-bold">Phone</h6>
                    <p class="text-muted">123 456 789</p>
                  </div>
                </div>
                <h6 class="fw-bold">Friends</h6>
                <hr class="mt-0 mb-4">
                <h1> 10 </h1>
                <div class="d-flex justify-content-start ml-5">
                  <a href="#!"><fa :icon="['fab','facebook']" style="font-size:1.5vw; margin-right:1vw; margin-top:-1.5vw; color:#363535;"/></a>
                  <a href="#!"><fa :icon="['fab','instagram']" style="font-size:1.5vw; margin-right:1vw; margin-top:-1.5vw; color:#363535;"/></a>
                  <a href="#!"><fa :icon="['fab','linkedin']" style="font-size:1.5vw; margin-right:1vw; margin-top:-1.5vw; color:#363535;"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
    created(){
        document.body.style.backgroundColor = "rgb(129, 255, 192)";
    }
}
</script>