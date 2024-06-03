import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Users } from '../../user';
 import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrl: './filter-search.component.css'
})
export class FilterSearchComponent implements OnInit {

  //گرفتن دیتا از فایل db.json
   httpClient =inject(HttpClient)

   data:any=[]
   ngOnInit(): void {
     this.fetchData()
   }

   fetchData(){
     this.httpClient.get("http://localhost:3000/users").subscribe((data:any)=>{
     this.data = data
     })
   }
  


  




   @Output() filteredUsersEvent = new EventEmitter<Users[]>();
 
//متغیر هایی که مقادیر اینپوت را در خود جای میدهندد

 filteredUsers = this.data
  searchName_familyname = '';
 search_father_name=''
 search_death_city =''
 search_birth_city =''
 search_cemetry_name =''
 search_burial_city =''
 search_mother_name=''
 search_nickname=''
 search_birth_date:number | null =null
 search_death_year:number | null = null
 search_origin_city=''
 search_gender=''
search_deathType=''
  searchAge: number | null = null;



genders:any=[
  'مرد',
'زن'
]

deathType:any=[
  'طبیعی',
  'حادثه'
]



//چند شهر پیش فرض که باید از بک گرفته شود
cities:any=[
  
 'زنجان',
 'تبریز',
 'کرج',
 'تهران',
 'گرگان',
 "اهواز",
 "مشهد",
 "کرمان",
 
]


//نام قبرستان پیش فرض که باید از بک گرفته شود
cemetryName:any=[
  'شهدا',
  'انقلاب',
  'ملی',
  'بلوار',
  'آزادی',
  'بهشت',
]

  onGenderChange(event:any) {
  this.search_gender = event.target.value
  }

  onDeathTypeChange(event:any){
this.search_deathType =event.target.value
  }




// فانکشن فیلتر کردن که پس از کلیک روی دکمه ی جست و جو فغال میشود 


  searchUsers() {


    this.filteredUsers = this.data.filter((user:Users) => {
    
    
      return (
        (user.name.includes(this.searchName_familyname) || this.searchName_familyname === '') &&
         
          (this.searchAge === null || user.age >= this.searchAge) &&
         (this.search_death_year === null || user.deathDate <= this.search_death_year) &&
         (user.fathers_name.includes(this.search_father_name) || this.search_father_name === '') &&
         (user.mothers_name.includes(this.search_mother_name) || this.search_mother_name === '') &&
         (user.nickname.includes(this.search_nickname) || this.search_nickname === '') &&
         (this.search_birth_date === null || user.birth_date <= this.search_birth_date ) &&
         (user.birth_city.includes(this.search_birth_city) || this.search_birth_city === '') &&
         (user.death_city.includes(this.search_death_city) || this.search_death_city ==='')&&
         (user.burial_city.includes(this.search_burial_city) || this.search_burial_city === '') &&
         (user.cemetry_name.includes(this.search_cemetry_name)|| this.search_cemetry_name === '')&&
         (user.gender.includes(this.search_gender) || this.search_gender === "")&&
         (user.deathType.includes(this.search_deathType) || this.search_deathType === "")
      );
      
      
    })
    ;
  
  

    this.filteredUsersEvent.emit(this.filteredUsers);


  }



}
