<template lang="pug">

v-row
  v-card.d-flex.justify-center.cardBox
    v-row.d-flex.flex-column
      v-col
        v-list-item-group.d-flex(v-model="selectedItem" color="primary")
          v-list-item(v-for="(item, i) in items" :key="i")
            v-list-item-icon.mx-auto
              v-icon(v-text="item.icon")

      v-col.px-10
        v-checkbox( 
          v-for="(item, ID) in checkFalse" :key="ID" 
          :class="item.status ? 'text-decoration-line-through font-weight-thin' : ''" 
          :label="item.list"  @click="findIndex(item.id)" :value="item.status" :id="item.list+ID")     

      //- v-col.px-10
      //-   v-checkbox( 
      //-     v-for="(item, ID) in checkTrue" :key="ID" 
      //-     :class="item.status ? 'text-decoration-line-through font-weight-thin' : ''" 
      //-     :label="item.list"  @click="findIndex(item.id)")     


      v-col.d-flex.justify-center
        v-dialog(v-model="dialog" persistent max-width="600px")
          template(v-slot:activator="{ on, attrs }")
            v-btn.mx-2.orange(fab dark v-bind="attrs" v-on="on")
              v-icon mdi-plus

          v-card
            v-card-title
              span(class="text-h5") Input Your Check Box
            v-card-text
              v-container
                v-row
                  v-col(cols="12")
                    v-text-field(label="Text" v-model="inputCheckBox")
                  
            v-card-actions
              v-btn(color="blue darken-1" text @click="dialog = false") Close
              v-btn(color="blue darken-1" text @click="insertList") Save


  v-col
    h1 {{checkTrue}}
  v-col
    h1 {{checkFalse}}

      
</template>

<script>
export default {
  name: 'InspirePage',

  data(){
    return{
      checkbox: true,
      dialog: false,
      selectedItem: 1,
      items: [
        { icon: 'mdi-format-list-checkbox' },
        { icon: 'mdi-calendar-check-outline' },
      ],
      listCheck: [
        {id: 0 , list: "Test-1" , status: false},
        {id: 1 , list: "Test-2" , status: false},
        {id: 2 , list: "Test-3" , status: false},
      ],
      listCheckTrue: [],
      listCheckFalse: [],
      inputCheckBox: ''

    }
  },
  computed:{
    checkTrue(){
      if(this.listCheck.length > 0){
        const checkTrue =  this.listCheck.filter((item) =>{
        return item.status === true
        })
        return checkTrue
      }
      else{
        return []
      }
    },
    checkFalse(){
      if(this.listCheck.length > 0){
        const checkFalse =  this.listCheck.filter((item) =>{
        return item.status === false
        })
        return checkFalse
      }
      else{
        return []
      }
    },
  }, 
  methods: {
    insertList(){
      this.listCheck.push({id: this.listCheck.length+1 , list: this.inputCheckBox , status: false});
      this.dialog = false
      console.log('InsertList : '+this.listCheck);
    },
    findIndex(item){

      const index = this.listCheck.findIndex((element) => element.id === item)

      this.listCheck[index].status = !this.listCheck[index].status

      console.log(index);
    }
    // filterDisplay() {
    //     let listCheckTrue = []
    //     this.listCheckTrue =  this.listCheck.filter((item) =>{
    //       return item.status === true
    //     })
    //     let listCheckFalse = []
    //     this.listCheckFalse =  this.listCheck.filter((item) =>{
    //       return item.status === false
    //     })
    //     console.log('Display True : ', this.listCheckTrue);
    //     console.log('Display False : ', this.listCheckFalse);
    //     console.log('Display Old', this.listCheck);
    //     return this.listCheckTrue , this.listCheckFalse ;
    
    // }
  },
  
}
</script>

<style>

.cardBox {
  width: 350px;
  border-radius: 50px;

}
button{
    width: 100px;
    height: 100px;
    border-radius: 20px;
}

.iconBox{
  width: 80px;
}

</style>
