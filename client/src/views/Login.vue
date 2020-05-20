<template>
    <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header justify-content-center"><h3 class="font-weight-light my-4">Login</h3></div>
                                    <div class="card-body">
                                            <div class="form-group"><label class="small mb-1" for="inputEmailAddress">Email</label><input class="form-control py-4" id="inputEmailAddress" type="text" v-model="user" placeholder="Enter email address" /></div>
                                            <div class="form-group"><label class="small mb-1" for="inputPassword">Password</label><input class="form-control py-4" id="inputPassword" type="password" v-model="password" placeholder="Enter password" /></div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox"><input class="custom-control-input" id="rememberPasswordCheck" type="checkbox" /><label class="custom-control-label" for="rememberPasswordCheck">Remember password</label></div>
                                            </div>
                                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0"><a class="small" href="password-basic.html">Forgot Password?</a><button class="btn btn-primary" @click="login">Login</button></div>
                                    </div>
                                    <div class="card-footer text-center">
                                        <div class="small"><a href="register-basic.html">Need an account? Sign up!</a></div>
                                            <p v-if="msg">{{ msg }}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer class="footer mt-auto footer-dark">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6 small">Copyright &copy; svote UG (haftungsbeschränkt) 2020</div>
                            <div class="col-md-6 text-md-right small">
                                <a href="#!">Privacy Policy</a>
                                &middot;
                                <a href="#!">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
</template>
<script>
import AuthService from '../services/AuthService.js'
export default {
    name: "Login",
    data() {
        return {
            user: '',
            password: '',
            msg: ''
        };
    },
    methods: {
        async login() {
            try {

                const credentials = {
                    user: this.user,
                    password: this.password
                };
                const response = await AuthService.login(credentials);
                this.msg = response.fullName + " logged in successfully";
                const token = response.accessToken;
                const user = response.username;
                const refreshToken = response.refreshToken;

                this.$store.dispatch('login', {token, user, refreshToken});

                this.$router.push('/blank');
            } catch (error) {
                this.msg = error.response.data.errorMessage
            }
        }
    }
}
</script>