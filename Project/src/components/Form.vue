<template>
    <div class="m-4">
        <router-link to="/" class="justify-content-start" v-show="!success"><button class="btn bg-primary text-light font-weight-bold">Kembali</button></router-link>
        <div class="row justify-content-center mt-4">
        <div class="col-6">
            <!-- Form Section -->
            <form class="border border-primary rounded p-5" @submit.prevent="inputStudent" v-show="!success">
                <h2 class="text-center mb-4">{{ judulValue }}</h2>
                <div class="row">
                    <div class="col-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Student Name</label>
                            <input
                                v-model="studentData.student_name"
                                type="text"
                                class="form-control"
                                placeholder="Enter Student name"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Student Email</label>
                            <input
                                v-model="studentData.student_email"
                                type="email"
                                class="form-control"
                                placeholder="Enter Student Email"
                                required
                            />
                        </div>
                        <div class="form-group d-flex">
                            <div style="padding-right: 10px;">
                                <label for="exampleInputEmail1">Student Age</label>
                                <input
                                    v-model="studentData.student_age"
                                    type="number"
                                    class="form-control"
                                    placeholder="Student Age"
                                    style="width: 140px;"
                                    required
                                />
                            </div>
                            <div>
                                <label for="exampleInputEmail1">Enter Gender</label>
                                <select v-model="studentData.gender" class="form-control" aria-label="Default select example">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Soft Skill</label>
                            <input
                                v-model="studentData.soft_skill"
                                type="text"
                                class="form-control"
                                placeholder="Enter Soft Skill"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Hard Skill</label>
                            <input
                                v-model="studentData.hard_skill"
                                type="text"
                                class="form-control"
                                placeholder="Enter Hard Skill"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Interest</label>
                                <select v-model="studentData.interest" class="form-control" aria-label="Default select example">
                                    <option value="Front End">Front End</option>
                                    <option value="Back End">Back End</option>
                                    <option value="Data Science">Data Science</option>
                                </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Self Description</label>
                    <textarea
                        v-model="studentData.self_description"
                        class="form-control"
                        rows="3"
                        placeholder="Enter address"
                        required
                    ></textarea>
                </div>

                <button type="submit" class="btn bg-primary my-2 text-light">{{ buttonValue }}</button>
            </form>
            <SuccessForm v-show="test"></SuccessForm>
            <UpdatedFormVue v-show="test1"></UpdatedFormVue>

        </div>
    </div>
    </div>
    
</template>

<script>
import shippingService from "../services/shippingService.js"
import SuccessForm from "./SuccessForm.vue"
import UpdatedFormVue from "./UpdatedForm.vue"


export default {
        name: 'FormPage',
        data(){
            return{
                studentData:{
                    "student_name" : null,
                    "student_email" : null,
                    "student_age" : null,
                    "gender" : null,
                    "soft_skill" : null,
                    "hard_skill" : null,
                    "interest" : null,
                    "self_description" : null
                },
                success : false,
                buttonValue : null,
                judulValue : null,
                test : null,
            }
        },
        methods : {
            inputStudent(){
                let data = this.studentData;
                let ida = this.$route.params.id;
                if(this.buttonValue === "Submit"){
                    shippingService.create(data)
                        .then(response => {
                            console.log(response.data);
                            this.success = true;
                            this.test = true;
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }else{
                    shippingService.updateStudent(ida, data)
                        .then(response => {
                            console.log(response.data);
                            this.success = true;
                            this.test1 = true;
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }
            },
            getStudent(){
                let ida = this.$route.params.id
                shippingService.getStudent(ida)
                    .then(response => {
                        this.studentData = response.data;
                        console.log(this.studentData);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            
            
        },
        components : {
            SuccessForm,
            UpdatedFormVue
        },
        mounted(){
            if (this.$route.params.id > 0) {
                this.getStudent();
            }
        },
        created() {
            if (this.$route.params.id > 0) {
                this.buttonValue = "Update",
                this.judulValue = "Update Form"
            }else{
                this.buttonValue = "Submit",
                this.judulValue = "Insert Form"
            }
        }
    }
</script>