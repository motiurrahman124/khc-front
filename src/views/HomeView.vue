<script>
import Location from '../components/site/Location.vue';
 export default {
  components: { 
    Location
  }

 }
</script>

<template>
  <main>
    <div class="container-fluid bg-primary py-5 mb-5 hero-header">
      <div class="container py-5">
        <div class="row justify-content-start">
          <div class="col-lg-8 text-center text-lg-start">
            <h5
              class="d-inline-block text-primary text-uppercase border-bottom border-5"
              style="border-color: rgba(256, 256, 256, 0.3) !important"
            >
              Welcome To Khulna Hearing Center
            </h5>
            <h1 class="display-1 text-white mb-md-4">Get the Best Ear Treatment</h1>
            <div class="pt-2">
              <a href="" class="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"
                >Find Doctor</a
              >
              <router-link
                to="/appoinment"
                class="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"
                >Appointment</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero End -->

    <!-- About Start -->
    <div class="container-fluid py-5">
      <div class="container">
        <div class="row gx-5">
          <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px">
            <div class="position-relative h-100">
              <img
                class="position-absolute w-100 h-100 rounded"
                src="../assets/site/img/ear.jpg"
                style="object-fit: cover"
              />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="mb-4">
              <h3
                class="d-inline-block text-primary text-uppercase border-bottom border-5"
              >
                About Us
              </h3>
              <h1 class="display-4">Best Ear Treatment For Yourself and Your Family</h1>
            </div>
            <p>
              Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam
              ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos
              sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore
              lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod,
              dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore.
              Amet erat amet et magna
            </p>
            <div class="row g-3 pt-3">
              <div class="col-sm-4 col-6">
                <div class="bg-light text-center rounded-circle py-4">
                  <i class="fa fa-3x text-primary mb-3"><font-awesome-icon icon="fa-solid fa-user-doctor" /></i>
                  <h6 class="mb-0">
                    Qualified<small class="d-block text-primary">Doctors</small>
                  </h6>
                </div>
              </div>
              <div class="col-sm-4 col-6">
                <div class="bg-light text-center rounded-circle py-4">
                  <i class="fa fa-3x text-primary mb-3"><font-awesome-icon icon="fa-solid fa-ear-listen" /></i>
                  <h6 class="mb-0">
                    Emergency<small class="d-block text-primary">Services</small>
                  </h6>
                </div>
              </div>
              <div class="col-sm-4 col-6">
                <div class="bg-light text-center rounded-circle py-4">
                  <i class="fa fa-3x text-primary mb-3"><font-awesome-icon icon="fa-solid fa-microscope" /></i>
                  <h6 class="mb-0">
                    Accurate<small class="d-block text-primary">Testing</small>
                  </h6>
                </div>
              </div>
              <!-- <div class="col-sm-3 col-6">
                                <div class="bg-light text-center rounded-circle py-4">
                                    <i class="fa fa-3x fa-ambulance text-primary mb-3"></i>
                                    <h6 class="mb-0">Free<small class="d-block text-primary">Ambulance</small></h6>
                                </div>
                            </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->

    <Location/>
  </main>
</template>
