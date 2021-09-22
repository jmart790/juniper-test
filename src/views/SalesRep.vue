<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SalesRep",
  async mounted() {
    await this.getStoreData();
  },
  computed: {
    ...mapGetters(["salesRep"]),
    fullName() {
      return `${this.salesRep.FirstName} ${this.salesRep.LastName}`;
    },
    location() {
      return `${this.salesRep.City}, ${this.salesRep.State}`;
    }
  },
  methods: {
    ...mapActions(["getStoreData"])
  }
};
</script>

<template>
  <div class="sales-rep">
    <a
      href="https://www.linkedin.com/in/maxfraser/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="sales-rep__card">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGkD1iz5Cmt1g/profile-displayphoto-shrink_800_800/0/1579874524254?e=1637798400&v=beta&t=j3QcszOFHY4MOF5xaejGOAJpd1WHDZ1IKEzW0AIMnLU"
          :alt="`image of ${fullName}`"
        />
        <div>
          <h1 class="sales-rep__name">
            {{ fullName }}
          </h1>
          <h4 class="sales-rep__job-title">
            Sales Rep
          </h4>
          <div class="sales-rep__details">
            <label for="Phone Number">Phone Number:</label>
            <p name="Phone Number">
              {{ salesRep.Phone }}
            </p>
            <label for="Location">Location:</label>
            <p name="Location">
              {{ location }}
            </p>
            <label for="Email">Email</label>
            <p name="Email">
              {{ salesRep.EmailAddress }}
            </p>
            <label for="Company Name">Company Name:</label>
            <p name="Company Name">
              {{ salesRep.CompanyName }}
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>


<style lang="scss">
.sales-rep {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
  &__card {
    position: relative;
    margin-top: $gap-12;
    padding: $gap-8 $gap-4;
    align-items: center;
    border-radius: $round-2;
    background: $white;
    box-shadow: $shadow-1;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    @media screen and (min-width: $tablet) {
      padding: $gap-12 $gap-8;
    }
    &::after {
      position: absolute;
      z-index: 0;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 30%;
      background: $primary;
    }
    &:hover,
    &:focus {
      transform: translateY(-8px);
    }
  }
  img {
    position: relative;
    display: block;
    z-index: 1;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border-radius: 50%;
    border: 8px solid $primary;
    margin-bottom: $gap-4;
  }
  &__name {
    text-align: center;
  }
  &__job-title {
    margin-bottom: $gap-4;
    text-align: center;
    color: $third-font-color;
  }
  &__details {
    margin: 0 $gap-8;
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto;
    column-gap: $gap-8;
    row-gap: $gap-4;
  }
}
</style>