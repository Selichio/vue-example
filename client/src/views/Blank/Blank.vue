<template>
  <main>
    <ContentHeader title="Blank" icon="fas fa-file" subtitle="A blank page to get you started!" />
    <div class="container-fluid mt-n10">
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
      <div class="row">
        <Card cHeader="Eine Karte" class="col-md-12"> {{ contacts }}</Card>
      </div>
      <div class="row">
        <Card cHeader="Eine weitere" class="col-md-4">Hier ist der Coole Body</Card>
        <Card cHeader="Noch eine Karte" class="col-md-4">Hier ist der Coole Body</Card>
        <Card cHeader="Und noch eine Karte" class="col-md-4">Hier ist der Coole Body</Card>
        <CollapsingCard class="col-md-6" />
      </div>
      <div class="row">
        <Card cHeader="Mein Formular" class="col-md-12">
          <div class="form-row">
            <div class="col-7">
              <input type="text" class="form-control" placeholder="City">
              <small id="passwordHelpBlock" class="form-text text-muted">
                Your password must be 8-20 characters long, contain letters and numbers, and must not
                contain spaces, special characters, or emoji.
              </small>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="State">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Zip">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4">
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4">
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip">
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck">
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </Card>
      </div>
    </div>
  </main>
</template>

<script>
  import ContentHeader from '../../components/ContentHeader'
  import Card from '../../components/Card'
  import CollapsingCard from '../../components/CollapsingCard'
  import axios from 'axios';

  export default {
    name: "Blank",
    components: {
      ContentHeader,
      Card,
      CollapsingCard
    },
    data() {
      return {
        contacts: null,
        error: null
      }
    },
    mounted() {
        const url = 'http://localhost:3000/v1/';
          console.log("call whoami")
         axios.get(url + 'contact')
            .then(response => {
              this.contacts = response.data
               console.log(response)}
            )
            .catch(error => {
              this.error = `${error.response.status}:${error.response.statusText} ${error.response.data.errorMessage}`
              console.log(error.response)
            });

    }
  }
</script>