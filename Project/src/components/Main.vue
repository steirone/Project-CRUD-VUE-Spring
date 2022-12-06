<template>
    <div class="p-4">
        <router-link to="/input"><button class="btn bg-primary text-light font-weight-bold">Add Data</button></router-link>
        <div class="py-4 d-flex row justify-content-center">
            <div v-for="item in studentData" :key="item.id" class="border p-3 m-3 col-3 rounded">
                <h5>{{ item.student_name +", "+ item.student_age+" Tahun" }}</h5>
                <div class="py-1">{{ item.self_description }}</div>
                <div>Email :{{ item.student_email }}</div>
                <div>Soft Skill : {{ item.soft_skill }}</div>
                <div>Hard Skill : {{ item.hard_skill }}</div>
                <div>Interest : {{ item.interest }}</div>
                <div class="d-flex justify-content-between">
                    <div>
                        <router-link :to="{path: '/update/' + item.id}"><button class="btn bg-primary text-light mr-2"  @click="$emit('updateStudentFunc', item)">Update</button></router-link>
                        
                        <button class="btn bg-danger text-light"  @click="deleteStudentFunc(item.id)">Delete</button>
                    </div>
                    <div>
                        <img v-if="item.gender === 'Female'" src="@/assets/img/Female.png" alt="" style="width: 25px;">
                        <img v-else src="@/assets/img/Male.png" alt="" style="width: 25px;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import shippingService from "../services/shippingService"

export default {
        name: 'MainPage',
        methods : {
            getStudent(){
                shippingService.getAll()
                    .then(response => {
                        this.studentData = response.data;
                        console.log(this.studentData);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            deleteStudentFunc(id){
                if(confirm("Apakah anda yakin hapus?")){
                    shippingService.deleteStudent(id)
                        .then(response => {
                            console.log(response.data);
                        })
                        .catch(e => {
                            console.log(e);
                        });
                    location.reload();
                }else{
                    alert("Hapus dibatalkan!")
                }
            }
        },
        mounted(){
            this.getStudent();
        },
        data(){
            return{
                studentData : null,
            }
        }
    }
</script>